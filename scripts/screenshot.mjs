/**
 * Capture light + dark screenshots of the app for PR descriptions.
 *
 * Drives the installed Chrome over the DevTools Protocol using Node's built-in
 * WebSocket, so it adds no dependencies to the project.
 *
 * Usage:
 *   npm run build && npx next start -p 3100
 *   node scripts/screenshot.mjs [url] [outDir] [name]
 *
 * Always shoot a production build — `next dev` paints a dev indicator badge
 * into the corner, which does not belong in a review screenshot.
 */
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHROME = process.env.CHROME_PATH
  ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL_ = process.argv[2] ?? 'http://localhost:3100';
const OUT_DIR = process.argv[3] ?? 'screenshots';
const NAME = process.argv[4] ?? 'resume';
const WIDTH = 1280;
const PORT = 9333;
const PROFILE = join(tmpdir(), 'resume-shot-profile');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

rmSync(PROFILE, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${PROFILE}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--hide-scrollbars',
  'about:blank',
], { stdio: 'ignore' });

async function debuggerUrl() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const page = (await res.json()).find((t) => t.type === 'page');
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error('Chrome did not expose a debug target');
}

const ws = new WebSocket(await debuggerUrl());
await new Promise((r) => ws.addEventListener('open', r, { once: true }));

let nextId = 0;
const pending = new Map();
ws.addEventListener('message', (event) => {
  const msg = JSON.parse(event.data);
  const handlers = pending.get(msg.id);
  if (!handlers) return;
  pending.delete(msg.id);
  msg.error ? handlers.reject(new Error(JSON.stringify(msg.error))) : handlers.resolve(msg.result);
});

const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });

const metrics = (height) =>
  send('Emulation.setDeviceMetricsOverride', {
    width: WIDTH, height, deviceScaleFactor: 2, mobile: false,
  });

await send('Page.enable');
await send('Runtime.enable');

async function capture(scheme) {
  await metrics(960);
  await send('Page.navigate', { url: URL_ });
  await sleep(1500);

  // ThemeContext prefers a persisted theme over the system one, so clear it
  // before emulating the scheme, then reload so matchMedia is read at mount.
  await send('Runtime.evaluate', { expression: 'localStorage.clear()' });
  await send('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-color-scheme', value: scheme }],
  });
  await send('Page.reload', { ignoreCache: true });
  await sleep(2500);
  await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });

  const { result } = await send('Runtime.evaluate', {
    expression: 'JSON.stringify({ h: Math.ceil(document.documentElement.scrollHeight), cls: document.documentElement.className })',
    returnByValue: true,
  });
  const { h, cls } = JSON.parse(result.value);

  const isDark = cls.includes('dark');
  if (isDark !== (scheme === 'dark')) {
    throw new Error(`Expected ${scheme} theme but <html> class was "${cls}"`);
  }

  await metrics(h);
  await sleep(500);
  const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });

  const file = `${OUT_DIR}/${NAME}-${scheme}.png`;
  writeFileSync(file, Buffer.from(data, 'base64'));
  console.log(`${file}  ${WIDTH}x${h} @2x`);
}

try {
  await capture('light');
  await capture('dark');
} finally {
  ws.close();
  chrome.kill();
}

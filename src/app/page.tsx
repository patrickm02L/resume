'use client';

import { useTheme } from "./contexts/ThemeContext";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

const roles = [
  { date: "2025 — Now", title: "Senior Designer at City of Austin", subtitle: "Digital Services" },
  { date: "2021 — 2025", title: "Senior Product Manager & Designer at City of Austin", subtitle: "Transportation" },
  { date: "2020 — 2021", title: "Program Coordinator at City of Dallas", subtitle: "Affordable Housing" },
  { date: "2017 — 2019", title: "Lead Designer at Municipality of Anchorage", subtitle: "WIC & SNAP" },
  { date: "2017", title: "Product Manager & Designer at City of Austin", subtitle: "Residential Permitting" },
  { date: "2016", title: "Design Researcher at Code for America", subtitle: "Small Business Permitting" },
  { date: "2015", title: "Project Manager at Elsewhere Museum", subtitle: "Public Art" },
];

const sectionLabel = "text-[11px] font-semibold leading-[1.4] tracking-[0.9px] text-muted";

export default function Home() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-canvas">
      <main className="mx-auto w-full max-w-[660px] px-6 py-16 sm:px-[82px] sm:py-24">
        {/* Header */}
        <header className="flex items-center gap-[18px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/patrick-profile.png"
            alt="Patrick McDonnell"
            className="h-16 w-16 flex-shrink-0 cursor-pointer rounded-full object-cover transition-opacity duration-200 hover:opacity-80"
            onClick={toggleTheme}
            title="Toggle dark/light mode"
          />
          <div className="flex flex-col gap-0.5">
            <h1 className="text-[20px] font-semibold leading-[1.4] tracking-[-0.3px] text-ink">
              Patrick McDonnell
            </h1>
            <p className="text-[14px] leading-[1.45] text-muted">Designer in Austin</p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/patrickm02l"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-ink"
              >
                <InstagramLogo size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/patrickm02l/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-ink"
              >
                <LinkedinLogo size={18} />
              </a>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="flex flex-col gap-3 pt-14">
          <h2 className={sectionLabel}>ABOUT</h2>
          <p className="text-[14px] leading-[1.7] text-ink">
            I currently serve as a Designer with the City of Austin Digital Services, focusing on
            Service Design, UI and AI. I&apos;m a big believer that things can always be simpler
            than we think.
          </p>
        </section>

        {/* Work Experience */}
        <section className="flex flex-col gap-4 pt-14">
          <h2 className={sectionLabel}>WORK EXPERIENCE</h2>
          <div className="flex flex-col gap-5">
            {roles.map((role) => (
              <div key={role.title} className="flex gap-6">
                <div className="w-[88px] flex-shrink-0 text-[13px] leading-[1.55] tracking-[0.1px] text-muted">
                  {role.date}
                </div>
                <div className="flex flex-col gap-[3px]">
                  <h3 className="text-[14px] font-medium leading-[1.45] tracking-[-0.1px] text-ink">
                    {role.title}
                  </h3>
                  <p className="text-[13px] leading-[1.45] text-muted">{role.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

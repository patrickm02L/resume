'use client';

import { useTheme } from "./contexts/ThemeContext";

export default function Home() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto pt-[42px] pb-[62px] px-[82px]">
        {/* Header Section */}
        <header className="mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/patrick-profile.png" 
              alt="Patrick McDonnell"
              className="w-[58px] h-[58px] sm:w-[74px] sm:h-[74px] rounded-full object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={toggleTheme}
            />
            <div>
              <h1 className="text-lg font-semibold text-black dark:text-white mb-0">Patrick McDonnell</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Designer in Austin</p>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-xs font-medium text-black dark:text-white mb-4">About</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            I currently serve as a Designer with the City of Austin Digital Services, focusing on Service Design, UI and AI. I&apos;m a big believer that things can always be simpler than we think.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-xs font-medium text-black dark:text-white mb-4">Work Experience</h2>
          
          <div className="space-y-4">
            {/* Senior Designer at City of Austin */}
            <div className="flex gap-2">
              <div className="text-gray-600 dark:text-gray-400 text-xs w-24 flex-shrink-0">2025 — Now</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black dark:text-white mb-1">Senior Designer at City of Austin</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Digital Services</p>
              </div>
            </div>

            {/* Senior Product Manager & Designer at City of Austin */}
            <div className="flex gap-2">
              <div className="text-gray-600 dark:text-gray-400 text-xs w-24 flex-shrink-0">2021 — 2025</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black dark:text-white mb-1">Senior Product Manager & Designer at City of Austin</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Transportation Platforms</p>
              </div>
            </div>

            {/* City of Dallas */}
            <div className="flex gap-2">
              <div className="text-gray-600 dark:text-gray-400 text-xs w-24 flex-shrink-0">2020 — 2021</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black dark:text-white mb-1">Program Coordinator at City of Dallas</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Affordable Housing</p>
              </div>
            </div>

            {/* Municipality of Anchorage */}
            <div className="flex gap-2">
              <div className="text-gray-600 dark:text-gray-400 text-xs w-24 flex-shrink-0">2017 — 2019</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black dark:text-white mb-1">Lead Designer at Municipality of Anchorage</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">WIC & SNAP</p>
              </div>
            </div>

            {/* City of Austin 2017 */}
            <div className="flex gap-2">
              <div className="text-gray-600 dark:text-gray-400 text-xs w-24 flex-shrink-0">2017</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black dark:text-white mb-1">Product Manager & Designer at City of Austin</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Residential Permitting</p>
              </div>
            </div>

            {/* Code for America */}
            <div className="flex gap-2">
              <div className="text-gray-600 dark:text-gray-400 text-xs w-24 flex-shrink-0">2016</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black dark:text-white mb-1">Design Researcher at Code for America</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Small Business Permitting</p>
              </div>
            </div>

            {/* Elsewhere Museum */}
            <div className="flex gap-2">
              <div className="text-gray-600 dark:text-gray-400 text-xs w-24 flex-shrink-0">2015</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black dark:text-white mb-1">Project Manager at Elsewhere Museum</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Public Art</p>
              </div>
            </div>
          </div>
        </section>




        {/* Get in touch Section */}
        <section>
          <h2 className="text-xs font-medium text-black dark:text-white mb-4">Get in touch</h2>
          
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="text-gray-600 dark:text-gray-400 text-xs w-24">Instagram</span>
              <a href="https://www.instagram.com/patrickm02l" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white text-xs hover:underline ml-2.5">patrickm02L</a>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-600 dark:text-gray-400 text-xs w-24">LinkedIn</span>
              <a href="https://www.linkedin.com/in/patrickm02l/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white text-xs hover:underline ml-2.5">patrickm02L</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto py-6 px-4">
        {/* Header Section */}
        <header className="mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <img 
              src="/patrick-profile.png" 
              alt="Patrick McDonnell"
              className="w-[58px] h-[58px] sm:w-[74px] sm:h-[74px] rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h1 className="text-lg font-semibold text-black mb-0">Patrick McDonnell</h1>
              <p className="text-xs text-gray-600 mb-1">Designer in Austin</p>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-xs font-medium text-black mb-4">About</h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            I currently serve as a designer with the City of Austin Digital Services, focusing on service design, UI and AI. I'm a big believer that things can always be simpler than we think.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-xs font-medium text-black mb-4">Work Experience</h2>
          
          <div className="space-y-4">
            {/* Senior Designer at City of Austin */}
            <div className="flex gap-2">
              <div className="text-gray-600 text-xs w-24 flex-shrink-0">2025 — Now</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Senior Designer at City of Austin</h3>
                <p className="text-xs text-gray-600">Digital Services</p>
              </div>
            </div>

            {/* Product Manager & Designer at City of Austin */}
            <div className="flex gap-2">
              <div className="text-gray-600 text-xs w-24 flex-shrink-0">2021 — 2025</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Product Manager & Designer at City of Austin</h3>
                <p className="text-xs text-gray-600">Transportation Platforms</p>
              </div>
            </div>

            {/* City of Dallas */}
            <div className="flex gap-2">
              <div className="text-gray-600 text-xs w-24 flex-shrink-0">2020 — 2021</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Program Coordinator at City of Dallas</h3>
                <p className="text-xs text-gray-600">Affordable Housing</p>
              </div>
            </div>

            {/* Municipality of Anchorage */}
            <div className="flex gap-2">
              <div className="text-gray-600 text-xs w-24 flex-shrink-0">2017 — 2019</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Lead Designer at Municipality of Anchorage</h3>
                <p className="text-xs text-gray-600">WIC & SNAP</p>
              </div>
            </div>

            {/* City of Austin 2017 */}
            <div className="flex gap-2">
              <div className="text-gray-600 text-xs w-24 flex-shrink-0">2017</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Product Manager & Designer at City of Austin</h3>
                <p className="text-xs text-gray-600">Residential Permitting</p>
              </div>
            </div>

            {/* Code for America */}
            <div className="flex gap-2">
              <div className="text-gray-600 text-xs w-24 flex-shrink-0">2016</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Design Researcher at Code for America</h3>
                <p className="text-xs text-gray-600">Small Business Portal</p>
              </div>
            </div>

            {/* Elsewhere Museum */}
            <div className="flex gap-2">
              <div className="text-gray-600 text-xs w-24 flex-shrink-0">2015</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Project Manager at Elsewhere Museum</h3>
                <p className="text-xs text-gray-600">Public Art</p>
              </div>
            </div>
          </div>
        </section>




        {/* Get in touch Section */}
        <section>
          <h2 className="text-xs font-medium text-black mb-4">Get in touch</h2>
          
          <div className="space-y-1.5">
            <div className="flex gap-2">
              <span className="text-gray-600 text-xs w-24">Instagram</span>
              <a href="https://www.instagram.com/patrickm02l" target="_blank" rel="noopener noreferrer" className="text-black text-xs hover:underline ml-2.5">patrickm02L</a>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-600 text-xs w-24">LinkedIn</span>
              <a href="https://www.linkedin.com/in/patrickm02l/" target="_blank" rel="noopener noreferrer" className="text-black text-xs hover:underline ml-2.5">patrickm02L</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto py-6 px-4">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-lg font-bold text-black mb-1">Patrick McDonnell</h1>
          <p className="text-xs text-gray-500 mb-1">Designer in Austin</p>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-xs font-medium text-black mb-2">About</h2>
          <p className="text-xs text-gray-500">
            I currently serve as a designer with the City of Austin Digital Services, focusing on service design, user experience and AI. I'm a big believer that things can always be simpler than we think.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-xs font-medium text-black mb-2">Work Experience</h2>
          
          <div className="space-y-4">
            {/* Senior Designer at City of Austin */}
            <div className="flex gap-2">
              <div className="text-gray-500 text-xs w-24 flex-shrink-0">2025 — Now</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Senior Designer at City of Austin</h3>
                <p className="text-xs text-gray-500">Digital services</p>
              </div>
            </div>

            {/* Product Manager & Designer at City of Austin */}
            <div className="flex gap-2">
              <div className="text-gray-500 text-xs w-24 flex-shrink-0">2021 — 2025</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Product Manager & Designer at City of Austin</h3>
                <p className="text-xs text-gray-500">Transportation platforms</p>
              </div>
            </div>

            {/* City of Dallas */}
            <div className="flex gap-2">
              <div className="text-gray-500 text-xs w-24 flex-shrink-0">2020 — 2021</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Program Coordinator at City of Dallas</h3>
                <p className="text-xs text-gray-500">Affordable housing</p>
              </div>
            </div>

            {/* Municipality of Anchorage */}
            <div className="flex gap-2">
              <div className="text-gray-500 text-xs w-24 flex-shrink-0">2017 — 2019</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Lead Designer at Municipality of Anchorage</h3>
                <p className="text-xs text-gray-500">WIC & SNAP</p>
              </div>
            </div>

            {/* City of Austin 2017 */}
            <div className="flex gap-2">
              <div className="text-gray-500 text-xs w-24 flex-shrink-0">2017</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Product Manager & Designer at City of Austin</h3>
                <p className="text-xs text-gray-500">Residential permitting</p>
              </div>
            </div>

            {/* Code for America */}
            <div className="flex gap-2">
              <div className="text-gray-500 text-xs w-24 flex-shrink-0">2016</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Design Researcher at Code for America</h3>
                <p className="text-xs text-gray-500">Small business portal</p>
              </div>
            </div>

            {/* Elsewhere Museum */}
            <div className="flex gap-2">
              <div className="text-gray-500 text-xs w-24 flex-shrink-0">2015</div>
              <div className="flex-1 ml-2.5">
                <h3 className="text-xs text-black mb-1">Project Manager at Elsewhere Museum</h3>
                <p className="text-xs text-gray-500">Public art</p>
              </div>
            </div>
          </div>
        </section>




        {/* Get in touch Section */}
        <section>
          <h2 className="text-xs font-medium text-black mb-2">Get in touch</h2>
          
          <div className="space-y-1.5">
            <div className="flex gap-2">
              <span className="text-gray-500 text-xs w-24">Instagram</span>
              <a href="https://www.instagram.com/patrickm02l" target="_blank" rel="noopener noreferrer" className="text-black text-xs hover:underline ml-2.5">patrickm02L</a>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 text-xs w-24">LinkedIn</span>
              <a href="https://www.linkedin.com/in/patrickm02l/" target="_blank" rel="noopener noreferrer" className="text-black text-xs hover:underline ml-2.5">patrickm02L</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

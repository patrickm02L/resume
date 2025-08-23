export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto py-6 px-4">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-lg font-bold text-black mb-1">Sara Lawrence</h1>
          <p className="text-sm text-black mb-1">Designer in San Francisco</p>
          <p className="text-sm text-black">slawrence@</p>
        </header>

        {/* About Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-black mb-2">About</h2>
          <p className="text-xs text-black">
            I'm a passionate UX designer striving to create intuitive and engaging experiences. I'm a 
            big believer that things can always be simpler than we think.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-black mb-2">Work Experience</h2>
          
          <div className="space-y-2">
            {/* Magic Design Co */}
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2017 — Now</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Senior Designer at Magic Design Co *</h3>
                <p className="text-xs text-black">San Francisco, CA</p>
              </div>
            </div>

            {/* Creative Co */}
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2015 — 2017</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Junior Designer at Creative Co *</h3>
                <p className="text-xs text-black">Atlanta, GA</p>
              </div>
            </div>

            {/* Design Hub */}
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2014 — 2015</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Intern at Design Hub *</h3>
                <p className="text-xs text-black">Atlanta, GA</p>
              </div>
            </div>

            {/* Freelance */}
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2012 — 2014</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Freelance Graphic Designer *</h3>
                <p className="text-xs text-black">Remote</p>
              </div>
            </div>

            {/* Studio X */}
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2010 — 2012</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Art Assistant at Studio X *</h3>
                <p className="text-xs text-black">Cincinnati, OH</p>
              </div>
            </div>

            {/* Nonprofit */}
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2008 — 2010</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Volunteer Designer at Nonprofit Y *</h3>
                <p className="text-xs text-black">Cincinnati, OH</p>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-black mb-2">Writing</h2>
          
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2023</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Exploring the Intersection of Design and Technology *</h3>
                <p className="text-xs text-black">Collaboration with Mia, Leo, and Ava</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2023</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Understanding Design Hierarchies *</h3>
                <p className="text-xs text-black">Worked alongside Alex</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2020</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">The Art of User Centered Design *</h3>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2019</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Navigating Design Challenges *</h3>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2018</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Crafting Engaging User Experiences *</h3>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2018</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Building a Cohesive Design Language *</h3>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2017</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">The Power of Visual Storytelling *</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Speaking Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-black mb-2">Speaking</h2>
          
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2024</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Designing for accessibility *</h3>
                <p className="text-xs text-black">Los Angeles, CA</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2024</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">How to make things super simple *</h3>
                <p className="text-xs text-black">Miami, FL</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2023</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Designing your career *</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Side Projects Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-black mb-2">Side Projects</h2>
          
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2021</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Nature walks *</h3>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2020</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Plant-based cookware *</h3>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2019</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Interactive art installation *</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-black mb-2">Education</h2>
          
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2010 — 2016</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Master's in Interaction Design at Georgia Tech</h3>
                <p className="text-xs text-black">Atlanta, GA</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-black text-xs w-16 flex-shrink-0">2006 — 2010</div>
              <div className="flex-1">
                <h3 className="text-xs text-black">Bachelors in Communication Design at University of Cincinnati</h3>
                <p className="text-xs text-black">Cincinnati, OH</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-sm font-bold text-black mb-2">Contact</h2>
          
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="text-black text-xs w-16">Threads</span>
              <span className="text-black text-xs">username *</span>
            </div>
            <div className="flex gap-2">
              <span className="text-black text-xs w-16">Figma</span>
              <span className="text-black text-xs">username *</span>
            </div>
            <div className="flex gap-2">
              <span className="text-black text-xs w-16">Instagram</span>
              <span className="text-black text-xs">username *</span>
            </div>
            <div className="flex gap-2">
              <span className="text-black text-xs w-16">Dribbble</span>
              <span className="text-black text-xs">username *</span>
            </div>
            <div className="flex gap-2">
              <span className="text-black text-xs w-16">Mastodon</span>
              <span className="text-black text-xs">username *</span>
            </div>
            <div className="flex gap-2">
              <span className="text-black text-xs w-16">X</span>
              <span className="text-black text-xs">username *</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

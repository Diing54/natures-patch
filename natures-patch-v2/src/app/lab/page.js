export const metadata = {
  title: "The Climate Lab | Nature's Patch",
  description: "Research, policy briefs, and field notes on urban forestry.",
};

export default function LabPage() {
  return (
    <div className="bg-light min-h-screen">
      
      {/* === HEADER: ACADEMIC STYLE === */}
      <section className="bg-moss text-white py-24 border-b border-olive/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
              <span className="text-olive font-bold uppercase tracking-widest text-xs mb-4 block">
                The Climate Lab
              </span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
                Innovation & <br/>
                <span className="italic text-olive">Field Research.</span>
              </h1>
          </div>
          <div className="md:border-l md:border-olive/30 md:pl-12 pb-2">
              <p className="text-xl text-aloe/80 font-light leading-relaxed">
                Exploring the intersection of urban planning, indigenous knowledge, and climate resilience. A hub for policy makers and researchers.
              </p>
          </div>
        </div>
      </section>

      {/* === FEATURED RESEARCH (Highlight) === */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 mb-20">
          <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-cypress flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-2/3">
                  <span className="bg-cypress/10 text-cypress px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4 inline-block">
                      New Publication
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-moss mb-6 hover:text-cypress cursor-pointer transition-colors">
                      The Micro-Forest Effect: Cooling Nairobi's Heat Islands
                  </h2>
                  <p className="text-cedar text-lg leading-relaxed mb-8">
                      Our latest 12-month study reveals that pockets of dense indigenous vegetation can lower localized street temperatures by up to 4°C. Read the full methodology and policy recommendations.
                  </p>
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-moss/10 flex items-center justify-center font-serif font-bold text-moss">AM</div>
                      <div className="text-sm">
                          <div className="font-bold text-moss">Dr. A. Mwangi</div>
                          <div className="text-cedar text-xs">Lead Scientist • Jan 15, 2026</div>
                      </div>
                  </div>
              </div>
              <div className="w-full md:w-1/3 bg-light border border-olive/10 flex flex-col justify-center items-center text-center p-8">
                  <div className="font-serif text-6xl text-olive/20 mb-4">"</div>
                  <p className="text-moss font-serif italic mb-6">
                      Urban forestry is no longer aesthetic; it is critical infrastructure for public health.
                  </p>
                  <button className="px-8 py-3 bg-moss text-white text-xs font-bold uppercase tracking-widest hover:bg-cypress transition-colors rounded-sm">
                      Download PDF
                  </button>
              </div>
          </div>
      </section>

      {/* === 7.2 RESEARCH & POLICY LIBRARY === */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Content: Articles */}
          <div className="md:col-span-8 space-y-16">
              <div className="flex items-center justify-between border-b border-olive/20 pb-4 mb-8">
                  <h3 className="font-serif text-2xl font-bold text-moss">Latest Field Notes</h3>
                  <a href="#" className="text-xs font-bold text-cypress uppercase tracking-widest hover:text-moss">View Archive →</a>
              </div>

              {/* Article 1 */}
              <article className="group cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-cedar/20 h-48 md:h-full relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-moss/30 font-serif italic text-sm">Image Placeholder</div>
                      </div>
                      <div className="md:col-span-2">
                          <span className="text-cypress text-[10px] font-bold uppercase tracking-widest">Community Voices</span>
                          <h4 className="font-serif text-2xl font-bold text-moss mt-2 mb-3 group-hover:text-cypress transition-colors">
                              Guardians of the Soil: Youth Leadership in Machakos
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              Interviews with the student leaders who are transforming their school grounds into permaculture food forests.
                          </p>
                          <span className="text-xs font-bold text-moss underline decoration-olive/50">Read Essay</span>
                      </div>
                  </div>
              </article>

              {/* Article 2 */}
              <article className="group cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-cedar/20 h-48 md:h-full relative overflow-hidden">
                           <div className="absolute inset-0 flex items-center justify-center text-moss/30 font-serif italic text-sm">Image Placeholder</div>
                      </div>
                      <div className="md:col-span-2">
                          <span className="text-cypress text-[10px] font-bold uppercase tracking-widest">Policy Brief</span>
                          <h4 className="font-serif text-2xl font-bold text-moss mt-2 mb-3 group-hover:text-cypress transition-colors">
                              The Carbon Credit Toolkit for Local NGOs
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              A practical guide on how small organizations can navigate the complex verification standards of the voluntary carbon market.
                          </p>
                          <span className="text-xs font-bold text-moss underline decoration-olive/50">Read Brief</span>
                      </div>
                  </div>
              </article>

          </div>

          {/* Sidebar: Categories & Subscribe */}
          <div className="md:col-span-4 space-y-12">
              
              {/* Search */}
              <div className="bg-white p-6 shadow-sm border border-olive/10">
                  <h4 className="font-serif text-lg font-bold text-moss mb-4">Search The Lab</h4>
                  <div className="relative">
                      <input type="text" placeholder="Keywords..." className="w-full bg-light border border-olive/20 p-3 text-sm focus:outline-none focus:border-moss" />
                      <button className="absolute right-3 top-3 text-olive">🔍</button>
                  </div>
              </div>

              {/* Topics */}
              <div>
                  <h4 className="font-serif text-lg font-bold text-moss mb-4 border-b border-olive/20 pb-2">Research Topics</h4>
                  <ul className="space-y-3 text-sm text-cedar">
                      <li className="flex justify-between hover:text-cypress cursor-pointer">
                          <span>Urban Ecology</span>
                          <span className="bg-light px-2 py-0.5 rounded-full text-xs text-olive">12</span>
                      </li>
                      <li className="flex justify-between hover:text-cypress cursor-pointer">
                          <span>Carbon Markets</span>
                          <span className="bg-light px-2 py-0.5 rounded-full text-xs text-olive">05</span>
                      </li>
                      <li className="flex justify-between hover:text-cypress cursor-pointer">
                          <span>Indigenous Species</span>
                          <span className="bg-light px-2 py-0.5 rounded-full text-xs text-olive">08</span>
                      </li>
                      <li className="flex justify-between hover:text-cypress cursor-pointer">
                          <span>Youth & Education</span>
                          <span className="bg-light px-2 py-0.5 rounded-full text-xs text-olive">15</span>
                      </li>
                  </ul>
              </div>

              {/* Newsletter Box */}
              <div className="bg-moss text-white p-8 text-center">
                  <h4 className="font-serif text-xl font-bold mb-2">Weekly Briefing</h4>
                  <p className="text-aloe text-xs mb-6">Get the latest research and policy updates delivered to your inbox.</p>
                  <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 p-3 text-sm text-white placeholder-aloe/50 mb-3 focus:outline-none" />
                  <button className="w-full bg-white text-moss font-bold uppercase tracking-widest text-xs py-3 hover:bg-aloe transition-colors">
                      Subscribe
                  </button>
              </div>

          </div>
      </section>

    </div>
  );
}

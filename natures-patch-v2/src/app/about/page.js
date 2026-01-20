export const metadata = {
  title: "About Us | Nature's Patch",
  description: "Our history, philosophy, and leadership team.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      
      {/* === HEADER SECTION === */}
      <section className="bg-moss text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-olive font-bold uppercase tracking-widest text-xs mb-4 block">
            Who We Are
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Roots Deep in the Community.
          </h1>
          <p className="text-xl text-aloe/80 font-light max-w-2xl mx-auto">
            We started with a single seed and a belief that urban spaces can be wild again.
          </p>
        </div>
      </section>

      {/* === 2.1 OUR STORY (The Timeline) === */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="font-serif text-4xl text-moss font-bold mb-6">Our Journey</h2>
             <div className="space-y-8 border-l-2 border-olive/30 pl-8 ml-4">
                
                {/* Timeline Item 1 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-cypress border-4 border-white"></div>
                  <div className="text-xs font-bold text-olive uppercase tracking-widest mb-1">Inception</div>
                  <h3 className="font-serif text-xl font-bold text-moss">The First Patch</h3>
                  <p className="text-cedar mt-2 text-sm leading-relaxed">
                    Founded in response to rapid urbanization, we reclaimed a small dumping site in Nairobi and turned it into a community garden.
                  </p>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-moss border-4 border-white"></div>
                  <div className="text-xs font-bold text-olive uppercase tracking-widest mb-1">Growth</div>
                  <h3 className="font-serif text-xl font-bold text-moss">Expanding to Schools</h3>
                  <p className="text-cedar mt-2 text-sm leading-relaxed">
                    Partnered with 20 local schools to integrate environmental stewardship into the curriculum.
                  </p>
                </div>

                {/* Timeline Item 3 (Current) */}
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-olive border-4 border-white"></div>
                  <div className="text-xs font-bold text-olive uppercase tracking-widest mb-1">Today</div>
                  <h3 className="font-serif text-xl font-bold text-moss">Data-Driven Restoration</h3>
                  <p className="text-cedar mt-2 text-sm leading-relaxed">
                    Now operating across 3 counties with real-time impact monitoring and corporate partnerships.
                  </p>
                </div>

             </div>
          </div>
          {/* Visual Placeholder for Founder/History Photo */}
          <div className="h-96 bg-cedar/20 rounded-sm flex items-center justify-center text-moss/30 font-serif italic text-2xl">
              [Historic Photo Placeholder]
          </div>
        </div>
      </section>

      {/* === 2.2 VISION, MISSION & VALUES === */}
      <section className="bg-light py-24">
        <div className="max-w-7xl mx-auto px-6">
            
            {/* Row 1: Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                {/* Vision */}
                <div className="bg-white p-10 shadow-sm border-t-4 border-moss flex flex-col justify-center text-center">
                    <h3 className="font-serif text-3xl font-bold text-moss mb-6">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        A world where communities and nature thrive together, with healthy ecosystems forming the foundation of resilient livelihoods, climate stability, and future generations.
                    </p>
                </div>

                {/* Mission */}
                <div className="bg-white p-10 shadow-sm border-t-4 border-cypress flex flex-col justify-center text-center">
                    <h3 className="font-serif text-3xl font-bold text-moss mb-6">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        To restore, protect, and grow natural ecosystems through community-driven environmental action, climate education, and sustainable solutions that reconnect people with nature while addressing today’s environmental challenges.
                    </p>
                </div>
            </div>

            {/* Row 2: Core Values Grid */}
            <div className="text-center mb-12">
                <h3 className="font-serif text-3xl font-bold text-moss">Core Values</h3>
                <div className="h-1 w-20 bg-olive mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {/* Value 1 */}
                 <div className="bg-white p-8 shadow-sm border-l-4 border-olive hover:-translate-y-1 transition-transform">
                     <h4 className="font-bold text-moss text-lg mb-3">Environmental Stewardship</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">We act as responsible caretakers of the earth, prioritizing long-term ecological health over short-term gains.</p>
                 </div>

                 {/* Value 2 */}
                 <div className="bg-white p-8 shadow-sm border-l-4 border-olive hover:-translate-y-1 transition-transform">
                     <h4 className="font-bold text-moss text-lg mb-3">Community First</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">Lasting environmental impact begins with empowered communities. We work with people, not for them.</p>
                 </div>

                 {/* Value 3 */}
                 <div className="bg-white p-8 shadow-sm border-l-4 border-olive hover:-translate-y-1 transition-transform">
                     <h4 className="font-bold text-moss text-lg mb-3">Sustainability with Integrity</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">We promote solutions that are environmentally sound, socially just, and economically viable, without compromise.</p>
                 </div>

                 {/* Value 4 */}
                 <div className="bg-white p-8 shadow-sm border-l-4 border-olive hover:-translate-y-1 transition-transform">
                     <h4 className="font-bold text-moss text-lg mb-3">Education & Awareness</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">Knowledge drives change. We believe in educating communities, especially youth, to build a culture of environmental responsibility.</p>
                 </div>

                 {/* Value 5 */}
                 <div className="bg-white p-8 shadow-sm border-l-4 border-olive hover:-translate-y-1 transition-transform">
                     <h4 className="font-bold text-moss text-lg mb-3">Collaboration & Partnership</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">Environmental challenges require collective action. We value partnerships across sectors to amplify impact.</p>
                 </div>

                 {/* Value 6 */}
                 <div className="bg-white p-8 shadow-sm border-l-4 border-olive hover:-translate-y-1 transition-transform">
                     <h4 className="font-bold text-moss text-lg mb-3">Accountability & Transparency</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">We hold ourselves to high ethical standards, ensuring openness, trust, and measurable impact in all we do.</p>
                 </div>
            </div>

        </div>
      </section>

      {/* === 2.3 LEADERSHIP === */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-moss font-bold">Leadership & Advisory</h2>
            <div className="h-1 w-20 bg-olive mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group text-center">
                <div className="h-64 bg-cedar/30 mb-6 rounded-sm overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for Headshot */}
                </div>
                <h3 className="font-serif text-xl font-bold text-moss">Jane Doe</h3>
                <p className="text-xs uppercase tracking-widest text-cypress font-bold mt-1">Executive Director</p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
                <div className="h-64 bg-cedar/30 mb-6 rounded-sm overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                <h3 className="font-serif text-xl font-bold text-moss">John Smith</h3>
                <p className="text-xs uppercase tracking-widest text-cypress font-bold mt-1">Head of Conservation</p>
            </div>

             {/* Team Member 3 */}
             <div className="group text-center">
                <div className="h-64 bg-cedar/30 mb-6 rounded-sm overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                <h3 className="font-serif text-xl font-bold text-moss">Dr. A. Mwangi</h3>
                <p className="text-xs uppercase tracking-widest text-cypress font-bold mt-1">Lead Scientist</p>
            </div>

             {/* Team Member 4 */}
             <div className="group text-center">
                <div className="h-64 bg-cedar/30 mb-6 rounded-sm overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                <h3 className="font-serif text-xl font-bold text-moss">Sarah K.</h3>
                <p className="text-xs uppercase tracking-widest text-cypress font-bold mt-1">Community Liaison</p>
            </div>
        </div>
      </section>

    </div>
  );
}

import { client } from "../sanity/client";

// 1. QUERY: Get the stats from Sanity
const query = `*[_type == "stats"][0]{
  treesPlanted,
  acresRestored,
  carbonSequestered,
  survivalRate
}`;

// 2. Make the component Async to fetch data
export default async function Home() {

  // 3. Fetch data (with fallback zeros if Sanity is empty)
  const data = await client.fetch(query) || {
      treesPlanted: '0',
      acresRestored: '0',
      carbonSequestered: '0',
      survivalRate: 0
  };

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION 
          Goal: Instantly communicate authority.
      */}
      <section className="relative h-[85vh] flex items-center bg-moss text-white overflow-hidden">
        
        {/* Abstract Background Gradient (Simulating a forest canopy shadow) */}
        <div className="absolute inset-0 bg-gradient-to-br from-moss via-moss to-cypress/60 z-0"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12">
            <span className="inline-block py-1 px-3 border border-olive/50 rounded-full bg-moss/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-cedar">
                A Forbes-Level Climate Initiative
            </span>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
                Restoring Nature <br/>
                <span className="text-olive">Where People Live.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-aloe/80 max-w-2xl mb-10 font-light leading-relaxed">
                Climate action through urban forests, community stewardship, and measurable impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <a href="/projects" className="bg-white text-moss px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-aloe transition-all rounded-sm text-center">
                    See Our Projects
                </a>
                <a href="/impact" className="border border-olive text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-olive transition-all rounded-sm text-center">
                    View Impact Data
                </a>
            </div>
        </div>
      </section>

      {/* 2. IMPACT SNAPSHOT (DYNAMIC)
          Goal: Showcase measurable achievements using LIVE SANITY DATA.
      */}
      <section className="bg-white py-12 border-b border-olive/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-olive/10">
                
                <div className="p-4">
                    {/* Dynamic Variable */}
                    <div className="font-serif text-4xl md:text-5xl font-bold text-moss mb-2">{data.treesPlanted}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Trees Planted</div>
                </div>
                
                <div className="p-4">
                    {/* Dynamic Variable */}
                    <div className="font-serif text-4xl md:text-5xl font-bold text-moss mb-2">{data.survivalRate}%</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Survival Rate</div>
                </div>
                
                <div className="p-4">
                    {/* Dynamic Variable */}
                    <div className="font-serif text-4xl md:text-5xl font-bold text-moss mb-2">{data.carbonSequestered}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Tons CO₂ Absorbed</div>
                </div>
                
                <div className="p-4">
                    {/* Dynamic Variable (Mapped 'Communities' to 'Acres Restored' so it matches your DB) */}
                    <div className="font-serif text-4xl md:text-5xl font-bold text-moss mb-2">{data.acresRestored}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Acres Restored</div>
                </div>

            </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS PREVIEW (Static for now, preserving your layout) */}
      <section className="py-24 bg-light">
          <div className="max-w-7xl mx-auto px-6">
              
              <div className="flex justify-between items-end mb-12">
                  <div>
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-moss mb-2">Featured Initiatives</h2>
                      <p className="text-cedar">Real-time updates from the field.</p>
                  </div>
                  <a href="/projects" className="hidden md:inline-block text-cypress font-bold uppercase text-xs tracking-widest border-b border-cypress pb-1 hover:text-moss hover:border-moss transition-all">
                      View All Projects →
                  </a>
              </div>

              {/* Grid of 3 Projects */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Card 1 */}
                  <div className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                      <div className="h-64 bg-cedar/20 relative">
                          <div className="absolute inset-0 flex items-center justify-center text-moss/20 font-serif text-2xl italic">Image Placeholder</div>
                          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-moss">Reforestation</div>
                      </div>
                      <div className="p-8">
                          <h3 className="font-serif text-xl font-bold text-moss mb-3 group-hover:text-cypress transition-colors">The Rift Valley Corridor</h3>
                          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                              Restoring 500 acres of degraded land to reconnect vital elephant migratory routes.
                          </p>
                          <span className="text-cypress text-xs font-bold uppercase tracking-widest">Learn More</span>
                      </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                      <div className="h-64 bg-cedar/20 relative">
                          <div className="absolute inset-0 flex items-center justify-center text-moss/20 font-serif text-2xl italic">Image Placeholder</div>
                          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-moss">Urban Ecology</div>
                      </div>
                      <div className="p-8">
                          <h3 className="font-serif text-xl font-bold text-moss mb-3 group-hover:text-cypress transition-colors">Nairobi "Green Lungs"</h3>
                          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                              Implementing high-density micro-forests in city centers to combat heat islands.
                          </p>
                          <span className="text-cypress text-xs font-bold uppercase tracking-widest">Learn More</span>
                      </div>
                  </div>

                  {/* Card 3 */}
                  <div className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                      <div className="h-64 bg-cedar/20 relative">
                          <div className="absolute inset-0 flex items-center justify-center text-moss/20 font-serif text-2xl italic">Image Placeholder</div>
                          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-moss">Education</div>
                      </div>
                      <div className="p-8">
                          <h3 className="font-serif text-xl font-bold text-moss mb-3 group-hover:text-cypress transition-colors">Schools for Sustainability</h3>
                          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                              Building vertical gardens in 20 primary schools to teach food security.
                          </p>
                          <span className="text-cypress text-xs font-bold uppercase tracking-widest">Learn More</span>
                      </div>
                  </div>

              </div>
              
              <div className="mt-8 text-center md:hidden">
                  <a href="/projects" className="inline-block text-cypress font-bold uppercase text-xs tracking-widest border-b border-cypress pb-1">
                      View All Projects →
                  </a>
              </div>
          </div>
      </section>

    </div>
  );
}

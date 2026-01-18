import { client } from "../sanity/client";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';

// 1. CONFIG: Prevent caching so new projects show up instantly
export const dynamic = "force-dynamic";

// 2. SETUP: Image Builder for Sanity
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// 3. QUERY: Fetch Stats AND the 3 Newest Projects
const query = `{
  "stats": *[_type == "stats"][0]{
    treesPlanted,
    acresRestored,
    carbonSequestered,
    survivalRate
  },
  "featuredProjects": *[_type == "project"] | order(_createdAt desc)[0..2] {
    _id,
    title,
    location,
    status,
    mainImage
  }
}`;

export default async function Home() {

  // 4. FETCH: Get the data (with safe fallbacks)
  const data = await client.fetch(query) || {};
  
  // Destructure with defaults to prevent crashes if Sanity is empty
  const stats = data.stats || { 
    treesPlanted: '0', acresRestored: '0', carbonSequestered: '0', survivalRate: 0 
  };
  const projects = data.featuredProjects || [];

  return (
    <div className="flex flex-col">
      
      {/* === HERO SECTION === */}
      <section className="relative h-[85vh] flex items-center bg-moss text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-moss via-moss to-cypress/60 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12">
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

      {/* === IMPACT SNAPSHOT (DYNAMIC) === */}
      <section className="bg-white py-12 border-b border-olive/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-olive/10">
                <div className="p-4">
                    <div className="font-serif text-4xl md:text-5xl font-bold text-moss mb-2">{stats.treesPlanted}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Trees Planted</div>
                </div>
                <div className="p-4">
                    <div className="font-serif text-4xl md:text-5xl font-bold text-moss mb-2">{stats.survivalRate}%</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Survival Rate</div>
                </div>
                <div className="p-4">
                    <div className="font-serif text-4xl md:text-5xl font-bold text-moss mb-2">{stats.carbonSequestered}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Tons CO₂ Absorbed</div>
                </div>
                <div className="p-4">
                    <div className="font-serif text-4xl md:text-5xl font-bold text-moss mb-2">{stats.acresRestored}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Acres Restored</div>
                </div>
            </div>
        </div>
      </section>

      {/* === FEATURED PROJECTS PREVIEW (DYNAMIC) === */}
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

              {/* DYNAMIC GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {projects.length > 0 ? (
                      projects.map((project) => (
                        <div key={project._id} className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full">
                            
                            {/* Image Section */}
                            <div className="h-64 bg-cedar/20 relative">
                                {project.mainImage ? (
                                    <Image 
                                        src={urlFor(project.mainImage).width(600).url()} 
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-moss/20 font-serif text-xl italic">No Image</div>
                                )}
                                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-moss">
                                    {project.status || "Ongoing"}
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-serif text-xl font-bold text-moss mb-3 group-hover:text-cypress transition-colors">
                                    {project.title}
                                </h3>
                                <div className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                                    <span className="block mb-2 text-xs font-bold text-olive uppercase">
                                        📍 {project.location}
                                    </span>
                                    {/* We use location/status as description if you haven't added a 'description' field yet */}
                                    This project is actively restoring the ecosystem in {project.location}.
                                </div>
                                <span className="text-cypress text-xs font-bold uppercase tracking-widest mt-auto">Learn More</span>
                            </div>
                        </div>
                      ))
                  ) : (
                      <p className="col-span-3 text-center text-gray-400">Loading projects...</p>
                  )}

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

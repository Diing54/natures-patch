import Image from "next/image";
import { client } from "../../sanity/client";
import { urlFor } from "../../sanity/image";

// 1. The GROQ Query (Asking Sanity for data)
const query = `*[_type == "project"]{
  _id,
  title,
  location,
  description,
  fundingGoal,
  status,
  treesPlanted,
  mainImage
}`;

export const metadata = {
  title: "Our Projects | Nature's Patch",
  description: "Explore our active initiatives across reforestation, urban ecology, and education.",
};

// 2. Make the function Async to fetch data
export default async function ProjectsPage() {
  
  // 3. Fetch the data
  const projects = await client.fetch(query);

  return (
    <div className="bg-light min-h-screen">
      
      {/* === HEADER === */}
      <section className="bg-moss text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-olive font-bold uppercase tracking-widest text-xs mb-4 block">
            Field Work
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Restoration in Action.
          </h1>
          <p className="text-xl text-aloe/80 font-light max-w-2xl mx-auto">
             From the Rift Valley to downtown Nairobi, we are tracking every tree and every ton of carbon.
          </p>
        </div>
      </section>

      {/* === FILTER BAR (Visual Only for Phase 2) === */}
      <div className="border-b border-olive/20 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
            <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest min-w-max">
                <button className="py-6 text-moss border-b-4 border-moss">All Projects</button>
                <button className="py-6 text-cedar hover:text-cypress transition-colors">Reforestation</button>
                <button className="py-6 text-cedar hover:text-cypress transition-colors">Urban</button>
            </div>
        </div>
      </div>

      {/* === PROJECTS GRID (DYNAMIC) === */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 4. Loop through the Sanity Data */}
            {projects.map((project) => (
                <div key={project._id} className="bg-white group rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-olive/10">
                    
                    {/* Dynamic Image */}
                    <div className="relative h-64 bg-cedar/20 overflow-hidden">
                        {project.mainImage ? (
                           <Image 
                             src={urlFor(project.mainImage).width(800).url()} 
                             alt={project.title}
                             fill
                             className="object-cover group-hover:scale-105 transition-transform duration-500"
                           />
                        ) : (
                           <div className="absolute inset-0 flex items-center justify-center text-moss/30 font-serif italic">No Image</div>
                        )}
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 bg-white/90 text-moss text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                            {project.status}
                        </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="text-cypress text-[10px] font-bold uppercase tracking-widest mb-2">{project.location}</div>
                        <h3 className="font-serif text-2xl font-bold text-moss mb-3">{project.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>
                        
                        {/* Dynamic Progress Bar */}
                        <div className="mt-auto">
                            <div className="flex justify-between text-[10px] font-bold uppercase text-cedar mb-2">
                                <span>{project.treesPlanted} Trees Planted</span>
                                <span className="text-cypress">{project.fundingGoal}% Funded</span>
                            </div>
                            <div className="w-full bg-aloe h-1 rounded-full overflow-hidden">
                                <div className="bg-cypress h-full" style={{ width: `${project.fundingGoal}%` }}></div>
                            </div>
                            <a href="#" className="block mt-6 text-center border border-olive/30 py-3 text-xs font-bold uppercase tracking-widest text-moss hover:bg-moss hover:text-white transition-colors rounded-sm">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            ))}

        </div>
      </section>

    </div>
  );
}

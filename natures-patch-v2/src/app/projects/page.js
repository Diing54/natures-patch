import Image from "next/image";

export const metadata = {
  title: "Our Projects | Nature's Patch",
  description: "Explore our active initiatives across reforestation, urban ecology, and education.",
};

export default function ProjectsPage() {
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

      {/* === FILTER BAR (Visual Representation) === */}
      <div className="border-b border-olive/20 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
            <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest min-w-max">
                {/* Active Tab */}
                <button className="py-6 text-moss border-b-4 border-moss">All Projects</button>
                {/* Inactive Tabs */}
                <button className="py-6 text-cedar hover:text-cypress transition-colors">Reforestation</button>
                <button className="py-6 text-cedar hover:text-cypress transition-colors">Urban Ecology</button>
                <button className="py-6 text-cedar hover:text-cypress transition-colors">Education</button>
                <button className="py-6 text-cedar hover:text-cypress transition-colors">Completed</button>
            </div>
        </div>
      </div>

      {/* === PROJECTS GRID === */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* PROJECT 1: Active Reforestation */}
            <div className="bg-white group rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-olive/10">
                <div className="relative h-64 bg-cedar/20 overflow-hidden">
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-moss/30 font-serif italic">Image Placeholder</div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 text-moss text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                        Active
                    </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                    <div className="text-cypress text-[10px] font-bold uppercase tracking-widest mb-2">Rift Valley</div>
                    <h3 className="font-serif text-2xl font-bold text-moss mb-3">The Corridor Restoration</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        Reconnecting 500 acres of fragmented forest to support elephant migration routes.
                    </p>
                    
                    {/* Progress Bar (Bonus Feature) */}
                    <div className="mt-auto">
                        <div className="flex justify-between text-[10px] font-bold uppercase text-cedar mb-2">
                            <span>Funding Goal</span>
                            <span className="text-cypress">75% Raised</span>
                        </div>
                        <div className="w-full bg-aloe h-1 rounded-full overflow-hidden">
                            <div className="bg-cypress h-full" style={{ width: '75%' }}></div>
                        </div>
                        <a href="#" className="block mt-6 text-center border border-olive/30 py-3 text-xs font-bold uppercase tracking-widest text-moss hover:bg-moss hover:text-white transition-colors rounded-sm">
                            View Details
                        </a>
                    </div>
                </div>
            </div>

            {/* PROJECT 2: Urban Initiative */}
            <div className="bg-white group rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-olive/10">
                <div className="relative h-64 bg-cedar/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-moss/30 font-serif italic">Image Placeholder</div>
                    <div className="absolute top-4 right-4 bg-white/90 text-moss text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                        Scaling
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="text-cypress text-[10px] font-bold uppercase tracking-widest mb-2">Nairobi West</div>
                    <h3 className="font-serif text-2xl font-bold text-moss mb-3">Green Lungs Initiative</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                         Establishing 50 high-density micro-forests to reduce urban heat islands.
                    </p>
                    <div className="mt-auto">
                        <div className="flex justify-between text-[10px] font-bold uppercase text-cedar mb-2">
                            <span>Funding Goal</span>
                            <span className="text-cypress">40% Raised</span>
                        </div>
                        <div className="w-full bg-aloe h-1 rounded-full overflow-hidden">
                            <div className="bg-cypress h-full" style={{ width: '40%' }}></div>
                        </div>
                        <a href="#" className="block mt-6 text-center border border-olive/30 py-3 text-xs font-bold uppercase tracking-widest text-moss hover:bg-moss hover:text-white transition-colors rounded-sm">
                            View Details
                        </a>
                    </div>
                </div>
            </div>

             {/* PROJECT 3: Education (Completed) */}
             <div className="bg-white group rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-olive/10 opacity-90">
                <div className="relative h-64 bg-cedar/20 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center text-moss/30 font-serif italic">Image Placeholder</div>
                    <div className="absolute top-4 right-4 bg-moss text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm shadow-sm">
                        Complete
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="text-cypress text-[10px] font-bold uppercase tracking-widest mb-2">Machakos</div>
                    <h3 className="font-serif text-2xl font-bold text-moss mb-3">School Gardens Pilot</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        Successfully installed permaculture gardens in 12 rural primary schools.
                    </p>
                    <div className="mt-auto">
                         <div className="flex justify-between text-[10px] font-bold uppercase text-cedar mb-2">
                            <span>Project Status</span>
                            <span className="text-moss">Funded</span>
                        </div>
                         <div className="w-full bg-aloe h-1 rounded-full overflow-hidden">
                            <div className="bg-moss h-full" style={{ width: '100%' }}></div>
                        </div>
                        <a href="#" className="block mt-6 text-center border border-olive/30 py-3 text-xs font-bold uppercase tracking-widest text-moss hover:bg-moss hover:text-white transition-colors rounded-sm">
                            Read Impact Report
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </section>

    </div>
  );
}

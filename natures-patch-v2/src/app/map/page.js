import { client } from "../../sanity/client";
import MapWrapper from "../../components/MapWrapper"; // <--- Import the wrapper, not dynamic

// Fetch Projects + Coordinates
const query = `*[_type == "project"]{
  _id,
  title,
  location,
  treesPlanted,
  geo
}`;

export const metadata = {
  title: "Interactive Map | Nature's Patch",
  description: "Track our reforestation sites across Kenya in real-time.",
};

export default async function MapPage() {
  const projects = await client.fetch(query);

  return (
    <div className="bg-white min-h-screen flex flex-col">
        
        {/* Header */}
        <section className="bg-moss text-white py-16 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Impact Map.</h1>
            <p className="text-aloe/80 text-lg font-light">Explore our active restoration sites.</p>
        </section>

        {/* Map Container */}
        <section className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
             {/* Pass data to the wrapper */}
             <MapWrapper projects={projects} />
             
             <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-light border border-olive/10 rounded-sm">
                    <div className="text-3xl font-serif font-bold text-moss">{projects.length}</div>
                    <div className="text-xs uppercase tracking-widest text-cedar">Active Sites</div>
                </div>
                <div className="p-6 bg-light border border-olive/10 rounded-sm">
                    <div className="text-3xl font-serif font-bold text-moss">Kenya</div>
                    <div className="text-xs uppercase tracking-widest text-cedar">Current Region</div>
                </div>
                <div className="p-6 bg-light border border-olive/10 rounded-sm">
                    <div className="text-3xl font-serif font-bold text-moss">Live</div>
                    <div className="text-xs uppercase tracking-widest text-olive font-bold">Data Status</div>
                </div>
             </div>
        </section>

    </div>
  );
}

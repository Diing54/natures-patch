import { client } from "../../../sanity/client";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';
import Link from "next/link";

// 1. Force dynamic rendering
export const dynamic = "force-dynamic";

// 2. Setup Image Builder
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// 3. QUERY: Fetch ONE project matching the slug
const query = `*[_type == "project" && slug.current == $slug][0]{
  title,
  location,
  status,
  description, // This is your full article text
  treesPlanted,
  fundingGoal, 
  mainImage
}`;

export default async function ProjectDetailsPage({ params }) {
  // Await params (Required in Next.js 15)
  const { slug } = await params;
  
  // Fetch data
  const project = await client.fetch(query, { slug });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-cedar">
        <div className="text-center">
            <h1 className="text-4xl font-serif text-moss mb-4">Project Not Found</h1>
            <Link href="/projects" className="text-olive underline">Return to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* === HERO IMAGE HEADER === */}
      <div className="relative h-[60vh] bg-cedar/20">
        {project.mainImage ? (
           <Image 
             src={urlFor(project.mainImage).url()} 
             alt={project.title}
             fill
             className="object-cover"
             priority
           />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-moss/90 via-moss/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-2 mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white/30 rounded-sm">
                        {project.status}
                    </span>
                    <span className="bg-olive px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                        {project.location}
                    </span>
                </div>
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-2 shadow-sm">{project.title}</h1>
            </div>
        </div>
      </div>

      {/* === MAIN ARTICLE === */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* LEFT: Full Description */}
          <div className="md:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-moss mb-6">About the Initiative</h2>
              <div className="prose prose-lg text-cedar leading-relaxed whitespace-pre-line">
                  {project.description || "No description available."}
              </div>
              
              <div className="mt-12 pt-12 border-t border-olive/10">
                  <Link href="/projects" className="text-cypress font-bold uppercase text-xs tracking-widest hover:text-moss group">
                      <span className="inline-block transition-transform group-hover:-translate-x-1">←</span> Back to All Projects
                  </Link>
              </div>
          </div>

          {/* RIGHT: Stats Sidebar */}
          <div className="h-fit sticky top-24">
              <div className="bg-light p-8 border border-olive/10 rounded-sm shadow-sm">
                  <h3 className="font-bold text-moss uppercase tracking-widest text-xs mb-6 border-b border-olive/10 pb-2">
                      Project Impact
                  </h3>
                  <div className="space-y-8">
                      <div>
                          <div className="text-4xl font-serif font-bold text-moss">
                              {project.treesPlanted ? project.treesPlanted.toLocaleString() : "0"}
                          </div>
                          <div className="text-xs text-cedar uppercase tracking-widest">Trees Planted</div>
                      </div>
                      <div>
                          <div className="flex justify-between items-end mb-1">
                              <div className="text-4xl font-serif font-bold text-moss">
                                  {project.fundingGoal ? `${project.fundingGoal}%` : "0%"}
                              </div>
                              <span className="text-xs text-olive font-bold uppercase">Funded</span>
                          </div>
                          <div className="w-full bg-white border border-olive/20 h-2 rounded-full overflow-hidden">
                              <div 
                                className="bg-olive h-full" 
                                style={{ width: `${project.fundingGoal || 0}%` }}
                              ></div>
                          </div>
                      </div>
                      <Link href="/get-involved" className="block w-full py-4 bg-moss text-white text-center font-bold uppercase text-xs tracking-widest hover:bg-cypress transition-colors rounded-sm shadow-lg">
                          Support This Project
                      </Link>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}

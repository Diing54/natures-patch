import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const dynamic = "force-dynamic";

export const metadata = {
  title: "The Climate Lab | Nature's Patch",
  description: "Research, policy briefs, and field notes on urban forestry.",
};

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// Fetch all articles, ordered by newest first
const query = `*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  author,
  publishedAt,
  excerpt,
  mainImage,
  "pdfUrl": pdfFile.asset->url
}`;

export default async function LabPage() {
  const articles = await client.fetch(query) || [];
  
  // Separate the newest article (featured) from the rest
  const featuredArticle = articles.length > 0 ? articles[0] : null;
  const listArticles = articles.length > 1 ? articles.slice(1) : [];

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

      {/* === FEATURED RESEARCH (Dynamic) === */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 mb-20">
          <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-cypress flex flex-col md:flex-row gap-12">
              
              {featuredArticle ? (
                  <>
                      <div className="w-full md:w-2/3">
                          <span className="bg-cypress/10 text-cypress px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4 inline-block">
                              Newest Publication • {featuredArticle.category}
                          </span>
                          <h2 className="font-serif text-3xl md:text-4xl font-bold text-moss mb-6 hover:text-cypress cursor-pointer transition-colors">
                              {featuredArticle.title}
                          </h2>
                          <p className="text-cedar text-lg leading-relaxed mb-8">
                              {featuredArticle.excerpt}
                          </p>
                          <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-moss/10 flex items-center justify-center font-serif font-bold text-moss uppercase">
                                  {featuredArticle.author ? featuredArticle.author.substring(0,2) : 'NP'}
                              </div>
                              <div className="text-sm">
                                  <div className="font-bold text-moss">{featuredArticle.author || 'Nature\'s Patch Team'}</div>
                                  <div className="text-cedar text-xs">{featuredArticle.publishedAt || 'Recent'}</div>
                              </div>
                          </div>
                      </div>
                      <div className="w-full md:w-1/3 bg-light border border-olive/10 flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
                          {featuredArticle.mainImage && (
                              <div className="absolute inset-0 opacity-20 z-0">
                                  <Image src={urlFor(featuredArticle.mainImage).url()} alt="" fill className="object-cover" />
                              </div>
                          )}
                          <div className="relative z-10">
                              <div className="font-serif text-6xl text-olive mb-4 leading-none">"</div>
                              <p className="text-moss font-serif italic mb-6">
                                  Bridging the gap between scientific research and community action.
                              </p>
                              {featuredArticle.pdfUrl ? (
                                  <a href={featuredArticle.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-moss text-white text-xs font-bold uppercase tracking-widest hover:bg-cypress transition-colors rounded-sm">
                                      Download PDF
                                  </a>
                              ) : (
                                  <button className="px-8 py-3 border border-moss text-moss text-xs font-bold uppercase tracking-widest hover:bg-moss hover:text-white transition-colors rounded-sm">
                                      Read Article
                                  </button>
                              )}
                          </div>
                      </div>
                  </>
              ) : (
                  <div className="w-full text-center py-12 text-cedar">
                      Check back soon for our latest research publications.
                  </div>
              )}

          </div>
      </section>

      {/* === RESEARCH & POLICY LIBRARY === */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Content: Articles */}
          <div className="md:col-span-8 space-y-16">
              <div className="flex items-center justify-between border-b border-olive/20 pb-4 mb-8">
                  <h3 className="font-serif text-2xl font-bold text-moss">Latest Field Notes</h3>
              </div>

              {listArticles.length > 0 ? (
                  listArticles.map((article) => (
                      <article key={article._id} className="group cursor-pointer border-b border-olive/10 pb-8 last:border-0">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="bg-cedar/10 h-48 md:h-full relative overflow-hidden rounded-sm">
                                  {article.mainImage ? (
                                      <Image src={urlFor(article.mainImage).width(400).url()} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                  ) : (
                                      <div className="absolute inset-0 flex items-center justify-center text-moss/30 font-serif italic text-sm">No Image</div>
                                  )}
                              </div>
                              <div className="md:col-span-2 flex flex-col justify-center">
                                  <div className="flex justify-between items-center mb-2">
                                      <span className="text-cypress text-[10px] font-bold uppercase tracking-widest">{article.category}</span>
                                      <span className="text-cedar text-xs">{article.publishedAt}</span>
                                  </div>
                                  <h4 className="font-serif text-2xl font-bold text-moss mb-3 group-hover:text-cypress transition-colors">
                                      {article.title}
                                  </h4>
                                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                      {article.excerpt}
                                  </p>
                                  {article.pdfUrl ? (
                                      <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-moss underline decoration-olive/50 hover:text-cypress">Download Report PDF</a>
                                  ) : (
                                      <span className="text-xs font-bold text-moss underline decoration-olive/50 hover:text-cypress">Read Essay</span>
                                  )}
                              </div>
                          </div>
                      </article>
                  ))
              ) : (
                  <p className="text-cedar italic">More articles coming soon.</p>
              )}
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

              {/* Topics (Static for now to serve as navigation links) */}
              <div>
                  <h4 className="font-serif text-lg font-bold text-moss mb-4 border-b border-olive/20 pb-2">Research Topics</h4>
                  <ul className="space-y-3 text-sm text-cedar">
                      <li className="flex justify-between hover:text-cypress cursor-pointer">
                          <span>Urban Ecology</span>
                      </li>
                      <li className="flex justify-between hover:text-cypress cursor-pointer">
                          <span>Carbon Markets</span>
                      </li>
                      <li className="flex justify-between hover:text-cypress cursor-pointer">
                          <span>Indigenous Species</span>
                      </li>
                      <li className="flex justify-between hover:text-cypress cursor-pointer">
                          <span>Youth & Education</span>
                      </li>
                  </ul>
              </div>

              {/* Newsletter Box */}
              <div className="bg-moss text-white p-8 text-center rounded-sm">
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

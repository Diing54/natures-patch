import { client } from "../../sanity/client";

// 1. GROQ Query: Get news items, sorted by newest date first
const query = `*[_type == "news"] | order(publishedAt desc) {
  _id,
  title,
  publishedAt,
  summary,
  link
}`;

export const metadata = {
  title: "Media & Press | Nature's Patch",
  description: "Official press releases, brand guidelines, and media resources.",
};

// 2. Helper function to make dates look nice (e.g., "Oct 24, 2025")
function formatDate(dateString) {
    if (!dateString) return 'Date Pending';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

export default async function MediaPage() {
  
  // 3. Fetch the data
  const newsItems = await client.fetch(query);

  return (
    <div className="bg-white min-h-screen">
      
      {/* === HERO === */}
      <section className="bg-moss text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-olive font-bold uppercase tracking-widest text-xs mb-4 block">
            Newsroom
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Press & Media Resources.
          </h1>
          <p className="text-xl text-aloe/80 font-light max-w-2xl mx-auto">
            Updates from the field, official statements, and assets for storytellers.
          </p>
        </div>
      </section>

      {/* === DYNAMIC NEWS SECTION === */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-b border-olive/10">
          <div className="flex justify-between items-end mb-12">
              <h2 className="font-serif text-3xl font-bold text-moss">Latest News</h2>
              <a href="#" className="text-xs font-bold text-cypress uppercase tracking-widest hover:text-moss border-b border-cypress pb-1">Archive →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* 4. Loop through Sanity Data */}
              {newsItems.length > 0 ? (
                  newsItems.map((item) => (
                    <article key={item._id} className="group">
                        <div className="text-xs text-cedar font-bold uppercase tracking-widest mb-2">
                            {formatDate(item.publishedAt)}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-moss mb-3 group-hover:text-cypress transition-colors cursor-pointer">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            {item.summary}
                        </p>
                        {item.link ? (
                            <a href={item.link} target="_blank" className="text-xs font-bold text-olive uppercase hover:text-moss">Read Full Story →</a>
                        ) : (
                            <span className="text-xs font-bold text-olive uppercase hover:text-moss cursor-pointer">Read Release</span>
                        )}
                    </article>
                  ))
              ) : (
                  <p className="text-gray-500 italic">No news updates available yet.</p>
              )}

          </div>
      </section>

      {/* === MEDIA KIT (Downloads) - Static Assets === */}
      <section className="bg-light py-20">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  
                  {/* Left: Text */}
                  <div>
                      <h2 className="font-serif text-3xl font-bold text-moss mb-6">Brand Assets</h2>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                          Journalists and partners are free to use these assets when referencing Nature's Patch. Please do not alter the logo colors or aspect ratio.
                      </p>
                      
                      <div className="space-y-4">
                          <div className="flex items-center justify-between bg-white p-4 border border-olive/10 rounded-sm">
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-moss rounded-sm flex items-center justify-center text-white text-xs font-serif font-bold">NP.</div>
                                  <div>
                                      <div className="font-bold text-moss text-sm">Official Logo Pack</div>
                                      <div className="text-xs text-cedar">PNG, SVG, EPS • Dark & Light</div>
                                  </div>
                              </div>
                              <button className="text-cypress font-bold text-xs uppercase hover:text-moss">Download ↓</button>
                          </div>

                          <div className="flex items-center justify-between bg-white p-4 border border-olive/10 rounded-sm">
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-cypress rounded-sm flex items-center justify-center text-white text-xs font-serif font-bold">Aa</div>
                                  <div>
                                      <div className="font-bold text-moss text-sm">Brand Guidelines</div>
                                      <div className="text-xs text-cedar">PDF • Colors & Typography</div>
                                  </div>
                              </div>
                              <button className="text-cypress font-bold text-xs uppercase hover:text-moss">Download ↓</button>
                          </div>
                          
                          <div className="flex items-center justify-between bg-white p-4 border border-olive/10 rounded-sm">
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-olive rounded-sm flex items-center justify-center text-white text-xs font-serif font-bold">📷</div>
                                  <div>
                                      <div className="font-bold text-moss text-sm">Press Photos</div>
                                      <div className="text-xs text-cedar">ZIP • High Res Field Shots</div>
                                  </div>
                              </div>
                              <button className="text-cypress font-bold text-xs uppercase hover:text-moss">Download ↓</button>
                          </div>
                      </div>
                  </div>

                  {/* Right: Visual Preview */}
                  <div className="bg-white p-8 border border-olive/10 shadow-lg text-center h-80 flex flex-col items-center justify-center">
                      <div className="font-serif text-4xl font-bold text-moss tracking-tight mb-2">
                        Nature's Patch<span className="text-cypress">.</span>
                      </div>
                      <div className="text-xs text-cedar uppercase tracking-[0.3em] font-bold">
                          Restoring Nature
                      </div>
                      <div className="mt-8 flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-moss"></div>
                          <div className="w-8 h-8 rounded-full bg-cypress"></div>
                          <div className="w-8 h-8 rounded-full bg-olive"></div>
                          <div className="w-8 h-8 rounded-full bg-cedar"></div>
                          <div className="w-8 h-8 rounded-full bg-aloe border border-gray-200"></div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* === PR CONTACT === */}
      <section className="bg-moss text-white py-12 text-center">
          <p className="text-sm text-aloe mb-2">For media inquiries and interview requests:</p>
          <a href="mailto:press@naturespatch.org" className="font-serif text-2xl font-bold hover:text-olive transition-colors">
              press@naturespatch.org
          </a>
      </section>

    </div>
  );
}

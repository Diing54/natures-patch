export const metadata = {
  title: "Media & Press | Nature's Patch",
  description: "Official press releases, brand guidelines, and media resources.",
};

export default function MediaPage() {
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

      {/* === 8.1 PRESS RELEASES === */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-b border-olive/10">
          <div className="flex justify-between items-end mb-12">
              <h2 className="font-serif text-3xl font-bold text-moss">Latest News</h2>
              <a href="#" className="text-xs font-bold text-cypress uppercase tracking-widest hover:text-moss border-b border-cypress pb-1">Archive →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Release 1 */}
              <article className="group">
                  <div className="text-xs text-cedar font-bold uppercase tracking-widest mb-2">Oct 24, 2025</div>
                  <h3 className="font-serif text-xl font-bold text-moss mb-3 group-hover:text-cypress transition-colors cursor-pointer">
                      Nature's Patch Secures $50k Grant from Green Future Fund
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      The funding will accelerate our "Schools for Sustainability" program in Machakos County.
                  </p>
                  <a href="#" className="text-xs font-bold text-olive uppercase hover:text-moss">Read Release</a>
              </article>

              {/* Release 2 */}
              <article className="group">
                  <div className="text-xs text-cedar font-bold uppercase tracking-widest mb-2">Sep 12, 2025</div>
                  <h3 className="font-serif text-xl font-bold text-moss mb-3 group-hover:text-cypress transition-colors cursor-pointer">
                      Urban Forestry Initiative Launches in Westlands
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      A partnership with the City Council to plant 2,000 indigenous trees along major highways.
                  </p>
                  <a href="#" className="text-xs font-bold text-olive uppercase hover:text-moss">Read Release</a>
              </article>

              {/* Release 3 */}
              <article className="group">
                  <div className="text-xs text-cedar font-bold uppercase tracking-widest mb-2">Aug 05, 2025</div>
                  <h3 className="font-serif text-xl font-bold text-moss mb-3 group-hover:text-cypress transition-colors cursor-pointer">
                      Impact Report Q2: Survival Rates Hit Record 85%
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      New data from our monitoring team confirms the effectiveness of our community stewardship model.
                  </p>
                  <a href="#" className="text-xs font-bold text-olive uppercase hover:text-moss">Read Release</a>
              </article>

          </div>
      </section>

      {/* === 8.2 MEDIA KIT (Downloads) === */}
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

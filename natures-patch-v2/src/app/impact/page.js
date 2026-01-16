export const metadata = {
  title: "Impact Dashboard | Nature's Patch",
  description: "Real-time monitoring and transparency reports.",
};

export default function ImpactPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* === HERO: THE DASHBOARD HEADER === */}
      <section className="bg-moss text-white pt-24 pb-32 relative overflow-hidden">
        {/* Abstract Data Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
            <div className="absolute top-20 left-20 w-48 h-48 border border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <span className="text-olive font-bold uppercase tracking-widest text-xs mb-4 block">
                Transparency & Accountability
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                Our Impact Dashboard.
            </h1>
            <p className="text-xl text-aloe/80 font-light max-w-2xl mx-auto">
                We don't just plant trees; we track them. Here is the verified data from our field operations.
            </p>
            
            <div className="mt-12 text-xs text-olive uppercase tracking-widest">
                Last Data Update: <span className="text-white font-bold">2 Hours Ago</span>
            </div>
        </div>
      </section>

      {/* === 3.1 METRICS GRID (Floating over the Hero) === */}
      <section className="relative z-20 -mt-20 max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Metric Card 1 */}
            <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-cypress">
                <div className="flex justify-between items-start mb-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Total Trees</div>
                    <svg className="w-6 h-6 text-cypress" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                </div>
                <div className="font-serif text-5xl font-bold text-moss mb-2">15,420</div>
                <div className="text-sm text-cypress font-medium flex items-center">
                    <span className="bg-cypress/10 px-2 py-1 rounded text-xs mr-2">+12%</span>
                    vs last quarter
                </div>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-olive">
                <div className="flex justify-between items-start mb-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">Survival Rate</div>
                    <svg className="w-6 h-6 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="font-serif text-5xl font-bold text-moss mb-2">85.4%</div>
                <div className="text-sm text-olive font-medium flex items-center">
                    <span className="bg-olive/10 px-2 py-1 rounded text-xs mr-2">+2.1%</span>
                    Target: 80%
                </div>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-moss">
                <div className="flex justify-between items-start mb-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-cedar">CO₂ Offset (Tons)</div>
                    <svg className="w-6 h-6 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                </div>
                <div className="font-serif text-5xl font-bold text-moss mb-2">1,240</div>
                <div className="text-sm text-moss font-medium flex items-center">
                    <span className="bg-moss/10 px-2 py-1 rounded text-xs mr-2">Verified</span>
                    Gold Standard
                </div>
            </div>

        </div>
      </section>

      {/* === 3.2 MONITORING & ACCOUNTABILITY === */}
      <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
              
              {/* Text Content */}
              <div className="w-full md:w-1/2">
                  <h2 className="font-serif text-3xl font-bold text-moss mb-6">How We Measure Success.</h2>
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-cypress/10 flex items-center justify-center text-cypress font-bold shrink-0">1</div>
                          <div>
                              <h3 className="font-bold text-moss mb-1">GPS Tagging</h3>
                              <p className="text-cedar text-sm leading-relaxed">Every batch of trees is geo-tagged. Donors can locate specific planting sites via our Interactive Map.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-cypress/10 flex items-center justify-center text-cypress font-bold shrink-0">2</div>
                          <div>
                              <h3 className="font-bold text-moss mb-1">Bi-Annual Audits</h3>
                              <p className="text-cedar text-sm leading-relaxed">We conduct field visits every 6 months to measure sapling height, trunk diameter, and overall health.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-cypress/10 flex items-center justify-center text-cypress font-bold shrink-0">3</div>
                          <div>
                              <h3 className="font-bold text-moss mb-1">Community Reporting</h3>
                              <p className="text-cedar text-sm leading-relaxed">Local "Green Champions" submit weekly photo updates via our mobile app.</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Visual Graphic Placeholder */}
              <div className="w-full md:w-1/2 bg-light border border-olive/20 rounded-sm p-8 h-96 flex items-center justify-center relative">
                  <div className="text-center">
                      <div className="font-serif text-2xl text-moss/30 italic mb-2">[Chart Visualization]</div>
                      <p className="text-cedar text-xs">Growth Rate by Species (Year 1)</p>
                  </div>
                  {/* Decorative bars simulating a chart */}
                  <div className="absolute bottom-8 left-12 right-12 flex justify-between items-end h-48 space-x-2">
                      <div className="w-1/5 bg-moss/20 h-[40%] rounded-t-sm"></div>
                      <div className="w-1/5 bg-moss/40 h-[60%] rounded-t-sm"></div>
                      <div className="w-1/5 bg-moss/60 h-[80%] rounded-t-sm"></div>
                      <div className="w-1/5 bg-moss h-[100%] rounded-t-sm"></div>
                  </div>
              </div>

          </div>
      </section>

      {/* === DOWNLOADABLE REPORTS === */}
      <section className="bg-light py-24 border-t border-olive/10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl font-bold text-moss">Financials & Reports</h2>
                  <p className="text-cedar mt-2">Radical transparency is one of our core values.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Report 1 */}
                  <a href="#" className="flex items-center p-6 bg-white border border-olive/10 hover:border-moss transition-colors group shadow-sm">
                      <div className="bg-red-50 p-3 rounded-sm text-red-500 mr-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                          <h4 className="font-bold text-moss group-hover:text-cypress">2025 Annual Report</h4>
                          <span className="text-xs text-cedar uppercase tracking-widest">PDF • 4.2 MB</span>
                      </div>
                  </a>

                  {/* Report 2 */}
                  <a href="#" className="flex items-center p-6 bg-white border border-olive/10 hover:border-moss transition-colors group shadow-sm">
                      <div className="bg-red-50 p-3 rounded-sm text-red-500 mr-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                          <h4 className="font-bold text-moss group-hover:text-cypress">Q4 Impact Audit</h4>
                          <span className="text-xs text-cedar uppercase tracking-widest">PDF • 1.8 MB</span>
                      </div>
                  </a>

                  {/* Report 3 */}
                  <a href="#" className="flex items-center p-6 bg-white border border-olive/10 hover:border-moss transition-colors group shadow-sm">
                      <div className="bg-red-50 p-3 rounded-sm text-red-500 mr-4">
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                          <h4 className="font-bold text-moss group-hover:text-cypress">5-Year Strategy</h4>
                          <span className="text-xs text-cedar uppercase tracking-widest">PDF • 5.5 MB</span>
                      </div>
                  </a>
              </div>
          </div>
      </section>

    </div>
  );
}

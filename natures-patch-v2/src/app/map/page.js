export const metadata = {
  title: "Interactive Map | Nature's Patch",
  description: "Track our reforestation efforts in real-time.",
};

export default function MapPage() {
  return (
    <div className="bg-white h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden">
      
      {/* === LEFT COLUMN: THE MAP INTERFACE === */}
      <div className="w-full md:w-3/4 relative bg-aloe/50 h-[60vh] md:h-full">
        
        {/* Map Placeholder (In production, this becomes Leaflet.js or Mapbox) */}
        <div className="absolute inset-0 flex items-center justify-center bg-cedar/20">
            <span className="font-serif text-3xl text-moss/20 italic font-bold">
                [ Interactive Map Layer Loading... ]
            </span>
        </div>

        {/* Simulated Map Pins (CSS Positioned) */}
        <div className="absolute top-1/3 left-1/4 group cursor-pointer">
            <div className="w-4 h-4 bg-moss rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            {/* Tooltip on Hover */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center pointer-events-none">
                <div className="text-[10px] uppercase font-bold text-cedar">Project #12</div>
                <div className="text-moss font-bold font-serif">Rift Valley Patch</div>
                <div className="text-xs text-cypress">5,000 Trees</div>
            </div>
        </div>

        <div className="absolute top-1/2 left-1/2 group cursor-pointer">
            <div className="w-4 h-4 bg-cypress rounded-full border-2 border-white shadow-lg"></div>
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center pointer-events-none">
                <div className="text-[10px] uppercase font-bold text-cedar">Urban</div>
                <div className="text-moss font-bold font-serif">Westlands School</div>
                <div className="text-xs text-cypress">200 Trees</div>
            </div>
        </div>

        {/* Map Controls Overlay */}
        <div className="absolute top-6 left-6 bg-white p-2 rounded-sm shadow-md space-y-2">
            <button className="w-8 h-8 flex items-center justify-center bg-light hover:bg-aloe text-moss font-bold rounded-sm">+</button>
            <button className="w-8 h-8 flex items-center justify-center bg-light hover:bg-aloe text-moss font-bold rounded-sm">-</button>
        </div>

        {/* Filter Overlay */}
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur shadow-md rounded-sm p-4 w-64">
            <h3 className="font-serif text-moss font-bold mb-3">Map Layers</h3>
            <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer hover:text-moss">
                    <input type="checkbox" className="accent-moss" defaultChecked />
                    <span>Reforestation Sites</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer hover:text-moss">
                    <input type="checkbox" className="accent-cypress" defaultChecked />
                    <span>Urban Gardens</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer hover:text-moss">
                    <input type="checkbox" className="accent-olive" />
                    <span>School Partners</span>
                </label>
            </div>
        </div>

      </div>

      {/* === RIGHT COLUMN: DATA SIDEBAR === */}
      <div className="w-full md:w-1/4 bg-white border-l border-olive/20 flex flex-col h-[40vh] md:h-full">
          
          {/* Search Header */}
          <div className="p-6 border-b border-olive/10 bg-light">
              <h2 className="font-serif text-xl font-bold text-moss mb-1">Tree Tracker</h2>
              <p className="text-xs text-cedar mb-4">Find your adopted tree by ID or Name.</p>
              <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter Tree ID (e.g. NP-2025-X)" 
                    className="w-full pl-3 pr-10 py-2 text-sm border border-olive/20 rounded-sm focus:outline-none focus:border-moss"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-moss hover:text-cypress">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
              </div>
          </div>

          {/* Live Feed (Scrollable) */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-olive mb-2">Recent Activity</div>
              
              {/* Item 1 */}
              <div className="flex gap-3 items-start animate-fade-in-up">
                  <div className="w-8 h-8 rounded-full bg-cypress/10 flex items-center justify-center text-cypress text-xs font-bold">JD</div>
                  <div>
                      <div className="text-sm font-bold text-moss">Jane Doe</div>
                      <div className="text-xs text-gray-500">Adopted a <span className="text-cypress font-medium">Acacia Sapling</span> in Rift Valley.</div>
                      <div className="text-[10px] text-cedar mt-1">2 minutes ago</div>
                  </div>
              </div>

               {/* Item 2 */}
               <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-moss/10 flex items-center justify-center text-moss text-xs font-bold">MK</div>
                  <div>
                      <div className="text-sm font-bold text-moss">Michael K.</div>
                      <div className="text-xs text-gray-500">Adopted a <span className="text-cypress font-medium">Patch (12 Trees)</span> in Nairobi.</div>
                      <div className="text-[10px] text-cedar mt-1">15 minutes ago</div>
                  </div>
              </div>

               {/* Item 3 */}
               <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs font-bold">⚠️</div>
                  <div>
                      <div className="text-sm font-bold text-moss">System Alert</div>
                      <div className="text-xs text-gray-500">New batch of 500 trees geotagged in Sector 4.</div>
                      <div className="text-[10px] text-cedar mt-1">1 hour ago</div>
                  </div>
              </div>

              {/* Item 4 */}
               <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-cypress/10 flex items-center justify-center text-cypress text-xs font-bold">SC</div>
                  <div>
                      <div className="text-sm font-bold text-moss">Sarah C.</div>
                      <div className="text-xs text-gray-500">Adopted a <span className="text-cypress font-medium">Baobab</span> in Coast Region.</div>
                      <div className="text-[10px] text-cedar mt-1">3 hours ago</div>
                  </div>
              </div>

          </div>

          {/* Bottom CTA */}
          <div className="p-6 bg-moss text-white text-center">
              <p className="text-xs mb-3 text-aloe">Want to see your name here?</p>
              <a href="/get-involved" className="block w-full py-2 bg-white text-moss font-bold text-xs uppercase tracking-widest hover:bg-aloe rounded-sm">
                  Adopt a Tree
              </a>
          </div>

      </div>
    </div>
  );
}

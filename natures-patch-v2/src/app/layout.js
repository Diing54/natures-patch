import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Nature's Patch",
  description: "Restoring Nature Where People Live",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col font-sans bg-aloe text-moss">
        
        {/* Responsive Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* === ENHANCED FOOTER === */}
        <footer className="bg-moss text-cedar border-t border-olive/30">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="font-serif text-2xl text-white font-bold tracking-tight">
                            Nature's Patch<span className="text-olive">.</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Climate action through urban forests, community stewardship, and measurable impact.
                        </p>
                        {/* Social Icons (Placeholders - These usually link to external sites like Twitter/LinkedIn) */}
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-cypress/30 rounded-full hover:bg-white hover:text-moss transition-all">
                                <span className="sr-only">X (Twitter)</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-cypress/30 rounded-full hover:bg-white hover:text-moss transition-all">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Explore (Main Navigation) */}
                    <div>
                        <h3 className="text-white font-serif font-bold tracking-wider uppercase text-sm mb-6">Explore</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="/impact" className="hover:text-white transition-colors">Impact Dashboard</a></li>
                            <li><a href="/projects" className="hover:text-white transition-colors">Current Projects</a></li>
                            <li><a href="/map" className="hover:text-white transition-colors">Interactive Map</a></li>
                            <li><a href="/lab" className="hover:text-white transition-colors">The Climate Lab</a></li>
                            <li><a href="/media" className="text-olive hover:text-white transition-colors">Media & Press</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Transparency (Legal Hub) */}
                    {/* FIXED: Links now point to the single /legal page anchors */}
                    <div>
                        <h3 className="text-white font-serif font-bold tracking-wider uppercase text-sm mb-6">Transparency</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="/legal#constitution" className="hover:text-white transition-colors">Constitution</a></li>
                            <li><a href="/legal#safeguarding" className="hover:text-white transition-colors">Safeguarding Policy</a></li>
                            <li><a href="/legal#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="/legal#terms" className="hover:text-white transition-colors">Terms of Use</a></li>
                            {/* FIXED: Point Donate to "Get Involved" where the payment buttons are */}
                            <li><a href="/get-involved" className="text-olive hover:text-white font-bold transition-colors">Donate & Grants</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Newsletter */}
                    <div>
                        <h3 className="text-white font-serif font-bold tracking-wider uppercase text-sm mb-6">Stay Connected</h3>
                        <div className="space-y-4 text-sm">
                            <p>123 Arboretum Drive,<br />Nairobi, Kenya</p>
                            <p><a href="mailto:info@naturespatch.org" className="hover:text-white">info@naturespatch.org</a></p>
                            <p>+254 700 000 000</p>
                            
                            {/* Newsletter Form (Visual Only) */}
                            <form className="mt-6">
                                <label className="block text-xs uppercase text-olive mb-2">Subscribe for Updates</label>
                                <div className="flex">
                                    <input 
                                        type="email" 
                                        placeholder="Email Address" 
                                        className="w-full bg-cypress/20 border border-cypress text-white px-3 py-2 text-sm focus:outline-none focus:border-white rounded-l-sm placeholder-cedar"
                                    />
                                    <button className="bg-white text-moss px-4 py-2 text-sm font-bold uppercase rounded-r-sm hover:bg-aloe transition-colors">
                                        Go
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar: Copyright */}
            <div className="border-t border-olive/20 bg-moss/50">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-olive">
                    <p>© 2026 Nature's Patch. All rights reserved.</p>
                    <div className="flex space-x-6 mt-2 md:mt-0">
                         {/* Redundant legal links removed here to reduce clutter, as requested */}
                        <span>Designed in Nairobi.</span>
                    </div>
                </div>
            </div>
        </footer>

      </body>
    </html>
  );
}

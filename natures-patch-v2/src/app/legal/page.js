export const metadata = {
  title: "Legal & Governance | Nature's Patch",
  description: "Our constitution, safeguarding policies, and terms of use.",
};

export default function LegalPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* === HERO === */}
      <section className="bg-moss text-white py-16 text-center border-b border-olive/30">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Governance & Policies.
        </h1>
        <p className="text-aloe/80 font-light max-w-2xl mx-auto">
          We operate with radical transparency. Below are the governing documents that guide our operations and data use.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* === LEFT: STICKY NAVIGATION === */}
        <aside className="w-full md:w-1/4">
            <div className="sticky top-24 space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-cedar mb-4 px-3">Table of Contents</p>
                <a href="#constitution" className="block px-3 py-2 text-sm font-bold text-moss border-l-2 border-moss bg-light">Constitution</a>
                <a href="#safeguarding" className="block px-3 py-2 text-sm text-gray-600 hover:text-moss hover:border-l-2 hover:border-olive/30 transition-all">Safeguarding Policy</a>
                <a href="#privacy" className="block px-3 py-2 text-sm text-gray-600 hover:text-moss hover:border-l-2 hover:border-olive/30 transition-all">Privacy Policy</a>
                <a href="#terms" className="block px-3 py-2 text-sm text-gray-600 hover:text-moss hover:border-l-2 hover:border-olive/30 transition-all">Terms of Use</a>
            </div>
        </aside>

        {/* === RIGHT: CONTENT AREA === */}
        <div className="w-full md:w-3/4 space-y-16">
            
            {/* 1. Constitution  */}
            <section id="constitution" className="scroll-mt-24">
                <h2 className="font-serif text-2xl font-bold text-moss mb-4 pb-2 border-b border-olive/10">1. Organization Constitution</h2>
                <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                    <p><strong>Article I: Name.</strong> The name of this organization shall be Nature's Patch.</p>
                    <p><strong>Article II: Objectives.</strong> The primary objective is to restore urban ecosystems through community-led reforestation and data-driven monitoring. Specifically:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>To plant indigenous trees in degraded urban areas.</li>
                        <li>To educate youth on environmental stewardship.</li>
                        <li>To provide transparent data on carbon sequestration.</li>
                    </ul>
                    <p><strong>Article III: Membership.</strong> Membership is open to all individuals who subscribe to the objectives of the organization and pay the requisite annual subscription fee.</p>
                </div>
            </section>

            {/* 2. Safeguarding  */}
            <section id="safeguarding" className="scroll-mt-24">
                <h2 className="font-serif text-2xl font-bold text-moss mb-4 pb-2 border-b border-olive/10">2. Safeguarding Policy</h2>
                <div className="bg-light p-6 border-l-4 border-cypress rounded-r-sm">
                    <p className="text-sm text-moss font-medium mb-2">Statement of Intent</p>
                    <p className="text-sm text-cedar leading-relaxed">
                        Nature's Patch has a zero-tolerance approach to abuse. We are committed to protecting children, vulnerable adults, and our staff from harm. All volunteers interacting with schools must undergo background checks.
                    </p>
                </div>
                <div className="mt-4 prose prose-sm max-w-none text-gray-600">
                    <p><strong>Reporting Mechanisms:</strong> Any concerns regarding the conduct of a staff member or volunteer should be reported immediately to the Designated Safeguarding Officer at <a href="mailto:safe@naturespatch.org" className="text-cypress underline">safe@naturespatch.org</a>.</p>
                </div>
            </section>

            {/* 3. Privacy Policy  */}
            <section id="privacy" className="scroll-mt-24">
                <h2 className="font-serif text-2xl font-bold text-moss mb-4 pb-2 border-b border-olive/10">3. Privacy Policy</h2>
                <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                    <p><strong>Data Collection:</strong> We collect personal information (Name, Email) when you donate, volunteer, or subscribe. We also collect geolocation data associated with adopted trees.</p>
                    <p><strong>Data Usage:</strong> We use your data to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Process donations and issue tax receipts.</li>
                        <li>Send updates regarding your specific adopted tree.</li>
                        <li>Improve our interactive map functionality.</li>
                    </ul>
                    <p><strong>Third Parties:</strong> We do not sell your data. Payment data is processed securely via Stripe/M-Pesa and is not stored on our servers.</p>
                </div>
            </section>

            {/* 4. Terms of Use  */}
            <section id="terms" className="scroll-mt-24">
                <h2 className="font-serif text-2xl font-bold text-moss mb-4 pb-2 border-b border-olive/10">4. Terms of Use</h2>
                <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                    <p>By accessing this website, you agree to the following terms:</p>
                    <p><strong>Content:</strong> All materials, including the interactive map data and research papers, are the intellectual property of Nature's Patch unless otherwise stated.</p>
                    <p><strong>Prohibited Use:</strong> You may not use this website to scrape data for commercial use or attempt to disrupt the integrity of our monitoring systems.</p>
                    <p><strong>Disclaimer:</strong> While we strive for accuracy, tree growth data is subject to environmental variables and field estimation.</p>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}

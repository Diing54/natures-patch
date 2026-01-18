"use client";

import { useForm, ValidationError } from '@formspree/react';

// Meta can't be exported from "use client" components in Next.js 13+
// We usually move this to a layout or page wrapper, but for now we'll skip the export
// to prevent the build error.

export default function GetInvolvedPage() {
  
  // 1. Hook up the Partner Form to Formspree
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);

  // Helper for Demo Donation Buttons
  const handleDonate = (amount) => {
    alert(`In a real app, this would open Stripe Checkout for $${amount}.`);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* === HEADER === */}
      <section className="bg-moss text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-olive font-bold uppercase tracking-widest text-xs mb-4 block">
            Join the Movement
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Be Part of the Change.
          </h1>
          <p className="text-xl text-aloe/80 font-light max-w-2xl mx-auto">
            Whether you have time, resources, or influence, there is a role for you in restoring our urban canopy.
          </p>
        </div>
      </section>

      {/* === ADOPT A TREE (Priority Section) === */}
      <section id="adopt" className="py-20 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-moss">Adopt a Tree</h2>
              <p className="text-cedar mt-2">Track your impact with GPS-tagged saplings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Option 1: Individual */}
              <div className="bg-white p-8 rounded-sm shadow-sm border border-olive/10 hover:border-moss transition-all text-center group">
                  <div className="font-serif text-2xl font-bold text-moss mb-2">The Sapling</div>
                  <div className="text-4xl font-bold text-cypress mb-6">$10 <span className="text-sm text-cedar font-normal">/ tree</span></div>
                  <ul className="text-sm text-gray-600 space-y-4 mb-8 text-left">
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> Indigenous Species</li>
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> GPS Location Data</li>
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> Annual Photo Update</li>
                  </ul>
                  <button 
                    onClick={() => handleDonate(10)}
                    className="w-full py-3 border-2 border-moss text-moss font-bold uppercase tracking-widest text-xs hover:bg-moss hover:text-white transition-colors rounded-sm"
                  >
                      Adopt Now
                  </button>
              </div>

              {/* Option 2: The Patch (Best Value) */}
              <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-moss relative transform md:-translate-y-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-moss text-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full">
                      Most Popular
                  </div>
                  <div className="font-serif text-2xl font-bold text-moss mb-2">The Patch</div>
                  <div className="text-4xl font-bold text-cypress mb-6">$100 <span className="text-sm text-cedar font-normal">/ 12 trees</span></div>
                  <ul className="text-sm text-gray-600 space-y-4 mb-8 text-left">
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> All "Sapling" Benefits</li>
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> Digital Certificate</li>
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> Name on Website Wall</li>
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> <strong>10% Discount</strong></li>
                  </ul>
                  <button 
                    onClick={() => handleDonate(100)}
                    className="w-full py-3 bg-moss text-white font-bold uppercase tracking-widest text-xs hover:bg-cypress transition-colors rounded-sm shadow-md"
                  >
                      Adopt a Patch
                  </button>
              </div>

              {/* Option 3: Corporate */}
              <div className="bg-white p-8 rounded-sm shadow-sm border border-olive/10 hover:border-moss transition-all text-center group">
                  <div className="font-serif text-2xl font-bold text-moss mb-2">Corporate Forest</div>
                  <div className="text-4xl font-bold text-cypress mb-6">$1,000+</div>
                  <ul className="text-sm text-gray-600 space-y-4 mb-8 text-left">
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> 100+ Trees</li>
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> CSR Impact Report</li>
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> Team Planting Day</li>
                      <li className="flex items-center"><span className="text-cypress mr-2">✓</span> Branded Signage</li>
                  </ul>
                  <a href="#partner-form" className="block w-full py-3 border-2 border-moss text-moss font-bold uppercase tracking-widest text-xs hover:bg-moss hover:text-white transition-colors rounded-sm">
                      Contact Partnership
                  </a>
              </div>

          </div>
      </section>

      {/* === VOLUNTEER & PARTNER === */}
      <section className="bg-white py-20 border-t border-olive/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Volunteer Column */}
              <div>
                  <h3 className="font-serif text-3xl font-bold text-moss mb-4">Volunteer</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                      We need hands in the soil. Join our weekend planting drives in Nairobi or become a "Green Champion" in your local neighborhood.
                  </p>
                  
                  <div className="space-y-6">
                      <div className="flex gap-4 p-4 bg-gray-50 rounded-sm border border-transparent hover:border-olive/30 transition-colors">
                          <div className="text-2xl">🌱</div>
                          <div>
                              <h4 className="font-bold text-moss">Planting Days</h4>
                              <p className="text-sm text-cedar">Weekends • 4 Hours • Physical Work</p>
                          </div>
                      </div>
                      <div className="flex gap-4 p-4 bg-gray-50 rounded-sm border border-transparent hover:border-olive/30 transition-colors">
                          <div className="text-2xl">📸</div>
                          <div>
                              <h4 className="font-bold text-moss">Content Creator</h4>
                              <p className="text-sm text-cedar">Remote • Flexible • Storytelling</p>
                          </div>
                      </div>
                  </div>

                  {/* LINKED TO CONTACT PAGE */}
                  <a href="/contact" className="inline-block mt-8 text-cypress font-bold uppercase text-xs tracking-widest border-b border-cypress pb-1 hover:text-moss transition-colors">
                      Fill Volunteer Application →
                  </a>
              </div>

              {/* Partners Column (FUNCTIONAL FORM) */}
              <div id="partner-form">
                  <h3 className="font-serif text-3xl font-bold text-moss mb-4">Partner With Us</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                      Align your brand with tangible climate action. We work with schools, corporations, and local governments to create green spaces.
                  </p>
                  
                  {state.succeeded ? (
                    <div className="bg-moss text-white p-6 rounded-sm text-center animate-fade-in">
                        <p className="font-bold text-xl mb-2">Inquiry Sent!</p>
                        <p className="text-sm text-aloe">We will be in touch regarding your partnership request.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Hidden field to tell you this came from the Partner page */}
                        <input type="hidden" name="subject" value="New Partnership Inquiry" />
                        
                        <div>
                            <label className="block text-xs font-bold uppercase text-cedar mb-1">Organization Name</label>
                            <input name="organization" type="text" className="w-full bg-gray-50 border border-olive/20 p-3 text-sm focus:outline-none focus:border-moss rounded-sm" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-cedar mb-1">Email Address</label>
                            <input name="email" type="email" className="w-full bg-gray-50 border border-olive/20 p-3 text-sm focus:outline-none focus:border-moss rounded-sm" required />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-cedar mb-1">Partnership Interest</label>
                            <select name="interest" className="w-full bg-gray-50 border border-olive/20 p-3 text-sm focus:outline-none focus:border-moss rounded-sm">
                                <option>Corporate CSR</option>
                                <option>School Program</option>
                                <option>Government / Policy</option>
                            </select>
                        </div>
                        <button 
                            type="submit" 
                            disabled={state.submitting}
                            className="px-8 py-3 bg-cypress text-white font-bold uppercase tracking-widest text-xs hover:bg-moss transition-colors rounded-sm disabled:opacity-50"
                        >
                            {state.submitting ? "Sending..." : "Send Inquiry"}
                        </button>
                    </form>
                  )}
              </div>

          </div>
      </section>

    </div>
  );
}

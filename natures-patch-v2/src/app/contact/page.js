"use client";

import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  // 1. Hook into Formspree using the ID from .env
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);

  // 2. Success View (What happens after sending)
  if (state.succeeded) {
      return (
          <div className="min-h-screen bg-moss flex items-center justify-center p-6">
              <div className="bg-white p-12 max-w-lg text-center rounded-sm shadow-2xl animate-fade-in">
                  <div className="text-4xl mb-4">🌱</div>
                  <h2 className="font-serif text-3xl font-bold text-moss mb-4">Message Received.</h2>
                  <p className="text-cedar mb-8">
                      Thank you for reaching out to Nature's Patch, we will respond to your inquiry within 48 hours.
                  </p>
                  <a href="/" className="text-cypress font-bold uppercase text-xs tracking-widest border-b border-cypress pb-1 hover:text-moss">
                      Return Home
                  </a>
              </div>
          </div>
      );
  }

  // 3. The Form View
  return (
    <div className="min-h-screen bg-white grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left: Contact Info (Static) */}
        <div className="bg-moss text-white p-12 lg:p-24 flex flex-col justify-center">
            <span className="text-olive font-bold uppercase tracking-widest text-xs mb-6">Get in Touch</span>
            <h1 className="font-serif text-5xl font-bold mb-8 leading-tight">
                Let's Grow <br/> Together.
            </h1>
            <p className="text-aloe/80 text-lg mb-12 font-light max-w-md">
                Whether you want to partner on a project, volunteer for a planting day, or simply ask a question, we are here to listen.
            </p>
            
            <div className="space-y-6 text-sm">
                <div>
                    <div className="text-olive font-bold uppercase text-[10px] tracking-widest mb-1">Headquarters</div>
                    <div>Raila Odinga road, Mbagathi, Nairobi Area, Kenya 49940</div>
                </div>
                <div>
                    <div className="text-olive font-bold uppercase text-[10px] tracking-widest mb-1">Email</div>
                    <div>info@naturespatch.org</div>
                </div>
                <div>
                    <div className="text-olive font-bold uppercase text-[10px] tracking-widest mb-1">Phone</div>
                    <div>+254 700 123 456</div>
                </div>
            </div>
        </div>

        {/* Right: The Form */}
        <div className="p-12 lg:p-24 flex flex-col justify-center bg-light">
            <form onSubmit={handleSubmit} className="space-y-8 max-w-md w-full">
                
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase text-cedar tracking-widest mb-2">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text" 
                        name="name"
                        placeholder="Jane Doe"
                        className="w-full bg-transparent border-b border-olive/30 py-3 text-moss placeholder-moss/30 focus:outline-none focus:border-moss transition-colors"
                        required
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase text-cedar tracking-widest mb-2">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder="jane@example.com"
                        className="w-full bg-transparent border-b border-olive/30 py-3 text-moss placeholder-moss/30 focus:outline-none focus:border-moss transition-colors"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase text-cedar tracking-widest mb-2">
                        How can we help?
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full bg-transparent border-b border-olive/30 py-3 text-moss placeholder-moss/30 focus:outline-none focus:border-moss transition-colors resize-none"
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="bg-moss text-white px-8 py-4 w-full font-bold uppercase tracking-widest text-xs hover:bg-cypress transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {state.submitting ? "Sending..." : "Send Message"}
                </button>

            </form>
        </div>

    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* HEADER */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            {/* Simple Shield Icon SVG */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
              <path d="M12 2L3 7V12C3 17.5228 6.94291 22.1852 12 23.5C17.0571 22.1852 21 17.5228 21 12V7L12 2Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>SmartGoldSavings</span>
          </div>
          <div className="trust-badge display-none-mobile">
            Trusted Financial Education Resource
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-content">
            <div>
              <h1 className="hero-headline">
                Is Your Retirement Savings Safe from Inflation?
              </h1>
              <p className="hero-sub">
                Learn how to legally protect your 401(k) and IRA with physical gold before the next market correction.
              </p>
              <a href="#offer" className="btn">
                Get Your Free Gold Info Kit
              </a>
              <p className="text-sm mt-4 text-gray-500">
                <small>100% Free • No Obligation • Trusted by thousands</small>
              </p>
            </div>
            
            <div className="hero-image-wrapper">
              <Image 
                src="/hero-couple.png" 
                alt="Happy retired couple reviewing their secure finances" 
                width={600} 
                height={400} 
                className="hero-image"
                priority
              />
            </div>
          </div>
        </section>

        {/* FEAR / PROBLEM SECTION */}
        <section className="section bg-white text-center">
          <div className="container">
            <h2 className="text-primary">Why Your Savings Are At Risk</h2>
            <div className="fear-grid">
              
              {/* Card 1: Inflation */}
              <div className="fear-card">
                <div className="fear-icon justify-center flex">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    <path d="M19 19l-3 3-3-3"></path>
                  </svg>
                </div>
                <h3>Eroding Purchasing Power</h3>
                <p>Inflation is silently stealing the value of your hard-earned money every single day. What bought a full cart of groceries yesterday barely covers the basics today.</p>
              </div>

              {/* Card 2: Market Volatility */}
              <div className="fear-card">
                <div className="fear-icon justify-center flex">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                    <polyline points="17 18 23 18 23 12"></polyline>
                  </svg>
                </div>
                <h3>Stock Market Volatility</h3>
                <p>The stock market is at all-time highs, but experts warn a correction is overdue. Don&apos;t leave your nest egg exposed to a sudden crash.</p>
              </div>

              {/* Card 3: Paper Currency Risk */}
              <div className="fear-card">
                 <div className="fear-icon justify-center flex">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="16" y1="21" x2="16" y2="2"></line>
                    <line x1="12" y1="21" x2="12" y2="2"></line>
                    <line x1="8" y1="21" x2="8" y2="2"></line>
                  </svg>
                </div>
                <h3>Failing Paper Currency</h3>
                <p>Fiat currencies have historically failed. Gold has maintained its purchasing power for over 5,000 years. It is the ultimate hedge against uncertainty.</p>
              </div>

            </div>
          </div>
        </section>

        {/* CHART SECTION */}
        <section className="section bg-primary text-center">
          <div className="container">
            <h2 className="text-white mb-8">The Numbers Don&apos;t Lie</h2>
            <p className="mb-8 text-lg text-white opacity-90" style={{ maxWidth: '800px', margin: '0 auto 2rem auto' }}>
              While the purchasing power of the dollar has plummeted, gold has historically protected wealth. See the divergence for yourself.
            </p>
            <div className="flex justify-center">
              <Image 
                src="/chart-gold-dollar.png" 
                alt="Chart showing Gold Price rising vs Dollar Purchasing Power falling (2000-2026)" 
                width={800} 
                height={450} 
                className="rounded shadow-lg border border-white/10"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <p className="mt-6 text-sm text-white opacity-70">
              *Past performance is not indicative of future results. Market data for illustration purposes only.
            </p>
          </div>
        </section>

        {/* SOLUTION / OFFER SECTION */}
        <section id="offer" className="solution-section">
          <div className="container solution-content">
            <div className="solution-image">
               <Image 
                src="/guide-book.png" 
                alt="Free 2026 Gold Investment Guide Book" 
                width={400} 
                height={500} 
                style={{ maxWidth: '100%', height: 'auto', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }}
              />
            </div>
            <div className="solution-text">
              <h2 className="solution-headline">Get The Free 2026 Gold Investment Guide</h2>
              <p className="text-lg mb-6">Discover how savvy investors are protecting their wealth. This exclusive <strong>FREE guide</strong> reveals:</p>
              <ul className="solution-list">
                <li>How to <strong>legally move your IRA/401(k)</strong> to gold tax-free and penalty-free.</li>
                <li>Why central banks are buying gold at record rates.</li>
                <li>The &quot;Loophole&quot; that allows you to own physical metals inside a retirement account.</li>
                <li>Strategies to protect your legacy from inflation and taxes.</li>
              </ul>
              <a href="#" className="btn" style={{ minWidth: '300px', textAlign: 'center' }}>
                Send Me The Free Guide
              </a>
              <p className="text-sm mt-4 opacity-80">
                Fast & Free Shipping • Zero Cost • Zero Obligation
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="section bg-light text-center">
          <div className="container">
            <h2 className="text-primary">How It Works</h2>
             <p className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto' }}>
              We make it simple to secure your hard-earned savings.
            </p>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Request Info</h3>
                <p>Fill out the form to get your free 2026 Gold Investment Guide delivered to your door.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Learn Options</h3>
                <p>Read the guide to understand how a Gold IRA can act as a firewall against inflation.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Secure Future</h3>
                <p>When you are ready, our partners help you transfer funds tax-free to physical gold.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="section bg-white text-center">
          <div className="container">
            <h2 className="text-primary">Trusted By American Families</h2>
            <div className="testimonial-grid">
              {/* Review 1 */}
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <Image src="/testimonial-man.png" alt="Robert T." width={60} height={60} className="testimonial-avatar" />
                  <div>
                    <div className="font-bold">Robert T.</div>
                    <div className="text-sm text-gray-500">Retired Engineer, FL</div>
                  </div>
                  <div className="stars" style={{ marginLeft: 'auto' }}>★★★★★</div>
                </div>
                <p className="italic">&quot;I watched my 401(k) drop in 2008 and I swore I wouldn&apos;t let it happen again. Moving part of my savings to gold gave me peace of mind I haven&apos;t felt in years.&quot;</p>
              </div>
               {/* Review 2 */}
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <Image src="/testimonial-woman.png" alt="Sarah J." width={60} height={60} className="testimonial-avatar" />
                  <div>
                    <div className="font-bold">Sarah J.</div>
                    <div className="text-sm text-gray-500">Teacher, OH</div>
                  </div>
                  <div className="stars" style={{ marginLeft: 'auto' }}>★★★★★</div>
                </div>
                <p className="italic">&quot;The guide was an eye-opener. I didn&apos;t know I could legally hold physical gold in my IRA without penalties. The process was much easier than I thought.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section bg-light">
          <div className="container faq-container">
            <h2 className="text-primary text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <details>
                <summary className="faq-question">Is this really free?</summary>
                <div className="faq-answer">Yes. The Gold Investment Guide is 100% free. We even pay for shipping. There is absolutely no obligation to buy anything.</div>
              </details>
            </div>

            <div className="faq-item">
              <details>
                <summary className="faq-question">Can I really own physical gold in an IRA?</summary>
                <div className="faq-answer">Yes. A &quot;Self-Directed IRA&quot; allows you to hold physical precious metals instead of just paper assets. The guide explains exactly how this works under IRS rules.</div>
              </details>
            </div>

            <div className="faq-item">
              <details>
                <summary className="faq-question">Will I be taxed if I move my 401(k)?</summary>
                <div className="faq-answer">Typically, no. If done correctly as a &quot;Rollover,&quot; you can transfer funds from an existing 401(k) or IRA into a Gold IRA without triggering any immediate tax penalties.</div>
              </details>
            </div>

             <div className="faq-item">
              <details>
                <summary className="faq-question">Why gold now?</summary>
                <div className="faq-answer">With national debt at record highs and inflation persisting, gold has historically served as a safe haven store of value when paper currency loses purchasing power.</div>
              </details>
            </div>

             <div className="flex justify-center mt-8">
               <a href="#offer" className="btn">Get My Free Guide Now</a>
             </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Risk Disclosure</a>
          </div>
          <p className="mb-4">© 2026 SmartGoldSavings.com. All Rights Reserved.</p>
          
          <div className="disclaimer">
            <p><strong>IMPORTANT DISCLAIMER:</strong> SmartGoldSavings is an educational resource and does not offer financial, legal, or tax advice. The content on this website is for informational purposes only. We are not financial advisors. Investing in precious metals involves risk, including the potential loss of principal. Gold and silver markets are volatile and can fluctuate significantly. You should consult with your own financial, legal, and tax professionals before making any investment decisions. Past performance is not indicative of future results.</p>
            <p className="mt-2 text-xs">This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

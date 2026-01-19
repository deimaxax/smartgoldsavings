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

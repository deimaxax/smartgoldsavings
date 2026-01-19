import Link from "next/link";
import Image from "next/image";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-light">
      {/* Simple Header */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container text-center">
          <Link href="/" className="text-2xl font-serif font-bold text-primary">
            SmartGoldSavings
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="bg-green-100 p-4 rounded-full">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-primary mb-4">Request Received!</h1>
          <h2 className="text-xl text-gray-600 mb-8">Your 2026 Gold Investment Guide is being prepared for shipping.</h2>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-4 bg-gray-50 rounded">
                <div className="font-bold text-lg mb-2 text-primary">1. Confirmation</div>
                <p className="text-sm">You will receive an email confirmation shortly containing a digital copy of the guide while you wait.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                 <div className="font-bold text-lg mb-2 text-primary">2. Shipping</div>
                <p className="text-sm">Your physical kit will be shipped within 24 hours via discreet, secure mail.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                 <div className="font-bold text-lg mb-2 text-primary">3. Expert Call</div>
                <p className="text-sm">A senior gold specialist may call to verify your shipping address to ensure delivery.</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="mb-4 font-bold text-lg">Can't wait? Speak to a specialist right now.</p>
              <a href="tel:+" className="btn bg-green-600 hover:bg-green-700 inline-flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                (800) 555-0199
              </a>
              <p className="text-xs text-gray-500 mt-2">Available Mon-Fri 8am-8pm EST</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link href="/" className="text-primary hover:underline">
              &larr; Return to Home Page
            </Link>
          </div>

        </div>
      </main>

      <footer className="footer bg-white border-t">
        <div className="container">
          <p className="mb-0">© 2026 SmartGoldSavings.com. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

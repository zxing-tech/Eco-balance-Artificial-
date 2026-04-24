import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GOOGLE_ADS_CONVERSION = 'AW-17136746204/YOUR_CONVERSION_LABEL';

export default function ThankYou() {
  useEffect(() => {
    window.gtag?.('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSION,
    });
  }, []);

  return (
    <div className="bg-[#313131] text-white font-body min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full text-center flex flex-col items-center">
        <div className="bg-[#67FF04]/10 border-2 border-[#67FF04] rounded-full p-6 mb-8">
          <CheckCircle className="w-16 h-16 text-[#67FF04]" strokeWidth={2} />
        </div>

        <div className="bg-[#67FF04] text-[#313131] px-4 py-1 text-xs font-black tracking-widest uppercase mb-6">
          Request Received
        </div>

        <h1 className="text-4xl md:text-6xl font-headline font-black mb-6 leading-tight">
          Thank You for Reaching Out
        </h1>

        <p className="text-white/70 text-lg md:text-xl font-opensans leading-relaxed mb-10 max-w-xl">
          Your consultation request has been successfully received. Our team will review your project details and reply within 24 hours during operating hours (Mon–Fri, 9am–6pm).
        </p>

        <div className="w-full h-px bg-white/10 mb-10" />

        <h2 className="text-white/90 font-headline font-bold text-sm uppercase tracking-[0.2em] mb-6">
          What happens next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-12 text-left">
          <div className="bg-white/5 border border-white/10 p-6">
            <div className="text-[#67FF04] font-roboto font-black text-lg mb-3">01</div>
            <p className="text-white/70 text-sm font-opensans leading-relaxed">We review your project details and brief.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6">
            <div className="text-[#67FF04] font-roboto font-black text-lg mb-3">02</div>
            <p className="text-white/70 text-sm font-opensans leading-relaxed">Our specialist reaches out via email or phone.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6">
            <div className="text-[#67FF04] font-roboto font-black text-lg mb-3">03</div>
            <p className="text-white/70 text-sm font-opensans leading-relaxed">We schedule a site visit or consultation call.</p>
          </div>
        </div>

        <a
          href="/"
          className="bg-[#67FF04] text-[#313131] font-black text-sm tracking-wider uppercase px-10 py-5 transition-all hover:shadow-[0_0_20px_rgba(103,255,4,0.4)] hover:-translate-y-0.5"
        >
          ← Back to Home
        </a>

        <p className="mt-8 text-white/30 text-xs font-opensans">
          Need immediate assistance? Email us at{' '}
          <a className="text-[#67FF04]" href="mailto:ecobalancecity@gmail.com">ecobalancecity@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-navy min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border border-gold rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="text-center relative z-10 px-6">
        {/* 404 Number */}
        <p className="font-playfair text-gold text-[10rem] font-bold leading-none mb-4">
          404
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-0.5 bg-gold/40" />
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Page Not Found
          </span>
          <div className="w-16 h-0.5 bg-gold/40" />
        </div>

        {/* Message */}
        <h1 className="font-playfair text-white text-3xl md:text-5xl font-bold mb-4">
          This Page Does Not Exist
        </h1>
        <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed mb-10">
          The page you are looking for may have been moved, deleted, or never
          existed. Let us help you find your way back.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gold text-navy font-semibold px-8 py-4 rounded hover:opacity-90 transition-opacity duration-200"
          >
            Back To Home
          </Link>
          <Link
            href="/contact"
            className="border border-white/30 text-white font-semibold px-8 py-4 rounded hover:border-gold hover:text-gold transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

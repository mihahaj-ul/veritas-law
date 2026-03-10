import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-navy min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border border-gold rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Trusted Legal Excellence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Justice Is Not <br />
            <span className="text-gold">A Privilege.</span> <br />
            It Is Your Right.
          </h1>

          {/* Subheading */}
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            VeritasLaw has been defending the rights of individuals and
            businesses for over 20 years. We bring truth, strategy, and
            excellence to every case.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold text-navy font-semibold px-8 py-4 rounded hover:opacity-90 transition-opacity duration-200 text-center"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/practice-areas"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded hover:border-gold hover:text-gold transition-all duration-200 text-center"
            >
              Our Practice Areas
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "1,500+", label: "Cases Won" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-gold text-3xl font-bold">{stat.number}</p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

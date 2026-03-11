type PageBannerProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
}: PageBannerProps) {
  return (
    <section className="bg-navy py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 border border-gold rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border border-gold rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-gold" />
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            {eyebrow}
          </span>
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

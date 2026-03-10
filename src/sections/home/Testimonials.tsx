const testimonials = [
  {
    quote:
      "VeritasLaw handled my corporate dispute with incredible professionalism. They secured a result I never thought possible. I cannot recommend them highly enough.",
    name: "James Thornton",
    title: "CEO, Thornton Enterprises",
    initials: "JT",
  },
  {
    quote:
      "After a difficult divorce, I needed someone who truly cared. The team at VeritasLaw guided me through every step with compassion and expertise.",
    name: "Sarah Mitchell",
    title: "Private Client",
    initials: "SM",
  },
  {
    quote:
      "My immigration case seemed hopeless until VeritasLaw took it on. Within months, everything was resolved. They are truly the best in the business.",
    name: "Carlos Rivera",
    title: "Business Owner",
    initials: "CR",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-navy py-24 relative overflow-hidden">
      {/* Background Detail */}
      <div className="absolute top-0 left-0 w-64 h-64 border border-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-gold/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Testimonials
            </span>
            <div className="w-10 h-0.5 bg-gold" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Our clients are our greatest advocates. Here is what some of them
            have to say about working with VeritasLaw.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-gold/40 transition-all duration-300"
            >
              {/* Quote Mark */}
              <div className="text-gold text-6xl font-serif leading-none mb-4">
                "
              </div>

              {/* Quote Text */}
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

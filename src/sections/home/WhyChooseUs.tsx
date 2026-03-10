const reasons = [
  {
    icon: "⚖️",
    title: "Proven Track Record",
    description:
      "With over 1,500 cases won, our results speak for themselves. We bring a winning strategy to every case we take.",
  },
  {
    icon: "🛡️",
    title: "Client-First Approach",
    description:
      "You are never just a case number. We listen, understand, and fight for your unique situation with full dedication.",
  },
  {
    icon: "🔍",
    title: "Deep Legal Expertise",
    description:
      "Our attorneys specialize across multiple practice areas, ensuring you get the most qualified counsel for your case.",
  },
  {
    icon: "🤝",
    title: "Transparent Communication",
    description:
      "We keep you informed at every step. No legal jargon, no surprises — just clear, honest communication.",
  },
  {
    icon: "⏱️",
    title: "Available When You Need Us",
    description:
      "Legal issues don't follow business hours. Our team is available around the clock for urgent consultations.",
  },
  {
    icon: "🏆",
    title: "Award-Winning Firm",
    description:
      "Recognized by the American Bar Association and ranked among the top 10 law firms in New York for five consecutive years.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-offwhite py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Why VeritasLaw
            </span>
            <div className="w-10 h-0.5 bg-gold" />
          </div>
          <h2 className="text-dark text-4xl md:text-5xl font-bold mb-4">
            Why Clients Choose Us
          </h2>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine decades of legal experience with a genuine commitment to
            justice — delivering results that matter to you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-4xl mb-5">{reason.icon}</div>
              <h3 className="text-dark text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-200">
                {reason.title}
              </h3>
              <p className="text-dark/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

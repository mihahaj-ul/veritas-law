const values = [
  {
    icon: "⚖️",
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every case, ensuring our clients receive honest and transparent counsel.",
  },
  {
    icon: "🎯",
    title: "Excellence",
    description:
      "We pursue the best possible outcome in every case with relentless preparation, strategy, and attention to detail.",
  },
  {
    icon: "🤝",
    title: "Commitment",
    description:
      "From the first consultation to the final verdict, we are fully committed to our clients every step of the way.",
  },
];

const milestones = [
  { year: "2004", event: "VeritasLaw founded in New York City" },
  { year: "2008", event: "Expanded to corporate and immigration law" },
  { year: "2013", event: "Recognized by American Bar Association" },
  { year: "2017", event: "Opened second office in Los Angeles" },
  { year: "2021", event: "Ranked Top 10 Law Firm in New York" },
  { year: "2024", event: "Surpassed 1,500 cases won" },
];

export default function AboutContent() {
  return (
    <div className="bg-white">
      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-gold" />
                <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                  Our Story
                </span>
              </div>
              <h2 className="text-dark text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Two Decades of <br />
                <span className="text-navy">Fighting For Justice</span>
              </h2>
              <p className="text-dark/60 leading-relaxed mb-4">
                VeritasLaw was founded in 2004 by a group of passionate
                attorneys who believed that every person deserves exceptional
                legal representation regardless of the complexity of their case.
              </p>
              <p className="text-dark/60 leading-relaxed mb-4">
                Over two decades, we have grown from a small practice into one
                of New York's most respected law firms — but our founding
                principle has never changed. Truth and justice above all else.
              </p>
              <p className="text-dark/60 leading-relaxed">
                Today, our team of 24 specialized attorneys handles cases across
                five major practice areas, serving individuals, families, and
                corporations across the United States.
              </p>
            </div>

            {/* Right — Stats Card */}
            <div className="bg-navy rounded-lg p-10 grid grid-cols-2 gap-8">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "24", label: "Expert Attorneys" },
                { number: "1,500+", label: "Cases Won" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-gold text-4xl font-bold">{stat.number}</p>
                  <p className="text-white/60 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-offwhite py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                Our Values
              </span>
              <div className="w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="text-dark text-4xl md:text-5xl font-bold">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-5xl mb-5">{value.icon}</div>
                <h3 className="text-dark text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                Our Journey
              </span>
              <div className="w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="text-dark text-4xl md:text-5xl font-bold">
              Our Milestones
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/20 -translate-x-1/2" />
            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <div className="bg-offwhite rounded-lg px-6 py-4 inline-block shadow-sm">
                      <p className="text-gold font-bold text-lg">
                        {milestone.year}
                      </p>
                      <p className="text-dark/70 text-sm mt-1">
                        {milestone.event}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-md shrink-0 relative z-10" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Attorney } from "@/types";

const attorneys: Attorney[] = [
  {
    name: "Jonathan Hayes",
    title: "Founding Partner",
    specialization: "Criminal Law",
    initials: "JH",
    image: "",
  },
  {
    name: "Margaret Collins",
    title: "Senior Partner",
    specialization: "Family Law",
    initials: "MC",
    image: "",
  },
  {
    name: "David Kim",
    title: "Partner",
    specialization: "Corporate Law",
    initials: "DK",
    image: "",
  },
  {
    name: "Priya Sharma",
    title: "Partner",
    specialization: "Immigration Law",
    initials: "PS",
    image: "",
  },
  {
    name: "Robert Langley",
    title: "Associate Attorney",
    specialization: "Real Estate Law",
    initials: "RL",
    image: "",
  },
  {
    name: "Aisha Okafor",
    title: "Associate Attorney",
    specialization: "Employment Law",
    initials: "AO",
    image: "",
  },
];

const stats = [
  { number: "24", label: "Expert Attorneys" },
  { number: "8", label: "Practice Areas" },
  { number: "15+", label: "Bar Associations" },
  { number: "40+", label: "Awards Won" },
];

export default function AttorneysContent() {
  return (
    <div className="bg-white">
      {/* Stats Bar */}
      <div className="bg-offwhite border-b border-dark/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-navy text-3xl font-bold">{stat.number}</p>
                <p className="text-dark/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Attorneys Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                Our Team
              </span>
              <div className="w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="text-dark text-4xl md:text-5xl font-bold mb-4">
              Meet Our Attorneys
            </h2>
            <p className="text-dark/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Our team of dedicated legal professionals brings decades of
              combined experience and an unwavering commitment to your case.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney) => (
              <div
                key={attorney.name}
                className="group border border-dark/10 rounded-lg overflow-hidden hover:shadow-lg hover:border-gold transition-all duration-300"
              >
                {/* Avatar Area */}
                <div className="bg-navy h-52 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 border border-gold rounded-full translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 border border-gold rounded-full -translate-x-1/3 translate-y-1/3" />
                  </div>
                  <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center relative z-10">
                    <span className="text-navy text-3xl font-bold">
                      {attorney.initials}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-dark text-xl font-bold group-hover:text-navy transition-colors duration-200">
                    {attorney.name}
                  </h3>
                  <p className="text-gold text-sm font-semibold mt-1">
                    {attorney.title}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <p className="text-dark/60 text-sm">
                      {attorney.specialization}
                    </p>
                  </div>

                  <div className="border-t border-dark/10 mt-5 pt-5">
                    <a
                      href="/contact"
                      className="text-navy text-sm font-semibold hover:text-gold transition-colors duration-200"
                    >
                      Schedule Consultation →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join The Team CTA */}
      <section className="bg-offwhite py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Careers
            </span>
            <div className="w-10 h-0.5 bg-gold" />
          </div>
          <h2 className="text-dark text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-dark/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We are always looking for talented, passionate attorneys to join
            VeritasLaw. If you are committed to justice and excellence, we want
            to hear from you.
          </p>
          <a
            href="/contact"
            className="bg-navy text-white font-semibold px-8 py-4 rounded hover:opacity-90 transition-opacity duration-200 inline-block"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}

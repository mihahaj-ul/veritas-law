import Link from "next/link";

const practiceAreas = [
  {
    icon: "⚖️",
    title: "Criminal Law",
    description:
      "We provide aggressive and strategic defense for individuals facing criminal charges. From misdemeanors to serious felonies, we protect your rights and freedom at every stage of the legal process.",
    services: [
      "DUI & DWI Defense",
      "Drug Offenses",
      "White Collar Crime",
      "Appeals",
    ],
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    description:
      "We handle sensitive family matters with compassion and professionalism. Our attorneys guide you through difficult times while fiercely protecting your interests and those of your children.",
    services: [
      "Divorce & Separation",
      "Child Custody",
      "Adoption",
      "Prenuptial Agreements",
    ],
  },
  {
    icon: "🏢",
    title: "Corporate Law",
    description:
      "From startups to established enterprises, we provide comprehensive legal support for all your business needs. We help you build, protect, and grow your business with sound legal strategy.",
    services: [
      "Business Formation",
      "Contract Drafting",
      "Mergers & Acquisitions",
      "Compliance",
    ],
  },
  {
    icon: "✈️",
    title: "Immigration Law",
    description:
      "Navigating immigration law is complex and stressful. Our experienced immigration attorneys guide individuals and families through every step of the process with clarity and care.",
    services: [
      "Visa Applications",
      "Green Cards",
      "Citizenship",
      "Deportation Defense",
    ],
  },
  {
    icon: "🏠",
    title: "Real Estate Law",
    description:
      "Whether you are buying, selling, or developing property, our real estate attorneys ensure your transactions are legally sound and your investments are fully protected.",
    services: [
      "Property Transactions",
      "Lease Agreements",
      "Title Disputes",
      "Zoning Issues",
    ],
  },
  {
    icon: "💼",
    title: "Employment Law",
    description:
      "We represent both employees and employers in workplace legal matters. Our team ensures your rights are protected and your workplace disputes are resolved effectively.",
    services: [
      "Wrongful Termination",
      "Discrimination Claims",
      "Employment Contracts",
      "Harassment",
    ],
  },
];

export default function PracticeAreasContent() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-dark/60 text-lg leading-relaxed">
            At VeritasLaw, we offer comprehensive legal services across six
            major practice areas. Each department is led by a specialized senior
            attorney with decades of focused experience.
          </p>
        </div>

        {/* Practice Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {practiceAreas.map((area, index) => (
            <div
              key={area.title}
              className="border border-dark/10 rounded-lg p-8 hover:border-gold hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                {/* Icon + Number */}
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center text-2xl">
                    {area.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-dark text-xl font-bold group-hover:text-navy transition-colors duration-200">
                      {area.title}
                    </h3>
                    <span className="text-gold font-bold text-sm">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-dark/60 text-sm leading-relaxed mb-5">
                    {area.description}
                  </p>

                  {/* Services List */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {area.services.map((service) => (
                      <span
                        key={service}
                        className="bg-offwhite text-dark/70 text-xs px-3 py-1.5 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="text-gold text-sm font-semibold hover:underline"
                  >
                    Get Consultation →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-navy rounded-lg p-12 text-center">
          <h3 className="text-white text-3xl font-bold mb-4">
            Not Sure Which Area Covers Your Case?
          </h3>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Book a free 30-minute consultation and our team will point you in
            the right direction.
          </p>
          <Link
            href="/contact"
            className="bg-gold text-navy font-semibold px-8 py-4 rounded hover:opacity-90 transition-opacity duration-200 inline-block"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

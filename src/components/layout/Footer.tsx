import Link from "next/link";

const practiceAreas = [
  "Criminal Law",
  "Family Law",
  "Corporate Law",
  "Immigration Law",
  "Real Estate Law",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h2 className="text-gold text-2xl font-bold tracking-wide mb-4">
            VeritasLaw
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Committed to truth, justice, and excellence. We fight for your
            rights with integrity and expertise.
          </p>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Practice Areas
          </h3>
          <ul className="space-y-2">
            {practiceAreas.map((area) => (
              <li key={area}>
                <Link
                  href="/practice-areas"
                  className="text-sm text-white/70 hover:text-gold transition-colors duration-200"
                >
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>123 Justice Avenue, Suite 100</li>
            <li>New York, NY 10001</li>
            <li>
              <a
                href="tel:+12125550100"
                className="hover:text-gold transition-colors duration-200"
              >
                +1 (212) 555-0100
              </a>
            </li>
            <li>
              <a
                href="mailto:info@veritaslaw.com"
                className="hover:text-gold transition-colors duration-200"
              >
                info@veritaslaw.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} VeritasLaw. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-gold transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-gold transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

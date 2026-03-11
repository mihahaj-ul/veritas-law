"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: "📍",
    title: "Office Address",
    details: ["123 Justice Avenue, Suite 100", "New York, NY 10001"],
  },
  {
    icon: "📞",
    title: "Phone Number",
    details: ["+1 (212) 555-0100", "Mon - Fri, 9am - 6pm"],
  },
  {
    icon: "✉️",
    title: "Email Address",
    details: ["info@veritaslaw.com", "support@veritaslaw.com"],
  },
  {
    icon: "⏰",
    title: "Working Hours",
    details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 2pm"],
  },
];

export default function ContactContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Contact Info Cards */}
      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-dark font-bold text-sm uppercase tracking-wide mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail) => (
                  <p
                    key={detail}
                    className="text-dark/60 text-sm leading-relaxed"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-gold" />
                <span className="text-gold text-sm font-semibold uppercase tracking-widest">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-dark text-4xl font-bold mb-4">
                Book Your Free <br />
                <span className="text-navy">Consultation</span>
              </h2>
              <p className="text-dark/60 leading-relaxed mb-8">
                Fill out the form below and one of our attorneys will get back
                to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-offwhite border border-gold/30 rounded-lg p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-dark text-2xl font-bold mb-2">
                    Message Received
                  </h3>
                  <p className="text-dark/60">
                    Thank you, {formData.name}. We will contact you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-gold text-sm font-semibold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-dark text-sm font-semibold mb-2 block">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full border border-dark/20 rounded px-4 py-3 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-gold transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="text-dark text-sm font-semibold mb-2 block">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full border border-dark/20 rounded px-4 py-3 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-gold transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-dark text-sm font-semibold mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (212) 555-0100"
                        className="w-full border border-dark/20 rounded px-4 py-3 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-gold transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="text-dark text-sm font-semibold mb-2 block">
                        Practice Area
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-dark/20 rounded px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold transition-colors duration-200"
                      >
                        <option value="">Select an area</option>
                        <option value="criminal">Criminal Law</option>
                        <option value="family">Family Law</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="immigration">Immigration Law</option>
                        <option value="realestate">Real Estate Law</option>
                        <option value="employment">Employment Law</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-dark text-sm font-semibold mb-2 block">
                      Your Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your legal situation..."
                      rows={5}
                      className="w-full border border-dark/20 rounded px-4 py-3 text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-navy text-white font-semibold py-4 rounded hover:bg-gold hover:text-navy transition-all duration-200"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Right Side Info */}
            <div className="flex flex-col gap-8">
              {/* Map Placeholder */}
              <div className="bg-navy rounded-lg overflow-hidden flex-1 min-h-64 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 border border-gold rounded-full translate-x-1/3 -translate-y-1/3" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 border border-gold rounded-full -translate-x-1/3 translate-y-1/3" />
                </div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-4">📍</div>
                  <p className="text-white font-bold text-lg">VeritasLaw</p>
                  <p className="text-white/60 text-sm mt-1">
                    123 Justice Avenue, Suite 100
                  </p>
                  <p className="text-white/60 text-sm">New York, NY 10001</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block bg-gold text-navy text-sm font-semibold px-6 py-2.5 rounded hover:opacity-90 transition-opacity duration-200"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="border border-gold/30 rounded-lg p-6">
                <h3 className="text-dark font-bold text-lg mb-2">
                  🚨 Legal Emergency?
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed mb-4">
                  If you are facing an urgent legal situation outside of
                  business hours, our emergency line is available 24/7.
                </p>
                <a
                  href="tel:+12125550911"
                  className="text-gold font-bold text-lg hover:underline"
                >
                  +1 (212) 555-0911
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

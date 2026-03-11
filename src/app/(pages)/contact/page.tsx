import PageBanner from "@/components/ui/PageBanner";
import ContactContent from "@/sections/contact/ContactContent";

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Contact Us"
        title="Get In Touch"
        subtitle="Reach out today and let us fight for your rights. Your first consultation is completely free."
      />
      <ContactContent />
    </main>
  );
}

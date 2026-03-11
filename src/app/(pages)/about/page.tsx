import PageBanner from "@/components/ui/PageBanner";
import AboutContent from "@/sections/about/AboutContent";

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Who We Are"
        title="About VeritasLaw"
        subtitle="Two decades of fighting for justice, truth, and the rights of our clients."
      />
      <AboutContent />
    </main>
  );
}

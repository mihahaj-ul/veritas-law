import PageBanner from "@/components/ui/PageBanner";
import PracticeAreasContent from "@/sections/about/PracticeAreasContent";

export default function PracticeAreasPage() {
  return (
    <main>
      <PageBanner
        eyebrow="What We Do"
        title="Practice Areas"
        subtitle="Specialized legal expertise across six major areas of law — all under one roof."
      />
      <PracticeAreasContent />
    </main>
  );
}

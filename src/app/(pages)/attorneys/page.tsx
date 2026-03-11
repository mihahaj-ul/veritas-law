import PageBanner from "@/components/ui/PageBanner";
import AttorneysContent from "@/sections/attorneys/AttorneysContent";

export default function AttorneysPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Our People"
        title="Our Attorneys"
        subtitle="Meet the experienced legal professionals who will fight for your rights."
      />
      <AttorneysContent />
    </main>
  );
}

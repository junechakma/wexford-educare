import { AceternityNavbar } from "@/components/layout/AceternityNavbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AceternityNavbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

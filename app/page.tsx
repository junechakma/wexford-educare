import { AceternityNavbar } from "@/components/AceternityNavbar";
import { AceternityHero } from "@/components/AceternityHero";
import { AceternityWhyChooseUs } from "@/components/AceternityWhyChooseUs";
import { CourseCategories } from "@/components/CourseCategories";
import { TrendingCourses } from "@/components/TrendingCourses";
import { Partners } from "@/components/Partners";
import { AceternityTestimonials } from "@/components/AceternityTestimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <AceternityNavbar />
      <main>
        <AceternityHero />
        <AceternityWhyChooseUs />
        <CourseCategories />
        <TrendingCourses />
        <Partners />
        <AceternityTestimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

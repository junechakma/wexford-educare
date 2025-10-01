import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CourseCategories } from "@/components/CourseCategories";
import { TrendingCourses } from "@/components/TrendingCourses";
import { Partners } from "@/components/Partners";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <CourseCategories />
        <TrendingCourses />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

import { AceternityHero } from "@/components/home/AceternityHero";
import { AceternityWhyChooseUs } from "@/components/home/AceternityWhyChooseUs";
import { CourseCategories } from "@/components/home/CourseCategories";
import { TrendingCourses } from "@/components/home/TrendingCourses";
import { Partners } from "@/components/home/Partners";
import { AceternityTestimonials } from "@/components/home/AceternityTestimonials";

export default function Home() {
  return (
    <>
      <AceternityHero />
      <AceternityWhyChooseUs />
      <CourseCategories />
      <TrendingCourses />
      <Partners />
      <AceternityTestimonials />
    </>
  );
}

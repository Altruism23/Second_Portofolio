import HeaderServices from "@/components/our-services/header";
import Section1Services from "@/components/our-services/section1";
import Section2Services from "@/components/our-services/section2";
import TestimonialService from "@/components/our-services/testimonials";

export default function Page() {
  return (
    <div>
      <HeaderServices />
      <Section1Services />
      <Section2Services />
      <TestimonialService />
    </div>
  );
}

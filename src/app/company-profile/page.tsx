import Breaker from "@/components/company-profile/breaker";
import Headerabout from "@/components/company-profile/headerabout";
import Section1About from "@/components/company-profile/section1";
import Section2About from "@/components/company-profile/section2";
import Section3About from "@/components/company-profile/section3";
import VisiMisi from "@/components/company-profile/visimisi";

export default function Page() {
  return (
    <div>
      <Headerabout />
      <Section1About />
      <Breaker />
      <Section2About />
      <VisiMisi />
      <Section3About />
    </div>
  );
}

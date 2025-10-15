import HeroSection from "./components/home/HeroSection/HeroSection";
import AboutSection from "./components/home/AboutSection/AboutSection";
import ServicesSecton from "./components/home/ServicesSection/ServicesSection";
import TestimonialsSection from "./components/home/TestimonialsSection/TestimonialsSection";
import MenuTabs from "./components/MenuTabs/MenuTabs";
import PromoSection from "./components/home/PromoSection/PromoSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      {/* <AboutSection/> */}
      <PromoSection/>
      <ServicesSecton/>
      <TestimonialsSection/>
      {/* <MenuTabs/> */}
    </div>
  );
}

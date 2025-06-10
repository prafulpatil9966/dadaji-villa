"use client"
import WhyChooseUS from "./WhyChooseUS/WhyChooseUS";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutInfo from "./AboutInfo/AboutInfo";
import PromoVideo from "./PromoVideo/PromoVideo";

export default function About() {
    return (
        <div className="bg-[#f5eee7]">
          <AboutHeader />
          <AboutInfo />
          <PromoVideo/>
          <WhyChooseUS />
        </div>
    )
}
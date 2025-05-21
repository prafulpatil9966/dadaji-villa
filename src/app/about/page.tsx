"use client"
import WhyChooseUS from "./WhyChooseUS/WhyChooseUS";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutInfo from "./AboutInfo/AboutInfo";

export default function About() {
    return (
        <div className="bg-[#f5eee7]">
          <AboutHeader />
          <AboutInfo />
          <WhyChooseUS />
        </div>
    )
}
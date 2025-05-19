"use client"
import { useRouter } from "next/navigation"
import WhyChooseUS from "./WhyChooseUS/WhyChooseUS";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutInfo from "./AboutInfo/AboutInfo";
import TestimonialsSection from "../components/home/TestimonialsSection/TestimonialsSection";

export default function About() {
    return (
        <div className="bg-[#f5eee7]">
          <AboutHeader />
          <AboutInfo />
          <WhyChooseUS />
        </div>
    )
}
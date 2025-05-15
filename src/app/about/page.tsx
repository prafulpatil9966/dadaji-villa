"use client"
import { useRouter } from "next/navigation"
import WhyChooseUS from "./WhyChooseUS/WhyChooseUS";
import AboutHeader from "./AboutHeader/AboutHeader";

export default function About() {
    return (
        <div className="bg-[#f5eee7]">
          <AboutHeader />
          <WhyChooseUS />
        </div>
    )
}
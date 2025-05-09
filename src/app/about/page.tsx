"use client"
import { useRouter } from "next/navigation"
import WhyChooseUS from "./WhyChooseUS/WhyChooseUS";

export default function About() {
    return (
        <div className="mt-[90px] bg-[#f5eee7]">
            <h1>About Us</h1>
          <WhyChooseUS />
        </div>
    )
}
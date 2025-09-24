"use client";
import { useState } from "react";
import WeatherWidget from "../../WeatherWidget/WeatherWidget";

type WeatherCondition = "sunny" | "cloudy" | "rainy" | "other";

export default function FunSection() {
  const [weatherCondition, setWeatherCondition] = useState<WeatherCondition>("other");

  // Map weather condition → video path
  const weatherVideos: Record<WeatherCondition, string> = {
    sunny: "/weather/Clear.mp4",
    cloudy: "/weather/Clouds.mp4",
    rainy: "/weather/Rain.mp4",
    other: "/weather/Clear.mp4",
  };

  const videoSrc = weatherVideos[weatherCondition];

  return (
    <>
      <section className="relative py-10 md:py-20 " id="about">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoSrc}
          autoPlay
          muted
          loop
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            BEFORE YOU PACK...
          </h2>
          <div className="text-xs md:text-sm uppercase tracking-widest text-gray-200 mt-4">
            Here’s Today’s Weather at Dadaji Villa
          </div>
        </div>

        <div className="relative z-20 container px-5 md:px-0 mx-auto flex justify-center">
          <WeatherWidget onWeatherChange={setWeatherCondition} />
        </div>
      </section>

      <div className="hidden sm:block relative mx-auto -my-[30px] w-[1.5px] h-[60px] border-l-[1.5px] border-[#91765a] z-[10] opacity-100"></div>
    </>
  );
}

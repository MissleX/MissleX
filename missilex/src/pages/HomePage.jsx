
import React from "react";
import HeroSection from "@/components/HeroSection";
import MissionCards from "@/components/MissionCard";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <HeroSection />
      <MissionCards />
      <Footer />
    </div>
  );
}

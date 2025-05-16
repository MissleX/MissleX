
import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-8 text-center">
      <h1 className="text-5xl font-bold mb-4">MissileX Aerospace & Defense</h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
        Innovating Bangladesh’s defense with stealth drones, radar jammers, and modern air-defense systems.
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-xl shadow-xl">
        Explore Projects
      </Button>
    </section>
  );
}

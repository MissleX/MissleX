
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, ShieldCheck, Radar } from "lucide-react";

export default function MissionCards() {
  return (
    <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <Card className="bg-gray-900 text-white border-gray-700">
        <CardContent className="p-6">
          <Rocket className="h-12 w-12 mb-4 text-blue-400" />
          <h2 className="text-2xl font-semibold mb-2">Stealth Drones</h2>
          <p className="text-gray-400">
            AI-powered UAVs with radar-absorbing surfaces and strike capabilities.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gray-900 text-white border-gray-700">
        <CardContent className="p-6">
          <Radar className="h-12 w-12 mb-4 text-green-400" />
          <h2 className="text-2xl font-semibold mb-2">Radar Jamming</h2>
          <p className="text-gray-400">
            Electronic warfare systems to disrupt enemy radar signals.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gray-900 text-white border-gray-700">
        <CardContent className="p-6">
          <ShieldCheck className="h-12 w-12 mb-4 text-yellow-400" />
          <h2 className="text-2xl font-semibold mb-2">Mini Air Defense</h2>
          <p className="text-gray-400">
            Short-range defense inspired by the S-400 to intercept threats.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

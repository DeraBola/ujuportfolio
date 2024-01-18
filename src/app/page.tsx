"use client";

import Banner from "@/components/Banner/Banner";
import Service from "@/components/Service/Service";
import ClientReview from "@/components/clientReview/ClientReview";
import { useRef, useState } from "react";

export default function Home () {

  return (
    <main className="flex min-h-screen flex-col items-center justify-betweenw w-full">
      <Banner />
      <Service />
      <ClientReview />
    </main>
  );
}

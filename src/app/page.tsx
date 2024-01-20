"use client";

import Banner from "@/components/Banner/Banner";
import Service from "@/components/Service/Service";
import AboutUs from "@/components/aboutUs/AboutUs";
import ClientReview from "@/components/clientReview/ClientReview";
import FollowMe from "@/components/followMe/FollowMe";

export default function Home () {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full">
      <Banner />
      <Service />
      <AboutUs />
      <ClientReview />
      <FollowMe />
    </main>
  );
}

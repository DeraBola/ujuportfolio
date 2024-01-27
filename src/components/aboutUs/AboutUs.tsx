import React from "react";
import { FirstImage } from "@/assets";
import Image from "next/image";

function AboutUs () {
  return (
    <section id="about" className="mt-14 px-[6.22vw] text-center mb-36 lg:mb-16 flex flex-col item-center justify-center gap-3 lg:gap-10">
      <p className=" lg:text-4xl text-xl font-bold text-[#070403]">ABOUT US</p>
      <div className="flex lg:flex-row flex-col gap-6 items-start justify-start ">
        <div className="bg-[#080808] p-7 lg:w-1/2 bg-opacity-[70%] w-full">
          <Image src={FirstImage} alt="" />
        </div>
        <div className="flex flex-col text-[#070403] gap-4 w-full lg:w-1/2 items-start justify-start">
          <p className="lg:text-xl text-base font-normal">
                The Lifestyle Brand Consult Agency – TLBC Agency is a Boutique Public Relations and Brand Communications Agency that Strategically and Creatively elevates Brand image. We are dedicated to creating awareness and visibility that drives sustainability for your brand image through strategic communications and creative storytelling with compelling narratives that resonate with your Public.</p>
          <div className="flex flex-col">
            <p className="lg:text-xl text-base font-bold">Why Choose Us? </p>
            <p className="lg:text-xl text-base font-normal">
                We Understand the importance of effective communication, we blend Creativity with Strategy to deliver results. From impactful campaigns to successful product launch, Consultancy and advisory, to Digital media engagement and increase in share of voice, we help diverse clients achieve their communication goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

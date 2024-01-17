"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons/Icons";
import { flowerImage } from "@/assets";
import Image from "next/image";

const reviews = [
  {
    title: "WHAT CUSTOMERS ARE SAYING",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget vulputate. Odio molestie ac tortor pellentesque elit congue.  Sapien blandit nunc dictum praesent vel auctor. Tempus, quis aliquet tortor aliquet sit at at."
  },
  {
    title: "WHAT CUSTOMERS ARE SAYING",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget vulputate. Odio molestie ac tortor pellentesque elit congue.  Sapien blandit nunc dictum praesent vel auctor."
  },
  {
    title: "WHAT CUSTOMERS ARE SAYING",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget vulputate. Bkjbcoiwevh weuf8230-fyh bjciwugcr."
  },
];

function ClientReview () {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className=" relative w-full" >
      <div className="">
        <Image src={flowerImage} alt="flower background" className="bg-cover" />
      </div>
      <div className="flex px-[6.22vw] flex-col absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-[84%] items-center gap-8 justify-center h-full ">
        <div className="ml-auto rounded-full p-2 mb-4 border border-[#412626] cursor-pointer" onClick={nextSlide}>
          <Icons.arrowRight />
        </div>
        <p className="text-black font-bold text-2xl">{reviews[currentSlide].title}</p>
        <p className="text-base text-black font-meduim">{reviews[currentSlide].content}</p>
        <div className="mr-auto mt-6 rounded-full p-2 border border-[#412626] cursor-pointer" onClick={goToPrevSlide}>
          <Icons.arrowLeft />
        </div>
      </div>
    </section>
  );
}

export default ClientReview;

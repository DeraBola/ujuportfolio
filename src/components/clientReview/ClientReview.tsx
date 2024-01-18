"use client";

import React, { useRef, useState } from "react";
import { Icons } from "@/components/Icons/Icons";
import { flowerImage } from "@/assets";
import Image from "next/image";
import { fadeUp1, fadeUp2 } from "@/utils/framer-motion-variants";
import { motion } from "framer-motion";

const reviews = [
  {
    title: "WHAT CUSTOMERS ARE SAYING",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget vulputate. Odio molestie ac tortor pellentesque elit congue.  Sapien blandit nunc dictum praesent vel auctor. Tempus, quis aliquet tortor aliquet sit at at.",
  },
  {
    title: "WHAT CUSTOMERS ARE SAYING",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget vulputate. Odio molestie ac tortor pellentesque elit congue.  Sapien blandit nunc dictum praesent vel auctor.",
  },
  {
    title: "WHAT CUSTOMERS ARE SAYING",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  my contact    odio eget sollicitudin tincidunt eget vulputate. Bkjbcoiwevh weuf8230-fyh bjciwugcr.",
  },
];

function ClientReview () {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === reviews.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className=" relative w-full">
      <div className="">
        <Image src={flowerImage} alt="flower background" className="bg-cover" />
      </div>
      {reviews.map((review, index) => (
        <div
          className={`${
            currentSlide === index ? "block" : "hidden"
          } flex px-[6.22vw] animate-fade flex-col absolute top-1/2 -translate-y-1/2 bg-white bg-opacity-[84%] items-center gap-8 justify-center h-full `}
          key={index}
        >
          <div
            className="ml-auto rounded-full p-2 mb-4 border border-[#412626] cursor-pointer"
            onClick={nextSlide}
          >
            <Icons.arrowRight />
          </div>
          <motion.p
            variants={fadeUp1}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="animate-fade text-black font-bold text-2xl"
          >
            {review.title}
          </motion.p>
          <motion.p
            variants={fadeUp2}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="animate-fade text-base text-black font-meduim"
          >
            {review.content}
          </motion.p>
          <div
            className="mr-auto mt-6 rounded-full p-2 border border-[#412626] cursor-pointer"
            onClick={goToPrevSlide}
          >
            <Icons.arrowLeft />
          </div>
        </div>
      ))}
    </section>
  );
}

export default ClientReview;

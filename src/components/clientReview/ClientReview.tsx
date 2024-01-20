"use client";

import React, { useRef, useState } from "react";
import { Icons } from "@/components/Icons/Icons";
import { flowerImage } from "@/assets";
import Image from "next/image";
import { fadeUp1, fadeUp2 } from "@/utils/framer-motion-variants";
import { motion } from "framer-motion";

const reviews = [
  {
    title: "Aesthetic Excellence and Professional Advice",
    content:
      "This lifestyle brand and consultancy company truly stands out for its commitment to excellence. The products they offer are not only visually stunning but also well-crafted and durable. The consultancy services provided valuable insights that helped me make informed decisions about my lifestyle. The team's professionalism and attention to detail make them a top choice for anyone seeking a holistic approach to personal development.",
    name: "NGO"
  },
  {
    title: "Exceptional Service, Enduring Style",
    content:
      "From the moment I engaged with this consultancy company, I was met with exceptional service and expertise. The lifestyle consultants demonstrated a deep understanding of my needs and provided practical advice that has had a lasting impact. The brand's products are not just about style; they exude quality and durability. I've found a reliable partner for enhancing my lifestyle, and I can't recommend them enough. A perfect blend of sophistication and substance!",
    name: "FMCG"
  },
  {
    title: "Transformative Experience",
    content:
      "I cannot express how grateful I am for the incredible support and guidance provided by this consultancy company. Their lifestyle experts helped me redefine my goals and aspirations, leading to a more fulfilling life. Additionally, their range of products reflects a perfect blend of sophistication and functionality. Every purchase feels like an investment in my well-being. Kudos to the team for their dedication to making a positive impact!",
    name: "Sports and Entertainment"
  },
  {
    title: "Exceptional Guidance and Stylish Products",
    content:
      "I recently engaged with this lifestyle brand and consultancy company, and I am beyond impressed with their services. The consultancy team provided insightful advice that truly made a positive impact on my lifestyle choices. Moreover, the products they offer are not only stylish but also of exceptional quality. It's clear that this company values both aesthetics and substance. Highly recommended for anyone looking to elevate their lifestyle!",
    name: "Governance and Corporate Brands"
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
    <section  className="lg:h-auto h-[25rem] lg:mb-0 mb-10 relative w-full">
      <div className="hidden lg:block ">
        <Image src={flowerImage} alt="flower background" className="bg-cover w-full" />
      </div>
      <div className="lg:px-[6.22vw] flex items-center justify-center flex-col w-full lbg-white  backdrop-filter lg:rounded-none rounded-lg lg:border-none border border-pink-400 backdrop-blur-sm bg-opacity-10 animate-fade absolute top-1/2 -translate-y-1/2">
        <p className="text-black font-bold text-base mb-4 mt-6 lg:text-3xl">What Our Customers Are Saying</p>
        {reviews.map((review, index) => (
          <div
            className={`${
              currentSlide === index ? "block" : "hidden"
            } flex px-6 flex-col items-center gap-3 lg:gap-8 justify-center`}
            id="reviews"
            key={index}
          >
            <div
              className="ml-auto rounded-full p-2 mb-2 lg:mb-4 border border-[#412626] cursor-pointer"
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
              className="animate-fade text-black font-bold text-base lg:text-xl"
            >
              {review.title}
            </motion.p>
            <motion.p
              variants={fadeUp2}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="animate-fade text-sm w-full  lg:max-w-[800px] lg:text-base text-black font-meduim"
            >
              {review.content}
            </motion.p>
            <motion.p
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="animate-fade text-black font-bold text-sm lg:text-base"
            >
              {review.name}
            </motion.p>
            <div
              className="mr-auto mt-6 mb-5 lg:mb-0 rounded-full p-2 border border-[#412626] cursor-pointer"
              onClick={goToPrevSlide}
            >
              <Icons.arrowLeft />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientReview;

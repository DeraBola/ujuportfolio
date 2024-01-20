"use client";

import { DummyBanner } from "@/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Icons } from "@/components/Icons/Icons";
import {
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
  hiddenMask,
  visibleMask,
} from "@/utils/framer-motion-variants";
import { motion } from "framer-motion";

export default function Banner () {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const scrollRef = useRef(null);

  return (
    <section
      className="lg:mt-[5.5rem] mt-[5.4rem] flex items-center justify-center bg-pink-600 bg-opacity-[63%] rounded-bl-lg w-full"
      id="home"
    >
      <div className="lg:px-[8vw] px-3 py-10 w-full lg:w-full flex justify-between lg:flex-row flex-col items-center  ">
        <motion.div
          initial={false}
          animate={
            isLoaded
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className=""
        >
          <Image
            src={DummyBanner}
            className="w-full h-full"
            alt="banner"
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
        <div className="flex lg:ml-[2%] flex-col lg:mt-0 mt-6 items-center lg:justify-center justify-start gap-5 text-center w-full lg:w-[50rem]">
          <motion.p
            variants={fadeUp1}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-white font-bold text-2xl lg:text-4xl"
          >
            What We Do
          </motion.p>
          <motion.p
            variants={fadeUp2}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-white font-semibold text-base lg:text-lg"
          >
            Welcome to The Lifestyle Brand Consult Agency – TLBC Agency, your
            partner in Strategic Public Relations and Brand Communications.
            People are doing great things in small ways, small things in great
            ways, and great things in great ways. We believe in telling
            compelling stories and elevating your Brand story. We create
            communications strategies, that create visibility and bridge the gap
            between brands and their targets.
          </motion.p>
          <motion.button
            variants={fadeUp3}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-black text-opacity-[57%] bg-white bg-opacity-[49%] py-4 px-16 rounded-lg hover:bg-pink-600 hover:text-white  hover:!scale-110 transition-all"
          >
            Let’s Chat
          </motion.button>
          <motion.div
            variants={fadeUp4}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="flex items-center justify-center gap-5"
          >
            <Icons.google />
            <Icons.facebook />
            <Icons.instagram />
            <Icons.twitter />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

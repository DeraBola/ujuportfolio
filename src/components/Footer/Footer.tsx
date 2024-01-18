"use client";

import { firstLady, fourthLady, secondLady, thirdLady } from "@/assets";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  appear,
  appear2,
  appear3,
  appear4,
  fadeUp2,
  fadeUp3,
  fadeUp4,
} from "@/utils/framer-motion-variants";

function Footer () {
  const scrollRef = useRef(null);

  return (
    <footer className="w-full flex pt-10 flex-col bg-pink-500 bg-opacity-[35%] items-center justify-center">
      <p className="text-white text-2xl font-bold ">Follow me @BELLAADNDRV</p>
      <div className="flex gap-12 px-36 w-full mt-10 ">
        <motion.div
          variants={appear}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="hover:scale-110 transition-all cursor-pointer"
        >
          <Image src={firstLady} alt="first lady" />
        </motion.div>
        <motion.div
          variants={appear2}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="transform translate-y-32 hover:scale-110 transition-all cursor-pointer"
        >
          <Image src={secondLady} alt="second lady" />
        </motion.div>
        <motion.div
          variants={appear4}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="transform translate-y-52 hover:scale-110 transition-all cursor-pointer"
        >
          <Image src={thirdLady} alt="third lady" />
        </motion.div>
        <motion.div
          variants={appear3}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="transform translate-y-40 hover:scale-110 transition-all cursor-pointer"
        >
          <Image src={thirdLady} alt="first lady" />
        </motion.div>
        <motion.div
          variants={appear}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="hover:scale-110 transition-all cursor-pointer"
        >
          {" "}
          <Image src={fourthLady} alt="first lady" />
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

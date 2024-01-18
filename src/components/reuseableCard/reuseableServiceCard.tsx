"use client";

import { fade } from "@/utils/framer-motion-variants";
import React, { ReactNode, useRef } from "react";
import { motion } from "framer-motion";

interface ReuseableCardProps {
  text1: string;
  text2: string;
}

function ReusableCardServiceCard ({ text1, text2 }: ReuseableCardProps) {
  const scrollRef = useRef(null);

  return (
    <motion.div
      variants={fade}
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      ref={scrollRef}
      className="bg-white rounded-lg p-11"
    >
      <div className="flex flex-col items-start justify-start gap-8">
        <p className="text-2xl font-bold text-black ">{text1}</p>
        <p className="lg:text-xl text-xs text-black font-normal">{text2}</p>
        <button className="text-black bg-pink-400 bg-opacity-[47%] py-4 px-16 rounded-lg hover:scale-110 transition-all">
          Contact me
        </button>
      </div>
    </motion.div>
  );
}

export default ReusableCardServiceCard;

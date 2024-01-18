"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  fadeUp1,
  hiddenMask_,
  visibleMask_,
} from "@/utils/framer-motion-variants";
import Image from "next/image";

interface ReuseableCardProps {
  text1: string;
  text2: string;
  img?: string;
  switchCard: boolean;
}

function ReusableCard ({
  text1,
  text2,
  switchCard = true,
  img,
}: ReuseableCardProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const scrollRef = useRef(null);

  return (
    <div
      className={`${
        switchCard ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex flex-col gap-12 font-sans items-center justify-center text-start bg-white`}
    >
      <motion.div
        initial={false}
        animate={
          isLoaded
            ? { WebkitMaskImage: visibleMask_, maskImage: visibleMask_ }
            : { WebkitMaskImage: hiddenMask_, maskImage: hiddenMask_ }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="bg-pink-500 p-7 bg-opacity-[35%] w-full"
      >
        {img && (
          <Image src={img && img} onLoad={() => setIsLoaded(true)} alt="" />
        )}
      </motion.div>
      <div className="flex  flex-col items-center justify-center">
        <motion.p
          variants={fadeUp1}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-2xl font-bold text-black "
        >
          {text1}
        </motion.p>
        <motion.p
          variants={fadeUp1}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="lg:text-xl text-xs text-black font-normal"
        >
          {text2}
        </motion.p>
      </div>
    </div>
  );
}

export default ReusableCard;

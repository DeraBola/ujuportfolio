"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  fadeUp1,
  fadeUp2,
  fadeUp3,
  fadeUp4,
  hiddenMask_,
  visibleMask_,
} from "@/utils/framer-motion-variants";
import Image from "next/image";

interface ReuseableCardProps {
  text1: string;
  text2: string;
  img?: string;
  switchCard: boolean;
  isList?: boolean;
}

function ReusableCard ({
  text1,
  text2,
  switchCard = true,
  img,
  isList,
}: ReuseableCardProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const scrollRef = useRef(null);

  return (
    <div
      className={`${
        switchCard ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex flex-col gap-6 lg:gap-12 font-sans items-center justify-center text-center bg-white overflow-x-hidden`}
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
        className="bg-pink-500 p-7 lg:w-1/2 bg-opacity-[35%] w-full"
      >
        {img && (
          <Image src={img && img} onLoad={() => setIsLoaded(true)} alt="" />
        )}
      </motion.div>

      <div className="w-full lg:w-1/2">
        {isList ? (
          <ol className="w-[100%] list-disc">
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl text-left"
            >
              Public Relations Consultancy
            </motion.li>
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="my-2 text-xl text-left"
            >
              Strategic Communications
            </motion.li>
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl text-left"
            >
              Personal Branding
            </motion.li>
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl text-left"
            >
              Corporate Branding & Executive Profiling
            </motion.li>
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="my-2 text-xl text-left"
            >
              Digital Media & Media Relations
            </motion.li>
            <motion.li
              variants={fadeUp2}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl text-left"
            >
              Crisis and Reputation Management
            </motion.li>
            <motion.li
              variants={fadeUp3}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl text-left"
            >
              Content Development and Campaign Management
            </motion.li>
            <motion.li
              variants={fadeUp4}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="my-2 text-xl text-left"
            >
              Events – Corporate Event and Stakeholders Engagement
            </motion.li>
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl text-left"
            >
              Public Relations Consultancy
            </motion.li>
          </ol>
        ) : (
          <div className="flex  flex-col lg:items-start items-center justify-center">
            <motion.p
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-4xl font-bold mb-3 text-black "
            >
              {text1}
            </motion.p>
            <motion.p
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="lg:text-2xl text-left mt-3 text-lg text-black font-normal"
            >
              {text2}
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReusableCard;

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
  text3?: string;
  img?: string;
  switchCard: boolean;
  isList?: boolean;
}

function ReusableCard ({
  text1,
  text2,
  text3,
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
        className="bg-[#4d423d] bg-opacity-[70%] p-7 lg:w-1/2 w-full"
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
              className="text-xl flex items-center justify-start text-left"
            >
              <div className="rounded-full bg-[#4d423d] mr-3 hover:translate-x-2 h-3 w-3 lg:h-6 lg:w-6"></div> <p className="text-base lg:text-lg"> Public Relations Consultancy</p>
            </motion.li>
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="my-2 flex items-center justify-start text-xl text-left"
            >
              <div className="rounded-full bg-[#4d423d] mr-3 hover:translate-x-2 h-3 w-3 lg:h-6 lg:w-6"></div>
              <p className="text-base font-normal lg:text-lg">Strategic Communications</p>
            </motion.li>
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl flex items-center justify-start text-left"
            >
              <div className="rounded-full bg-[#4d423d] mr-3 hover:translate-x-2 h-3 w-3 lg:h-6 lg:w-6"></div>
              <p className="text-base font-normal lg:text-lg">Personal Branding</p>
            </motion.li>
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl mt-2 flex items-center justify-start text-left"
            >
              <div className="rounded-full bg-[#4d423d] mr-3 hover:translate-x-2 w-3 h-3 lg:h-6 lg:w-6"></div>
              <p className="text-base font-normal lg:text-lg"> Corporate Branding & Executive Profiling</p>
            </motion.li>
            <motion.li
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="my-2 text-xl flex items-center justify-start text-left"
            >
              <div className="rounded-full bg-[#4d423d] mr-3 hover:translate-x-2 h-3 w-3 lg:h-6 lg:w-6"></div>
              <p className="text-base font-normal lg:text-lg"> Digital Media & Media Relations</p>
            </motion.li>
            <motion.li
              variants={fadeUp2}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl flex items-center justify-start text-left"
            >
              <div className="rounded-full bg-[#4d423d] mr-3 hover:translate-x-2 w-3 h-3 lg:h-6 lg:w-6"></div>
              <p className="text-base font-normal lg:text-lg">Crisis and Reputation Management</p>
            </motion.li>
            <motion.li
              variants={fadeUp3}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="text-xl flex items-center justify-start text-left"
            >
              <div className="rounded-full mt-2 bg-[#4d423d] hover:translate-x-2 mr-3 w-3 h-3 lg:h-6 lg:w-6"></div>
              <p className="text-base  font-normal lg:text-lg">Content Development and Campaign Management</p>
            </motion.li>
            <motion.li
              variants={fadeUp4}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="my-2 flex items-center justify-start text-xl text-left"
            >
              <div className="rounded-full bg-[#4d423d] mr-3 hover:translate-x-2 h-3 w-3 lg:h-6 lg:w-6"></div>
              <p className="text-base font-normal lg:text-lg"> Events – Corporate Event and Stakeholders Engagement</p>
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
              className="lg:text-4xl text-2xl font-bold mb-3 text-[#070403] "
            >
              {text1}
            </motion.p>
            <motion.p
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="lg:text-2xl text-left mt-3 text-lg text-[#070403] font-normal"
            >
              {text2}
            </motion.p>
            <motion.p
              variants={fadeUp1}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="lg:text-2xl text-left mt-3 text-lg text-[#070403] font-normal"
            >
              {text3}
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReusableCard;

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
    <section className="lg:mt-[5.5rem] mt-16 flex items-center justify-center bg-pink-600 bg-opacity-[63%] rounded-bl-lg w-full">
      <div className="lg:px-[10vw] px-3 py-10 w-60 lg:w-full flex lg:flex-row flex-col items-center  ">
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
        <div className="flex flex-col lg:mt-0 mt-6 items-center justify-start gap-5 text-center w-full lg:w-[50rem]">
          <motion.p
            variants={fadeUp1}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-white font-bold text-2xl"
          >
            ABOUT ME
          </motion.p>
          <motion.p
            variants={fadeUp2}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-white font-semibold text-base"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas
            facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis
            et. Pellentesque amet tristique rhoncu, donec a euismod velit.
            Hendrerit molestie fermentum odi euismod.
          </motion.p>
          <motion.button
            variants={fadeUp3}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-black text-opacity-[57%] bg-white bg-opacity-[49%] py-4 px-16 rounded-lg hover:!scale-110 transition-all"
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

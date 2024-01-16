
import { DummyBanner } from "@/assets";
import Image from "next/image";
import React from "react";
import { Icons } from "@/components/Icons/Icons";

function Banner () {
  return (
    <section className="mt-16 bg-pink-600 bg-opacity-[63%] rounded-bl-lg w-full">
      <div className="px-[10vw] py-10 w-full flex gap-[7.56rem] items-center">
        <div className="">
          <Image src={DummyBanner} className="w-full h-full" alt="banner" />
        </div>
        <div className="flex flex-col items-center justify-start gap-5 text-center w-[50rem]">
          <p className="text-white font-bold text-2xl">ABOUT ME</p>
          <p className="text-white font-semibold text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod.
          </p>
          <button className="text-black text-opacity-[57%] bg-white bg-opacity-[49%] py-4 px-16 rounded-lg">
            Let’s Chat
          </button>
          <div className="flex items-center justify-center gap-5">
            <Icons.google />
            <Icons.facebook />
            <Icons.instagram />
            <Icons.twitter />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

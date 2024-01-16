
import { DummyBanner } from "@/assets";
import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="mt-16 bg-pink-600 rounded-bl-lg w-full">
      <div className="px-[8.99vw] w-full flex  gap-[8.56rem] items-center">
        <div className=" bg-green-500">
          <Image src={DummyBanner} className="w-full bg-cover" alt="banner" />
        </div>
        <div className="bg-yellow-300 flex flex-col items-center text-center">
          <p className="text-white font-bold text-4xl">ABOUT ME</p>
          <p className="text-white font-bold text-4xl">>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;

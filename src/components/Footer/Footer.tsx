import { firstLady, fourthLady, secondLady, thirdLady } from "@/assets";
import React from "react";
import Image from "next/image";
import { Icons } from "@/components/Icons/Icons";

function Footer () {
  return (
    <footer className="w-full flex pt-10 flex-col bg-pink-500 bg-opacity-[35%] items-center justify-center">
      <p className="text-white text-2xl font-bold ">Follow me @BELLAADNDRV</p>
      <div className="flex gap-12 px-36 w-full mt-10 ">
        <div className="">
          <Image src={firstLady} alt="first lady" />
        </div>
        <div className="transform translate-y-32">
          <Image src={secondLady} alt="second lady" />
        </div>
        <div className="transform translate-y-52">
          <Image src={thirdLady} alt="third lady" />
        </div>
        <div className="transform translate-y-40">
          <Image src={thirdLady} alt="first lady" />
        </div>
        <div> <Image src={fourthLady} alt="first lady" /></div>
      </div>
    </footer>
  );
}

export default Footer;

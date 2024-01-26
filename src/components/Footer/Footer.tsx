import React from "react";
import { Icons } from "@/components/Icons/Icons";

export default function Footer () {
  const currentDate = new Date().getFullYear();

  return (
    <div className="lg:mt-80 mt-20 bg-[#372b25] bg-opacity-[80%] flex flex-col px-2 justify-center items-center">
      <div className="w-full lg:hidden  block mb-8 px-5 cursor-pointer flex-col items-center justify-between">
        <div className="flex items-start w-full justify-between mt-5 lg:mt-10">
          <div className="lg:block hidden flex-col items-start justify-start">
            <p className="text-base mb-4 text-white font-normal">Get familiar</p>
            <div className="flex items-center justify-start gap-8">
              <Icons.twitter />
              <Icons.google />
              <Icons.instagram />
              <Icons.facebook />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <p className="text-white font-medium text-xl lg:text-2xl">Company</p>
            <div className="flex flex-col items-start gap-4 justify-start">
              <p className="lg:text-base text-xs font-sans font-normal text-white">About Us</p>
              <p className="lg:text-base text-xs font-sans font-normal text-white">Services</p>
              <p className="lg:text-base text-xs  font-sans font-normal text-white">Terms and Conditions</p>
              <p className="lg:text-base text-xs  font-sans font-normal text-white">Privacy policy</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <p className="text-white font-medium text-xl lg:text-2xl">Contact</p>
            <div className="flex flex-col items-start gap-4 justify-start">
              <p className="lg:text-base text-xs  font-sans font-normal text-white">useabacus@gmail.com</p>
              <p className="lg:text-base text-xs  font-sans font-normal text-white">+234813123456</p>
              <p className="lg:text-base text-xs  font-sans font-normal text-white">Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
        <div className="lg:hidden block flex-col items-start justify-start">
          <p className="text-base mt-4 mb-4 text-white font-normal">Get familiar</p>
          <div className="flex items-center justify-start gap-8">
            <Icons.facebook />
            <Icons.google />
            <Icons.instagram />
            <Icons.twitter />
          </div>
        </div>
      </div>
      <div className="flex items-center text-sm lg:text-xl gap-2 justify-center w-full">
        <p className="text-white font-semibold">
        &copy; {currentDate} All rights reserved | Made with
        </p>
        <div className=""><Icons.love /> </div>
        <p  className="text-white  font-semibold">  by derabola x rogue-codes. </p>
      </div>
    </div>
  );
}

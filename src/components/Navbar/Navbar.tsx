"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/Icons/Icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="top-0 px-[6.22vw] z-[99999990] flex bg-pink-500 justify-between items-center bg-opacity-[42%] fixed py-4 w-full">
      <div className="font-pattaya text-2xl font-bold">
        <Link href="#home">
        THE LIFESTYLE BRAND CONSULT AGENCY
        </Link>
      </div>
      <ol className="cursor-pointer hidden lg:flex py-4">
        <div className="flex gap-6 text-white text-base font-bold items-center justify-start">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li  id="">
            <Link href="#about" > About</Link>
          </li>
          <li id="" >
            <Link href="#services" >Services</Link>
          </li>
          <li>
            <Link href="#reviews">
                Review
            </Link>
          </li>
        </div>
      </ol>
      <div className="lg:hidden transition-all  z-30 block items-center justify-center text-center" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ?  <Icons.closeMenu /> :  <Icons.hambugerMenu />}
      </div>
      <div className={`${openMenu ? "translate-x-0 " : "translate-x-[-100%]"} w-full h-full flex flex-col items-start justify-start lg:hidden z-20 fixed transition-transform top-0 left-0  pt-24 bg-white`}>
        <ol className="flex flex-col gap-8 cursor-pointer text-center items-center  justify-center text-pink-400 ml-40  ">
          <li className="text-md font-semibold font-sans">Home</li>
          <li className="text-md font-semibold font-sans"  >About</li>
          <li className="text-md font-semibold font-sans">Services</li>
          <li className="text-md font-semibold font-sans">Review</li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;

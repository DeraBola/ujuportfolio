"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/Icons/Icons";
import { Logo } from "@/assets";
import Image from "next/image";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="top-0 px-[6.22vw] z-[99999990] flex bg-[#4d423d] justify-between items-center bg-opacity-[42%] fixed py-4 w-full">
      <Link href="#home">
        <div className="w-16 h-16">
          <Image className="w-full h-full" src={Logo} alt="" />
        </div>
      </Link>
      <ol className="cursor-pointer hidden lg:flex py-4">
        <div className="flex gap-6 text-[#ffff] text-base font-bold items-center justify-start">
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
        {openMenu ?  <Icons.closeMenu /> :  <Icons.hamburgerMenu />}
      </div>
      <div className={`${openMenu ? "translate-x-0 " : "translate-x-[-100%]"} w-full h-full flex flex-col items-start justify-start lg:hidden z-20 fixed transition-transform top-0 left-0  pt-24 bg-white`}>
        <ol className="flex flex-col gap-8 cursor-pointer text-center items-center  justify-center text-[09092930497
] ml-40  ">
          <li className="text-md font-semibold font-sans">
            <Link href="#home">Home</Link>
          </li>
          <li className="text-md font-semibold font-sans"  >
            <Link href="#about" > About</Link>
          </li>
          <li className="text-md font-semibold font-sans">
            <Link href="#services" >Services</Link>
          </li>
          <li className="text-md font-semibold font-sans">
            <Link href="#reviews">
                Review
            </Link>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;

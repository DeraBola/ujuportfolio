import React from "react";

function Navbar () {
  return (
    <nav className="top-0 fixed left-0 w-full">
      <ol className=" flex py-4 px-[6.22vw] justify-between items-center w-full bg-red-400">
        <li className="font-pattaya text-2xl">Obianuju RoseMary</li>
        <div className="flex gap-6 text-white text-base font-bold items-center justify-start">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </div>
      </ol>
    </nav>
  );
}

export default Navbar;

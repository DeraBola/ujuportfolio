import React, { ReactNode } from "react";

interface ReuseableCardProps {
  text1: string;
  text2: string;
}

function ReusableCardServiceCard ({ text1, text2 }: ReuseableCardProps) {

  return (
    <div className="bg-white rounded-lg p-11">
      <div className="flex flex-col items-start justify-start gap-8">
        <p className="text-2xl font-bold text-black ">
          {text1}
        </p>
        <p className="lg:text-xl text-xs text-black font-normal">
          {text2}
        </p>
        <button className="text-black bg-pink-400 bg-opacity-[47%] py-4 px-16 rounded-lg">
            Contact me
        </button>
      </div>
    </div>
  );
}

export default ReusableCardServiceCard;

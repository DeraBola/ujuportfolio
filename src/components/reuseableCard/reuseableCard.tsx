import React, { ReactNode } from "react";

interface ReuseableCardProps {
  text1: string;
  text2: string;
  image?: ReactNode;
  switchCard: boolean;
}

function ReusableCard ({ text1, text2, switchCard = true, image }: ReuseableCardProps) {

  return (
    <div className={`${switchCard ? "lg:flex-row-reverse" : "lg:flex-row"} flex flex-col gap-8 font-sans items-center justify-center text-start bg-white`}>
      <div className="bg-pink-500 bg-opacity-[35%] w-full">
        {image}
      </div>
      <div className="flex  flex-col items-center justify-center">
        <p className="text-lg text-bold text-black ">
          {text1}
        </p>
        <p className="lg:text-xl text-xs text-blue-900  font-normal">
          {text2}
        </p>
      </div>
    </div>
  );
}

export default ReusableCard;

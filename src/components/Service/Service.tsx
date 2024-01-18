import React from "react";
import ReusableCard from "@/components/reuseableCard/reuseableCard";
import { FirstImage } from "@/assets";
import ReusableCardServiceCard from "@/components/reuseableCard/reuseableServiceCard";

function Service () {
  return (
    <section id="services" className="mt-14 gap-4">
      <div className="flex flex-col lg:gap-0 gap-5 px-[6.22vw] pb-14">
        <ReusableCard
          text1="service package"
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod."
          img={FirstImage}
          switchCard={true}
        />
        <ReusableCard
          text1="service package"
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod."
          img={FirstImage}
          switchCard={false}
        />
      </div>
      <div className="flex lg:flex-row flex-col px-[6.22vw] gap-12 py-6 lg:py-14 bg-pink-400 bg-opacity-[35%] items-start justify-start">
        <ReusableCardServiceCard
          text1="service package"
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendum."
        />
        <ReusableCardServiceCard
          text1="service package"
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet adipiscing bibendum velit bibendum."
        />
      </div>
    </section>
  );
}

export default Service;

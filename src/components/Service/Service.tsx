import React from "react";
import ReusableCard from "@/components/reuseableCard/reuseableCard";
import { FirstImage } from "@/assets";
import ReusableCardServiceCard from "@/components/reuseableCard/reuseableServiceCard";

function Service () {
  return (
    <section id="services" className="mt-14 gap-4">
      <div className="flex flex-col lg:gap-0 gap-5 px-[6.22vw] pb-14">
        <ReusableCard
          text1="Service package"
          text2="Our comprehensive services cover the spectrum of public relations and Integrated marketing communications. We specialize in crafting and implementing tailored strategies to enhance your brand’s visibility and reputation."
          img={FirstImage}
          switchCard={true}
        />
        <ReusableCard
          text1="Service package"
          text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod."
          img={FirstImage}
          switchCard={false}
          isList
        />
      </div>
      <div className="flex lg:flex-row flex-col px-[6.22vw] gap-6 lg:gap-12 py-6 lg:py-14 bg-pink-400 bg-opacity-[35%] items-start justify-start">
        <ReusableCardServiceCard
          text1="Mission"
          text2="our mission is to empower Brands, Individuals and causes by crafting compelling narratives that resonates with their targets and be the catalyst for positive change through Strategic and Effective Communications"
        />
        <ReusableCardServiceCard
          text1="Vision"
          text2="Our vision is to be globally recognized and be the go to agency for impactful transformative campaigns, by fostering a culture of collaboration, effective brand management and communication to drive brand visibility and sustainability."
        />
      </div>
    </section>
  );
}

export default Service;

import React from "react";
import ReusableCard from "@/components/reuseableCard/reuseableCard";
import Image from "next/image";
import { FirstImage } from "@/assets";

function Service () {
  return (
    <section>
      <ReusableCard text1="service package" text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod." image={<Image src={FirstImage} alt=""/>} switchCard={true} />
    </section>
  );
}

export default Service;

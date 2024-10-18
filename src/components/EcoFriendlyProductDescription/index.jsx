import { Text, Heading } from "./..";
import React from "react";

export default function EcoFriendlyProductDescription({
  titleText = "Eco-Friendly Product",
  descriptionText = "We offer eco-friendly cleaning products as an option for our services. By choosing this option, you can ensure a clean home that is safe for children and pets while also being kind to the planet. ",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[50%] md:w-full`}>
      <Heading size="headingxs" as="h1" className="font-bevietnampro text-[48px] font-bold text-teal-300_01">
        {titleText}
      </Heading>
      <Text
        size="textxl"
        as="p"
        className="w-full font-roboto text-[22.91px] font-normal leading-[160%] text-black-900"
      >
        {descriptionText}
      </Text>
    </div>
  );
}

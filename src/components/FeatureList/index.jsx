import { Heading, Img } from "./..";
import React from "react";

export default function FeatureList({
  vettedText = "Vetted professionals",
  reliableText = "Reliable Results",
  standardText = "Standard cleaning tasks",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center md:w-full gap-[22px]`}
    >
      <div className="flex items-center justify-evenly w-[100%] gap-3  rounded bg-gray-100 p-2 shadowText">
        <Img
          src="images/img_checkmark.svg"
          alt="Image"
          className="flex h-[22px] w-[20%]"
        />
        <Heading
          size="headingmd"
          as="h5"
          className="flex w-[80%] font-lato text-[22.91px] font-semibold text-gray-900_0"
        >
          {vettedText}
        </Heading>
      </div>
      <div className="flex w-[100%] items-center justify-evenly gap-3  rounded bg-gray-100 px-2 py-2 self-stretch shadowText">
        <Img
          src="images/img_checkmark.svg"
          alt="Reliable"
          className="flex h-[22px] w-[20%]"
        />
        <Heading
          size="headingmd"
          as="h5"
          className="flex w-[80%] font-lato text-[22.91px] font-semibold text-gray-900_02"
        >
          {reliableText}
        </Heading>
      </div>
      <div className="flex items-center justify-evenly gap-3 rounded bg-gray-100 p-2 py-2 self-stretch shadowText">
        <Img
          src="images/img_checkmark.svg"
          alt="Image"
          className="flex h-[22px] w-[20%] "
        />
        <Heading
          size="headingmd"
          as="h5"
          className="flex self-end font-lato text-[22.91px] font-semibold text-gray-900_02 w-[80%] "
        >
          {standardText}
        </Heading>
      </div>
    </div>
  );
}

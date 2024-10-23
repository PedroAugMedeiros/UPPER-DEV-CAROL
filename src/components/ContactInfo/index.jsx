import { Text, Heading, Button, Img } from "./..";
import React from "react";

export default function ContactInfo({ headingText = "Call Us", phoneNumberText = "+1 (857) 496-2302", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center gap-3 p-[18px] border-gray-100_01 border border-solid bg-gray-50 flex-1 rounded-[12px]`}
    >
      <Button className="flex h-[54px] w-[54px] items-center justify-center rounded-[26px] bg-teal-300 px-3.5">
        <Img src="images/img_call.svg" />
      </Button>
      <div className="flex flex-1 flex-col items-start">
        <Heading
          size="headings"
          as="h5"
          className="font-bevietnampro text-[20px] font-semibold tracking-[0.60px] text-gray-900"
        >
          {headingText}
        </Heading>
        <Text as="p" className="text-[16px] font-normal text-gray-700">
          {phoneNumberText}
        </Text>
      </div>
    </div>
  );
}

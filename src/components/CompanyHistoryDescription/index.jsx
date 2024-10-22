import { Text } from "./..";
import React from "react";

export default function CompanyHistoryDescription({
  historyText = (
    <>
      Our History <br />
      <br />
      520 Cleaning Solutions started over seven years ago with a vision to create more than just a cleaning company. We
      wanted to offer a service that brings peace and comfort to every space we touch. From the beginning, our passion
      was to transform environments into clean, welcoming places.
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start w-full p-5 bg-gray-200 shadow-sm cursor-pointer hover:shadow-sm`}
    >
      <Text
        size="textlg"
        as="p"
        className="mb-8 w-[94%] font-roboto text-[22.91px] font-normal leading-[160%] text-black-900 sm:w-[94%] sm:text-[18px]"
      >
        {historyText}
      </Text>
    </div>
  );
}

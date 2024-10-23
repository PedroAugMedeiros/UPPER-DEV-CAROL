import { Text, Heading } from "./..";
import React from "react";

export default function HouseCleaningChecklist({
  sectionTitle = "THROUGHOUT THE HOUSE",
  cleaningTasksDescription = (
    <>
      Dusting surfaces
      <br />
      Wiping baseboards and doors
      <br />
      Vacuuming floors, carpets, and rugs
      <br />
      Mopping hard floors
      <br />
      Cleaning interior windows
      <br />
      Dusting blinds
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full pl-[66px] pr-14 gap-[18px] py-11 md:p-5 shadow-sm cursor-pointer rounded-[20px] hover:shadow-xs`}
    >
      <Heading
        size="headingmd"
        as="h4"
        className="ml-7 mt-4 font-bevietnampro text-[24.77px] font-extrabold text-gray-800 sm:ml-0 sm:text-[20px]"
      >
        {sectionTitle}
      </Heading>
      <Text
        size="textmd"
        as="p"
        className="font-bevietnampro text-[20.43px] font-normal leading-[160%] text-gray-800 sm:text-[17px]"
      >
        {cleaningTasksDescription}
      </Text>
    </div>
  );
}

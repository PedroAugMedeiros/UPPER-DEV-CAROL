import { Button, Text, Heading } from "./..";
import React, { useEffect } from "react";

export default function HouseCleaningDetails({
  sectionTitle = "THROUGHOUT THE HOUSE",
  cleaningDescription = (
    <>
      Remove cobwebs
      <br />
      Dusting (all rooms)
      <br />
      Wipe baseboards (where accessible), doors, and light switches
      <br />
      Vacuum (all floors, carpets, and rugs)
      <br />
      Mop (hard floors)
    </>
  ),
  readMoreButtonLabel = "READ MORE...",
  ...props
}) {
  const [textWhite, setTextWhite] = React.useState(false);
  const makeHover = (hoverAction, e) => {
    hoverAction == "Enter" ? setTextWhite(true) : setTextWhite(false);
  };

  useEffect(() => {}, [textWhite]);
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full px-[26px] py-3.5 sm:px-5 shadow-sm cursor-pointer rounded-[20px] hover:shadow-xs ml-0 makeGreen z-10`}
      onMouseEnter={(e) => makeHover("Enter", e)}
      onMouseLeave={(e) => makeHover("Leave", e)}
    >
      <Heading
        size="headingmd"
        as="h4"
        className="self-start ml-10  mt-[46px] font-bevietnampro text-[24.77px] font-extrabold text-gray-800 sm:ml-0 sm:text-[20px]
      "
      >
        {textWhite ? (
          <h4 className="text-[#FFF]">{sectionTitle}</h4>
        ) : (
          <h4>{sectionTitle}</h4>
        )}
      </Heading>
      {textWhite ? (
        <Text
          size="textmd"
          as="p"
          className="relative z-[2] mt-[18px] w-[86%] self-center font-bevietnampro text-[20.43px] font-normal leading-[160%] text-gray-800 sm:w-full sm:text-[17px] text-[#Fff]"
        >
          {cleaningDescription}
        </Text>
      ) : (
        <Text
          size="textmd"
          as="p"
          className="relative z-[2] mt-[18px] w-[86%] self-center font-bevietnampro text-[20.43px] font-normal leading-[160%]  sm:w-full sm:text-[17px] "
        >
          {cleaningDescription}
        </Text>
      )}

      <Button className="relative mt-[-2px] flex h-[32px] min-w-[148px] flex-row items-center justify-center self-end rounded-[16px]  px-3 text-center font-bevietnampro text-[17.93px] text-gray-200 sm:text-[14px]">
        {/* {readMoreButtonLabel} */}
      </Button>
    </div>
  );
}

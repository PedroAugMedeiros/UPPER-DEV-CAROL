import { Text, Button, Heading, Img } from "../../components";
import FeatureList from "../../components/FeatureList";
import React from "react";
import CarolPhoto from "./CarolPhoto.svg";

export default function AboutusColumndesignsem() {
  return (
    <div
      className="mt-[162px] flex flex-col items-end gap-[22px] self-stretch pl-[58px] pr-14 md:px-5 py-5 width: 1440px;
height: 2833px;"
    >
      <div className="mx-auto flex w-full max-w-[1278px] self-stretch">
        <div className="flex w-full items-center md:flex-col">
          <Img
            src={CarolPhoto}
            alt="Designsemnome"
            className="h-[792px] w-[46%] rounded-[90px] object-contain md:w-full top-0"
          />
          <div className="flex flex-1 flex-col items-end gap-[62px] md:self-stretch sm:gap-[31px]">
            <div className="flex w-[88%] flex-col gap-7 md:w-full">
              <div className="flex flex-col items-start gap-2.5">
                <Heading
                  size="headinglg"
                  as="h1"
                  className="font-bevietnampro text-[63px] font-semibold text-gray-900 md:text-[48px]"
                >
                  Our Company!
                </Heading>
                <Text
                  size="textmd"
                  as="p"
                  className="ml-1.5 w-[74%] font-bevietnampro text-[21.45px] font-normal leading-[160%] text-gray-700 md:ml-0 md:w-full"
                >
                  <>
                    520 Cleaning Solutions has been dedicated to providing a
                    clean, balanced, and welcoming environment for your
                    families. <br />
                    <br />
                    With seven years of experience, our mission is to allow our
                    clients to focus on precious moments with their loved ones
                    while we take care of the cleaning with love and care.{" "}
                  </>
                </Text>
              </div>
              <div className="flex gap-14 md:flex-col">
                <FeatureList className="w-[56%]" />
                <FeatureList
                  vettedText="Affordable Prices"
                  reliableText="Best Quality"
                  standardText="Dedicate care"
                  className="w-[44%]"
                />
              </div>
            </div>
            <a
              className=""
              href="https://forms.gle/LNWMEL59EvRHchmH8"
              target="blank"
            >
              <Button className="mr-4 flex h-[60px] min-w-[604px] flex-row items-center justify-center rounded-[12px] bg-teal-300 px-5 text-center text-[33.03px] capitalize text-white-a700 md:mr-0 md:text-[31px] sm:text-[29px] growUpButton w-[50%]">
                Join Our List of Satisfied Customers!
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Text
        size="textxl"
        as="p"
        className="ml-[86px] font-bevietnampro text-[24.89px] font-normal text-black-900_63 md:ml-0 md:text-[22px]"
      >
        Founder, Carol Bishop
      </Text>
    </div>
  );
}

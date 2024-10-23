import { Text, Heading } from "../../components";
import React from "react";

export default function TermsandconditionsRowlinetwentyon() {
  return (
    <div className="flex justify-center self-stretch bg-gradienteBlue px-14 py-28 shadow-xs md:p-5 mt-[3.5%]">
      <div className=" m-0 flex w-[62%] flex-col items-center gap-2.5 md:w-full">
        <div className="mx-auto w-full max-w-[818px] self-stretch md:px-5">
          <div className="ml-11 mr-[66px] md:mx-0">
            <div className="flex justify-center">
              <Heading
                size="headingxl"
                as="h1"
                className="font-bevietnampro text-[63px] font-semibold text-white-a700 md:text-[48px]"
              >
                Terms and Conditions{" "}
              </Heading>
            </div>
          </div>
          <div className="relative mt-[-4px] h-[2px] bg-white-a700" />
        </div>
        <div className="mx-auto flex w-full max-w-[790px] flex-wrap justify-between gap-5 self-stretch md:px-5">
          <Text
            size="textmd"
            as="p"
            className="text-[24.57px] font-normal uppercase italic text-white-a700 md:text-[22px]"
          >
            aLL RIGHTS RESERVED
          </Text>
          <a href="#" className="italic md:text-[22px]">
            <Text
              size="textmd"
              as="p"
              className="text-[24.57px] font-normal uppercase text-white-a700"
            >
              Terms and conditions
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}

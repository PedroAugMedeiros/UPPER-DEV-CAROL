import { Button, Text } from "../../components";
import React from "react";

export default function Home1RowThree() {
  return (
    <div className="mt-[200px] flex h-[186px] items-center justify-center self-stretch bg-[url(/public/images/img_group_385.png)] bg-cover bg-no-repeat py-8 md:h-auto sm:py-5">
      <div className="container-xs flex justify-center px-1.5 md:px-5">
        <div className="flex w-full items-start justify-center md:flex-col">
          <div className="flex flex-1 flex-col items-start gap-2 self-center md:self-stretch">
            <Text
              size="text7xl"
              as="p"
              className="bg-gradient bg-clip-text text-[30.85px] font-normal text-transparent md:text-[28px] sm:text-[26px]"
            >
              Ready to get started?
            </Text>
            <Text
              size="textxl"
              as="p"
              className="w-[46%] text-[22.88px] font-normal leading-[29px] text-white-a700 md:w-full"
            >
              Let us handle the cleaning so you can focus on what matters most.
            </Text>
          </div>
          <a href="https://forms.gle/LNWMEL59EvRHchmH8" target="blank">
            <Button className="mt-3 flex h-[70px] min-w-[216px] flex-row items-center justify-center rounded-[10px] bg-gradient px-3.5 text-center text-[32.23px] text-gray-900_01 md:text-[30px] sm:text-[28px]">
              Get started?
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

import { Text, Img, Button } from "../../components";
import React from "react";

export default function Home1RowFive() {
  return (
    <div className="mt-[76px] flex justify-start self-stretch  md:px-5">
      <div className="flex w-[100%] items-start justify-end  bg-blue_gray-100_01 md:w-full md:flex-col">
        <div className="flex justify-end mt-[52px]  w-[40%] flex-col md:w-full md:px-5">
          <Text
            size="text11xl"
            as="p"
            className="text-[38.56px] font-normal text-gray-900_01 md:text-[36px] sm:text-[34px]"
          >
            Ready to get started?
          </Text>
          <Text
            as="p"
            className="mt-1 w-[92%] text-[16.97px] font-normal leading-[22px] text-gray-900_01 md:w-full"
          >
            <>
              Imagine walking into a space that feels fresh, organized, and
              truly welcoming. At 520 Cleaning Solutions, we transform your
              environment, ensuring every corner radiates cleanliness and care.
              <br />
              <br />
              With our expert team and seven years of experience, you can trust
              us to bring new life to your space. Let us handle the details, so
              you can enjoy more time with your loved ones in a spotless home.
            </>
          </Text>
          <a href="https://forms.gle/LNWMEL59EvRHchmH8" target="blank">
            <Button className="growUpButton mt-[26px] flex h-[52px] min-w-[314px] flex-row items-center justify-center rounded-[10px] bg-teal-300 px-[18px] text-center text-[25.14px] text-white-a700 md:text-[23px] sm:text-[21px]">
              Get a free estimate now
            </Button>
          </a>
        </div>
        <div className="flex h-[520px] w-[50%] justify-center">
          <div className="flex w-[600px] self-stretch justify-end">
            <div className="flex justify-end items-end  w-[50%]">
              <iframe
                frameborder="0"
                className="juxtapose self-stretch w-[140%]"
                width="100%"
                height=""
                src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=65c754b2-8dc5-11ef-9397-d93975fe8866"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

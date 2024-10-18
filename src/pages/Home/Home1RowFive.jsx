import { Text, Img, Button } from "../../components";
import React from "react";

export default function Home1RowFive() {
  return (
    <div className="mt-[76px] flex justify-center self-stretch px-14 md:px-5">
      <div className="flex w-[88%] items-start justify-center bg-blue_gray-100_01 md:w-full md:flex-col">
        <div className="mt-[52px] flex w-[40%] flex-col items-start md:w-full md:px-5">
          <Text
            size="text11xl"
            as="p"
            className="text-[38.56px] font-normal text-gray-900_01 md:text-[36px] sm:text-[34px]"
          >
            Ready to get started?
          </Text>
          <Text as="p" className="mt-1 w-[92%] text-[16.97px] font-normal leading-[22px] text-gray-900_01 md:w-full">
            <>
              Imagine walking into a space that feels fresh, organized, and truly welcoming. At 520 Cleaning Solutions,
              we transform your environment, ensuring every corner radiates cleanliness and care.
              <br />
              <br />
              With our expert team and seven years of experience, you can trust us to bring new life to your space. Let
              us handle the details, so you can enjoy more time with your loved ones in a spotless home.
            </>
          </Text>
          <Button className="mt-[26px] flex h-[52px] min-w-[314px] flex-row items-center justify-center rounded-[10px] bg-teal-300 px-[18px] text-center text-[25.14px] text-white-a700 md:text-[23px] sm:text-[21px]">
            Get a free estimate now
          </Button>
        </div>
        <div className="relative h-[520px] w-[54%] content-center self-center md:h-auto md:w-full md:px-5">
          <div className="relative mx-auto h-[520px] flex-1 content-center md:h-auto">
            <Img
              src="images/img_photo_2024_08_16_09_33_12.png"
              alt="Photo2024eight"
              className="ml-auto h-[520px] w-[46%] object-contain"
            />
            <div className="absolute bottom-0 right-[44%] top-0 my-auto flex h-[48px] flex-col items-center justify-center bg-[url(/public/images/img_group_24.svg)] bg-cover bg-no-repeat px-1.5 py-4 md:h-auto">
              <Img src="images/img_arrow_right.svg" alt="Arrowright" className="h-[14px]" />
            </div>
          </div>
          <div className="absolute bottom-0 right-px top-0 my-auto ml-9 flex h-max flex-1 flex-col items-start md:ml-0">
            <Img
              src="images/img_photo_2024_08_16_09_33_15.png"
              alt="Photo2024eight"
              className="h-[520px] w-[50%] object-contain"
            />
            <div className="relative mt-[-62px] flex justify-center self-stretch bg-gray-900_7f p-2.5">
              <div className="flex w-[68%] flex-wrap justify-between gap-5 md:w-full">
                <Text
                  size="text4xl"
                  as="p"
                  className="text-[25.26px] font-normal text-white-a700 md:text-[23px] sm:text-[21px]"
                >
                  BEFORE
                </Text>
                <Text
                  size="text4xl"
                  as="p"
                  className="text-[25.26px] font-normal text-white-a700 md:text-[23px] sm:text-[21px]"
                >
                  AFTER
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

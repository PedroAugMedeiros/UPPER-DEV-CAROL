import { Text, Heading, Img } from "../../components";
import React, { useState, useEffect } from "react";
// import FirstImg from "./flipcard/img_ellipse_7.png";
// import SecondImg from "./flipcard/img_ellipse_8.svg";
import { SwapperImgOnHover } from "./SwapperImgOnHover";

export default function Home1RowEight() {
  const [isHover, setIsHover] = useState(false);

  // function handleImg() {
  //   if (isHover && isHover) {
  //     return;
  //   } else {
  //     return <Img src={SecondImg} className="flex w-[18%]" />;
  //   }
  // }

  return (
    <div className="mt-[72px] flex justify-center self-stretch">
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full flex-col gap-16 sm:gap-8">
          <div className="ml-[124px] mr-[150px] flex flex-col items-center md:mx-0">
            <Text
              size="text16xl"
              as="p"
              className="font-dmserifdisplay text-[107.79px] font-normal text-black-900_28 md:text-[48px]"
            >
              Why choose us
            </Text>
            <Text
              size="text6xl"
              as="p"
              className="relative mt-[-6px] self-stretch text-center text-[27.41px] font-normal leading-[35px] text-gray-900_01 md:text-[25px] sm:text-[23px]"
            >
              Choose 520 Cleaning Solutions for care and trust. We keep your
              space spotless and welcoming, so you can focus on what truly
              matters.
            </Text>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="mr-6 md:mr-0">
              <div className="flex items-start gap-1 md:flex-col">
                <div className="mt-[122px] flex w-[26%] flex-col items-start gap-3 md:w-full">
                  <Heading
                    size="heading3xl"
                    as="h2"
                    className="text-[30.85px] font-bold text-teal-300 md:text-[28px] sm:text-[26px]"
                  >
                    Dedicated Care:
                  </Heading>
                  <Text
                    size="text6xl"
                    as="p"
                    className="w-full text-[27.41px] font-normal leading-[35px] text-gray-900_01 md:text-[25px] sm:text-[23px]"
                  >
                    We treat your home with love and care, ensuring a safe
                    environment for your family.
                  </Text>
                </div>
                <div className="relative h-[524px] flex-1 content-center self-center md:h-auto md:w-full md:flex-none md:self-stretch thecard">
                  {/* <{/* <div
                    onMouseEnter={setIsHover(isHover && !isHover)}
                    onMouseLeave={setIsHover(isHover && !isHover)}
                    alt="Image"
                    className="flex"
                  >
                    {isHover ? (
                      <Img src={FirstImg} className="flex w-[18%]" />
                    ) : (
                      <Img src={SecondImg} className="flex w-[18%]" />
                    )}
                  </div> */}
                  <SwapperImgOnHover />

                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto  flex-1 rounded-full border-4 border-solid border-blue_gray-100_01 shadow-lg" />
                </div>
                <div className="mt-[124px] flex w-[24%] flex-col items-center md:w-full">
                  <Heading
                    size="heading3xl"
                    as="h3"
                    className="text-[30.85px] font-bold text-teal-300 md:text-[28px] sm:text-[26px]"
                  >
                    Guaranteed Safety:
                  </Heading>
                  <Text
                    size="text6xl"
                    as="p"
                    className="w-[94%] text-right text-[27.41px] font-normal leading-[35px] text-gray-900_01 md:w-full md:text-[25px] sm:text-[23px]"
                  >
                    Our dedicated professionals ensure care and comfort for your
                    family.
                  </Text>
                </div>
              </div>
            </div>
            <div className="ml-1.5 flex items-start md:ml-0 md:flex-col">
              <div className="flex w-[44%] flex-col items-start gap-3 self-center md:w-full">
                <Heading
                  size="heading3xl"
                  as="h4"
                  className="text-[30.85px] font-bold text-teal-300 md:text-[28px] sm:text-[26px]"
                >
                  Trusted Professionals:
                </Heading>
                <Text
                  size="text6xl"
                  as="p"
                  className="w-[56%] text-[27.41px] font-normal leading-[35px] text-gray-900_01 md:w-full md:text-[25px] sm:text-[23px]"
                >
                  With seven years of experience, our reliable team delivers
                  high-quality cleaning services you can trust.
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-end md:self-stretch">
                <Heading
                  size="heading3xl"
                  as="h5"
                  className="text-right text-[30.85px] font-bold leading-10 text-teal-300 md:text-[28px] sm:text-[26px]"
                >
                  <>
                    Customer-Centric Approach: <br />{" "}
                  </>
                </Heading>
                <Text
                  size="text6xl"
                  as="p"
                  className="mr-[22px] w-[46%] text-right text-[27.41px] font-normal leading-[35px] text-gray-900_01 md:mr-0 md:w-full md:text-[25px] sm:text-[23px]"
                >
                  Your comfort and satisfaction are at the heart of everything
                  we do.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

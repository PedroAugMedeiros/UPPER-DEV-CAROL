import { Heading, Img, Text } from "./..";
import React, { useState } from "react";

export default function Footer({ ...props }) {
  const [showServices, setShowServices] = useState(false);
  console.log(showServices);
  return (
    <footer
      {...props}
      className={`${props.className} flex self-stretch items-end mt-[140px] py-4 bg-gray-900_01`}
    >
      <div className="mt-[38px] flex w-full flex-col items-end gap-4">
        <div className="self-stretch">
          <div className="flex flex-col items-end gap-[42px]">
            <div className="mx-auto flex w-full max-w-[1268px] items-start justify-between gap-5 md:flex-col md:px-5">
              <div className="flex w-[28%] flex-col self-end md:w-full md:self-auto">
                <div className="flex flex-col items-start gap-4">
                  <Heading
                    size="heading2xl"
                    as="h4"
                    className="text-[25.6px] font-bold uppercase text-white-a700 md:text-[23px] sm:text-[21px]"
                  >
                    520 Cleaning Solutions
                  </Heading>
                  <Heading
                    size="textxs"
                    as="p"
                    className="w-full text-[15.67px] font-normal capitalize leading-[23px] text-white-a700"
                  >
                    520 Cleaning Solutions - Caring for your space with love and
                    dedication. Trust us to keep your environment clean, safe,
                    and welcoming, so you can focus on what truly matters.
                  </Heading>
                </div>
                <div className="mt-[18px] flex items-center gap-2.5">
                  <Img
                    src="images/img_facebook.svg"
                    alt="Facebook"
                    className="h-[22px]"
                  />
                  <Img
                    src="images/img_info.svg"
                    alt="Info"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <a
                  href="#"
                  className="mt-[54px] w-[60%] italic leading-[23px] md:w-full md:text-[22px]"
                >
                  <Text
                    size="text3xl"
                    as="p"
                    className="text-[24.57px] font-normal uppercase text-gray-500_01"
                  >
                    Terms and conditions
                  </Text>
                </a>
              </div>
              <div className="mb-6 flex w-[66%] items-start justify-between gap-5 md:w-full md:flex-col">
                <div className="mt-[26px] flex w-[44%] items-start justify-between gap-5 md:w-full">
                  <div className="flex w-[70%] flex-col items-start gap-3.5 self-center">
                    <Heading
                      size="headingxs"
                      onMouseHover={() => {
                        setShowServices(true);
                      }}
                      onMouseLeave={() => setShowServices(false)}
                      as="h6"
                      className="text-[19.04px] font-bold text-gray-200"
                    >
                      Services
                    </Heading>
                    <ul className="flex flex-col items-start gap-3.5">
                      <li>
                        <a href="#">
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[19.04px] font-normal text-gray-200"
                          >
                            Regular cleaning
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[19.04px] font-normal text-gray-200"
                          >
                            Deep cleaning
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[19.04px] font-normal text-gray-200"
                          >
                            Commercial cleaning
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[19.04px] font-normal text-gray-200"
                          >
                            Move in cleaning
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[19.04px] font-normal text-gray-200"
                          >
                            Move out cleaning
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-1.5 flex flex-col items-center gap-3.5">
                    <Heading
                      size="headingxs"
                      as="h6"
                      className="text-[19.04px] font-bold text-gray-200"
                    >
                      Useful Links
                    </Heading>
                    <ul className="flex flex-col items-start gap-3.5">
                      <li>
                        <a href="Home" target="_blank" rel="noreferrer">
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[19.04px] font-normal text-gray-200"
                          >
                            Home
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[19.04px] font-normal text-gray-200"
                          >
                            Get in touch
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[19.04px] font-normal text-gray-200"
                          >
                            About us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[19.04px] font-normal text-gray-200"
                          >
                            Contact us
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-[42%] flex-col gap-2 self-center md:w-full">
                  <div className="relative mx-9 h-[240px] content-end md:mx-0 md:h-auto">
                    <div className="absolute left-[26%] top-[19%] m-auto h-[6px] w-[6px] rounded-[3px] bg-gradient1" />
                    <Img
                      src="images/img_vector_3.png"
                      alt="Vectorthree"
                      className="absolute left-[11.69px] top-[38%] m-auto h-[24px] object-cover"
                    />
                    <Img
                      src="images/img_vector_4.png"
                      alt="Vectorfour"
                      className="absolute left-[27%] top-0 m-auto h-[12px] object-cover"
                    />
                    <div className="absolute left-0 top-[3.46px] m-auto flex w-[22%] flex-col items-start">
                      <Img
                        src="images/img_vector_1.png"
                        alt="Vectorone"
                        className="relative z-[15] h-[64px] w-full object-cover md:h-auto"
                      />
                      <div className="relative mt-[-10px] h-[12px] w-[12px] rounded-md bg-gradient1" />
                    </div>
                    <div className="ml-8 flex w-[64%] items-start md:ml-0">
                      <div className="flex flex-1 items-center self-center">
                        <Img
                          src="images/img_mask_group.png"
                          alt="Image"
                          className="h-[108px] w-[92%] object-contain"
                        />
                        <Img
                          src="images/img_grid.svg"
                          alt="Grid"
                          className="mb-3 h-[12px] self-end"
                        />
                      </div>
                      <div className="relative ml-[-32px] mt-1.5 flex h-[74px] w-[24%] flex-col items-start justify-center bg-[url(/public/images/img_group_29.png)] bg-cover bg-no-repeat px-1.5 py-8 md:h-auto sm:py-5">
                        <div className="h-[4px] w-[4px] rotate-[-180deg] rounded-sm bg-yellow-200" />
                      </div>
                    </div>
                    <Img
                      src="images/img_grid.svg"
                      alt="Grid"
                      className="absolute bottom-[22.84px] right-[43%] m-auto h-[12px]"
                    />
                    <div className="absolute right-[14.45px] top-[27%] z-[16] my-auto ml-10 mr-3 flex flex-1 flex-col md:mx-0">
                      <div className="relative z-[17] flex items-start justify-between gap-5">
                        <Img
                          src="images/img_favorite.svg"
                          alt="Favorite"
                          className="h-[6px]"
                        />
                        <div className="flex w-[68%] items-start justify-between gap-5 self-center">
                          <div className="w-[18%]">
                            <div className="flex gap-0.5">
                              <div className="lime_400_02_orange_200_border h-[12px] w-[12px] border-[1.3px] border-solid" />
                              <div className="lime_400_02_orange_200_border h-[12px] w-[12px] border-[1.3px] border-solid" />
                            </div>
                            <div className="flex gap-0.5">
                              <div className="lime_400_02_orange_200_border h-[12px] w-[12px] border-[1.3px] border-solid" />
                              <div className="lime_400_02_orange_200_border h-[12px] w-[12px] border-[1.3px] border-solid" />
                            </div>
                          </div>
                          <Text
                            size="text14xl"
                            as="p"
                            className="mt-1.5 w-[22%] self-end font-kameron text-[50.91px] font-normal leading-[42px] tracking-[-6.11px] text-gray-50_02 md:text-[46px] sm:text-[40px]"
                          >
                            520
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_favorite_lime_400.svg"
                        alt="Favorite"
                        className="ml-12 h-[6px] md:ml-0"
                      />
                    </div>
                    <Img
                      src="images/img_mask_group_gray_900_03.png"
                      alt="Image"
                      className="absolute bottom-0 right-[0.28px] top-0 z-[18] my-auto h-[216px] w-[84%] object-contain"
                    />
                  </div>
                  <div className="flex items-start gap-1.5">
                    <div className="flex flex-1 flex-col items-end self-center">
                      <Img
                        src="images/img_favorite_amber_200.svg"
                        alt="Favorite"
                        className="mr-[52px] h-[6px] md:mr-0"
                      />
                      <div className="relative mt-[-6px] flex h-[48px] flex-col items-end self-stretch bg-[url(/public/images/img_group_528.png)] bg-cover bg-no-repeat md:h-auto">
                        <Img
                          src="images/img_favorite_amber_200.svg"
                          alt="Favorite"
                          className="mr-[52px] h-[6px] md:mr-0"
                        />
                        <Img
                          src="images/img_group_528.png"
                          alt="Cleaning"
                          className="relative mt-[-4px] h-[46px] w-full object-cover md:h-auto"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_group_85.svg"
                      alt="Image"
                      className="h-[42px] w-[48%] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px w-full self-stretch bg-white-a700" />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1260px] flex-wrap justify-between gap-5 md:px-5">
          <Heading
            size="headingxs"
            as="h6"
            className="flex text-[19.04px] font-bold text-gray-200"
          >
            <span>
              2024 © Copyright 520 Cleaning Solutions • Design by&nbsp;
            </span>
            <a href="#" className="inline underline">
              Upper Agency
            </a>
          </Heading>
          <Heading
            size="headingxs"
            as="h6"
            className="text-[19.04px] font-bold text-gray-200"
          >
            All Rights Reserved
          </Heading>
        </div>
      </div>
    </footer>
  );
}

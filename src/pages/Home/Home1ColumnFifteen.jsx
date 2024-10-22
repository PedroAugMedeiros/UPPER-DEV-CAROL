import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";
import { Text, Img, Slider, Button, Heading } from "../../components";
import React, { useEffect } from "react";

export default function Home1ColumnFifteen() {
  const [sliderState, setSliderState] = React.useState(1);
  const sliderRef = React.useRef(sliderState);
  useEffect(() => {}, [sliderState, setSliderState]);
  const items = [
    <div className={`flex items-center md:flex-col flex-row `}>
      <div className="flex-1 md:self-stretch">
        <div className="flex items-center gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Boston{" "}
          </Text>
        </div>
        <div className="mt-1 flex items-center gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Brookline
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-1.5 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Needham
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-2 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Dedham
          </Text>
        </div>
      </div>
      <div className="w-[28%] md:w-full">
        <div className="flex items-center gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mb-2 h-[36px] self-end"
          />
          <Text
            size="text12xl"
            as="p"
            className="text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Milton
          </Text>
        </div>
        <div className="mt-2.5 flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin Eleven"
            className="mt-1 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Quincy
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-1.5 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Braintree{" "}
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-2 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Randolph
          </Text>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-start pl-14 pr-[68px] md:self-stretch md:px-5 sm:self-auto">
        <div className="w-[84%] md:w-full">
          <div className="flex items-start justify-start start gap-5">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-2 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="items-start justify-start text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Hingham
            </Text>
          </div>
          <div className="flex items-start justify-start gap-[18px]">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-1.5 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Cape Cod
            </Text>
          </div>
          <div className="flex items-start justify-start gap-[18px]">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-1 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Raynham{" "}
            </Text>
          </div>
          <div className="flex items-start justify-start gap-[18px]">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-2 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Plymouth
            </Text>
          </div>
        </div>
      </div>
    </div>,
    <div
      className={`" : ""
      } flex items-center md:flex-col flex-row`}
    >
      <div className="flex-1 md:self-stretch">
        <div className="flex items-center gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px] text-nowrap mr-20"
          >
            West Bridgewater{" "}
          </Text>
        </div>
        <div className="mt-1 flex items-center gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            East Bridgewater
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-1.5 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Halifax
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-2 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Plympton
          </Text>
        </div>
      </div>
      <div className="w-[28%] md:w-full">
        <div className="flex items-center gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mb-2 h-[36px] self-end"
          />
          <Text
            size="text12xl"
            as="p"
            className="text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Duxbury
          </Text>
        </div>
        <div className="mt-2.5 flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin Eleven"
            className="mt-1 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Pembroke
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-1.5 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Hanson{" "}
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-2 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Kingston
          </Text>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-end self-start pl-14 pr-[68px] md:self-stretch md:px-5 sm:self-auto">
        <div className="w-[84%] md:w-full">
          <div className="flex items-start justify-start gap-5">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-2 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Hanover
            </Text>
          </div>
          <div className="flex items-start justify-start gap-[18px]">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-1.5 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Norwell
            </Text>
          </div>
        </div>
      </div>
    </div>,
    <div
      className={`" : ""
    } flex items-center md:flex-col flex-row`}
    >
      <div className="flex-1 md:self-stretch">
        <div className="flex items-center gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px] text-nowrap mr-20"
          >
            Dover{" "}
          </Text>
        </div>
        <div className="mt-1 flex items-center gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Westwood
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-1.5 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Canton
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-2 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Sharon
          </Text>
        </div>
      </div>
      <div className="w-[28%] md:w-full">
        <div className="flex items-center gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mb-2 h-[36px] self-end"
          />
          <Text
            size="text12xl"
            as="p"
            className="text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Stoughton
          </Text>
        </div>
        <div className="mt-2.5 flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin Eleven"
            className="mt-1 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Avon
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-1.5 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Holbrook{" "}
          </Text>
        </div>
        <div className="flex items-start gap-5">
          <Img
            src="images/img_linkedin.svg"
            alt="Linkedin"
            className="mt-2 h-[36px]"
          />
          <Text
            size="text12xl"
            as="p"
            className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
          >
            Weymouth
          </Text>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-end self-start pl-14 pr-[68px] md:self-stretch md:px-5 sm:self-auto">
        <div className="w-[84%] md:w-full">
          <div className="flex items-start justify-start gap-5">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-2 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Carver
            </Text>
          </div>
          <div className="flex items-start justify-start gap-[18px]">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-1.5 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Lakeville
            </Text>
          </div>
          <div className="flex items-start justify-start gap-[18px]">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-1.5 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Middleborough
            </Text>
          </div>
          <div className="flex items-start justify-start gap-[18px]">
            <Img
              src="images/img_linkedin.svg"
              alt="Linkedin"
              className="mt-1.5 h-[36px]"
            />
            <Text
              size="text12xl"
              as="p"
              className="self-center text-[39.93px] font-normal text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Bridgewater
            </Text>
          </div>
        </div>
      </div>
    </div>,
  ];
  console.log(sliderState);
  return (
    <div className="mt-24 flex flex-col items-center self-stretch px-14 md:px-5">
      <div className="mr-2 flex w-[90%] flex-col items-center gap-[30px] md:mr-0 md:w-full">
        <div className="relative h-[910px] content-end self-stretch md:h-auto">
          <Heading
            size="heading6xl"
            as="h2"
            className="mb-[132px] ml-[60px] font-bevietnampro text-[48.23px] font-bold capitalize text-black-900 md:ml-0 md:text-[44px] sm:text-[38px]"
          >
            Free Estimate for Your Area
          </Heading>
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
            <div className="relative z-0 flex h-[824px] items-center justify-center self-stretch bg-[url(/public/images/img_group_186.png)] bg-cover bg-no-repeat py-[162px] md:h-auto md:py-5">
              <div className="container-xs mb-1 flex justify-center md:px-5">
                <div className="relative h-[494px] w-full">
                  <Img
                    src="images/img_image_24.png"
                    alt="Imagetwentyfour"
                    className="absolute bottom-0 right-[0.12px] top-0 my-auto h-[494px] w-[44%] rounded-[32px] object-contain"
                  />
                  <div className="absolute bottom-[12.24px] left-0 right-0 m-auto w-[74%]">
                    <div className="flex flex-col items-end">
                      <Img
                        src="images/img_linkedin.svg"
                        alt="Linkedin"
                        className="mr-[228px] h-[36px] md:mr-0"
                      />
                      <Img
                        src="images/img_linkedin.svg"
                        alt="Linkedin"
                        className="mr-[254px] mt-3 h-[36px] md:mr-0"
                      />
                      <div className="relative z-[14] mx-[122px] flex items-start justify-end gap-[66px] self-stretch md:mx-0">
                        <Img
                          src="images/img_linkedin.svg"
                          alt="Linkedin"
                          className="mb-[22px] h-[36px]"
                        />
                        <Img
                          src="images/img_linkedin.svg"
                          alt="Linkedin"
                          className="h-[36px] self-end"
                        />
                      </div>
                      <div className="flex items-start justify-end self-stretch">
                        <Img
                          src="images/img_linkedin.svg"
                          alt="Linkedin"
                          className="mt-2.5 h-[36px]"
                        />
                        <div className="flex w-[32%] items-start justify-end gap-1 self-center">
                          <div className="w-full">
                            <div className="flex justify-end gap-[15px]">
                              <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin Eleven"
                                className="h-[36px]"
                              />
                              <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin"
                                className="h-[36px]"
                              />
                            </div>
                            <div className="mt-1 flex items-start justify-end gap-5">
                              <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin"
                                className="mb-6 h-[36px]"
                              />
                              <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin"
                                className="h-[36px] self-end"
                              />
                            </div>
                            <div className="relative mt-[-2px] flex items-start justify-end gap-3.5">
                              <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin"
                                className="mb-9 h-[36px]"
                              />
                              <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin"
                                className="h-[36px] self-end"
                              />
                            </div>
                          </div>
                          <div className="mt-2.5 flex w-full flex-col items-start self-center">
                            <Img
                              src="images/img_linkedin.svg"
                              alt="Linkedin"
                              className="h-[36px]"
                            />
                            <Img
                              src="images/img_linkedin.svg"
                              alt="Linkedin"
                              className="ml-[18px] mt-9 h-[36px] md:ml-0"
                            />
                            <div className="mt-1.5 flex items-start justify-between gap-5 self-stretch">
                              <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin"
                                className="mb-[18px] ml-3 h-[36px]"
                              />
                              <Img
                                src="images/img_linkedin.svg"
                                alt="Linkedin"
                                className="h-[36px] self-end"
                              />
                            </div>
                            <Img
                              src="images/img_linkedin.svg"
                              alt="Linkedin"
                              className="ml-11 mt-4 h-[36px] md:ml-0"
                            />
                            <div className="ml-3 mt-[30px] h-[14px] w-[30px] bg-gray-200 md:ml-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-xs relative mt-[-14px] flex flex-col items-start px-1.5 md:px-5">
              <Text
                size="text9xl"
                as="p"
                className="w-[80%] text-[33.03px] font-normal capitalize leading-[49px] text-gray-800_01 md:w-full md:text-[31px] sm:text-[29px]"
              >
                <span className="text-gray-800_01">At</span>
                <span className="text-black-900">&nbsp;</span>
                <span className="font-medium text-black-900">
                  520 Cleaning Solutions, we offer a free estimate for cleaning
                  services in your region.
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="container-xs flex flex-col items-start gap-[74px] md:gap-[55px] md:px-5 sm:gap-[37px]">
          <Text
            size="text2xl"
            as="p"
            className="ml-1.5 text-[23.91px] font-normal capitalize leading-[35px] text-gray-700_01 md:ml-0 md:text-[21px]"
          >
            <>
              {" "}
              If you are located in Massachusetts, contact us to get a no-cost
              evaluation,
              <br />
              and we will check if we service your specific area. <br />
              Our team is ready to provide exceptional and tailored cleaning
              solutions to meet your needs.
            </>
          </Text>
          <a href="https://forms.gle/LNWMEL59EvRHchmH8" target="blank">
            <Button className="flex h-[68px] min-w-[326px] flex-row items-center justify-center rounded-[14px] bg-teal-300 px-6 text-center text-[33.03px] text-white-a700 md:text-[31px] sm:px-5 sm:text-[29px] growUpButton">
              Get a quote today
            </Button>
          </a>
          <div className="mx-4 flex flex-col items-center gap-[52px] self-stretch md:mx-0 sm:gap-[26px]">
            <Text
              size="text12xl"
              as="p"
              className="self-start text-[39.93px] font-normal italic text-black-900 md:text-[37px] sm:text-[35px]"
            >
              Some of the Places We Serve:
            </Text>
            <div className=" flex w-full  md:mx-0 h-52">
              <Slider
                autoPlay={false}
                responsive={{
                  0: { items: 1 },
                  551: { items: 1 },
                  1051: { items: 1 },
                }}
                activeIndex={sliderState}
                ref={sliderRef}
                items={items}
                controlsStrategy="responsive"
                autoPlayInterval={5000}
                keyboardNavigation={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

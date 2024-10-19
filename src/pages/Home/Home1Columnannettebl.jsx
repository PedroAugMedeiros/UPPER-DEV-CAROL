import { Img, RatingBar, Text, Heading, Slider } from "../../components";
import React from "react";

export default function Home1Columnannettebl() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="relative mt-[20%] overflow-auto">
      <div className="mx-auto flex w-full">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{
            0: { items: 1 },
            551: { items: 1 },
            1051: { items: 1 },
          }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex gap-12 md:flex-col">
                <div className="flex w-full flex-col gap-[22px] md:px-5">
                  <div className="flex flex-col items-end">
                    <Img
                      src="images/img_ellipse_21.png"
                      alt="Image"
                      className="relative z-[6] mr-[374px] h-[68px] w-[68px] rounded-[34px] object-cover md:mr-0"
                    />
                    <div className="relative mt-[-68px] flex items-center justify-end self-stretch md:flex-col">
                      <div className="relative h-[274px] flex-1 md:w-full md:flex-none md:self-stretch">
                        <div className="absolute bottom-[-1px] left-2.5 m-auto flex h-[254px] w-[64%] items-end justify-center rounded-[24px] bg-[url(/public/images/img_group_363.svg)] bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                          <div className="mt-[42px] flex w-full flex-col gap-0.5">
                            <div className="flex flex-col items-start gap-4">
                              <Heading
                                as="h6"
                                className="font-bevietnampro text-[24px] font-semibold text-gray-900 md:text-[22px]"
                              >
                                Annette Black
                              </Heading>
                              <Text
                                as="p"
                                className="w-full font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700"
                              >
                                Outstanding deep cleaning service! Every corner
                                of our home is spotless. The team was meticulous
                                and went above and beyond. Highly recommend for
                                thorough cleanings!
                              </Text>
                            </div>
                            <Img
                              src="images/img_five_star.svg"
                              alt="Image"
                              className="h-[16px] w-[30%] object-contain"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_ellipse_18.png"
                          alt="Image"
                          className="absolute left-[-3px] top-0 m-auto h-[68px] w-[68px] rounded-[34px] object-cover"
                        />
                      </div>
                      <div className="relative z-[5] ml-[-180px] flex w-[38%] flex-col gap-0.5 rounded-[24px] bg-blue_gray-100_01 px-[26px] py-6 md:ml-0 md:w-full sm:p-5">
                        <div className="ml-1.5 mt-[38px] flex flex-col items-start gap-3 md:ml-0">
                          <Heading
                            as="h4"
                            className="font-bevietnampro text-[24px] font-semibold text-gray-900 md:text-[22px]"
                          >
                            Theresa Webb
                          </Heading>
                          <Text
                            as="p"
                            className="w-full font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700"
                          >
                            Impressive job! Our living room looks refreshed, and
                            the carpets are spotless. The attention to detail in
                            the kitchen and bathroom is outstanding. Highly
                            satisfied with the results!
                          </Text>
                        </div>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#fbbc05"
                          activeColor="#fbbc05"
                          size={16}
                          className="ml-1.5 flex gap-2.5 md:ml-0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Img
                      src="images/img_ellipse_20.png"
                      alt="Image"
                      className="relative z-[8] mr-[374px] h-[68px] w-[68px] rounded-[34px] object-cover md:mr-0"
                    />
                    <div className="relative mt-[-68px] flex items-center justify-end self-stretch md:flex-col">
                      <div className="relative h-[274px] flex-1 md:w-full md:flex-none md:self-stretch">
                        <div className="absolute bottom-[-1px] left-3.5 m-auto flex h-[254px] w-[64%] items-end justify-center rounded-[24px] bg-[url(/public/images/img_group_363.svg)] bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                          <div className="mt-[42px] flex w-full flex-col gap-0.5">
                            <div className="flex flex-col items-start gap-4">
                              <Heading
                                as="h4"
                                className="font-bevietnampro text-[24px] font-semibold text-gray-900 md:text-[22px]"
                              >
                                Jane Cooper
                              </Heading>
                              <Text
                                as="p"
                                className="w-full font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700"
                              >
                                Fantastic move-in cleaning! Our new home was
                                spotless and ready to move into. The team did an
                                amazing job making everything feel fresh and
                                welcoming.
                              </Text>
                            </div>
                            <Img
                              src="images/img_five_star.svg"
                              alt="Image"
                              className="h-[16px] w-[30%] object-contain"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_ellipse_19.png"
                          alt="Image"
                          className="absolute left-0 top-0 m-auto h-[68px] w-[68px] rounded-[34px] object-cover"
                        />
                      </div>
                      <div className="relative z-[7] ml-[-178px] flex w-[38%] flex-col gap-0.5 rounded-[24px] bg-blue_gray-100_01 px-[26px] py-6 md:ml-0 md:w-full sm:p-5">
                        <div className="ml-1.5 mt-10 flex flex-col items-start gap-2.5 md:ml-0">
                          <Heading
                            as="h4"
                            className="font-bevietnampro text-[24px] font-semibold text-gray-900 md:text-[22px]"
                          >
                            Arlene McCoy
                          </Heading>
                          <Text
                            as="p"
                            className="w-full font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700"
                          >
                            Our home has never looked better! The kitchen is
                            sparkling clean, and the bathrooms are pristine. The
                            team did an incredible job with every detail. We
                            couldn&#39;t be happier!
                          </Text>
                        </div>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#fbbc05"
                          activeColor="#fbbc05"
                          size={16}
                          className="ml-1.5 flex gap-2.5 md:ml-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[50%] overflow-x-scroll md:w-full md:px-5">
                  <div className="flex w-[942px] items-center md:flex-col">
                    <div className="mt-1 flex w-full flex-col gap-[26px]">
                      <div className="relative h-[270px]">
                        <div className="absolute bottom-0 left-0 right-0 my-auto ml-3 mr-[26px] flex flex-1 flex-col gap-[26px] rounded-[24px] bg-blue_gray-100_01 px-[26px] py-6 md:mx-0 sm:p-5">
                          <div className="ml-1.5 mt-10 flex flex-col items-start gap-2.5 md:ml-0">
                            <Heading
                              as="h4"
                              className="font-bevietnampro text-[24px] font-semibold text-gray-900 md:text-[22px]"
                            >
                              Ralph Edwards
                            </Heading>
                            <Text
                              as="p"
                              className="w-full font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700"
                            >
                              Great service! They deliver on their promises.
                              Since starting regular cleanings, time with my
                              family has become even more precious.{" "}
                            </Text>
                          </div>
                          <RatingBar
                            value={5}
                            isEditable={true}
                            color="#fbbc05"
                            activeColor="#fbbc05"
                            size={16}
                            className="ml-1.5 flex gap-2.5 md:ml-0"
                          />
                        </div>
                        <Img
                          src="images/img_ellipse_18_68x68.png"
                          alt="Image"
                          className="absolute left-0 top-0 m-auto h-[68px] w-[68px] rounded-[34px] object-cover"
                        />
                      </div>
                      <div className="relative h-[270px]">
                        <div className="absolute bottom-0 left-0 right-0 my-auto ml-3 mr-6 flex flex-1 flex-col gap-[50px] rounded-[24px] bg-blue_gray-100_01 px-[26px] py-6 md:mx-0 sm:p-5">
                          <div className="ml-1.5 mt-[38px] flex flex-col items-start gap-3 md:ml-0">
                            <Heading
                              as="h4"
                              className="font-bevietnampro text-[24px] font-semibold text-gray-900 md:text-[22px]"
                            >
                              Eleanor Pena
                            </Heading>
                            <Text
                              as="p"
                              className="font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700"
                            >
                              <>
                                Fantastic job! They exceed <br />
                                expectations every time.
                              </>
                            </Text>
                          </div>
                          <RatingBar
                            value={5}
                            isEditable={true}
                            color="#fbbc05"
                            activeColor="#fbbc05"
                            size={16}
                            className="ml-1.5 flex gap-2.5 md:ml-0"
                          />
                        </div>
                        <Img
                          src="images/img_ellipse_19_68x68.png"
                          alt="Image"
                          className="absolute left-0 top-0 m-auto h-[68px] w-[68px] rounded-[34px] object-cover"
                        />
                      </div>
                    </div>
                    <div className="relative h-[566px] w-full">
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end">
                        <div className="relative z-[11] flex h-[254px] w-[92%] items-end justify-center rounded-[24px] bg-[url(/public/images/img_group_363.svg)] bg-cover bg-no-repeat p-6 md:h-auto md:w-full sm:p-5">
                          <div className="mt-[38px] flex w-full flex-col gap-[26px]">
                            <div className="flex flex-col items-start gap-3">
                              <Heading
                                as="h4"
                                className="font-bevietnampro text-[24px] font-semibold text-gray-900 md:text-[22px]"
                              >
                                Jacob Jones
                              </Heading>
                              <Text
                                as="p"
                                className="w-full font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700"
                              >
                                Great job on our office cleaning! The team was
                                prompt and thorough, leaving our workspace
                                spotless. Highly recommend!
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#fbbc05"
                              activeColor="#fbbc05"
                              size={16}
                              className="flex gap-2.5"
                            />
                          </div>
                        </div>
                        <div className="relative mt-[-236px] flex items-center self-stretch sm:flex-col">
                          <Img
                            src="images/img_ellipse_20_68x68.png"
                            alt="Image"
                            className="relative z-10 mb-[200px] h-[68px] w-[68px] self-end rounded-[34px] object-cover sm:w-full sm:self-auto"
                          />
                          <div className="relative ml-[-56px] flex-1 sm:ml-0 sm:self-stretch">
                            <div className="relative z-[9] mx-5 flex flex-col items-end gap-[260px] md:mx-0 md:gap-[195px] sm:gap-[130px]">
                              <Img
                                src="images/img_google_symbol_svg.svg"
                                alt="Googlesymbol"
                                className="h-[36px] w-[36px]"
                              />
                              <Img
                                src="images/img_google_symbol_svg.svg"
                                alt="Googlesymbol"
                                className="h-[36px] w-[36px]"
                              />
                            </div>
                            <div className="relative mt-[-52px] h-[254px] rounded-[24px] bg-[url(/public/images/img_group_363.svg)] bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                              <div className="mt-10 flex flex-col gap-[50px]">
                                <div className="flex flex-col items-start gap-2.5">
                                  <Heading
                                    as="h4"
                                    className="font-bevietnampro text-[24px] font-semibold text-gray-900 md:text-[22px]"
                                  >
                                    Kathryn Murphy
                                  </Heading>
                                  <Text
                                    as="p"
                                    className="font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700"
                                  >
                                    <>
                                      Impressive office cleaning! <br />
                                      The space looks great.
                                    </>
                                  </Text>
                                </div>
                                <RatingBar
                                  value={5}
                                  isEditable={true}
                                  color="#fbbc05"
                                  activeColor="#fbbc05"
                                  size={16}
                                  className="flex gap-2.5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_ellipse_21_68x68.png"
                        alt="Image"
                        className="absolute left-[26px] top-0 z-[12] m-auto h-[68px] w-[68px] rounded-[34px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
    </div>
  );
}

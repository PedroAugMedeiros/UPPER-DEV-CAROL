import { Helmet } from "react-helmet";
import { Text, Button, Heading, Img, SelectBox, Input } from "../../components";
import EcoFriendlyProductDescription from "../../components/EcoFriendlyProductDescription";
import FeatureList from "../../components/FeatureList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home1ColumnFifteen from "./Home1ColumnFifteen";
import Home1Columnannettebl from "./Home1Columnannettebl";
import Home1RowEight from "./Home1RowEight.jsx";
import Home1RowFive from "./Home1RowFive";
import Home1RowSix from "./Home1RowSix";
import Home1RowThree from "./Home1RowThree";
import Home1Rowcommercial from "./Home1Rowcommercial";
import Home1Rowcontactinfo from "./Home1Rowcontactinfo";
import React, { useEffect, useState } from "react";
import { MenuTypeServices } from "../../components/MenuTypeServices";
import { MenuFrequencyServices } from "../../components/MenuFrequencyServices";
import { useNavigate } from "react-router-dom";
import { Scroll } from "../../components/ScrollInfiny/Scroll/index.jsx";
import AboutusPage from "../../pages/Aboutus/index";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const rowSix = [
  "Professional Service",
  "Trustworthy Team",
  "Reliable Results",
  "Customer Focused",
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

export default function Home1Page() {
  const [defaultDate, setDefaultDate] = useState("");
  const [sliderState, setSliderState] = useState(false);
  const [sliderRef, setSlider] = useState(1);
  const [isHover, setIsHover] = useState(false);
  const [action, setAction] = useState("");
  const [menuOpenTypes, setMenuOpenTypes] = useState(false);
  const [menuOpenFrequencys, setMenuOpenFrequencys] = useState(false);
  const navigate = useNavigate();

  let yourDate = new Date();
  let actualDate = yourDate;

  const handleHoverEnter = () => {
    setAction("enter");
  };

  const handleClick = (value) => {
    if (value === "FREQUENCY") {
      setMenuOpenFrequencys(!menuOpenFrequencys);
    } else {
      setMenuOpenTypes(!menuOpenTypes);
    }
  };

  const handleHoverLeave = () => {
    setAction("leave");
  };

  useEffect(() => {
    defaultDate == "" &&
      setDefaultDate(new Date().toISOString().substring(0, 16));
  }, [defaultDate]);

  const goToAboutUs = () => {
    navigate(<AboutusPage />);
  };

  return (
    <>
      <Helmet>
        <title>Home 7</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-200 ">
        <div className="flex flex-col items-center">
          <div className="relative h-[1868px] self-stretch">
            <div className="absolute left-0 right-0 top-[5%] m-auto flex flex-1 flex-col items-end">
              <Img
                src="images/img_rectangle_102.png"
                alt="Image"
                className="h-[792px] w-full object-cover md:h-auto"
              />
              <Img
                src="images/img_image_2.png"
                alt="Imagetwo"
                className="relative mt-[-488px] h-[1056px] w-[42%] object-contain opacity-50"
              />
            </div>
            <Img
              src="images/img_ellipse_9.png"
              alt="Image"
              className="absolute left-0 top-[5%] m-auto h-[1342px] w-[52%] object-contain"
            />
            <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 flex-col items-start">
              <Header />
              <div className="relative mt-[-96px] flex h-[1702px] w-[88%] flex-col items-center bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat px-14 py-[186px] md:h-auto md:w-full md:p-5">
                <div className="mb-[822px] flex w-[86%] flex-col items-start gap-7 md:w-full">
                  <div className="flex flex-col items-start self-stretch py-[22px] sm:py-5">
                    <Text
                      size="text15xl"
                      as="p"
                      className="mt-1.5 w-[66%] font-dmserifdisplay text-[70.77px] font-normal leading-[64px] text-gray-900_01 md:w-full md:text-[48px]"
                    >
                      Leave the cleaning to us and get some rest.
                    </Text>
                    <Text
                      size="text10xl"
                      as="p"
                      className="mt-4 text-[35.4px] font-normal text-gray-900_01 md:text-[33px] sm:text-[31px]"
                    >
                      520 the solution for your rest!
                    </Text>
                    <Text
                      size="text4xl"
                      as="p"
                      className="w-[76%] text-[25.15px] font-normal leading-[37px] text-blue_gray-700_01 md:w-full md:text-[23px] sm:text-[21px]"
                    >
                      <>
                        Welcome to 520 Cleaning Solutions, where we dedicate our
                        care and expertise to transform your space. Committed to
                        excellence, we provide cleaning services tailored to
                        your specific needs, ensuring a consistently spotless
                        and welcoming environment. <br />
                        Trust us to handle the details while you enjoy the best
                        things in life.
                      </>
                    </Text>
                  </div>

                  <a
                    class="md:w-[60%] z-10"
                    href="https://forms.gle/LNWMEL59EvRHchmH8"
                    target="blank"
                  >
                    <Button
                      className={`${
                        action === "enter" ? "growup" : "bg-teal-300"
                      }
                        ${
                          action === "leave" ? "growdown" : "bg-teal-300"
                        } flex h-[56px] min-w-[242px] flex-row items-center justify-center rounded-[10px]  px-[18px] text-center text-[26.83px] text-gray-200 md:text-[24px] sm:text-[22px] z-0`}
                      onMouseEnter={handleHoverEnter}
                      onMouseLeave={handleHoverLeave}
                    >
                      Request a quote
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute bottom-px left-0 right-0 m-auto flex flex-1 flex-col items-end">
              <Img
                src="images/img_3_1.png"
                alt="Image"
                className="relative z-[2] h-[936px] w-[42%] object-contain"
              />
              <div className="relative mt-[-144px] flex flex-col items-center justify-end self-stretch bg-gray-200 py-5">
                <div className=" mt-[610px] flex flex-col items-start gap-[62px] md:px-5 sm:gap-[31px] w-[80%]">
                  <div className="mr-[570px] flex gap-14 w-[60%] md:mr-0 md:flex-col">
                    <FeatureList className="w-[56%]" />
                    <FeatureList
                      vettedText="Affordable Prices"
                      reliableText="Best Quality"
                      standardText="Dedicate care"
                      className="flex w-[50%] justify-around"
                    />
                  </div>
                  <Button
                    onClick={goToAboutUs}
                    className={`${action === "enter" ? "growup" : "bg-teal-300"}
                        ${
                          action === "leave" ? "growdown" : "bg-teal-300"
                        } flex h-[60px] min-w-[240px] flex-row items-center justify-center rounded-[12px] bg-teal-300 px-5 text-center text-[28.89px] text-white-a700 md:text-[26px] sm:text-[24px]`}
                    onMouseEnter={handleHoverEnter}
                    onMouseLeave={handleHoverLeave}
                  >
                    More About Us
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[21%] left-0 right-0 m-auto flex w-[80%] flex-col items-start gap-2.5">
              <Heading
                size="heading7xl"
                as="h1"
                className="font-bevietnampro text-[63px] font-semibold text-gray-900 md:text-[48px]"
              >
                About Our Company!
              </Heading>
              <Text
                size="textxl"
                as="p"
                className="w-[68%] font-bevietnampro text-[22.91px] font-normal leading-[160%] text-gray-700 md:w-full md:px-5"
              >
                <>
                  520 Cleaning Solutions has been dedicated to providing a
                  clean, balanced, and welcoming environment for your families.{" "}
                  <br />
                  <br />
                  With seven years of experience, our mission is to allow our
                  clients to focus on precious moments with their loved ones
                  while we take care of the cleaning with love and care.{" "}
                </>
              </Text>
            </div>
            <div className="container-xs absolute bottom-0 left-0 right-0 top-0 z-[3] my-auto flex h-max justify-center px-[50px] md:px-5">
              <div className="flex w-full flex-col gap-7 rounded-[10px] border-[1.2px] border-solid border-white-a700 bg-white-a700 p-[18px] shadow-sm">
                <div className="flex gap-7 md:flex-col">
                  <div
                    className="selectServices cursor-pointer flex flex h-[64px] w-full items-center justify-center rounded border-[1.2px] border-solid border-blue_gray-700 px-[18px] font-roboto text-[16.73px] tracking-[0.30px] text-teal-300"
                    onClick={() => handleClick("TYPES")}
                  >
                    <h1 className="flex flex h-[64px] w-full items-center justify-start  font-roboto text-[16.73px] tracking-[0.30px] text-teal-300 cursor-pointer">
                      Type of Services
                    </h1>
                    <Img
                      src="images/Icons/iconSetting.svg"
                      alt="Arrowdown"
                      className={` iconTypeServices`}
                    />
                    {menuOpenTypes ? <MenuTypeServices /> : null}
                  </div>
                  <input
                    name="address"
                    placeholder={`Contact Method`}
                    className="flex h-[64px] w-full items-center justify-center rounded border-[1.2px] border-solid border-blue_gray-700 px-[18px] font-roboto text-[16.73px] tracking-[0.30px] text-teal-300"
                  />

                  <input
                    name="address"
                    placeholder={`Your Adress`}
                    className="flex h-[64px] w-full items-center justify-center rounded border-[1.2px] border-solid border-blue_gray-700 px-[18px] font-roboto text-[16.73px] tracking-[0.30px] text-teal-300"
                  />
                </div>
                <div className="flex gap-7 md:flex-col">
                  <input
                    id="datePicker"
                    name="address"
                    type="datetime-local"
                    onChange={(e) => setDefaultDate(e.target.value)}
                    value={defaultDate}
                    className="flex h-[64px] w-full items-center justify-center rounded border-[1.2px] border-solid border-blue_gray-700 px-[18px] font-roboto text-[16.73px] tracking-[0.30px] text-teal-300"
                  />
                  <div
                    className="selectServices cursor-pointer flex flex h-[64px] w-full items-center justify-center rounded border-[1.2px] border-solid border-blue_gray-700 px-[18px] font-roboto text-[16.73px] tracking-[0.30px] text-teal-300"
                    onClick={() => handleClick("FREQUENCY")}
                  >
                    <h1 className="flex flex h-[64px] w-full items-center justify-start  font-roboto text-[16.73px] tracking-[0.30px] text-teal-300 cursor-pointer">
                      Services Frequency
                    </h1>
                    <Img
                      src="./images/Icons/iconSetting.svg"
                      alt="Arrowdown"
                      className={`iconTypeServices`}
                    />
                    {menuOpenFrequencys ? <MenuFrequencyServices /> : null}
                  </div>
                  <Button className="flex h-[64px] w-full items-center justify-center rounded border-[1.2px] border-solid border-blue_gray-700 px-[18px] font-roboto text-[16.73px] tracking-[0.30px]  bg-teal-300 text-center font-typold text-[19.12px] font-medium text-gray-50_01 sm:px-5">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Home1RowThree />
          <Home1Rowcommercial />
          <Home1RowFive />
          <Scroll side={"left"} images={rowSix} speed={6000} />
          <Home1RowEight />
          <div className="mt-1.5 self-stretch justify-start">
            <div className="flex flex-col items-center justify-start">
              <div className="container-xs relative z-[3] flex flex-col items-start pl-[386px] pr-14 md:px-5 justify-start">
                <Img
                  src="images/img_design_sem_nome.png"
                  alt="Designsemnome"
                  className="absolute self-start place-self-start right-30 mt-10 mr-6 h-[308px] w-[52%] object-contain md:mr-0 fixDiv"
                />
              </div>

              <div className="mb-10 flex flex-col items-center gap-48 md:gap-36 sm:gap-24">
                <div className="h-[104px] self-stretch bg-[url(/public/images/img_group_4.png)] bg-cover bg-no-repeat py-[26px] md:h-auto sm:py-5">
                  <div className="flex justify-center overflow-x-scroll md:flex-col">
                    <div className="flex w-[352px] px-2.5 md:px-5">
                      <Text
                        size="text8xl"
                        as="p"
                        className="bg-gradient bg-clip-text text-[32.36px] font-normal text-transparent md:text-[30px] sm:text-[28px]"
                      >
                        Professional Service
                      </Text>
                    </div>
                    <div className="flex w-[1086px] flex-1 justify-center md:flex-col md:self-stretch md:px-5">
                      <Text
                        size="text8xl"
                        as="p"
                        className="bg-gradient bg-clip-text text-[32.36px] font-normal text-transparent md:text-[30px] sm:text-[28px]"
                      >
                        Trustworthy Team
                      </Text>
                      <div className="flex w-[72%] justify-end md:w-full sm:flex-col">
                        <Text
                          size="text8xl"
                          as="p"
                          className="bg-gradient bg-clip-text text-[32.36px] font-normal text-transparent md:text-[30px] sm:text-[28px]"
                        >
                          Reliable Results
                        </Text>
                        <div className="flex">
                          <Text
                            size="text8xl"
                            as="p"
                            className="bg-gradient bg-clip-text text-[32.36px] font-normal text-transparent md:text-[30px] sm:text-[28px]"
                          >
                            Customer Focused
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Scroll side={"right"} images={rowSix} speed={6000} />
                <div className="container-xs md:px-5">
                  <div>
                    <div className="mr-2 flex flex-col gap-[102px] md:mr-0 md:gap-[76px] sm:gap-[51px]">
                      <div>
                        <div className="flex gap-20 md:flex-col">
                          <EcoFriendlyProductDescription />
                          <EcoFriendlyProductDescription
                            titleText="Customized Cleaning:"
                            descriptionText="We understand that every home is unique. Our team will work with you to develop a customized cleaning plan that meets your specific needs and preferences."
                            className="mb-9 md:mb-0"
                          />
                        </div>
                        <div className="ml-[156px] mr-[180px] mt-[52px] flex flex-col items-center gap-3 md:mx-0">
                          <Heading
                            size="heading6xl"
                            as="h2"
                            className="font-bevietnampro text-[48px] font-bold text-teal-300_01 md:text-[44px] sm:text-[38px]"
                          >
                            Cross-Contamination Prevention:
                          </Heading>
                          <Text
                            size="textxl"
                            as="p"
                            className="self-stretch text-center font-roboto text-[22.91px] font-normal leading-[160%] text-black-900"
                          >
                            At 520 Cleaning Solutions, we take cleanliness
                            seriously. We use different cleaning cloths for each
                            area of your home to prevent cross-contamination.
                            Additionally, all our cleaning cloths are washed and
                            sanitized after each use to maintain the highest
                            hygiene standards.
                          </Text>
                        </div>
                        <div className="ml-[68px] mr-[86px] mt-[236px] flex flex-col items-center gap-[108px] md:mx-0 md:gap-[81px] sm:gap-[54px]">
                          <div className="self-stretch">
                            <div className="flex flex-col gap-[52px] sm:gap-[26px]">
                              <div className="flex gap-[30px] md:flex-col">
                                <div className="flex flex-1 items-center gap-6 md:flex-col md:self-stretch">
                                  <div className="flex w-[26%] justify-center rounded-[92px] border-[1.16px] border-dashed border-black-900 p-2 md:w-full">
                                    <div className="w-full rounded-[84px] bg-teal-300 p-[42px] md:p-5">
                                      <Img
                                        src="images/img_calendar.svg"
                                        alt="Calendar"
                                        className="h-[82px] w-[82px]"
                                      />
                                    </div>
                                  </div>
                                  <div className="h-[3.47px] flex-1 bg-gray-600 md:self-stretch" />
                                  <Img
                                    src="images/img_group_158.svg"
                                    alt="Image"
                                    className="h-[186px] w-[26%] object-contain md:w-full"
                                  />
                                  <div className="h-[3.47px] flex-1 bg-gray-600 md:self-stretch" />
                                </div>
                                <div className="flex w-[18%] justify-center rounded-[92px] border-[1.16px] border-dashed border-black-900 p-2 md:w-full">
                                  <div className="w-full rounded-[84px] bg-teal-300 px-[38px] py-10 sm:p-5">
                                    <div className="flex flex-col gap-1.5">
                                      <div className="flex items-center justify-end gap-[9px]">
                                        <Img
                                          src="images/img_signal.svg"
                                          alt="Signal"
                                          className="h-[24px] self-end"
                                        />
                                        <Img
                                          src="images/img_signal_gray_200.svg"
                                          alt="Signal"
                                          className="h-[46px]"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_user.svg"
                                        alt="User"
                                        className="h-[36px]"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mr-[26px] flex items-center gap-5 md:mr-0 md:flex-col">
                                <div className="flex w-full flex-col items-start gap-2.5">
                                  <Heading
                                    size="headinglg"
                                    as="h3"
                                    className="font-bevietnampro text-[23.12px] font-semibold text-gray-900_02 md:text-[21px]"
                                  >
                                    Book
                                  </Heading>
                                  <Text
                                    size="textmd"
                                    as="p"
                                    className="font-bevietnampro text-[18.49px] font-normal leading-[150%] text-gray-700"
                                  >
                                    <>
                                      Tell us when and where you <br />
                                      want your cleaning
                                    </>
                                  </Text>
                                </div>
                                <div className="flex w-full flex-col items-center gap-2">
                                  <Heading
                                    size="headinglg"
                                    as="h4"
                                    className="font-bevietnampro text-[23.12px] font-semibold text-gray-900_02 md:text-[21px]"
                                  >
                                    Cleaning
                                  </Heading>
                                  <Text
                                    size="textmd"
                                    as="p"
                                    className="self-stretch text-center font-bevietnampro text-[18.49px] font-normal leading-[150%] text-gray-700"
                                  >
                                    A professional cleaner comes over and cleans
                                    your place.
                                  </Text>
                                </div>
                                <div className="flex w-full flex-col items-end gap-2.5">
                                  <Heading
                                    size="headinglg"
                                    as="h5"
                                    className="font-bevietnampro text-[23.12px] font-semibold text-gray-900_02 md:text-[21px]"
                                  >
                                    Freedom
                                  </Heading>
                                  <Text
                                    size="textmd"
                                    as="p"
                                    className="w-[84%] text-right font-bevietnampro text-[18.49px] font-normal leading-[150%] text-gray-700 md:w-full"
                                  >
                                    Enjoy your life and come back to a clean
                                    space.
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="https://forms.gle/LNWMEL59EvRHchmH8"
                            target="blank"
                          >
                            <Button
                              id="TestimonialsTarget"
                              className="flex h-[68px] min-w-[412px] flex-row items-center justify-center rounded-[14px] bg-teal-300 px-6 text-center text-[33.03px] text-white-a700 md:text-[31px] sm:px-5 sm:text-[29px] growUpButton"
                            >
                              Get a free estimate now
                            </Button>
                          </a>
                        </div>
                      </div>
                      <div
                        id=""
                        className=" ml-72 mr-[268px] flex flex-col items-center md:mx-0"
                      >
                        <Text
                          id=""
                          size="text16xl"
                          as="p"
                          className=" font-dmserifdisplay text-[107.79px] font-normal text-black-900_28 md:text-[48px]"
                        >
                          Testimonials
                        </Text>
                        <Text
                          size="text5xl"
                          as="p"
                          className="relative mt-[-16px] text-[26.16px] font-normal capitalize text-gray-800 md:text-[24px] sm:text-[22px]"
                        >
                          Join Our List of Satisfied Customers!
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* </div> */}
            </div>
            <Home1Columnannettebl />
          </div>

          <div className="container-xs mt-[46px] flex flex-col items-end pl-14 pr-[558px] md:px-5">
            <div className="flex items-center justify-center">
              {[...Array(3)].map((_, i) => (
                <>
                  {sliderState >=
                    i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
                  sliderState <
                    (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1) ? (
                    <div
                      onClick={() => {
                        sliderRef?.current?.slideTo(
                          i * sliderRef?.current?.state?.itemsInSlide
                        );
                      }}
                      className="mr-[2.73px] inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-blue_gray-400"
                    />
                  ) : (
                    <div
                      onClick={() => {
                        sliderRef?.current?.slideTo(
                          i * sliderRef?.current?.state?.itemsInSlide
                        );
                      }}
                      className="mr-[2.73px] inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-blue_gray-100_01"
                    />
                  )}
                </>
              ))}
            </div>
          </div>
          <Home1ColumnFifteen />
          <Home1Rowcontactinfo />
          <Footer />
        </div>
      </div>
    </>
  );
}

import { Button, Img, Text, Heading, Slider } from "../../components";
import React from "react";

export default function Home1Rowcommercial() {
  const [sliderState, setSliderState] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(0);
  const sliderRef = React.useRef(null);
  const slideContent = [
    {
      name: "Commercial cleaning",
      text: "Commercial cleaning ensures your workspace is always pristine and professional, making a great impression on clients and staff.",
      image: "images/img_image.png",
    },
    {
      name: "Regular cleaning",
      text: "Regular cleaning keeps your space consistently clean and organized, handling daily tasks for a comfortable and pleasant environment.",
      image: "images/regular_cleaning.svg",
    },
    {
      name: "Deep cleaning",
      text: "Deep cleaning revitalizes your home with a thorough and detailed clean, perfect for moving in or a total refresh.",
      image: "images/img_image_1.png",
    },
    {
      name: "Move in cleaning",
      text: "Move-in cleaning ensures your new home is perfectly clean and ready for occupancy, providing a fresh and welcoming environment from day one.",
      image: "images/move_in_cleaning.svg",
    },
    {
      name: "Move out cleaning",
      text: "Move-out cleaning leaves your old space spotless and ready for new occupants, ensuring a smooth and worry-free transition.",
      image: "images/move_out_cleaning.svg",
    },
  ];

  const handleHoverEnter = ({ target }) => {
    target.classList.add("learnMoreImgHover");
  };

  const handleHoverLeave = ({ target }) => {
    target.classList.remove("learnMoreImgHover");
  };

  return (
    <div className="flex h-[870px] items-end justify-center self-stretch bg-[url(/public/images/img_group_401.png)] bg-cover bg-no-repeat px-14 py-[58px] md:h-auto md:p-5">
      <div className="mt-[72px] flex w-[90%] flex-col gap-20 md:w-full md:gap-[60px] sm:gap-10">
        <div className="mr-[22px] flex items-start justify-between gap-5 md:mr-0 md:flex-col">
          <Heading
            size="heading5xl"
            as="h2"
            className="w-[46%] self-center font-bevietnampro text-[44px] font-semibold capitalize leading-[120%] text-gray-900_02 md:w-full md:text-[40px] sm:text-[34px]"
          >
            We always provide the best service
          </Heading>
          <div className="flex w-[36%] flex-col items-start gap-2.5 md:w-full">
            <Heading
              size="headings"
              as="h3"
              className="font-bevietnampro text-[20px] font-semibold text-gray-900_02"
            >
              Services
            </Heading>
            <Text
              as="p"
              className="w-full font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700"
            >
              While we can customize your cleaning plan to suit your needs, most
              clients schedule services of:
            </Text>
          </div>
        </div>
        <div className="flex items-start justify-center md:flex-col">
          <div className="mx-auto mb-[30px] flex w-full gap-[30px] md:mx-0 md:flex-col md:self-stretch">
            <Slider
              autoPlay={true}
              autoPlayInterval={1000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                1051: { items: 3 },
              }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={slideContent.map((item) => (
                <React.Fragment key={Math.random()}>
                  <div className="px-[15px]">
                    <div className="flex flex-col gap-3.5">
                      <Img
                        src={item.image}
                        alt="Image"
                        className="h-[262px] rounded-[26.825px] object-cover"
                      />
                      <div className="flex flex-col justify-end items-start gap-6 self-stretch h-full">
                        <div className="flex flex-col  justify-end gap-2.5 self-stretch justify-center ml-[5%]">
                          <Heading
                            as="h4"
                            className="font-bevietnampro text-[24px] font-semibold text-gray-900 md:text-[22px]"
                          >
                            {item.name}
                          </Heading>
                          <Text
                            as="p"
                            className="h-full w-full font-bevietnampro text-[16px] font-normal leading-[150%] text-gray-700 ml-[1%]"
                          >
                            {item.text}
                          </Text>
                        </div>
                        <Button
                          onMouseEnter={(e) => handleHoverEnter(e)}
                          onMouseLeave={(e) => handleHoverLeave(e)}
                          rightIcon={
                            <div
                              alt="Arrow Left"
                              className={`learnMoreImg mb-0.5 h-[20px] w-[20px]`}
                            ></div>
                          }
                          className="LearnMoreButton flex h-[44px] min-w-[158px] flex-row items-center justify-center gap-2.5 rounded-md border border-solid border-gray-700 px-[19px] text-center font-bevietnampro text-[16px] text-gray-900 ml-[5%] mt-[5%] bottom-4"
                        >
                          Learn more{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <Button
            onClick={() => {
              sliderRef?.current?.slideNext();
            }}
            className="relative ml-[-28px] mt-[104px] flex h-[52px] w-[52px] items-center justify-center rounded-[26px] bg-teal-300 px-1 md:ml-0"
          >
            <Img src="images/img_arrow_left_white_a700_1.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Img, RatingBar, Text, Heading, Slider } from "../../components";
import React from "react";

export default function Home1Columnannettebl() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="  flex mt-0">
      <div className="flex w-full mt-0">
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
          className="m-0 p-0 mt-0"
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <section className="flex  md:flex-col  w-[100%]  justify-between">
                <div className="  flex-row w-[25%]">
                  <Img
                    src="images/img_ellipse_18.png"
                    alt="Image"
                    className="absolute    h-[68px] w-[68px] rounded-[34px]  "
                  />
                  <section className="flex flex-col p-5  bg-[#D9D9D9] w-[90%] ml-5 mt-5 pl-10 rounded-[25px]  ">
                    <Heading
                      as="h6"
                      className="font-bevietnampro  font-semibold text-gray-900 md:text-[22px] mt-5 mb-5"
                    >
                      Annette Black
                    </Heading>
                    <Text
                      as="p"
                      className="w-[100%] font-bevietnampro text-[16px] font-normal  text-gray-700 text-lg"
                    >
                      Outstanding deep cleaning service! Every corner of our
                      home is spotless. The team was meticulous and went above
                      and beyond. Highly recommend for thorough cleanings!
                    </Text>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fbbc05"
                      activeColor="#fbbc05"
                      size={25}
                      className="flex gap-2.5 w-[50%]"
                    />
                  </section>
                </div>
                <div className="  flex-row w-[25%]">
                  <Img
                    src="images/img_ellipse_21.png"
                    alt="Image"
                    className="absolute    h-[68px] w-[68px] rounded-[34px]  "
                  />
                  <section className="flex flex-col p-5  bg-[#D9D9D9] w-[90%] ml-5 mt-5 pl-10 rounded-[25px]  ">
                    <Heading
                      as="h6"
                      className="font-bevietnampro  font-semibold text-gray-900 md:text-[22px] mt-5 mb-5"
                    >
                      Theresa Webb
                    </Heading>
                    <Text
                      as="p"
                      className="w-[100%] font-bevietnampro text-[16px] font-normal  text-gray-700 text-lg"
                    >
                      Impressive job! Our living room looks refreshed, and the
                      carpets are spotless. The attention to detail in the
                      kitchen and bathroom is outstanding. Highly satisfied with
                      the results!
                    </Text>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fbbc05"
                      activeColor="#fbbc05"
                      size={25}
                      className="flex gap-2.5 w-[50%]"
                    />
                  </section>
                </div>
                <div className="  flex-row w-[25%]">
                  <Img
                    src="images/img_ellipse_18_68x68.png"
                    alt="Image"
                    className="absolute    h-[68px] w-[68px] rounded-[34px]  "
                  />
                  <section className="flex flex-col p-5  bg-[#D9D9D9] w-[90%] ml-5 mt-5 pl-10 rounded-[25px]  self-stretch h-[95%] justify-between">
                    <Heading
                      as="h6"
                      className="font-bevietnampro  font-semibold text-gray-900 md:text-[22px] mt-5 mb-5"
                    >
                      Ralph Edwards
                    </Heading>
                    <Text
                      as="p"
                      className="w-[100%] font-bevietnampro text-[16px] font-normal  text-gray-700 text-lg"
                    >
                      Great service! They deliver on their promises. Since
                      starting regular cleanings, time with my family has become
                      even more precious.
                    </Text>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fbbc05"
                      activeColor="#fbbc05"
                      size={25}
                      className="flex gap-2.5 w-[50%]"
                    />
                  </section>
                </div>
                <div className="  flex-row w-[25%]">
                  <Img
                    src="images/img_ellipse_21_68x68.png"
                    alt="Image"
                    className="absolute    h-[68px] w-[68px] rounded-[34px]  "
                  />
                  <section className="flex flex-col p-5  bg-[#D9D9D9] w-[90%] ml-5 mt-5 pl-10 rounded-[25px] self-stretch h-[95%] justify-between ">
                    <Heading
                      as="h6"
                      className="font-bevietnampro  font-semibold text-gray-900 md:text-[22px] mt-5 mb-5"
                    >
                      Jacob Jones
                    </Heading>
                    <Text
                      as="p"
                      className="w-[100%] font-bevietnampro text-[16px] font-normal  text-gray-700 text-lg"
                    >
                      Great job on our office cleaning! The team was prompt and
                      thorough, leaving our workspace spotless. Highly
                      recommend!
                    </Text>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fbbc05"
                      activeColor="#fbbc05"
                      size={25}
                      className="flex gap-2.5 w-[50%]"
                    />
                  </section>
                </div>
              </section>
              <section className="flex  md:flex-col  w-[100%]  justify-between mt-5">
                <div className="  flex-row w-[25%]">
                  <Img
                    src="images/img_ellipse_18.png"
                    alt="Image"
                    className="absolute    h-[68px] w-[68px] rounded-[34px]  "
                  />
                  <section className="flex flex-col p-5  bg-[#D9D9D9] w-[90%] ml-5 mt-5 pl-10 rounded-[25px] self-stretch h-[95%] justify-between ">
                    <Heading
                      as="h6"
                      className="font-bevietnampro  font-semibold text-gray-900 md:text-[22px] mt-5 mb-5"
                    >
                      Jane Cooper
                    </Heading>
                    <Text
                      as="p"
                      className="w-[100%] font-bevietnampro text-[16px] font-normal  text-gray-700 text-lg"
                    >
                      Fantastic move-in cleaning! Our new home was spotless and
                      ready to move into. The team did an amazing job making
                      everything feel fresh and welcoming.
                    </Text>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fbbc05"
                      activeColor="#fbbc05"
                      size={25}
                      className="flex gap-2.5 w-[50%]"
                    />
                  </section>
                </div>
                <div className="  flex-row w-[25%]">
                  <Img
                    src="images/img_ellipse_20.png"
                    alt="Image"
                    className="absolute    h-[68px] w-[68px] rounded-[34px]  "
                  />
                  <section className="flex flex-col p-5  bg-[#D9D9D9] w-[90%] ml-5 mt-5 pl-10 rounded-[25px]  ">
                    <Heading
                      as="h6"
                      className="font-bevietnampro  font-semibold text-gray-900 md:text-[22px] mt-5 mb-5 "
                    >
                      Arlene McCoy
                    </Heading>
                    <Text
                      as="p"
                      className="w-[100%] font-bevietnampro text-[16px] font-normal  text-gray-700 text-lg"
                    >
                      Our home has never looked better! The kitchen is sparkling
                      clean, and the bathrooms are pristine. The team did an
                      incredible job with every detail. We couldn't be happier!
                    </Text>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fbbc05"
                      activeColor="#fbbc05"
                      size={25}
                      className="flex gap-2.5 w-[50%]"
                    />
                  </section>
                </div>
                <div className="  flex-row w-[25%]">
                  <Img
                    src="images/img_ellipse_19_68x68.png"
                    alt="Image"
                    className="absolute    h-[68px] w-[68px] rounded-[34px]  "
                  />
                  <section className="flex flex-col p-5  bg-[#D9D9D9] w-[90%] ml-5 mt-5 pl-10 rounded-[25px] self-stretch h-[95%] justify-between ">
                    <Heading
                      as="h6"
                      className="font-bevietnampro  font-semibold text-gray-900 md:text-[22px] mt-5 mb-5"
                    >
                      Eleanor Pena
                    </Heading>
                    <Text
                      as="p"
                      className="w-[100%] font-bevietnampro text-[16px] font-normal  text-gray-700 text-lg"
                    >
                      Fantastic job! They exceed expectations every time.
                    </Text>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fbbc05"
                      activeColor="#fbbc05"
                      size={25}
                      className="flex gap-2.5 w-[50%]"
                    />
                  </section>
                </div>
                <div className="  flex-row w-[25%]">
                  <Img
                    src="images/img_ellipse_20_68x68.png"
                    alt="Image"
                    className="absolute    h-[68px] w-[68px] rounded-[34px]  "
                  />
                  <section className="flex flex-col p-5  bg-[#D9D9D9] w-[90%] ml-5 mt-5 pl-10 rounded-[25px] self-stretch h-[95%] justify-between ">
                    <Heading
                      as="h6"
                      className="font-bevietnampro  font-semibold text-gray-900 md:text-[22px] mt-5 mb-5"
                    >
                      Kathryn Murphy
                    </Heading>
                    <Text
                      as="p"
                      className="w-[100%] font-bevietnampro text-[16px] font-normal  text-gray-700 text-lg"
                    >
                      Impressive office cleaning! The space looks great.
                    </Text>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fbbc05"
                      activeColor="#fbbc05"
                      size={25}
                      className="flex gap-2.5 w-[50%]"
                    />
                  </section>
                </div>
              </section>
            </React.Fragment>
          ))}
        />
      </div>
    </div>
  );
}

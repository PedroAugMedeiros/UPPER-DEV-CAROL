import { Helmet } from "react-helmet";
import { Img, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CommercialCleaningPage from "./CommercialCleaningPage";
import React from "react";
import CommercialBanner from "./commercialCleaningBanner.svg";

export default function CommercialPage() {
  return (
    <>
      <Helmet>
        <title>Commercial Cleaning</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="relative  w-full content-center bg-gray-200 self-stretch">
        <div className="flex flex-1 flex-col self-strech">
          <Header />
          <CommercialCleaningPage />
          <div className="mx-auto mt-[142px] flex w-full max-w-[1112px] flex-col items-start gap-12 self-stretch md:px-5">
            <Heading
              size="headings"
              as="h1"
              className="w-full font-bevietnampro text-[22.91px] font-extrabold leading-[160%] text-gray-700"
            >
              <span>
                <>
                  100% Satisfaction Guarantee!
                  <br />
                </>
              </span>
              <span className="font-medium">
                Call us within 24 hours, and we will address any issues. We’re
                confident you’ll love our team and our work. Your home will be
                clean, smelling great, and you’ll have more time to spend on
                what truly matters.
              </span>
            </Heading>
            <a href="https://forms.gle/LNWMEL59EvRHchmH8">
              <Button className="flex h-[60px] min-w-[466px] flex-row items-center justify-center rounded-[12px] bg-teal-300 px-5 text-center text-[28.89px] text-white-a700 md:text-[26px] sm:text-[24px] growUpButton ">
                GET YOUR FREE ESTIMATE NOW
              </Button>
            </a>
          </div>
          <Footer />
        </div>
        <div className="absolute left-0 right-0 top-[2%] z-[9] m-auto flex flex-1 flex-col items-end">
          <Img
            src={CommercialBanner}
            alt="Commercialone"
            className="h-[730px] w-full object-cover md:h-auto"
          />
          <Img
            src="images/img_image_2.png"
            alt="Imagetwo"
            className="relative mt-[-390px] h-[1056px] w-[42%] object-contain opacity-50"
          />
        </div>
      </div>
    </>
  );
}

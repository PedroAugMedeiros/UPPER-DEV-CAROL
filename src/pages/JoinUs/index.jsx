import { Helmet } from "react-helmet";
import { Heading, Img, Button } from "../../components";
import { CheckBox } from "../../components/CheckBox";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TermsandconditionsRowlinetwentyon from "./TermsandconditionsRowlinetwentyon";
import React, { useState } from "react";

export default function TermsandconditionsPage() {
  const [action, setAction] = useState("");
  const handleHoverEnter = () => {
    setAction("enter");
  };

  const handleHoverLeave = () => {
    setAction("leave");
  };
  return (
    <>
      <Helmet>
        <title>Be part of our team</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <Header />
        <div className="flex flex-col items-center">
          <div className="relative h-full  self-stretch md:h-auto">
            <div className="mx-auto flex flex-1 flex-col items-center">
              <div className="flex flex-col items-end self-stretch">
                <TermsandconditionsRowlinetwentyon />
                <Img
                  src="images/img_image_2.png"
                  alt="Imagetwo"
                  className="relative mt-[-394px] h-[872px] w-[34%] object-contain opacity-50"
                />
              </div>
              <Heading
                size="headingxs"
                as="h2"
                className="flex flex-col mt-[-174px] w-[58%] font-bevietnampro text-[17.41px] font-extrabold leading-[160%] text-gray-700 md:w-full md:px-5 se"
              >
                <div className="main-container">
                  <span className="reliable-person-1">
                    Are You the Most Reliable Person You Know?
                    <br />
                    Join Our Team and Let Your Integrity Shine!
                    <br />
                    <br />
                    This role is made for you if:
                    <br />
                    <br /> •
                  </span>
                  <span className="hard-working">
                    You thrive on hard work and love making a difference in
                    people’s lives.
                    <br /> • You believe a job should be fulfilling, offering
                    more than just a paycheck.
                    <br /> • Honesty and integrity guide your every move—your
                    word is your bond.
                    <br /> • You see mistakes as stepping stones to improvement
                    and take ownership of them.
                    <br />
                  </span>
                  <span className="reliable-person-2">
                    <br />
                    If this sounds like you, keep reading—we can’t wait to meet
                    you!
                    <br />
                    <br />
                    But…
                    <br />
                    This might not be the right fit if:
                    <br />
                    <br /> •
                  </span>
                  <span className="hard-working-3">
                    You tend to bend the rules or cut corners.
                    <br /> • You struggle with maintaining insurance or reliable
                    transportation.
                    <br /> • Job-hopping is your thing, and you’re not looking
                    for a long-term fit.
                    <br /> • You prefer to work solo and aren’t a fan of
                    teamwork.
                    <br /> • You’re often late and don’t value punctuality.
                    <br /> • You think work should be dull and uninspiring.
                    <br />
                  </span>
                  <span className="excited-ready-apply">
                    <br />
                    Still excited and ready to bring your A-game? <br />
                    Then don’t wait—click APPLY NOW before these awesome
                    opportunities are filled!
                    <br />
                    <br />
                    We’re hiring a limited number of cleaners, and these spots
                    are reserved for dependable, enthusiastic individuals like
                    YOU who are ready to join an amazing team. Hit that “Apply
                    Now” button and let’s get started!
                  </span>
                </div>
              </Heading>
            </div>
            <Heading
              size="headingmd"
              as="h3"
              className="absolute left-0 right-0 top-[23%] m-auto w-[64%] font-bevietnampro text-[22.91px] font-extrabold leading-[160%] text-gray-700 mt-48"
            >
              Ready to join our passionate team and make a difference? Apply now
              and let's create something amazing together!
            </Heading>
            <a
              href="https://forms.gle/LNWMEL59EvRHchmH8"
              target="blank"
              className="flex  justify-center w-[15%] ml-[19%] mt-28  "
            >
              <Button
                className={`${action === "enter" ? "growup" : "bg-teal-300"}
                        ${
                          action === "leave" ? "growdown" : "bg-teal-300"
                        } flex h-[60px] min-w-[240px] flex-row items-center justify-center rounded-[12px] bg-teal-300 px-5 text-center text-[28.89px] text-white-a700 md:text-[26px] sm:text-[24px] w-[80%] `}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                APPLY NOW
              </Button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

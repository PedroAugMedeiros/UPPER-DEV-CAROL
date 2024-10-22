import { Heading, Button, TextArea, Input, Text } from "../../components";
import ContactInfo from "../../components/ContactInfo";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";

export default function Home1Rowcontactinfo() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const recaptchaRef = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // if (name === "" || email === "" || message === "") {
    //   alert("Preencha todos os campos");
    //   return;
    // }
    emailjs.init({
      publicKey: "YOUR_PUBLIC_KEY",
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: ["foo@emailjs.com", "bar@emailjs.com"],
        // The variable contains the email address
        watchVariable: "userEmail",
      },
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });

    emailjs.send(
      "service_8ovqbaj",
      "template_7476w6x",
      {
        from_name: name,
        message: message,
        email: email,
      },
      "y4V8jVNy0PQ9aRaQn"
    );

    // emailjs
    //   .sendForm("service_bj6cfqx", "template_7476w6x", templateParams)
    //   .then((response) => {
    //     console.log("Email sent successfully!");
    //     setName("");
    //     setMessage("");
    //     setEmail("");
    //   });
  };

  useEffect(() => {
    if (captchaChecked && name !== "" && email !== "" && message !== "") {
      setDisableSubmit(false);
    }
  }, [captchaChecked, name, email, message]);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="mt-[264px] flex items-start justify-center gap-8 self-stretch px-14 md:flex-col md:px-5">
      <form
        onSubmit={sendEmail}
        className="contactForm mb-[54px] flex flex-1 flex-col items-end gap-[46px] md:self-stretch "
      >
        <div className="flex w-[86%] flex-col items-center gap-2.5 md:w-full">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <Text
              size="textmd"
              as="p"
              className="font-bevietnampro text-[18.43px] font-normal text-gray-900"
            >
              Contact info
            </Text>
            <Heading
              size="heading4xl"
              as="h2"
              className="font-bevietnampro text-[41.47px] font-semibold text-gray-900 md:text-[37px] sm:text-[31px]"
            >
              <span>Keep In&nbsp;</span>
              <span>Touch</span>
            </Heading>
          </div>
          <Text
            size="textmd"
            as="p"
            className="font-bevietnampro text-[18.43px] font-normal leading-[150%] tracking-[-0.18px] text-gray-700"
          >
            <>
              We prioritize responding to your inquiries promptly to ensure you
              <br />
              receive the assistance you need in a timely manner
            </>
          </Text>
        </div>
        <div className="flex w-[86%] flex-col items-start justify-center gap-[34px] md:w-full">
          <div className="flex flex-col gap-[34px] self-stretch">
            {/* <Input
              type="text"
              name="user_name"
              placeholder={`Name`}
              className="flex h-[64px] items-center justify-center rounded border-[1.15px] border-solid border-gray-100_01 bg-white-a700 px-[22px] font-bevietnampro text-[18.43px] text-gray-700 shadow-md sm:px-5"
              value={name}
              onChange={(e) => setMessage(e.target.value)}
            /> */}
            <Input
              type="text"
              name="text"
              placeholder={`Name`}
              className="flex h-[64px] items-center justify-center rounded border-[1.15px] border-solid border-gray-100_01 bg-white-a700 px-[22px] font-bevietnampro text-[18.43px] text-gray-700 sm:px-5"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <Input
              type="email"
              name="user_email"
              placeholder={`Email`}
              className="flex h-[64px] items-center justify-center rounded border-[1.15px] border-solid border-gray-100_01 bg-white-a700 px-[22px] font-bevietnampro text-[18.43px] text-gray-700 sm:px-5"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <Input
              type="textarea"
              name="message"
              placeholder={`Message`}
              className="h-[100px] rounded border-[1.15px] border-solid border-gray-100_01 bg-white-a700 px-[22px] py-3 font-bevietnampro text-[18.43px] text-gray-700 sm:px-5"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </div>
          <ReCAPTCHA
            sitekey="6Lf_KmcqAAAAAGTBFtrxX-Z6OcC9mPjj1dgEN1QF"
            onChange={() => setCaptchaChecked(true)}
          />
          {disableSubmit ? (
            <button
              type="submit"
              value="Send"
              disabled={disableSubmit}
              className={`${
                disableSubmit ? "" : "sentEmailEnabled"
              }flex h-[48px] min-w-[178px] flex-row items-center justify-center rounded-md bg-red-600 px-[26px] text-center font-graphik text-[18.43px] font-medium text-white-a700 sm:px-5`}
            >
              Sent Massage
            </button>
          ) : (
            <button
              type="submit"
              value="Send"
              disabled={disableSubmit}
              className={`${
                disableSubmit ? "" : "sentEmailEnabled"
              }flex h-[48px] min-w-[178px] flex-row items-center justify-center rounded-md bg-teal-300 px-[26px] text-center font-graphik text-[18.43px] font-medium text-white-a700 sm:px-5`}
            >
              Sent Massage
            </button>
          )}
          ,
        </div>
      </form>
      <div className="flex w-[46%] flex-col items-start gap-10 self-center p-2.5 md:w-full md:self-auto">
        <Heading
          size="text13xl"
          as="h3"
          className="font-bevietnampro text-[40px] font-medium text-gray-900 md:text-[38px] sm:text-[36px]"
        >
          Find us
        </Heading>
        <div className="mb-[130px] mr-[54px] flex flex-col gap-[30px] self-stretch md:mr-0">
          <a href="tel:+18574962302" target="blank">
            <ContactInfo />
          </a>

          <a
            class=""
            href="mailto:contact@520cleaningsolutions.com"
            // href="mailto:pedroaugmeddev@gmail.com"
            target="blank"
          >
            <div className="EmailInfo w-[100%] p-5 bg-[#fbfbfb] rounded-xl border border-[#f3f3f3] justify-start items-start gap-3 inline-flex">
              <div className="EmailIcon shadow justify-center items-center gap-2.5 flex">
                <div className="flex Ellipse1406 w-[54px] h-[54px] bg-[#539b9b] rounded-full justify-center items-center">
                  <img src="/images/emailVector.svg" className="w-[60%]" />
                </div>
              </div>
              <div className="EmailId w-[423px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="EmailNow w-[423px] h-[22px] text-[#111c15] text-xl font-semibold font-['Be Vietnam Pro'] tracking-wide">
                  Email Now
                </div>
                <div className="Contact520cleaningsolutionsCom self-stretch text-[#666666] text-lg font-normal font-['DM Sans'] leading-snug">
                  contact@520cleaningsolutions.com
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

import { Heading, Button, TextArea, Input, Text } from "../../components";
import ContactInfo from "../../components/ContactInfo";
import React from "react";

export default function Home1Rowcontactinfo() {
  return (
    <div className="mt-[264px] flex items-start gap-8 self-stretch px-14 md:flex-col md:px-5">
      <div className="mb-[54px] flex flex-1 flex-col items-end gap-[46px] md:self-stretch">
        <div className="flex w-[86%] flex-col items-center gap-2.5 md:w-full">
          <div className="flex flex-col items-start gap-1 self-stretch">
            <Text size="textmd" as="p" className="font-bevietnampro text-[18.43px] font-normal text-gray-900">
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
            <Input
              type="text"
              name="name"
              placeholder={`Name`}
              className="flex h-[64px] items-center justify-center rounded border-[1.15px] border-solid border-gray-100_01 bg-white-a700 px-[22px] font-bevietnampro text-[18.43px] text-gray-700 shadow-md sm:px-5"
            />
            <Input
              type="email"
              name="email"
              placeholder={`Email`}
              className="flex h-[64px] items-center justify-center rounded border-[1.15px] border-solid border-gray-100_01 bg-white-a700 px-[22px] font-bevietnampro text-[18.43px] text-gray-700 sm:px-5"
            />
            <TextArea
              name="message"
              placeholder={`Message`}
              className="h-[100px] rounded border-[1.15px] border-solid border-gray-100_01 bg-white-a700 px-[22px] py-3 font-bevietnampro text-[18.43px] text-gray-700 sm:px-5"
            />
          </div>
          <Button className="flex h-[48px] min-w-[178px] flex-row items-center justify-center rounded-md bg-teal-300 px-[26px] text-center font-graphik text-[18.43px] font-medium text-white-a700 sm:px-5">
            Sent Massage
          </Button>
        </div>
      </div>
      <div className="flex w-[46%] flex-col items-start gap-10 self-end p-2.5 md:w-full md:self-auto">
        <Heading
          size="text13xl"
          as="h3"
          className="font-bevietnampro text-[40px] font-medium text-gray-900 md:text-[38px] sm:text-[36px]"
        >
          Find us
        </Heading>
        <div className="mb-[130px] mr-[54px] flex flex-col gap-[30px] self-stretch md:mr-0">
          <ContactInfo />
          <ContactInfo headingText="Email Now" phoneNumberText="contact@520cleaningsolutions.com" />
        </div>
      </div>
    </div>
  );
}

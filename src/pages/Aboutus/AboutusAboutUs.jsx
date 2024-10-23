import { Text } from "../../components";
import CompanyHistoryDescription from "../../components/CompanyHistoryDescription";
import React from "react";

export default function AboutusAboutUs() {
  return (
    <div className="ml-[102px] mr-[126px] mt-[210px] grid w-full max-w-[1210px] grid-cols-2 justify-center gap-[50px] self-stretch md:mx-0 md:grid-cols-1 md:px-5 m-4">
      <Text
        size="textlg"
        as="p"
        className=" cursor-pointer font-roboto text-[22.91px] font-normal leading-[160%] text-black-900   hover:shadow-lg p-5 p-5"
      >
        <h1 className="infoH1 text-[#56A1A1] text-3xl ">Our History</h1>
        <br />
        <br />
        520 Cleaning Solutions started over seven years ago with a vision to
        create more than just a cleaning company. We wanted to offer a service
        that brings peace and comfort to every space we touch. From the
        beginning, our passion was to transform environments into clean,
        welcoming places.
      </Text>
      <Text
        size="textlg"
        as="p"
        className="w-full cursor-pointer font-roboto text-[22.91px] font-normal leading-[160%] text-black-900 hover:shadow-lg p-5"
      >
        <>
          <h1 className="infoH1 text-[#56A1A1] text-3xl">Core Values</h1>
          <br />
          <br />
          At 520 Cleaning Solutions, we believe in quality, care, and attention
          to detail. Our team is committed to delivering results that exceed
          expectations, ensuring a clean space that nurtures harmony and
          well-being. Love and perfection are at the heart of everything we do.
        </>
      </Text>
      <Text
        size="textlg"
        as="p"
        className="w-full cursor-pointer font-roboto text-[22.91px] font-normal leading-[160%] text-black-900 hover:shadow-lg p-5"
      >
        <>
          <h1 className="infoH1 text-[#56A1A1] text-3xl"> Why us?</h1>
          <br />
          <br />
          Choosing 520 Cleaning Solutions means choosing a team that truly
          cares. We go beyond simple cleaning; we focus on creating environments
          where you can relax and enjoy life. With our professional approach and
          dedication, you can trust that your space is in the best hands.
        </>
      </Text>
      <Text
        size="textlg"
        as="p"
        className="w-full cursor-pointer font-roboto text-[22.91px] font-normal leading-[160%] text-black-900 hover:shadow-lg p-5"
      >
        <>
          <h1 className="infoH1 text-[#56A1A1] text-3xl"> Our Mission</h1>
          <br />
          <br />
          Our mission is to provide cleaning services that not only make your
          space shine but also give you more time to enjoy with loved ones. We
          aim to create a serene, clean environment that enhances your quality
          of life.
        </>
      </Text>
    </div>
  );
}

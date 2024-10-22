import { Helmet } from "react-helmet";
import { Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutusAboutUs from "./AboutusAboutUs";
import AboutusColumndesignsem from "./AboutusColumndesignsem";
import React from "react";

export default function AboutusPage() {
  return (
    <>
      <div className="mt-0 relative  w-full content-end bg-gray-200 md:h-auto">
        <Img
          src="images/img_image_2.png"
          alt="Imagetwo"
          className="mb-[626px] ml-auto h-[100vh] w-[38%] object-contain opacity-50 mt-0"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0  flex h-max flex-1 flex-col items-center">
          <Header />
          <AboutusColumndesignsem />
          <AboutusAboutUs />
          <Footer />
        </div>
      </div>
    </>
  );
}

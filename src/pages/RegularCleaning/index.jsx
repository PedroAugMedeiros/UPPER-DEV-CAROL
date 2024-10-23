import { Helmet } from "react-helmet";
import { Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MoveinandmoveoutColumngetYour from "./MoveinandmoveoutColumngetYour";
import MoveinandmoveoutColumnimg0192on from "./MoveinandmoveoutColumnimg0192on";
import DeepcleaningDeepCleaning from "./DeepcleaningDeepCleaning";
import PrincipalBanner from "./principalBanner.png";
import React from "react";

export default function MoveinandmoveoutPage() {
  return (
    <>
      <Helmet>
        <title>Move in and move out 2</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="relative w-full  bg-gray-200 ">
        <div className="mt-[62px] flex flex-1 flex-col items-center justify-center content">
          <Img
            src={PrincipalBanner}
            alt="Moveinand"
            className="relative  h-[730px] w-full object-cover "
          />
        </div>
        <div className="flex flex-col bottom-0 left-0 right-0 top-0 z-[2] m-auto flex h-max w-full flex-col mt-[2%] justify-center items-center">
          <Header />
          <DeepcleaningDeepCleaning />
          <MoveinandmoveoutColumngetYour />
          <MoveinandmoveoutColumnimg0192on />
          <Footer />
        </div>
      </div>
    </>
  );
}

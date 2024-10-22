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
      <div className="relative h-[3948px] w-full overflow-auto bg-gray-200 md:h-auto">
        <div className="mt-[62px] flex flex-1 flex-col items-center justify-center contain-content">
          <Img
            src={PrincipalBanner}
            alt="Moveinand"
            className="relative  h-[730px] w-full object-cover "
          />
          <Img
            // src="images/img_image_2.png"
            alt="Imagetwo"
            className="relative mt-[-218px] h-[1056px] w-[44%] object-contain opacity-50"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-[2] m-auto flex h-max w-full flex-col items-start">
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

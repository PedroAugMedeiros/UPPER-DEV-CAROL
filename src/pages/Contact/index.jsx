import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home1Rowcontactinfo from "../Home/Home1Rowcontactinfo.jsx";

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import AboutusPage from "../../pages/Aboutus/index";

export default function Home1Page() {
  const [defaultDate, setDefaultDate] = useState("");
  const [action, setAction] = useState("");
  const [menuOpenTypes, setMenuOpenTypes] = useState(false);
  const [menuOpenFrequencys, setMenuOpenFrequencys] = useState(false);
  const navigate = useNavigate();

  let yourDate = new Date();
  let actualDate = yourDate;

  const handleHoverEnter = () => {
    setAction("enter");
  };

  const handleClick = (value) => {
    if (value === "FREQUENCY") {
      setMenuOpenFrequencys(!menuOpenFrequencys);
    } else {
      setMenuOpenTypes(!menuOpenTypes);
    }
  };

  const handleHoverLeave = () => {
    setAction("leave");
  };

  useEffect(() => {
    defaultDate == "" &&
      setDefaultDate(new Date().toISOString().substring(0, 16));
  }, [defaultDate]);

  const goToAboutUs = () => {
    navigate(<AboutusPage />);
  };

  return (
    <>
      <Helmet>
        <title>Home 7</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-200 ">
        <div className="flex flex-col items-center">
          <div className="relative h-[full] self-stretch">
            <div className="absolute left-0 right-0 top-[5%] m-auto flex flex-1 flex-col items-end">
              {" "}
              <Img
                src="images/img_3_1.png"
                alt="Image"
                className="relative z-[2] h-[936px] w-[42%] object-contain"
              />
              <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 flex-col items-start">
                <Header />
                <div className="flex flex-col items-start self-stretch py-[22px] sm:py-5 ml-40 mt-48 w-[80%]">
                  <Text
                    size="text15xl"
                    as="p"
                    className="mt-1.5 w-[50%] font-dmserifdisplay font-normal leading-[64px] text-gray-900_01 md:w-full md:text-[48px]"
                  >
                    Leave the cleaning to us and get some rest.
                  </Text>

                  <Text
                    size="text4xl"
                    as="p"
                    className="w-[50%] text-[25.15px] font-normal leading-[37px] text-blue_gray-700_01 md:w-full md:text-[23px] sm:text-[21px]"
                  >
                    <>
                      Welcome to 520 Cleaning Solutions, where we dedicate our
                      care and expertise to transform your space. Committed to
                      excellence, we provide cleaning services tailored to your
                      specific needs, ensuring a consistently spotless and
                      welcoming environment. <br />
                      Trust us to handle the details while you enjoy the best
                      things in life.
                    </>
                  </Text>
                </div>
                <Home1Rowcontactinfo />
                <Footer />
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
// import React from "react";
// import Footer from "../../components/Footer";

// export default function index() {
//   return (
//     <div className="flex flex-col bg-[var(--OFF-WHITE, #EEE)] h-[2029px] w-[100%] self-stretch">
//       <Header />
//       <div className="bg-red-600 h-full m-0">
//         <div className="absolute bottom-px left-0 right-0 m-auto flex flex-1 flex-col items-end">
//           {" "}
//           <Img
//             src="images/img_3_1.png"
//             alt="Image"
//             className="relative z-[2] h-[936px] w-[42%] object-contain"
//           />
//         </div>
//         <Home1Rowcontactinfo />
//       </div>
//       <Footer />
//     </div>
//   );
// }

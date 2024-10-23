import { Text } from "../../components";
import React, { useState, useEffect } from "react";

export default function ServicesMenu() {
  const [actualGold, setActualGold] = React.useState("");
  const [showServices, setShowServices] = useState(false);

  const handleHoverEnter = ({ target }) => {
    setActualGold(target.id);
    target.classList.add("makeGold");
    target.classList.add("makeDark");
  };

  const handleHoverLeave = ({ target }) => {
    target.classList.remove("makeGold");
    target.classList.remove("makeDark");
  };

  useEffect(() => {}, []);

  function getPageYAfterScroll() {
    window.scrollTo(0, 0);
  }

  console.log(showServices);
  return (
    <div className="absolute top-auto z-[99] pt-3 pr-0">
      <div className="w-[140%] rounded-[41.878px] bg-[#001B1B] shadow-xl">
        <div className="flex gap-[30px] w-full">
          <div className="flex flex-col items-start gap-4 sm:gap-4 servicesTypeText">
            <div className="flex flex-col items-start gap-0 sm:gap-3">
              <div className="mt-8"></div>
              <a
                onMouseEnter={(e) => handleHoverEnter(e)}
                onMouseLeave={(e) => handleHoverLeave(e)}
                href="#"
                className="flex w-[140%] sm:text-[13px] m-0 p-0 mr-0"
              >
                <h1
                  className={`flex w-[100%]  text-[110%] text-transparent p-3 pr-4 pl-8 textGold`}
                >
                  Commercial Cleaning
                </h1>
              </a>
              <a
                onMouseEnter={(e) => handleHoverEnter(e)}
                onMouseLeave={(e) => handleHoverLeave(e)}
                href="#"
                className="flex w-[140%] sm:text-[13px] m-0 p-0 mr-0"
              >
                <h1
                  className={`flex w-[100%]  text-[110%] text-transparent p-3 pr-4 pl-8 textGold`}
                >
                  Regular cleaning
                </h1>
              </a>
              <a
                onMouseEnter={(e) => handleHoverEnter(e)}
                onMouseLeave={(e) => handleHoverLeave(e)}
                href="#"
                className="flex w-[140%] sm:text-[13px] m-0 p-0 mr-0"
              >
                <h1
                  className={`w-[100%]  bg-clip-text text-[110%] text-transparent p-3 pr-4 pl-8 textGold`}
                >
                  Deep cleaning
                </h1>
              </a>
              <a
                onMouseEnter={(e) => handleHoverEnter(e)}
                onMouseLeave={(e) => handleHoverLeave(e)}
                href="#"
                className="flex w-[140%] sm:text-[13px] m-0 p-0 mr-0"
              >
                <h1
                  className={`w-[100%] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-[110%] text-transparent p-3 pr-4 pl-8 textGold`}
                >
                  Move in cleaning
                </h1>
              </a>
              <a
                onMouseEnter={(e) => handleHoverEnter(e)}
                onMouseLeave={(e) => handleHoverLeave(e)}
                href="#"
                className="flex w-[140%] sm:text-[13px] m-0 p-0 mr-0"
              >
                <h1
                  className={`flex items-center w-[100%]  bg-clip-text text-[110%] text-transparent p-3 pr-4 pl-8  textGold`}
                >
                  Move out cleaning
                </h1>
              </a>
              <div className="flex mb-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

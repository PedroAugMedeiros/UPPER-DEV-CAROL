import { Text } from "..";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Img } from "../../components";
import PortugueseLogo from "../../components/Header/Icons/img_ellipse_1.png";
import SpanishLogo from "../../components/LanguageIcons/SpanishIcon.svg";
import EnglishLogo from "../../components/LanguageIcons/EnglishLogo.svg";

const MenuTypeServices = ({
  children,
  className = "",
  Icon,
  selectedLanguage,
  setMenuLanguageIsOpen,
  ...restProps
}) => {
  const [actualGold, setActualGold] = React.useState("");
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {}, []);

  function getPageYAfterScroll() {
    window.scrollTo(0, 0);
  }

  function handleClick(value) {
    //   setTypeService(value);
  }

  console.log(showServices);
  return (
    <div className="absolute left-[5.9%] top-[45%] z-[99] ">
      <div className="w-[146.5%] rounded-[7.683px] bg-[#FFF] border-[1.2px] border-solid border-blue_gray-700 ">
        <div className="flex gap-[30px] w-full">
          <div className="flex flex-col items-start gap-4 sm:gap-4 servicesTypeText">
            <div className="flex flex-col items-start gap-0 sm:gap-3">
              <li
                name="Commercial Cleaning"
                onClick={(e) => handleClick(e.target.name)}
                href="#"
                className="flex w-[100%] text-md sm:text-[13px] m-0 p-0 mr-0 mt-2"
              >
                <h1
                  className={`flex w-[100%]  text-[100%] text-transparent p-3 pr-4 pl-8 textTypeServices text-md`}
                >
                  Commercial Cleaning
                </h1>
              </li>
              <li
                name="Regular cleaning"
                onClick={(e) => handleClick("Regular cleaning")}
                href="#"
                className="flex w-[140%] sm:text-[13px] m-0 p-0 mr-0"
              >
                <h1
                  className={`flex w-[100%]  text-[110%] text-transparent p-3 pr-4 pl-8 textTypeServices`}
                >
                  Regular cleaning
                </h1>
              </li>
              <li
                name="Deep cleaning"
                onClick={(e) => handleClick("Deep cleaning")}
                href="#"
                className="flex w-[140%] sm:text-[13px] m-0 p-0 mr-0"
              >
                <h1
                  className={`w-[100%]  bg-clip-text text-[110%] text-transparent p-3 pr-4 pl-8 textTypeServices`}
                >
                  Deep cleaning
                </h1>
              </li>
              <li
                name="Move in cleaning"
                onClick={(e) => handleClick("Move in cleaning")}
                href="#"
                className="flex w-[140%] sm:text-[13px] m-0 p-0 mr-0"
              >
                <h1
                  className={`w-[100%] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-[110%] text-transparent p-3 pr-4 pl-8 textTypeServices`}
                >
                  Move in cleaning
                </h1>
              </li>
              <li
                value="Move out cleaning"
                name="Move out cleaning"
                onClick={(e) => handleClick("Move out cleaning")}
                href="#"
                className="flex w-[140%] sm:text-[13px] m-0 p-0 mr-0"
              >
                <h1
                  className={`flex items-center w-[100%]  bg-clip-text text-[110%] text-transparent p-3 pr-4 pl-8  textTypeServices`}
                >
                  Move out cleaning
                </h1>
              </li>
              <div className="flex mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuTypeServices.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  Icon: PropTypes.node,
  selectedLanguage: PropTypes.string,
};

export { MenuTypeServices };

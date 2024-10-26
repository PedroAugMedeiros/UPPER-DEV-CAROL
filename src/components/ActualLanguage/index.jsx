import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Img } from "../";
import PortugueseLogo from "../Header/Icons/img_ellipse_1.png";
import SpanishLogo from "../LanguageIcons/SpanishIcon.svg";
import EnglishLogo from "../LanguageIcons/EnglishLogo.svg";

const ActualLanguage = ({
  children,
  className = "",
  Icon,
  selectedLanguage,
  setMenuLanguageIsOpen,
  ...restProps
}) => {
  function handleIcons() {
    if (selectedLanguage == "Portuguese") {
      return <Img src={PortugueseLogo} className="flex   w-[10%] " />;
    } else if (selectedLanguage == "English") {
      return <Img src={EnglishLogo} className="flex   w-[10%]" />;
    } else {
      return <Img src={SpanishLogo} className="flex w-[10%] " />;
    }
  }

  return (
    <div
      onClick={() => {
        setMenuLanguageIsOpen(true);
      }}
      className="flex w-[100%] h-12 gap-0 justify-center items-center  rounded-[18px]  bg-blue_gray-100 hover:bg-[#a8a4a4] hover:cursor-pointer border-solid border-gray-900_01  py-2 z-0 p-0 gap-2  py-0  px-1 h-6"
    >
      {handleIcons()}
      <h1
        className="flex m-0 text-[100%]
text-[14.99px]
font-medium
font-['DM
Sans']
leading-[14.99px] text-[20%]"
      >
        {selectedLanguage}
      </h1>
    </div>
  );
};

ActualLanguage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  Icon: PropTypes.node,
  selectedLanguage: PropTypes.string,
};

export { ActualLanguage };

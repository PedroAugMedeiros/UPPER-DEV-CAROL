import React from "react";
import PropTypes from "prop-types";
import { Img } from "components";
import PortugueseLogo from "components/Header/Icons/img_ellipse_1.png";
import SpanishLogo from "components/LanguageIcons/SpanishIcon.svg";
import EnglishLogo from "components/LanguageIcons/EnglishLogo.svg";

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
      return <Img src={PortugueseLogo} className="flex w-[10%]" />;
    } else if (selectedLanguage == "English") {
      return <Img src={EnglishLogo} className="flex w-[10%]" />;
    } else {
      return <Img src={SpanishLogo} className="flex w-[10%] " />;
    }
  }
  return (
    <div
      onClick={() => {
        setMenuLanguageIsOpen(true);
      }}
      className="flex w-[64%] gap-0 justify-center items-center  rounded-[20px]  bg-blue_gray-100 hover:bg-[#a8a4a4] hover:cursor-pointer border-solid border-gray-900_01 md:w-full gap-5 py-2"
    >
      {handleIcons()}
      <h1 className="flex justify-start text-start items-start">
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

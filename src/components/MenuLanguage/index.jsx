import React from "react";
import PropTypes, { func } from "prop-types";
import { Img } from "../../components";
import { languageOptions } from "../../tools/options";
import PortugueseLogo from "../../components/Header/Icons/img_ellipse_1.png";
import SpanishLogo from "../../components/LanguageIcons/SpanishIcon.svg";
import EnglishLogo from "../../components/LanguageIcons/EnglishLogo.svg";

const MenuLanguage = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  Icon,
  selectedLanguage,
  setMenuLanguageIsOpen,
  setSelectedLanguage,
  ...restProps
}) => {
  function handleClick(language) {
    setMenuLanguageIsOpen(false);
    setSelectedLanguage(language);
    console.log(language);
  }

  function handleIcons(language) {
    if (language == "Portuguese") {
      return (
        <Img
          src={PortugueseLogo}
          className="flex justify-center items-center w-[20%] ml-2  "
        />
      );
    } else if (language == "English") {
      return (
        <Img
          src={EnglishLogo}
          className="flex w-[18%] flex justify-center items-center w-[20%] ml-2"
        />
      );
    } else {
      return (
        <Img
          src={SpanishLogo}
          className="flex w-[18%]flex justify-center items-center w-[20%] ml-2 "
        />
      );
    }
  }

  function handleHoverLeave(e) {}
  function handleLanguages() {
    return languageOptions.map((item) => {
      if (item.value)
        return (
          <div
            onClick={() => {
              handleClick(item.value);
            }}
            className={`flex w-[76%] gap-0 justify-evenly items-center    bg-blue_gray-100 hover:bg-[#a8a4a4]  rounded-[18px] hover:cursor-pointer border-solid border-gray-900_01 md:w-full py-2  ${
              selectedLanguage == item.value ? "hidden" : "selected"
            }  `}
          >
            {handleIcons(item.value)}

            <h1
              className="flex m-0 text-[100%]
text-[14.99px]
font-medium
font-['DM
Sans']
leading-[14.99px]"
            >
              {item.value}
            </h1>
          </div>
        );
    });
  }
  return (
    <div
      onClick={() => setMenuLanguageIsOpen(false)}
      className="flex w-[100%] shadow-none    flex-col justify-center items-center p-0 m-0 rounded-md"
    >
      <div className="flex flex-col rounded w-[80%] gap-1 justify-start items-center">
        {handleLanguages()}
      </div>
    </div>
  );
};

MenuLanguage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  Icon: PropTypes.node,
  selectedLanguage: PropTypes.string,
};

export { MenuLanguage };

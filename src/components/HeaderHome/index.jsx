import { element } from "prop-types";
import MegaMenu1 from "../MegaMenu1";
import { SelectBox, Img, p, Text } from "./..";
import React from "react";
import { useState, useEffect, useRef, actualP } from "react";
import PortugueseLogo from "./Icons/img_ellipse_1.png";
import MenuServices from "./../MenuServices/index";
import { SelectLanguage } from "../../components/SelectLanguage";
import { languageOptions } from "../../tools/options";
import { MenuLanguage } from "../MenuLanguage/index";
import { ActualLanguage } from "../ActualLanguage/index";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [move, setMove] = React.useState("");
  const [actualMove, setActualMove] = React.useState("");
  const [showServices, setShowServices] = useState(false);
  const [menuLanguageIsOpen, setMenuLanguageIsOpen] = useState(false);
  const [languageOptions, setLanguageOptions] = useState([
    "Portuguese",
    "English",
    "Espanõl",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("Portuguese");

  const handleHoverEnter = ({ target }) => {
    setMove("up");
    setActualMove(target.id);
    target.id === "Services" && setShowServices(true);
  };

  const handleHoverLeave = ({ target }) => {
    setMove("down");
    setActualMove(target.id);
    target.id === "Services" && setShowServices(false);
  };

  function getPageYAfterScroll() {
    window.scrollTo(0, 0);
  }

  function handleChange(e) {
    e.preventDefault();
    // setSelectedOption(e.target.value);
  }

  function handleLanguageButtons() {
    return menuLanguageIsOpen ? (
      <div className="flex shadow-none z-20 justify-center items-center w-[18%] ">
        <MenuLanguage
          Icon={PortugueseLogo}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          setMenuLanguageIsOpen={setMenuLanguageIsOpen}
        />
      </div>
    ) : (
      <div className="flex justify-center items-center w-[25%] ">
        <ActualLanguage
          Icon={PortugueseLogo}
          selectedLanguage={selectedLanguage}
          setMenuLanguageIsOpen={setMenuLanguageIsOpen}
        />
      </div>
    );
  }

  return (
    <header
      {...props}
      className={`${props.className} flex flex-row   p-[22px] p-5  fixed bg-teal-100_4c items-start z-50 top-0 fixed  items-center justify-around  gap-1   px-1 py-0 `}
    >
      <div className="flex  flex-row    items-center justify-around  p-0   w-[100%]  flex-row gap-0 py-2 md:gap-2">
        <div
          onClick={() => {
            getPageYAfterScroll();
          }}
          className="flex  gap-1  cursor-pointer  items-center px-4 p-2 rounded-[20px] border-[1.52px] border-solid border-gray-900_01  w-[20%] gap-1 sm:px-2 sm:justify-center h-6"
        >
          <h1
            size="text:lg"
            as="p"
            className="font-bookantiqua text-[25.69px] font-normal italic tracking-[-1.80px] text-gray-900_01  sm:text-[10px]"
          >
            520
          </h1>
          <div className="flex flex-1 flex-col items-end w-[50%]">
            <Img
              src="images/img_vector.svg"
              alt="Vector"
              className="mr-[45%] h-[3px] w-[4px]  sm:text-[10px]"
            />
            <Img
              src="images/img_settings.svg"
              alt="Settings"
              className="h-[22px] w-full  sm:text-[10px]"
            />
          </div>
          <h1
            size="text6xl"
            as="p"
            className=" block font-karla text-[10px] font-normal italic tracking-[-2.99px] text-gray-900_01   "
          >
            Cleaning
          </h1>

          <h1
            size="text6xl"
            as="p"
            className="font-karla font-normal italic tracking-[-2.99px] text-gray-900_01   text-[10px]"
          >
            Solutions
          </h1>
        </div>
        <div className="flex w-[100%] flex-row flex-nowrap  justify-center  rounded-[24px] p-4 bg-gray-900_01  gap-0 p-0 sm:ml-2 py-0 h-6 md:h-8 md:ml-0 md:pr-10">
          <ul className="flex flex-row  w-[100%] justify-center sm:justify-center flex-nowrap gap-1 sm:pl-3 w-[100%] ">
            <h1 className="flex justify-center items-center">
              {window.location.pathname === "/Home" ? (
                <a
                  href="#"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Home" ? move : ""
                  } bg-gradient bg-clip-text`}
                >
                  <p
                    size="textxs"
                    as="p"
                    id="Home"
                    className="text-lg font-medium text-transparent hover:text-orange-300 hover:underline items-center justify-center text-center sm:text-[20%] md:text-[90%]"
                  >
                    Home
                  </p>
                </a>
              ) : (
                <a
                  href="/Home"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Home" ? move : ""
                  } bg-gradient bg-clip-text `}
                >
                  <p
                    size="textxs"
                    as="p"
                    id="Home"
                    className="text-lg font-medium text-transparent hover:text-orange-300 hover:underline items-center justify-center text-center sm:text-[20%]  md:text-[90%] "
                  >
                    Home
                  </p>
                </a>
              )}
            </h1>
            <h1 className="flex justify-center items-center">
              <a
                href="/AboutUs"
                onMouseEnter={(e) => handleHoverEnter(e)}
                onMouseLeave={(e) => handleHoverLeave(e)}
                className={`${
                  actualMove === "AboutUs" ? move : ""
                } cursor-pointer`}
              >
                <p
                  size="textxs"
                  as="p"
                  id="AboutUs"
                  className="text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline items-center justify-center text-center  flex-nowrap text-nowrap   sm:text-[10%]  md:text-[90%]"
                >
                  About us
                </p>
              </a>
            </h1>
            <h1 className="flex justify-center items-center sm:w-[20%]">
              <a
                href="#TestimonialsTarget"
                onMouseEnter={(e) => handleHoverEnter(e)}
                onMouseLeave={(e) => handleHoverLeave(e)}
                className={`${
                  actualMove === "Testimonials" ? move : ""
                } cursor-pointer`}
              >
                <p
                  size="textxs"
                  as="p"
                  id=""
                  className="text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline items-center justify-center text-center sm:text-[10%] md:text-[90%]"
                >
                  Testimonials
                </p>
              </a>
            </h1>
            <h1
              className="flex justify-center items-center"
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-2 sm:gap-0 sm:mr-1">
                <p
                  size="textxs"
                  as="p"
                  id="Services"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Services" ? move : ""
                  } cursor-pointer text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline  items-center justify-center text-center sm:text-[10%] md:text-[90%]`}
                >
                  Services
                </p>
                <Img
                  src="images/img_arrow_down_white_a700.svg"
                  alt="Arrowdown"
                  className={`${
                    actualMove === "Services" ? move : ""
                  } sm-[5%] sm:h-[5px] sm:mr-1`}
                />
              </div>
              <div className="flex self-start">
                {menuOpen ? <MegaMenu1 /> : null}
              </div>
            </h1>
            <h1 className="flex justify-center items-center">
              <a href="/Contact" className="cursor-pointer">
                <p
                  size="textxs"
                  as="p"
                  id="Contact"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Contact" ? move : ""
                  } text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline items-center justify-center text-center sm:text-[10%] md:text-[90%]`}
                >
                  Contact
                </p>
              </a>
            </h1>
            <h1 className="flex justify-center items-center">
              <a href="JoinUs" className=" cursor-pointer">
                <p
                  size="textxs"
                  as="p"
                  id="Join Us"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Join Us" ? move : ""
                  } text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline items-center justify-center text-center  flex-nowrap text-nowrap   sm:text-[10%] md:text-[90%]`}
                >
                  Join Us
                </p>
              </a>
            </h1>
          </ul>
          <div className="flex items-center gap-0.5 sm:text-center sm:justify-center sm:gap-0 sm:w-[25%]">
            <Img
              src="images/img_symbol.png"
              alt="Symbol"
              className="h-[20px] object-cover sm:h-[10%]"
            />
            <p
              size="textxs"
              as="p"
              className="bg-gradient bg-clip-text text-lg font-medium text-transparent inline-block flex-nowrap text-nowrap  sm:text-[10%] md:text-[90%] "
            >
              FREE ESTIMATE
            </p>
          </div>
        </div>
      </div>
      {handleLanguageButtons()}
    </header>
  );
}

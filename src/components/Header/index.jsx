import { element } from "prop-types";
import MegaMenu1 from "../MegaMenu1";
import { SelectBox, Img, Heading, Text } from "./..";
import React from "react";
import { useState, useEffect, useRef, actualP } from "react";
import PortugueseLogo from "./Icons/img_ellipse_1.png";
import MenuServices from "./../MenuServices/index";
import { SelectLanguage } from "components/SelectLanguage";
import { languageOptions } from "./../../tools/options";
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
      <div className="flex shadow-none z-0 justify-center items-center w-[20%] ">
        <MenuLanguage
          Icon={PortugueseLogo}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          setMenuLanguageIsOpen={setMenuLanguageIsOpen}
        />
      </div>
    ) : (
      <div className="flex justify-center items-center w-[20%] self-stretch ">
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
      className={`${props.className} flex self-stretch w-[100%]   p-[22px] sm:p-5  fixed bg-teal-100_4c items-start z-50 top-0 fixed`}
    >
      <div className="flex w-[100%] items-center justify-around  gap-5 md:flex-col">
        <div
          onClick={() => {
            getPageYAfterScroll();
          }}
          className="flex w-[23%] gap-1  cursor-pointer  items-center px-4 p-2 rounded-[20px] border-[1.52px] border-solid border-gray-900_01 "
        >
          <Text
            size="text:lg"
            as="p"
            className="font-bookantiqua text-[25.69px] font-normal italic tracking-[-1.80px] text-gray-900_01 md:text-[23px] sm:text-[21px]"
          >
            520
          </Text>
          <div className="flex flex-1 flex-col items-end w-[50%]">
            <Img
              src="images/img_vector.svg"
              alt="Vector"
              className="mr-[45%] h-[3px] w-[4px] md:mr-0"
            />
            <Img
              src="images/img_settings.svg"
              alt="Settings"
              className="h-[22px] w-full md:h-auto"
            />
          </div>
          <Text
            size="text6xl"
            as="p"
            className="font-karla text-[27.23px] font-normal italic tracking-[-2.99px] text-gray-900_01 md:text-[25px] sm:text-[23px]"
          >
            Solutions
          </Text>
        </div>
        <div className="flex flex-1 justify-center gap-[34px] rounded-[24px] p-4 bg-gray-900_01  md:flex-col md:self-stretch">
          <ul className="flex gap-[30px] sm:flex-col">
            <li>
              {window.location.pathname === "/Home" ? (
                <a
                  href="#"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Home" ? move : ""
                  } bg-gradient bg-clip-text`}
                >
                  <Heading
                    size="textxs"
                    as="p"
                    id="Home"
                    className="text-lg font-medium text-transparent hover:text-orange-300 hover:underline"
                  >
                    Home
                  </Heading>
                </a>
              ) : (
                <a
                  href="/Home"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Home" ? move : ""
                  } bg-gradient bg-clip-text`}
                >
                  <Heading
                    size="textxs"
                    as="p"
                    id="Home"
                    className="text-lg font-medium text-transparent hover:text-orange-300 hover:underline"
                  >
                    Home
                  </Heading>
                </a>
              )}
            </li>
            <li>
              <a
                href="/AboutUs"
                onMouseEnter={(e) => handleHoverEnter(e)}
                onMouseLeave={(e) => handleHoverLeave(e)}
                className={`${
                  actualMove === "AboutUs" ? move : ""
                } cursor-pointer`}
              >
                <Heading
                  size="textxs"
                  as="p"
                  id="AboutUs"
                  className="text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline"
                >
                  About us
                </Heading>
              </a>
            </li>
            <li>
              <a
                href="#TestimonialsTarget"
                onMouseEnter={(e) => handleHoverEnter(e)}
                onMouseLeave={(e) => handleHoverLeave(e)}
                className={`${
                  actualMove === "Testimonials" ? move : ""
                } cursor-pointer`}
              >
                <Heading
                  size="textxs"
                  as="p"
                  id=""
                  className="text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline"
                >
                  Testimonials
                </Heading>
              </a>
            </li>
            <li
              onMouseLeave={() => {
                setMenuOpen(false);
              }}
              onMouseEnter={() => {
                setMenuOpen(true);
              }}
            >
              <div className="flex cursor-pointer items-center gap-2">
                <Heading
                  size="textxs"
                  as="p"
                  id="Services"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Services" ? move : ""
                  } cursor-pointer text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline`}
                >
                  Services
                </Heading>
                <Img
                  src="images/img_arrow_down_white_a700.svg"
                  alt="Arrowdown"
                  className={`${
                    actualMove === "Services" ? move : ""
                  } h-[6px] w-[10px]`}
                />
              </div>
              <div className="flex self-start">
                {menuOpen ? <MegaMenu1 /> : null}
              </div>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="textxs"
                  as="p"
                  id="Gallery"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Gallery" ? move : ""
                  } text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline`}
                >
                  Gallery
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className=" cursor-pointer">
                <Heading
                  size="textxs"
                  as="p"
                  id="Join Us"
                  onMouseEnter={(e) => handleHoverEnter(e)}
                  onMouseLeave={(e) => handleHoverLeave(e)}
                  className={`${
                    actualMove === "Join Us" ? move : ""
                  } text-lg font-medium text-white-a700 hover:text-orange-300 hover:underline`}
                >
                  Join Us
                </Heading>
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-0.5">
            <Img
              src="images/img_symbol.png"
              alt="Symbol"
              className="h-[20px] object-cover"
            />
            <Heading
              size="textxs"
              as="p"
              className="bg-gradient bg-clip-text text-lg font-medium text-transparent"
            >
              FREE ESTIMATE
            </Heading>
          </div>
        </div>
      </div>
      {handleLanguageButtons()}
    </header>
  );
}

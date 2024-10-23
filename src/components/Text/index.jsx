import React from "react";

const sizes = {
  texts: "text-[16px] font-normal not-italic sm:text-[13px]",
  textmd: "text-[18px] font-normal not-italic sm:text-[15px]",
  textlg: "text-[19px] font-normal not-italic sm:text-[16px]",
  textxl: "text-[22px] font-normal not-italic sm:text-[18px]",
  text2xl: "text-[23px] font-normal not-italic md:text-[21px] sm:text-[19px]",
  text3xl: "text-[24px] font-normal italic md:text-[22px] sm:text-[20px]",
  text4xl: "text-[25px] font-normal not-italic md:text-[23px] sm:text-[21px]",
  text5xl: "text-[26px] font-normal not-italic md:text-[24px] sm:text-[22px]",
  text6xl: "text-[27px] font-normal not-italic md:text-[25px] sm:text-[22px]",
  text7xl: "text-[30px] font-normal not-italic md:text-[28px] sm:text-[25px]",
  text8xl: "text-[32px] font-normal not-italic md:text-[30px] sm:text-[27px]",
  text9xl: "text-[33px] font-normal not-italic md:text-[31px] sm:text-[28px]",
  text10xl: "text-[35px] font-normal not-italic md:text-[33px] sm:text-[29px]",
  text11xl: "text-[38px] font-normal not-italic md:text-[36px] sm:text-[32px]",
  text12xl: "text-[39px] font-normal not-italic md:text-[37px] sm:text-[33px]",
  text14xl: "text-[50px] font-normal md:text-[46px] sm:text-[42px]",
  text15xl: "text-[70px] font-normal not-italic md:text-[48px]",
  text16xl: "text-[107px] font-normal not-italic md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-bevietnampro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

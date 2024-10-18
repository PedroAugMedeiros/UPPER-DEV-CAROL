import React from "react";

const sizes = {
  headingxs: "text-[19px] font-bold sm:text-[16px]",
  textxs: "text-[15px] font-medium",
  text13xl: "text-[40px] font-medium md:text-[38px] sm:text-[34px]",
  headings: "text-[20px] font-semibold sm:text-[17px]",
  headingmd: "text-[22px] font-semibold sm:text-[18px]",
  headinglg: "text-[23px] font-semibold md:text-[21px] sm:text-[19px]",
  headingxl: "text-[24px] font-semibold md:text-[22px] sm:text-[20px]",
  heading2xl: "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
  heading3xl: "text-[30px] font-bold md:text-[28px] sm:text-[25px]",
  heading4xl: "text-[41px] font-semibold md:text-[37px] sm:text-[34px]",
  heading5xl: "text-[44px] font-semibold md:text-[40px] sm:text-[37px]",
  heading6xl: "text-[48px] font-bold md:text-[44px] sm:text-[40px]",
  heading7xl: "text-[63px] font-semibold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "headingxl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-bevietnampro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

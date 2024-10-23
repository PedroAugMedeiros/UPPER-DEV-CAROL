import React from "react";
import { Img } from "../../../components";
import SecondImg from "./flipcard/img_ellipse_7.png";
import FirstImg from "./flipcard/img_ellipse_8.svg";
export const SwapperImgOnHover = () => {
  return (
    <>
      <div className="thefront">
        <Img src={FirstImg} className="flex w-[100%]" />
      </div>
      <div className="theback">
        <Img src={SecondImg} className="flex w-[100%]" />
      </div>
    </>
  );
};

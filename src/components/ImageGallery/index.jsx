import { Img } from "./..";
import React from "react";

export default function ImageGallery({ firstImage }) {
  console.log(firstImage);
  return (
    <div className={`w-[100%]  relative`}>
      <Img src={firstImage} alt="Img0192one" className=" flex-1 object-cover" />
      {/* <Img
        src={secondImage}
        alt="Imagetwentyfive"
        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[476px] w-full flex-1 object-cover"
      /> */}
    </div>
  );
}

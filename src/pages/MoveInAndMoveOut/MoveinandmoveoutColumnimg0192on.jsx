import ImageGallery from "../../components/ImageGallery";
import React, { Suspense } from "react";
import Banner from "../../pages/MoveInAndMoveOut/banner.svg";
import Banner2 from "../../pages/MoveInAndMoveOut/banner2.svg";
import Banner3 from "../../pages/MoveInAndMoveOut/banner3.svg";
import Banner4 from "../../pages/MoveInAndMoveOut/banner4.svg";
import Banner5 from "../../pages/MoveInAndMoveOut/banner5.svg";
import Banner6 from "../../pages/MoveInAndMoveOut/banner6.svg";

const data = [
  {
    firstImage: Banner,
  },
  {
    firstImage: Banner2,
  },
  {
    firstImage: Banner3,
  },
  {
    firstImage: Banner4,
  },
  {
    firstImage: Banner5,
  },
  {
    firstImage: Banner6,
  },
];

export default function MoveinandmoveoutColumnimg0192on() {
  return (
    <div className="mt-[136px] self-stretch">
      <div className=" grid grid-cols-3 gap-x-4  gap-y-[46px] md:mr-0 md:grid-cols-2 sm:grid-cols-1 w-[120%]">
        <Suspense fallback={<div>Loading feed...</div>}>
          {data.map((d, index) => (
            <ImageGallery firstImage={d.firstImage} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

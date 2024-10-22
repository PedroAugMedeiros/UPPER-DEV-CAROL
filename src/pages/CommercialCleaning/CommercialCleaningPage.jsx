import HouseCleaningDetails from "../../components/HouseCleaningDetails";
import React, { Suspense } from "react";

const data = [
  {
    sectionTitle: "GENERAL AREAS",
    cleaningDescription: (
      <>
        Dusting surfaces <br />
        Wiping baseboards and doors <br />
        Vacuuming floors, carpets, and rugs <br />
        Mopping hard floors
        <br />
        Windows cleaning (only by request)
      </>
    ),
    // readMoreButtonLabel: "READ MORE...",
  },
  {
    sectionTitle: "OFFICE AREAS",
    cleaningDescription: (
      <>
        Cleaning desks and work surfaces of cabinets
        <br />
        Emptying trash bins and replacing liners <br />
        Cleaning phones, keyboards, and other equipment <br />
        Organizing documents and materials (if requested) <br />
        Vacuuming and mopping floors{" "}
      </>
    ),
    readMoreButtonLabel: "READ MORE...",
  },
  {
    sectionTitle: "RECEPTION AND COMMON AREAS",
    cleaningDescription: (
      <>
        Cleaning furniture and waiting areas <br />
        Cleaning coffee tables and other surfaces <br />
        Vacuuming and mopping floors <br />
        Windows cleaning (only by request)
      </>
    ),
    readMoreButtonLabel: "READ MORE...",
  },
  {
    sectionTitle: <h4 className="ml-0">BATHROOMS</h4>,
    cleaningDescription: (
      <>
        Cleaning countertops and backsplashes <br />
        Cleaning sinks, utensils, and appliances <br />
        Emptying trash bins and replacing liners <br />
        Vacuuming and mopping floors
        <br />
        Windows cleaning (only by request)
      </>
    ),
    readMoreButtonLabel: "READ MORE...",
  },
];

export default function CommercialCleaning() {
  return (
    <div className="mx-auto mt-[832px] grid w-full max-w-[1240px] grid-cols-2 justify-center gap-[26px] self-stretch md:grid-cols-1 md:px-5">
      <Suspense fallback={<div>Loading feed...</div>}>
        {data.map((d, index) => (
          <HouseCleaningDetails
            {...d}
            key={"deepcleaning" + index}
            className="bg-gray-200 hover:shadow-xs"
          />
        ))}
      </Suspense>
    </div>
  );
}

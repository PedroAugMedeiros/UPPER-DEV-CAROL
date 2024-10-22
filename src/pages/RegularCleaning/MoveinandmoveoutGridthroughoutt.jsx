import HouseCleaningChecklist from "../../components/HouseCleaningChecklist";
import React, { Suspense } from "react";

const data = [
  {
    sectionTitle: "THROUGHOUT THE HOUSE",
    cleaningTasksDescription: (
      <>
        Dusting surfaces
        <br />
        Wiping baseboards and doors
        <br />
        Vacuuming floors, carpets, and rugs
        <br />
        Mopping hard floors
        <br />
        Cleaning interior windows
        <br />
        Dusting blinds
      </>
    ),
  },
  {
    sectionTitle: "THROUGHOUT THE HOUSE",
    cleaningTasksDescription: (
      <>
        Dusting surfaces
        <br />
        Wiping baseboards and doors
        <br />
        Vacuuming floors, carpets, and rugs
        <br />
        Mopping hard floors
        <br />
        Cleaning interior windows
        <br />
        Dusting blinds
      </>
    ),
  },
  {
    sectionTitle: "THROUGHOUT THE HOUSE",
    cleaningTasksDescription: (
      <>
        Dusting surfaces
        <br />
        Wiping baseboards and doors
        <br />
        Vacuuming floors, carpets, and rugs
        <br />
        Mopping hard floors
        <br />
        Cleaning interior windows
        <br />
        Dusting blinds
      </>
    ),
  },
  {
    sectionTitle: "THROUGHOUT THE HOUSE",
    cleaningTasksDescription: (
      <>
        Dusting surfaces
        <br />
        Wiping baseboards and doors
        <br />
        Vacuuming floors, carpets, and rugs
        <br />
        Mopping hard floors
        <br />
        Cleaning interior windows
        <br />
        Dusting blinds
      </>
    ),
  },
];

export default function MoveinandmoveoutGridthroughoutt() {
  return (
    <div className="ml-24 mr-[390px] mt-[838px] grid grid-cols-2 gap-[26px] self-stretch md:mx-0 md:grid-cols-1">
      <Suspense fallback={<div>Loading feed...</div>}>
        {data.map((d, index) => (
          <HouseCleaningChecklist {...d} key={"gridthroughoutt" + index} className="bg-gray-200 hover:shadow-xs" />
        ))}
      </Suspense>
    </div>
  );
}

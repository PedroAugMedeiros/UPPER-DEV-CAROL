import HouseCleaningDetails from "../../components/HouseCleaningDetails";
import React, { Suspense } from "react";

const data = [
  {
    sectionTitle: "THROUGHOUT THE HOUSE",
    cleaningDescription: (
      <>
        Remove cobwebs
        <br />
        Dusting (all rooms)
        <br />
        Wipe baseboards (where accessible), doors, and light switches, <br />
        Vacuum (all floors, carpets, and rugs)
        <br />
        Mop (hard floors)
      </>
    ),
    // readMoreButtonLabel: "READ MORE...",
  },
  {
    sectionTitle: "KITCHEN",
    cleaningDescription: (
      <>
        Wipe down and sanitize countertops, backsplashes, interior and exterior
        of cabinets
        <br />
        Sinks, knobs, and drain openings
        <br />
        Range top, microwave inside and outside
        <br />
        Refrigerator (outside and inside upon request)
      </>
    ),
    readMoreButtonLabel: "READ MORE...",
  },
  {
    sectionTitle: "LAUNDRY ROOM",
    cleaningDescription: (
      <>
        Wipe washer and dryer (behind and around, if possible)
        <br />
        Sink and countertops (if any)
        <br />
        Cabinets (if any)
        <br />
        Vacuum and mop floors
        <br />
        Remove trash
      </>
    ),
    readMoreButtonLabel: "READ MORE...",
  },
  {
    sectionTitle: <h4 className="ml-0">BATHROOMS</h4>,
    cleaningDescription: (
      <>
        Wipe down, sanitize and scrub showers, bathtubs, sinks, and toilets
        <br />
        Vanity, cabinets, and mirrors
        <br />
        Vacuum (all floors, carpets, and rugs) <br />
        Mop (hard floors)
        <br />
        Remove trash{" "}
      </>
    ),
    readMoreButtonLabel: "READ MORE...",
  },
];

export default function DeepcleaningDeepCleaning() {
  return (
    <div className=" mt-[40%] grid w-full max-w-[1240px] grid-cols-2 justify-center gap-[26px] self-stretch md:grid-cols-1 md:px-5">
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

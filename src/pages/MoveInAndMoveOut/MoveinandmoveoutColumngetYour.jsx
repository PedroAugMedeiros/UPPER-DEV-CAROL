import { Button, Heading } from "../../components";
import React from "react";

export default function MoveinandmoveoutColumngetYour() {
  return (
    <div className="mt-[142px] flex flex-col items-start gap-12 self-stretch pl-[140px] pr-14 md:px-5">
      <Heading
        size="headings"
        as="h1"
        className="w-[72%] font-bevietnampro text-[22.91px] font-extrabold leading-[160%] text-gray-700 md:w-full"
      >
        <span>
          <>
            100% Satisfaction Guarantee!
            <br />
          </>
        </span>
        <span className="font-medium">
          Call us within 24 hours, and we will address any issues. We’re
          confident you’ll love our team and our work. Your home will be clean,
          smelling great, and you’ll have more time to spend on what truly
          matters.
        </span>
      </Heading>
      <a href="https://forms.gle/LNWMEL59EvRHchmH8" target="blank">
        <Button className="flex h-[60px] min-w-[466px] flex-row items-center justify-center rounded-[12px] bg-teal-300 px-5 text-center text-[28.89px] text-white-a700 md:text-[26px] sm:text-[24px] growUpButton">
          GET YOUR FREE ESTIMATE NOW
        </Button>
      </a>
    </div>
  );
}

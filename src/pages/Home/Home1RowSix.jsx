import { Text } from "../../components";
import React, { useEffect } from "react";

export default function Home1RowSix() {
  useEffect(() => {});
  return (
    <div className="mt-[152px] h-[104px] self-stretch bg-[url(/public/images/img_group_379.png)] bg-cover bg-no-repeat py-[26px] md:h-auto sm:py-5 scroll__container ">
      <div className="flex flex-wrap justify-between gap-5 ">
        <Text
          size="text8xl"
          as="p"
          className="bg-gradient bg-clip-text text-[32.36px] font-normal text-transparent md:text-[30px] sm:text-[28px] scroll__item scroll"
        >
          Professional Service
        </Text>
        <Text
          size="text8xl"
          as="p"
          className="bg-gradient bg-clip-text text-[32.36px] font-normal text-transparent md:text-[30px] sm:text-[28px]"
        >
          Trustworthy Team
        </Text>
        <Text
          size="text8xl"
          as="p"
          className="bg-gradient bg-clip-text text-[32.36px] font-normal text-transparent md:text-[30px] sm:text-[28px]"
        >
          Reliable Results
        </Text>
        <Text
          size="text8xl"
          as="p"
          className="bg-gradient bg-clip-text text-[32.36px] font-normal text-transparent md:text-[30px] sm:text-[28px]"
        >
          Customer Focused
        </Text>
      </div>
    </div>
  );
}

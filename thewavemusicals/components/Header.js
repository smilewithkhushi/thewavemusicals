import React from "react";
import Image from "next/image";
import instruments1 from "@/public/assets/instruments1.jpg";

const Header = () => {
  return (
    <div className="w-full flex flex-col bg-slate-500">
     <h1 className="text-5xl font-bold my-10">
        Experience Music Like Never Before
      </h1>
      <h1 className="">
        Our major focus is on guitars, with an expansive range of instruments.{" "}
      </h1>

      {/* image to float on the bottom of the header ; image shows high saturation on hover */}
      <Image
        className="h-auto w-full m-4 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
        src="/assets/instruments1.jpg"
        width={500}
        height={500}
        alt="Welcome to the Wave Musicals"
      />
    </div>
  );
};

export default Header;

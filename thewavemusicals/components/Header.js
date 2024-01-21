import React from "react";
import Image from "next/image";
import instruments1 from "@/public/assets/instruments1.jpg";

const Header = () => {
  return (

    <div>

      {/* navigation element */}
              <div className="w-full flex flex-row justify-between px-6 mb-10">
            <h1 className="text-left text-xl">The Wave Musicals</h1>
            <ul className="flex flex-row">
                <li className="mx-6 transition-all duration-300 hover:underline hover:scale-110">About Us</li>
                <li className="mx-6 transition-all duration-300 hover:underline hover:scale-110">Products</li>
                <li className="mx-6  transition-all duration-300 hover:underline hover:scale-110">Testimonials</li>
                <li className="mx-6 transition-all duration-300 hover:underline hover:scale-110">Contact Us</li>
            </ul>
        </div>

{/* the header element */}
    <div className="w-full flex flex-col px-20">

      
     <h1 className="text-6xl font-bold my-20 py-10 ">
        Experience Music Like Never Before
      </h1>
      
      <h1 className="py-10">
        Our major focus is on guitars, with an expansive range of instruments.{" "}
      </h1>

      {/* image to float on the bottom of the header ; image shows high saturation on hover */}
      <Image
        className="h-auto w-full self-center m-4 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
        src="/assets/instruments2.jpg"
        width={500}
        height={500}
        alt="Welcome to the Wave Musicals"
      />
    </div>
    </div>
  );
};

export default Header;

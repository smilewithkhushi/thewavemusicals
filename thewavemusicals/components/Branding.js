import React from "react";
import instruimage from "@/public/assets/instruments1.jpg";

const Branding = () => {
  return (
    <div
      className="w-full bg-fixed flex flex-col p-20 my-10 gap-8 items-center  "
      style={{

        // use the src property of the image object
        backgroundImage: `url(${instruimage.src})`,

        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        opacity: "0.9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "grayscale(50%)",
        saturate: "5",
        scrollBehavior: "smooth",
      }}
    >
      {/* the div box to contain the branding heading */}
      <div className="text-center md:w-full">
        {/* heading font design scheme for the website */}
        <h1 className="drop-shadow-xl my-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          {" "}
          Serving Music to <br />
          Thousands!
        </h1>
      </div>

      {/* the div box to contain the numbers and the text */}
      <div className="md:w-full md:flex flex-row justify-around my-6 ">
        <div className="flex flex-col text-center m-4">
          <h1 className="text-6xl m-4 font-bold tracking-wide">10+</h1>
          <p className="text-lg tracking-wider">Years</p>
        </div>

        <div className="flex flex-col text-center  m-4">
          <h1 className="text-6xl m-4 font-bold tracking-wide">20+</h1>
          <p className="text-lg tracking-wider">Exclusive Brands </p>
        </div>

        <div className="flex flex-col text-center  m-4">
          <h1 className="text-6xl m-4 font-bold tracking-wide">500+</h1>
          <p className="text-lg tracking-wider">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};
export default Branding;

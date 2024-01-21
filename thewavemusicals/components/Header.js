import React from "react";
import Image from "next/image";
import instruments1 from "@/public/assets/guitars1.jpg";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      
    <div className="w-full bg-fixed flex flex-col p-20 gap-8 items-center  "

    style={{

      // use the src property of the image object
      backgroundImage: `url(${instruments1.src})`,

      // other styles
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      opacity: "0.9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "grayscale(60%)",
      saturate: "5",
      scrollBehavior: "smooth",
    }}>
     
      {/* <video autoplay muted loop styles={
        {
          objectFit: "cover",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          opacity: "0.5",
        }}>

        <source src="/assets/video.mp4" type="video/mp4" />
      </video> */}

      {/* the header element */}
      <div className="w-full flex flex-col md:px-20">
        <h1 className="text-6xl font-bold my-20 py-10 font:white-900" styles={{
        }}
        >
          Experience Music Like Never Before
        </h1>

        <h1 className="py-10 ">
          Our major focus is on guitars, with an extensive range of instruments.{" "}
        </h1>

    </div>

      </div>

        {/* image to float on the bottom of the header ; image shows high saturation on hover */}
        <Image
          className="h-auto w-full top-10 m:auto self-center m-4 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter hover:saturate-150"
          src="/assets/instruments2.jpg"
          width={500}
          height={500}
          alt="Welcome to the Wave Musicals"
        />
    </div>
  );
};

export default Header;

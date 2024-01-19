import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <div className="">
            <h1>Experience Music Like Never Before</h1>
            <h1>Our major focus is on guitars, with an expansive range of instruments. </h1>

            {/* image to float on the bottom of the header
image shows high saturation on hover */}


            <img className="h-auto w-full m-4 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="Welcome to the Wave Musicals" />


        </div>
    );
}

export default Header;

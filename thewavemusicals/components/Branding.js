import React from "react";

const Branding = () => {
    return (
        <div className="w-full flex flex-col my-16 gap-6 items-center bg-fixed" >

            {/* the div box to contain the branding heading */}
            <div className="text-center w-full">

                {/* heading font design scheme for the website */}
                <h1 className="my-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Serving Music to <br />

                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Thousands
                    </span>   </h1>

            </div>

            {/* the div box to contain the numbers and the text */}
            <div className="w-full flex flex-row justify-around my-10 ">

                <div className="flex flex-col text-center">
                    <h1 className="text-7xl m-4 font-bold tracking-wide">10+</h1>
                    <p className="text-xl tracking-wider">Years</p>
                </div>


                <div className="flex flex-col text-center">
                    <h1 className="text-7xl m-4 font-bold tracking-wide">20+</h1>
                    <p className="text-xl tracking-wider">Exclusive Brands </p>
                </div>



                <div className="flex flex-col text-center">
                    <h1 className="text-7xl m-4 font-bold tracking-wide">500+</h1>
                    <p className="text-xl tracking-wider">Happy Customers</p>
                </div>


            </div>

        </div>
    );
}
export default Branding;
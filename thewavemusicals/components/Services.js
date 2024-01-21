'use client';
import React, { useState } from "react";

const services_list = [
    {
        id: 1,
        name: "Musical Instruments",
    },
    {
        id: 2,
        name: "2 Year Warranty Service",
    }
    ,
    {
        id: 3,
        name: "Maintenance Services",
    },
    {
        id: 4,
        name: "Quality Instruments",
    },
    {
        id: 5,
        name: "Instrument Set-up",
    },
    {
        id: 6,
        name: "Instrument Guides",
    },
    {
        id: 7,
        name: "Performance Gear",
    },
    {
        id: 8,
        name: "Custom Orders",
    },
    {
        id: 9,
        name: "Aftercare Services",
    },
];


const Services = () => {

    return (

        <div className="md:w-full flex flex-col my-24 md:py-8 items-center">

            {/* heading font design scheme for the website */}
            <h1 className="my-10 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Melodious Symphony,
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Our Services!
                </span></h1>

            <div className="flex flex-row flex-wrap items-center">
                {services_list.map((service, index) => (

                    <div key={index} className="m-2 md:m-4 border rounded-full py-3 px-6 md:text-xl font-normal text-gray-300 transition duration-500 ease-in-out hover:bg-gray-700 transform -translate-y-1 hover:scale-105" >
                        <h2 className="">{service.name}</h2>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;



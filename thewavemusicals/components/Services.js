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
    id:4, 
    name:"Quality Instruments",
}, 
{
    id:5, 
    name:"Instrument Set-up",
}, 
{
    id:6, 
    name:"Instrument Guides",
}, 
{
    id:7, 
    name:"Performance Gear",
}, 
{
    id:8, 
    name:"Custom Orders",
}, 
{
    id:9, 
    name:"Aftercare Services",
}, 
];


const Services = () => {

    return (
     
        <div className="mb-20 mt-6">
            <div className="flex flex-row flex-wrap flex-">
                {services_list.map((service, index) => (

                    <div key={index} className="m-2 px-6 py-4 border text-lg font-normal text-gray-300">          
                    <h2 className="">{service.name}</h2>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;



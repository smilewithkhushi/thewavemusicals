'use client';
import React, { useState } from "react";

const reviews = [
    {
        id:1,
        name: "Pramod Pandey",
        message: "I think it's one place for musical instruments that every person in Haldwani knows of so far. Bhaiya's nature is great, calm, helping. You'll find every musical instruments if you want to buy one."
    },
    {
        id:2,
        name: "Rishi Prasad",
        message: "A small but wonderful store for your musical needs. I went in for a quick change of guitar strings and walked out completely satisfied within 5 mins. I look forward to spending more time here the next time I'm close by. Thank you for your great help"
    },
    {

        id:3,
        name: "Yatendra Arya",
        message: "The owner (Mr Panwar) will guide you in buying instruments. You will find wide range of items in each category. Decent price and good quality. Everybody whether beginner or professional, should buy musical instruments from here. You will not find any musical instruments buying store like this in whole haldwani."
    },
    {

        id:4,
        name: "Khushi Panwar",
        message: "best places to buy musical instruments in haldwani. they offer amazing services at very minimal price. I got my first guitar and harmonium from here. Highly recommended :)"
    },
    {

        id:5,
        name: "Rajendra Singh",
        message: "The place where we can find  all types of music instruments like Guiter, Flute, KeyBoards, Harmonium,  durm set all types,. Over all  Western and classical  types of instruments can be find in  affordable price.",
    },
    {
        id:6,
        name: "yogesh upadhyay",
        message: "Brought a harmonium this place has variety of stuff and the owner is really helpful. They have ukulele too"
    },
    {
        id:7,
        name: "Hem Pandey",
        message: "Good range of guitar. Prices are genuine. Very very good service after sale. Good quality of products."
    }
];


const Testimonials = () => {

    return (
        <div className="flex flex-col justify-items-center">
            <h1>What Our Happy Customers Say</h1>

            <div className="flex flex-row flex-nowrap overflow-x-auto ">
                {reviews.map((testimonial, index) => (

                    <div key={index} className="justify-self-center flex flex-col m-8 transition-all duration-2000 ease-in-out">

          
                        <h2 className="">{testimonial.name}</h2>
                        <p className="">{testimonial.message}</p>

                        <div className="rating">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;



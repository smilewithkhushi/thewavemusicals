'use client';
import React, { useState } from "react";

const reviews = [
    {
        name: "Pramod Pandey",
        message: "I think it's one place for musical instruments that every person in Haldwani knows of so far. Bhaiya's nature is great, calm, helping. You'll find every musical instruments if you want to buy one."
    },
    {
        name: "Rishi Prasad",
        message: "A small but wonderful store for your musical needs. I went in for a quick change of guitar strings and walked out completely satisfied within 5 mins. I look forward to spending more time here the next time I'm close by. Thank you for your great help"
    },
    {
        name: "Yatendra Arya",
        message: "The owner (Mr Panwar) will guide you in buying instruments. You will find wide range of items in each category. Decent price and good quality. Everybody whether beginner or professional, should buy musical instruments from here. You will not find any musical instruments buying store like this in whole haldwani."
    },
    {
        name: "Khushi Panwar",
        message: "best places to buy musical instruments in haldwani. they offer amazing services at very minimal price. I got my first guitar and harmonium from here. Highly recommended :)"
    },
    {
        name: "Rajendra Singh",
        message: "The place where we can find  all types of music instruments like Guiter, Flute, KeyBoards, Harmonium,  durm set all types,. Over all  Western and classical  types of instruments can be find in  affordable price.",
    },
    {
        name: "yogesh upadhyay",
        message: "Brought a harmonium this place has variety of stuff and the owner is really helpful. They have ukulele too"
    },
    {
        name: "Hem Pandey",
        message: "Good range of guitar. Prices are genuine. Very very good service after sale. Good quality of products."
    }
];


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    setTestimonials(reviews);

    return (
        <div className="testimonials-container">
            <h1>What Our Happy Customers Say</h1>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <h2>{testimonial.name}</h2>
                        <p>{testimonial.message}</p>
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
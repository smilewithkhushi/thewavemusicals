'use client';
import React from 'react';


// Testimonials data

const reviews = [
    {
        id: 1,
        name: "Pramod Pandey",
        message: "I think it's one place for musical instruments that every person in Haldwani knows of so far. Bhaiya's nature is great, calm, helping. You'll find every musical instruments if you want to buy one."
    },
    {
        id: 2,
        name: "Rishi Prasad",
        message: "A small but wonderful store for your musical needs. I went in for a quick change of guitar strings and walked out completely satisfied within 5 mins. I look forward to spending more time here the next time I'm close by. Thank you for your great help"
    },
    {

        id: 3,
        name: "Yatendra Arya",
        message: "The owner (Mr Panwar) will guide you in buying instruments. You will find wide range of items in each category. Decent price and good quality. Everybody whether beginner or professional, should buy musical instruments from here. You will not find any musical instruments buying store like this in whole haldwani."
    },
    {

        id: 4,
        name: "Khushi Panwar",
        message: "best places to buy musical instruments in haldwani. they offer amazing services at very minimal price. I got my first guitar and harmonium from here. Highly recommended :)"
    },
    {

        id: 5,
        name: "Rajendra Singh",
        message: "The place where we can find  all types of music instruments like Guiter, Flute, KeyBoards, Harmonium,  durm set all types,. Over all  Western and classical  types of instruments can be find in  affordable price.",
    },
    {
        id: 6,
        name: "yogesh upadhyay",
        message: "Brought a harmonium this place has variety of stuff and the owner is really helpful. They have ukulele too"
    },
    {
        id: 7,
        name: "Hem Pandey",
        message: "Good range of guitar. Prices are genuine. Very very good service after sale. Good quality of products."
    }
];


const Testimonials = () => {

    return (

        <div className="mb-20 mt-6">
       


            {/* Swiper slider for testimonials */}

            <div className="flex overflow-x-auto space-x-4 my-4 p-6 md:mx-10">
                {reviews.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-1/3 p-6 text-black bg-teal-50 border rounded-lg shadow-lg xs:w-2/3">

                        <h2 className="text-xl my-4">{testimonial.name}</h2>
                        <p className="">{testimonial.message}</p>

                        <div className="my-4 text-xl">
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



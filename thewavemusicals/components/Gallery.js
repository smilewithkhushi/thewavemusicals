import React from "react";
import Image from "next/image";
const galleryItems = [
    {
        id: 3,
        image: 'casio1.jpeg',
        desc: "Casio Keyboard",
    },

    {
        id: 5,
        image: 'shopview1.jpeg',
        desc: "Shop view",
    },
]
const Gallery = () => {
return (
    <div className="md:w-full flex flex-col items-center justify-between p-2 bg-black text-white">
       
            {/* heading font design scheme for the website */}
            <h1 className="my-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Our Magnificent Melodious 
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Products
                </span></h1>

       
        <div className="flex flex-row flex-wrap my-10 justify-center">
            
            {galleryItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                    <Image
                        className="h-4/5 md:w-4/5 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 hover:scale-110 "
                        src={`/assets/${item.image}`}
                        width={300}
                        height={300}
                        alt={item.desc}
                    />
                </div>
            ))}
        </div>
    </div>

);
}

export default Gallery;
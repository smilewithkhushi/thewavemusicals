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
    {
        id: 4,
        image: 'guitars1.jpg',
        desc: "Collection of guitars",
    },{
        id: 6,
        image: 'casio2.jpg',
        desc: "Casio Keyboard",
    }
]
const Gallery = () => {
return (
    <div className="w-full flex flex-col items-center justify-between p-2 bg-black text-white">
        <div className="flex flex-wrap justify-center">
            {galleryItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                    <Image
                        className="h-4/5 w-4/5 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 hover:scale-110 "
                        src={`/assets/${item.image}`}
                        width={250}
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
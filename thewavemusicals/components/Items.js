import React from "react";

const shopitems=[
    {
        id: 1,
        img: "",
        title: "Exceptional Guitar Collection ",
        desc: "An awe-inspiring collection of quality guitars tailored to suit varying musical styles. "
    },
    {
        id: 2,
        img: '',    
        title: "A Wide Range of Keyboards",
        desc: "A wide range of keyboards from the best brands in the world. "
    },
    {
        id: 3,
        img: "",
        title: "Epic Accessory Range ",
        desc: "Explore our comprehensive collection of musical accessories designed for optimum performances. ",

    }, {
        id :4,
        img: "Stellar Customer Services ",
        title: "Providing top-notch customer service paired with affordable pricing for  musicians everywhere. "
    },

]

const items = () => {

    return(
        <div>
            <h1>Magnificent Melodious Features </h1>
        <div>
            {shopitems.map((shopitem, index) => (
                <div key={index}>
                    <h2>{shopitem.title}</h2>
                    <p>{shopitem.desc}</p>
                </div>
            ))}
        </div>
            
        </div>
    );
}

export default items;
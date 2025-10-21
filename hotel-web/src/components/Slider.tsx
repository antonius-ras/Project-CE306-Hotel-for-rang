import React from "react";

export default function Slider () {
    const places = [
    {name:"Bangkok", image:"./Places/bangkok.webp"},
    {name:"Chonburi", image:"./Places/Chonburi.jpg"},
    {name:"Chiang Mai", image:"./Places/ChiangMai.webp"},
    {name:"Phuket", image:"./Places/Phuket.jpeg"}
];
    return (
        <div className="w-full flex justify-center bg-white py-10">
            <div className="flex flex-row gap-6 max-w-6xl overflow-x-auto px-4">
                {places.map((place, index) =>(
                    <div key={index} className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden flex-shrink-0">
                        <img src={place.image} alt={place.name} className="w-full h-full object-cover"/>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h1>{place.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
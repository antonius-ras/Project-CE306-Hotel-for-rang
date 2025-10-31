import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Slider () {

    type Places = {
        name:string
        image:string
        path:string
    }

    const navigate = useNavigate();

    const places: Places[] =[
    {name:"Bangkok", image:"./Places/Bangkok.webp", path: "/Hotel_Bangkok" },
    {name:"Chonburi", image:"./Places/Chonburi.jpg", path: "/Hotel_Chonburi"},
    {name:"Chiang Mai", image:"./Places/ChiangMai.webp", path: "/Hotel_ChiangMai"},
    {name:"Phuket", image:"./Places/Phuket.jpeg", path: "/Hotel_Phuket"},
    {name:"Ayutthaya", image:"./Places/Ayutthaya.png", path: "/Bangkok" },
    {name:"Kanchanaburi", image:"./Places/Kanchanaburi.webp", path: "/Bangkok" },
    {name:"Chiang Rai", image:"./Places/ChiangRai.jpg", path: "/Bangkok" },
    {name:"Chachoengsao", image:"./Places/Chachoengsao.jpg", path: "/Bangkok" }
];
    return (
        <div className="w-full flex justify-center bg-white py-10">
            <div className="flex flex-row gap-8 max-w-6xl overflow-x-auto px-4">
                {places.map((place, index) =>(
                    <button key={index} 
                    onClick={() => navigate(place.path)}
                    className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden flex-shrink-0">
                    
                        <img 
                        src={place.image} 
                        alt={place.image} 
                        className="w-full h-full object-cover"/>
                        
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-left">
                        <h1 className="text-white text-xl font-semibold leading-tight">{place.name}</h1>
                    </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

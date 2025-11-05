import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function HotelList() {
    const { provinceName } = useParams();
    const navigate = useNavigate();

const hotelData: Record<string,{id:string, name:string, image:string}[] > = { 
    Bangkok: [
        {id:"", name:"", image:""},
        {id:"", name:"", image:""},
        {id:"", name:"", image:""}
    ],
        Chonburi: [
        {id:"", name:"", image:""},
        {id:"", name:"", image:""},
        {id:"", name:"", image:""}
    ],
        ChiangMai: [
        {id:"", name:"", image:""},
        {id:"", name:"", image:""},
        {id:"", name:"", image:""}
    ],
        Phuket: [
        {id:"", name:"", image:""},
        {id:"", name:"", image:""},
        {id:"", name:"", image:""}
    ],
        Ayutthaya: [
        {id:"", name:"", image:""},
        {id:"", name:"", image:""},
        {id:"", name:"", image:""}
    ],
        Kanchanaburi: [
        {id:"", name:"", image:""},
        {id:"", name:"", image:""},
        {id:"", name:"", image:""}
    ],
        ChiangRai: [
        {id:"", name:"", image:""},
        {id:"", name:"", image:""},
        {id:"", name:"", image:""}
    ],
        Chachoengsao: [
        {id:"", name:"", image:""},
        {id:"", name:"", image:""},
        {id:"", name:"", image:""}
    ]
}

    const hotels = hotelData[provinceName as keyof typeof hotelData] || [];
    
    const handleSelectHotel = (hotelId: string) => {
    navigate(`/hotel/${hotelId}`);
};

    return(
        <div className="p-10 text-center bg-gray-50 min-h-screen">
            <h1>โรงแรม{provinceName}</h1>
            <div className="flex justify-center gap-8">
                {hotels.map((h) =>(
                    <button
                        key={h.id}
                        onClick={() => handleSelectHotel(h.id)}
                        className="cursor-pointer hover:scale-105 transition-transform duration-300 bg-white rounded-xl shadow-md p-4 w-72">
                    <img
                        src=""
                        alt=""
                        className=""/>
                    <h2 className="text-black mt-3 text-lg font-semibold">{h.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    )
}
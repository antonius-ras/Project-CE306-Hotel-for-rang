import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProvinceList () {
    const navigate = useNavigate();

    type province = {
        name:string
        image:string
    }

    const provinces: province[] =[
    {name:"Bangkok", image:"./Places/Bangkok.webp"},
    {name:"Chonburi", image:"./Places/Chonburi.jpg"},
    {name:"ChiangMai", image:"./Places/ChiangMai.webp"},
    {name:"Phuket", image:"./Places/Phuket.jpeg"},
    {name:"Ayutthaya", image:"./Places/Ayutthaya.png"},
    {name:"Kanchanaburi", image:"./Places/Kanchanaburi.webp"},
    {name:"ChiangRai", image:"./Places/ChiangRai.jpg"},
    {name:"Chachoengsao", image:"./Places/Chachoengsao.jpg"}
];
    const handleSelectProvince = (provinceName: string) => {
        navigate(`/province/${provinceName}`);
}    

    return (
        <div className="w-full flex justify-center bg-white py-10">
            <div className="flex flex-row gap-8 max-w-6xl overflow-x-auto px-4">
                {provinces.map((p) =>(
                    <button 
                        key={p.name} 
                        onClick={() =>  handleSelectProvince(p.name)}
                        className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden flex-shrink-0">
                    
                        <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-cover"/>
                        
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-left">
                        <h1 className="text-white text-xl font-semibold leading-tight">{p.name}</h1>
                    </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

import { useNavigate } from "react-router-dom";

// component แสดงรายการจังหวัด
export default function ProvinceList () {

// ฟังก์ชันสำหรับเปลี่ยนหน้า
    const navigate = useNavigate();
    
// กำหนด type ของจังหวัด
    type province = {
        name:string
        image:string
    }
// สร้าง array ของจังหวัดแต่ละตัว
    const provinces: province[] =[
    {name:"Bangkok", image:"./Provinces/Bangkok.webp"},
    {name:"Chonburi", image:"./Provinces/Chonburi.jpg"},
    {name:"ChiangMai", image:"./Provinces/ChiangMai.webp"},
    {name:"Phuket", image:"./Provinces/Phuket.jpeg"},
    {name:"Ayutthaya", image:"./Provinces/Ayutthaya.png"},
    {name:"Kanchanaburi", image:"./Provinces/Kanchanaburi.webp"},
    {name:"ChiangRai", image:"./Provinces/ChiangRai.jpg"},
    {name:"Chachoengsao", image:"./Provinces/Chachoengsao.jpg"}
];

// ฟังก์ชันเมื่อผู้ใช้เลือกจังหวัด จะเปลี่ยนหน้าไปที่ URL ของจังหวัด
    const handleSelectProvince = (provinceName: string) => {
        navigate(`/province/${provinceName}`);
    }

    return (
        <div className="w-full flex justify-center bg-white py-10">
            <div className="flex flex-row gap-8 max-w-6xl overflow-x-auto px-4 light-scrollbar">
                {/* วนลูปแสดงจังหวัดแต่ละตัวจาก array provinces */}
                {provinces.map((p) =>(
                    <button 
                        // key ใช้บอก React ว่า element นี้เป็นของจังหวัดไหน เพื่ออัปเดตได้ถูกต้อง
                        key={p.name} 
                        // เมื่อคลิกจะเรียกใช้ฟังก์ชันจะส่งชื่อจังหวัดไปเพื่อเปลี่ยนหน้า
                        onClick={() =>  handleSelectProvince(p.name)}
                        className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden flex-shrink-0">
                    {/* ใส่รูป */}
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover"/> 
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-left">
                        <h1 className="text-white text-xl font-semibold leading-tight">{p.name}</h1>
                    </div>
                    </button>
                ))}
                
            </div>
        </div>
    );
};


import React from 'react';
import { FaMapMarkerAlt, FaArrowRight, FaCheckCircle} from 'react-icons/fa'; // นำเข้าไอคอนต่างๆ

// กำหนด Type (สัญญา) ว่าใครจะเรียกใช้ Component นี้ต้องส่งค่าเหล่านี้มาให้ครบ
type ProductCardProps = {
    id: string;                 // รหัสสินค้า/โรงแรม (ใช้ตอนกดลิงก์)
    imageUrl: string;           // ลิงก์รูปภาพ
    title: string;              // ชื่อโรงแรม
    location: string;           // ที่ตั้ง
    description: string;        // คำอธิบายยาวๆ
    amenities: string[];        // สิ่งอำนวยความสะดวก (มาเป็น Array ของข้อความ เช่น ['Wifi', 'Pool'])
    onNavigateToDetails: (hotelId: string) => void; // ฟังก์ชันที่รับมาจากแม่ (Parent) เพื่อสั่งให้เปลี่ยนหน้า
};

export const ProductCard: React.FC<ProductCardProps> = ({ 
    id, 
    imageUrl, 
    title, 
    location, 
    description, 
    amenities, 
    onNavigateToDetails 
}) => { // รับ Props แบบ Destructuring (แกะค่าออกมาใช้เลย)


    // ฟังก์ชันจัดการเมื่อมีการคลิกที่การ์ด หรือปุ่ม
    const handleCardClick = () => {
        onNavigateToDetails(id); // ส่ง id ของโรงแรมนี้กลับไปบอก Parent ว่า "ผู้ใช้เลือกโรงแรมเบอร์นี้นะ"
    };

    
    return (
        // --- กรอบนอกสุดของการ์ด ---
        // hover:scale-105: เมาส์ชี้แล้วขยายใหญ่ขึ้นนิดนึง
        // transition-transform: ให้การขยายดูนุ่มนวล
        // shadow-md: ใส่เงาให้ดูลอยขึ้นมา
        <div className="hover:scale-105 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative max-w-full">

            {/* --- ส่วนรูปภาพ --- */}
            <div className="relative group">
                {/* รูปภาพโรงแรม: ใส่ onClick เพื่อให้คลิกรูปแล้วไปหน้ารายละเอียดได้เลย */}
                <img src={imageUrl} className="w-full h-56 object-cover cursor-pointer" onClick={handleCardClick} alt={title}/>
                {/* Overlay เงาดำๆ: จะแสดงเมื่อเอาเมาส์ไปชี้ (group-hover) เพื่อความสวยงาม */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* --- ส่วนเนื้อหาข้อความ --- */}
            <div className="flex-1 p-4 relative flex flex-col">
                
                {/* 1. ชื่อโรงแรม */}
                <h3 className="text-xl font-bold text-gray-900 mb-1 cursor-pointer hover:text-green-700 transition-colors" onClick={handleCardClick}> 
                    {title}
                </h3>

                {/* 2. ที่ตั้ง (Icon + ข้อความ) */}
                <div className="flex items-center text-gray-500 font-medium text-sm mb-3">
                    <FaMapMarkerAlt className="text-red-500 mr-1.5" /> {/* ไอคอนหมุดสีแดง */}
                    <span>{location}</span>
                </div>

                {/* 3. สิ่งอำนวยความสะดวก (Loop Array) */}
                {/* ใช้ .map เพื่อวนลูป amenities แล้วสร้างเป็นป้าย (Badge) เล็กๆ หลายๆ อัน */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {amenities.map((item, index) => (
                        <span key={index} className="bg-green-50 text-green-700 hover:bg-green-200 border border-blue-100 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <FaCheckCircle/> {/* ไอคอนติ๊กถูก */}
                            {item}
                        </span>
                    ))}
                </div>

                {/* 4. คำอธิบาย */}
                {/* line-clamp-3: สำคัญมาก! ใช้ตัดข้อความถ้ามันยาวเกิน 3 บรรทัด แล้วใส่ ... ต่อท้ายให้เอง */}
                <p className="text-gray-600 text-sm mb-14 line-clamp-3">
                    {description}
                </p>

                {/* 5. ปุ่ม Book Now */}
                {/* absolute bottom-4 right-4: สั่งให้ปุ่มลอยติดมุมขวาล่างของการ์ดเสมอ ไม่ว่าข้อความจะยาวแค่ไหน */}
                <div className="absolute bottom-4 right-4">
                    <button onClick={handleCardClick} className="group bg-green-100 text-green-700 hover:bg-green-200  px-4 py-2 rounded-lg shadow-md text-sm font-semibold transition-all flex items-center gap-2">
                        Book Now
                        {/* ลูกศรขยับขวาเมื่อเอาเมาส์ชี้ปุ่ม (group-hover:translate-x-1) */}
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
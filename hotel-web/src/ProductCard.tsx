import React from 'react';

type ProductCardProps = {
    // 💡 สิ่งใหม่: เพิ่ม id เพื่อระบุว่านี่คือโรงแรมไหน
    id: string; 
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    
    // 💡 สิ่งที่เปลี่ยน: เปลี่ยนเป็นฟังก์ชันนำทาง และให้ส่ง id กลับไป
    onNavigateToDetails: (hotelId: string) => void; 
};

export const ProductCard: React.FC<ProductCardProps> = ({ 
    id, // ดึง id ออกมาใช้
    imageUrl, 
    title, 
    description, 
    price, 
    onNavigateToDetails 
}) => {
    
    // ฟังก์ชันสำหรับเรียกใช้การนำทางเมื่อคลิก
    const handleCardClick = () => {
        // เรียกฟังก์ชันที่ส่งมาจาก Parent Component พร้อมส่ง id ของโรงแรมนี้กลับไป
        onNavigateToDetails(id); 
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col max-w-full lg:max-w-48 xl:max-w-100 overflow-hidden rounded-lg">
            
            {/* 1. ทำให้รูปภาพคลิกได้ และใช้ฟังก์ชันใหม่ */}
            <img 
                src={imageUrl} 
                className="w-full h-auto cursor-pointer" 
                onClick={handleCardClick} // เมื่อคลิก จะเรียก handleCardClick
            />
            
            <div className="flex-1 p-5">
                {/* 2. (ทางเลือก) ทำให้ชื่อโรงแรมคลิกได้ด้วย */}
                <h3 
                    className="flex text-xl font-semibold text-gray-900 mb-1 cursor-pointer hover:text-blue-600"
                    onClick={handleCardClick} // สามารถทำให้ Title คลิกได้ด้วย
                >
                    {title}
                </h3>
                
                <p className="flex text-gray-600 description">{description}</p>
                <div className="flex sm:text-font-medium text-black mt-4">
                    <span className="flex text-blue-500">{price}</span>
                    {/* ❌ ปุ่มถูกลบออกแล้ว */}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
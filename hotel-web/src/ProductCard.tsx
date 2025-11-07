import React from 'react';

type ProductCardProps = {
    id: string;
    imageUrl: string;
    title: string;
    location: string;
    description: string;
    amenities: string[];
    onNavigateToDetails: (hotelId: string) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
    id,
    imageUrl,
    title,
    location,
    description,
    amenities,
    onNavigateToDetails
}) => {
    const handleCardClick = () => {
        onNavigateToDetails(id);
    };

    return (
        <div className="hover:scale-105 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative max-w-full lg:max-w-100 xl:max-w-100">
            <img
                src={imageUrl}
                className="w-full h-auto cursor-pointer"
                onClick={handleCardClick}
                alt={title}
            />

            <div className="flex-1 p-3 relative">
                <h3
                    className="text-xl font-semibold text-gray-900 mb-1 cursor-pointer hover:text-blue-600"
                    onClick={handleCardClick}
                >
                    {title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">📍 {location}</p>
                {/* ✅ แก้ส่วนนี้ให้ map amenities */}
                <div className="flex flex-wrap gap-2 mb-2">
                    {amenities.map((item, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <p className="text-gray-600 text-sm mb-12">{description}</p>

                {/* ปุ่มอยู่มุมขวาล่าง */}
                <div className="absolute bottom-3 right-3">
                    <button
                        onClick={handleCardClick}
                        className="
                            bg-blue-600 
                            hover:bg-blue-700 
                            text-white 
                            px-4 py-2 
                            rounded-lg 
                            shadow-md 
                            text-sm
                        "
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

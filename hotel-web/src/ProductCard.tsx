import React from 'react';
import { FaMapMarkerAlt, FaArrowRight, FaCheckCircle} from 'react-icons/fa';

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
        <div className="hover:scale-105 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative max-w-full">

            <div className="relative group">
                <img src={imageUrl} className="w-full h-56 object-cover cursor-pointer" onClick={handleCardClick} alt={title}/>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 pointer-events-none" />
            </div>

            <div className="flex-1 p-4 relative flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-1 cursor-pointer hover:text-green-700 transition-colors" onClick={handleCardClick}> 
                    {title}
                </h3>
                <div className="flex items-center text-gray-500 font-medium text-sm mb-3">
                    <FaMapMarkerAlt className="text-red-500 mr-1.5" />
                    <span>{location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                    {amenities.map((item, index) => (
                        <span key={index} className="bg-green-50 text-green-700 hover:bg-green-200 border border-blue-100 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <FaCheckCircle/>
                            {item}
                        </span>
                    ))}
                </div>
                <p className="text-gray-600 text-sm mb-14 line-clamp-3">
                    {description}
                </p>
                <div className="absolute bottom-4 right-4">
                    <button onClick={handleCardClick} className="group bg-green-100 text-green-700 hover:bg-green-200  px-4 py-2 rounded-lg shadow-md text-sm font-semibold transition-all flex items-center gap-2">
                        Book Now
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
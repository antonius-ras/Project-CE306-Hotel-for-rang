import React from 'react';
import Button from './Button';


type ProductCardProps = {
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    onAddToCart?: () => void;
};


export const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, description, price, onAddToCart }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="w-full h-48 bg-gray-100 overflow-hidden rounded-t-lg">
                <img src={imageUrl} className="w-full h-full object-cover object-center" />
            </div>

            <div className="p-5">
                <p className="flex text-md font-semibold text-gray-800 mb-1">{title}</p>
                <p className="flex text-gray-500">{description}</p>

                <div className="text-sm font-medium text-black mt-6">
                    <p className="flex text-blue-500">{price}$</p>
                    <Button variant="primary" onClick={onAddToCart} className="flex bg-blue-500 text-white rounded-md px-3 py-1 mt-2 hover:bg-blue-600">Add to Cart</Button>

                </div>


            </div>
        </div>

    );
};
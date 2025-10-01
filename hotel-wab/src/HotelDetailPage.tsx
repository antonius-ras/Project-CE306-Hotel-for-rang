import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// 💡 EXPORT ข้อมูลสินค้าทั้งหมดเพื่อให้ Home Component สามารถนำไปใช้ได้
export const MOCK_HOTEL_DATA = {
    '1': { 
        id: '1',
        title: 'space x', // ข้อมูลจากเดิมใน App.tsx
        location: 'อวกาศใกล้ดาวอังคาร',
        rating: 5.0,
        pricePerNight: 110000000000,
        description: 'ยานอวกาศ น้ำหนักเบาประหยัดน้ำมันสามารถเดินทางได้ไกลถึง 10 ปีแสง',
        imageUrl: 'hotel1.png', 
        amenities: ['Life Support', 'Zero Gravity Gym', 'Advanced Telescope'],
        numberOfReviews: 5,
    },
    '2': {
        id: '2',
        title: 'City Center Tower',
        location: 'เพลินจิต, กรุงเทพฯ',
        rating: 4.5,
        pricePerNight: 3500,
        description: 'ที่พักทันสมัยใจกลางย่านธุรกิจ การออกแบบเน้นความหรูหราและเรียบง่าย เหมาะสำหรับนักเดินทางที่ต้องการความสงบและสะดวกสบาย',
        imageUrl: 'hotel2.png', 
        amenities: ['Free WiFi', 'Breakfast Included', 'Business Center', 'Rooftop Bar'],
        numberOfReviews: 320,
    },
    '3': { // ข้อมูลสินค้าใหม่ที่คุณเพิ่ม
        id: '3',
        title: 'Seaside Serenity Resort',
        location: 'หัวหิน, ประจวบคีรีขันธ์',
        rating: 4.9,
        pricePerNight: 4200,
        description: 'รีสอร์ทริมทะเลที่เงียบสงบ พร้อมวิวทะเลอันงดงามและหาดทรายขาวสะอาด',
        imageUrl: 'hotel3.png', 
        amenities: ['Beach Access', 'Private Balcony', 'Swimming Pool', 'Massage'],
        numberOfReviews: 450,
    },
};


const HotelDetailPage: React.FC = () => {
    // ... (ส่วนการทำงานของ Component เหมือนเดิม)
    const { hotelId } = useParams<{ hotelId: string }>(); 
    
    // ดึงข้อมูลโรงแรมที่ต้องการ
    const hotel = MOCK_HOTEL_DATA[hotelId as keyof typeof MOCK_HOTEL_DATA];
    
    // ... (ส่วน State และ Logic การจองเหมือนเดิม)
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);

    if (!hotel) {
        return (
            <div className="text-center p-10 text-red-600 text-2xl">
                ไม่พบข้อมูลโรงแรม (ID: {hotelId || 'N/A'})
            </div>
        );
    }
    
    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        console.log('--- ข้อมูลการจองที่ส่งออกไป ---');
        console.log(`โรงแรม: ${hotel.title} (ID: ${hotel.id})`);
        console.log(`เช็คอิน: ${checkInDate}`);
        console.log(`เช็คเอาท์: ${checkOutDate}`);
        console.log(`จำนวนแขก: ${guests}`);
        console.log('--- END ---');
        
        alert(`จอง ${hotel.title} เรียบร้อย! (ข้อมูลถูกบันทึกใน Console)`);
    };

    return (
        // ... (ส่วนการแสดงผล HTML/JSX ทั้งหมดเหมือนเดิม)
        <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                
                {/* ส่วนภาพหลัก */}
                <div className="relative h-96">
                    <img 
                        src={hotel.imageUrl} 
                        alt={hotel.title} 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                        <h1 className="text-4xl font-bold text-white drop-shadow-lg">{hotel.title}</h1>
                    </div>
                </div>

                <div className="p-8 lg:flex lg:space-x-8">
                    
                    {/* ส่วนรายละเอียด (ซ้าย) */}
                    <div className="lg:w-2/3 space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">รายละเอียด</h2>
                            <p className="text-gray-600 mb-4">{hotel.description}</p>
                            
                            <div className="flex items-center space-x-4 text-lg font-medium text-gray-700">
                                <span className="text-yellow-500">⭐ {hotel.rating}</span>
                                <span>|</span>
                                <span>{hotel.numberOfReviews} รีวิว</span>
                                <span>|</span>
                                <span>📍 {hotel.location}</span>
                            </div>
                        </section>
                        
                        <hr />

                        {/* ส่วนสิ่งอำนวยความสะดวก */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">สิ่งอำนวยความสะดวก</h2>
                            <div className="flex flex-wrap gap-4">
                                {hotel.amenities.map(item => (
                                    <span key={item} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* ส่วนฟอร์มการจอง (ขวา) */}
                    <div className="lg:w-1/3 mt-10 lg:mt-0">
                        <div className="sticky top-10 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200">
                            <div className="text-3xl font-bold text-gray-900 mb-4">
                                ฿{hotel.pricePerNight.toLocaleString()}
                                <span className="text-base font-normal text-gray-500"> / คืน</span>
                            </div>

                            <form onSubmit={handleBookingSubmit} className="space-y-4">
                                
                                <div>
                                    <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">เช็คอิน</label>
                                    <input 
                                        type="date" 
                                        id="checkin"
                                        value={checkInDate}
                                        onChange={(e) => setCheckInDate(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">เช็คเอาท์</label>
                                    <input 
                                        type="date" 
                                        id="checkout"
                                        value={checkOutDate}
                                        onChange={(e) => setCheckOutDate(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700">จำนวนแขก</label>
                                    <input 
                                        type="number" 
                                        id="guests"
                                        min="1"
                                        value={guests}
                                        onChange={(e) => setGuests(parseInt(e.target.value))}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        required
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150"
                                >
                                    จองทันที
                                </button>
                                
                            </form>
                            <p className="text-xs text-center text-gray-500 mt-3">คุณจะไม่ถูกเรียกเก็บเงินตอนนี้</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetailPage;
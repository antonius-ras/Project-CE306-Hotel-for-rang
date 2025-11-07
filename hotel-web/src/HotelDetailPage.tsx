import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


export const HOTEL_DATA = [
    {name:"Bangkok", image:"./Provinces/Bangkok.webp"},
    {name:"Chonburi", image:"./Provinces/Chonburi.jpg"},
    {name:"ChiangMai", image:"./Provinces/ChiangMai.webp"},
    {name:"Phuket", image:"./Provinces/Phuket.jpeg"},
    {name:"Ayutthaya", image:"./Provinces/Ayutthaya.png"},
    {name:"Kanchanaburi", image:"./Provinces/Kanchanaburi.webp"},
    {name:"ChiangRai", image:"./Provinces/ChiangRai.jpg"},
    {name:"Chachoengsao", image:"./Provinces/Chachoengsao.jpg"}
]; 
export const MOCK_HOTEL_DATA = {
    '1': {
        id: '1',
        title: 'Holiday Inn Bangkok',
        location: '971 Phloen Chit Road, Lumpini Pathum Wan, Bangkok 10330 Thailand',
        rating: 4.5,
        description:
            'คุณมาสัมผัสความมหัศจรรย์ของเมืองเพียง 35 นาทีจากสนามบินสุวรรณภูมิและดอนเมือง โรงแรมของเราตั้งอยู่ใกล้กับศูนย์การค้าเซ็นทรัลเวิลด์ เหมาะสำหรับการหลีกหนีความวุ่นวายหรือการผจญภัย',
        imageUrl: '/hotel1/hotel1.png',
        amenities: ['Life Support', 'Zero Gravity Gym', 'Advanced Telescope'],
        numberOfReviews: 5,
        roomTypes: [
            { name: 'ห้องเตียงเดียว', price: 3000 },
            { name: 'ห้องเตียงคู่', price: 3500 },
        ],
    },
    '2': {
        id: '2',
        title: 'City Center Tower',
        location: 'เพลินจิต, กรุงเทพฯ',
        rating: 4.5,
        description:
            'ที่พักทันสมัยใจกลางย่านธุรกิจ การออกแบบเน้นความหรูหราและเรียบง่าย เหมาะสำหรับนักเดินทางที่ต้องการความสงบและสะดวกสบาย',
        imageUrl: '/hotel2/hotel2.png',
        amenities: ['Free WiFi', 'Breakfast Included', 'Business Center', 'Rooftop Bar'],
        numberOfReviews: 320,
        roomTypes: [
            { name: 'ห้องมาตรฐาน', price: 3500 },
            { name: 'ห้องดีลักซ์', price: 4200 },
            { name: 'ห้องสวีท', price: 5000 },
        ],
    },
    '3': {
        id: '3',
        title: 'Seaside Serenity Resort',
        location: 'หัวหิน, ประจวบคีรีขันธ์',
        rating: 4.9,
        description: 'รีสอร์ทริมทะเลที่เงียบสงบ พร้อมวิวทะเลอันงดงามและหาดทรายขาวสะอาด',
        imageUrl: '/hotel3/hotel3.png',
        amenities: ['Beach Access', 'Private Balcony', 'Swimming Pool', 'Massage'],
        numberOfReviews: 450,
        roomTypes: [
            { name: 'ห้องริมทะเล', price: 4200 },
            { name: 'ห้องพูลวิลล่า', price: 6000 },
        ],
    },
    '4': {
        id: '4',
        title: 'Mountain View Lodge',
        location: 'ปาย, แม่ฮ่องสอน',
        rating: 4.7,
        description:
            'ที่พักสไตล์ลอฟท์ท่ามกลางธรรมชาติ พร้อมวิวภูเขาที่สวยงามและอากาศบริสุทธิ์',
        imageUrl: '/hotel4/hotel4.png',
        amenities: ['Hiking Trails', 'Fireplace', 'Hot Tub', 'Free Breakfast'],
        numberOfReviews: 210,
        roomTypes: [
            { name: 'ห้องวิวภูเขา', price: 2800 },
            { name: 'ห้องมีระเบียง', price: 3200 },
        ],
    },
    '5': {
        id: '5',
        title: 'Urban Chic Hotel',
        location: 'สีลม, กรุงเทพฯ',
        rating: 4.3,
        description:
            'โรงแรมทันสมัยในย่านใจกลางเมือง เหมาะสำหรับนักธุรกิจและนักท่องเที่ยวที่ต้องการความสะดวกสบาย',
        imageUrl: '/hotel5/hotel5.png',
        amenities: ['Gym', 'Rooftop Pool', 'Free WiFi', '24-hour Front Desk'],
        numberOfReviews: 150,
        roomTypes: [
            { name: 'ห้องมาตรฐาน', price: 3000 },
            { name: 'ห้องเอ็กเซกคิวทีฟ', price: 3800 },
        ],
    },
    '6': {
        id: '6',
        title: 'Phuket',
        location: 'ภูเก็ต',
        rating: 5,
        description:
            'โรงแรมภูเก็ต',
        imageUrl: '/province/Phuket.jpeg',
        amenities: ['Gym', 'Rooftop Pool', 'Free WiFi', '24-hour Front Desk'],
        numberOfReviews: 150,
        roomTypes: [
            { name: 'ห้องมาตรฐาน', price: 3000 },
            { name: 'ห้องเอ็กเซกคิวทีฟ', price: 3800 },
        ],
    },
};


const HotelDetailPage: React.FC = () => {
    const { hotelId } = useParams<{ hotelId: string }>();
    const hotel = MOCK_HOTEL_DATA[hotelId as keyof typeof MOCK_HOTEL_DATA];

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [selectedRoom, setSelectedRoom] = useState(0);

    if (!hotel) {
        return (
            <div className="text-center p-10 text-red-600 text-2xl">
                ไม่พบข้อมูลโรงแรม (ID: {hotelId || 'N/A'})
            </div>
        );
    }

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const room = hotel.roomTypes[selectedRoom];

        console.log('--- ข้อมูลการจองที่ส่งออกไป ---');
        console.log(`โรงแรม: ${hotel.title} (ID: ${hotel.id})`);
        console.log(`ประเภทห้อง: ${room.name}`);
        console.log(`ราคา: ${room.price}`);
        console.log(`เช็คอิน: ${checkInDate}`);
        console.log(`เช็คเอาท์: ${checkOutDate}`);
        console.log(`จำนวนแขก: ${guests}`);
        console.log('--- END ---');

        alert(`จอง ${hotel.title} (${room.name}) เรียบร้อย!`);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                {/* รูปภาพ */}
                <div className="relative h-96">
                    <img
                        src={hotel.imageUrl}
                        alt={hotel.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                            {hotel.title}
                        </h1>
                    </div>
                </div>

                <div className="p-8 lg:flex lg:space-x-8">
                    {/* รายละเอียด */}
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

                        {/* สิ่งอำนวยความสะดวก */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                สิ่งอำนวยความสะดวก
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {hotel.amenities.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* ฟอร์มการจอง */}
                    <div className="lg:w-1/3 mt-10 lg:mt-0">
                        <div className="sticky top-10 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200">
                            <div className="text-3xl font-bold text-gray-900 mb-4">
                                ฿{hotel.roomTypes[selectedRoom].price.toLocaleString()}
                                <span className="text-base font-normal text-gray-500"> / คืน</span>
                            </div>

                            <form onSubmit={handleBookingSubmit} className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="roomType"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        ประเภทห้อง
                                    </label>
                                    <select
                                        id="roomType"
                                        value={selectedRoom}
                                        onChange={(e) => setSelectedRoom(parseInt(e.target.value))}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    >
                                        {hotel.roomTypes.map((room, index) => (
                                            <option key={index} value={index}>
                                                {room.name} — ฿{room.price.toLocaleString()}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="checkin"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        เช็คอิน
                                    </label>
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
                                    <label
                                        htmlFor="checkout"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        เช็คเอาท์
                                    </label>
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
                                    <label
                                        htmlFor="guests"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        จำนวนแขก
                                    </label>
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
                            <p className="text-xs text-center text-gray-500 mt-3">
                                คุณจะไม่ถูกเรียกเก็บเงินตอนนี้
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetailPage;

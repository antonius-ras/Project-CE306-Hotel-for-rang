import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
    FaCheckCircle, 
    FaCalendarAlt, 
    FaMoon, 
    FaUsers, 
    FaBed, 
    FaArrowLeft 
} from 'react-icons/fa';

const ReceiptPage: React.FC = () => {
    const location = useLocation();
    
    // 1. ดึงข้อมูล bookingData ที่เราส่งมาจากหน้าจองผ่าน state
    const { bookingData } = location.state || {}; 

    // 2. กรณีผู้ใช้เข้าหน้านี้ตรงๆ (ไม่มีข้อมูล)
    if (!bookingData) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl font-bold text-red-600 mb-4">
                    ไม่พบข้อมูลการจอง
                </h1>
                <p className="text-gray-700 font-bold mb-8 text-lg">
                    ดูเหมือนว่าคุณจะเข้ามาหน้านี้โดยตรง
                </p>
                <Link 
                    to="/" 
                    className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150"
                >
                    <FaArrowLeft className="mr-2" />
                    กลับไปหน้าแรก
                </Link>
            </div>
        );
    }

    // 3. ถ้ามีข้อมูล ให้ Destructure ออกมาใช้งาน
    const {
        hotelName,
        room,
        checkIn,
        checkOut,
        guests,
        numberOfNights,
        totalPrice,
    } = bookingData;

    // ฟังก์ชันสำหรับ Format วันที่ (ถ้าต้องการ)
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('th-TH', options);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 lg:p-12">
            <div className="max-w-3xl mx-auto">
                {/* ปุ่มกลับหน้าแรก */}
                <div className="mb-4">
                    <div className="flex items-center">
                    <Link to="/" className="group px-4 py-2 rounded-lg shadow-md text-sm font-semibold transition-all flex items-center gap-2 bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                        <FaArrowLeft className="group-hover:translate-x-1 transition-transform" />
                        ทำการจองใหม่
                    </Link>
                    </div>
                    
                </div>

                {/* การ์ดใบเสร็จ */}
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    
                    {/* ส่วนหัวสีเขียว (ยืนยัน) */}
                    <div className="bg-green-600 p-6 md:p-8 text-white">
                        <div className="flex items-center">
                            <FaCheckCircle className="text-4xl md:text-5xl mr-4 flex-shrink-0" />
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold">
                                    ยืนยันการจองสำเร็จ!
                                </h1>
                                <p className="text-green-100 text-sm md:text-base">
                                    ขอบคุณที่เลือกใช้บริการ เราได้บันทึกการจองของคุณแล้ว
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* รายละเอียดการจอง */}
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{hotelName}</h2>
                        
                        {/* รูปห้องที่จอง */}
                        <img 
                            src={room.imageUrls[0]} // แสดงรูปแรกของห้อง
                            alt={room.name}
                            className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
                        />

                        {/* ตารางสรุป */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* วันที่ */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <h3 className="text-sm font-semibold text-gray-500 mb-2 flex items-center">
                                    <FaCalendarAlt className="mr-2" />
                                    เช็คอิน / เช็คเอาท์
                                </h3>
                                <p className="text-lg font-medium text-gray-900">
                                    {formatDate(checkIn)}
                                </p>
                                <p className="text-lg font-medium text-gray-900">
                                    {formatDate(checkOut)}
                                </p>
                            </div>
                            
                            {/* จำนวนคืนและแขก */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <h3 className="text-sm font-semibold text-gray-500 mb-2 flex items-center">
                                    <FaMoon className="mr-2" />
                                    <FaUsers className="mr-2" />
                                    จำนวนคืนและแขก
                                </h3>
                                <p className="text-lg font-medium text-gray-900">
                                    {numberOfNights} คืน
                                </p>
                                <p className="text-lg font-medium text-gray-900">
                                    {guests} คน
                                </p>
                            </div>

                            {/* ประเภทห้อง */}
                            <div className="bg-gray-50 p-4 rounded-lg shadow-sm md:col-span-2">
                                <h3 className="text-sm font-semibold text-gray-500 mb-2 flex items-center">
                                    <FaBed className="mr-2" />
                                    ประเภทห้อง
                                </h3>
                                <p className="text-lg font-medium text-gray-900">
                                    {room.name} 
                                    <span className="text-base text-gray-600 ml-2">
                                        (฿{room.price.toLocaleString()} / คืน)
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* ยอดรวม */}
                        <hr className="my-6" />
                        <div className="flex justify-between items-center bg-green-50 p-5 rounded-lg">
                            <span className="text-xl font-semibold text-green-800">
                                ยอดรวมทั้งหมด:
                            </span>
                            <span className="text-3xl font-bold text-green-600">
                                ฿{totalPrice.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiptPage;
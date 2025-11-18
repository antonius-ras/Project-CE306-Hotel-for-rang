import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { 
    FaCheckCircle, 
    FaCalendarAlt, 
    FaMoon, 
    FaUsers, 
    FaBed, 
    FaArrowLeft,
    FaFileInvoiceDollar,
    FaHome,
    FaPrint
} from 'react-icons/fa';

const ReceiptPage: React.FC = () => {
    const location = useLocation();
    
    // 1. ดึงข้อมูล bookingData
    const { bookingData } = location.state || {}; 

    // 2. กรณีไม่มีข้อมูล ให้ดีดกลับหน้าแรกทันที หรือแสดงหน้า Error
    if (!bookingData) {
        return <Navigate to="/" replace />;
    }

    // 3. Destructure และเตรียมตัวแปรให้ปลอดภัย (ใส่ || 0 กันแอปพัง)
    const {
        hotelName,
        room,
        checkIn,
        checkOut,
        guests,
        numberOfNights,
        totalPrice = 0,
        discount = 0,
        netPrice = 0,
        promoCodeUsed,
        mainHotelImage,
    } = bookingData;

    // เลือกราคาที่จะแสดงผล (ถ้าไม่มี netPrice ให้ใช้ totalPrice แทน)
    const finalPriceToPay = netPrice || totalPrice;

    // ฟังก์ชัน Format วันที่
    const formatDate = (dateString: string) => {
        if (!dateString) return "-";
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('th-TH', options);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 lg:p-12 font-sans">
            <div className="max-w-3xl mx-auto">
                {/* ปุ่มกลับหน้าแรก */}
                <div className="mb-6 flex justify-between items-center">
                    <Link to="/" className="group px-4 py-2 rounded-lg shadow-sm text-sm font-semibold transition-all flex items-center gap-2 bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        กลับหน้าหลัก
                    </Link>
                    <button onClick={() => window.print()} className="px-4 py-2 rounded-lg shadow-sm text-sm font-semibold bg-green-600 text-white hover:bg-green-700 flex items-center gap-2 transition-colors">
                        <FaPrint /> พิมพ์ใบเสร็จ
                    </button>
                </div>

                {/* การ์ดใบเสร็จ */}
                <div id="printable-receipt" className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    
                    {/* ส่วนหัวสีเขียว */}
                    <div className="bg-green-600 p-8 text-white relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-black"></div>
                        <div className="flex items-center relative z-10">
                            <FaCheckCircle className="text-5xl mr-5 flex-shrink-0 shadow-sm" />
                            <div>
                                <h1 className="text-3xl font-bold">ยืนยันการจองสำเร็จ!</h1>
                                <p className="text-green-100 mt-1">ขอบคุณที่เลือกใช้บริการ Hotel For Rang</p>
                            </div>
                        </div>
                    </div>

                    {/* รายละเอียดการจอง */}
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">{hotelName}</h2>
                        
                        {/* รูปห้อง */}
                        <div className="rounded-xl overflow-hidden mb-8 shadow-md h-64">
                            <img 
                                src={room?.imageUrls?.[0] || mainHotelImage} 
                                alt={room?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Grid ข้อมูล */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                                    <FaCalendarAlt className="text-green-600" /> เช็คอิน - เช็คเอาท์
                                </h3>
                                <p className="text-lg font-medium text-gray-900">{formatDate(checkIn)}</p>
                                <p className="text-lg font-medium text-gray-900">{formatDate(checkOut)}</p>
                            </div>
                            
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                                    <FaUsers className="text-blue-500" /> รายละเอียดการเข้าพัก
                                </h3>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-gray-600">ระยะเวลา:</span>
                                    <span className="font-medium text-gray-900">{numberOfNights} คืน</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">ผู้เข้าพัก:</span>
                                    <span className="font-medium text-gray-900">{guests} ท่าน</span>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 md:col-span-2">
                                <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
                                    <FaBed className="text-orange-500" /> ประเภทห้องพัก
                                </h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-medium text-gray-900">{room?.name}</span>
                                    <span className="text-gray-500">฿{room?.price?.toLocaleString()} / คืน</span>
                                </div>
                            </div>
                        </div>

                        {/* ส่วนสรุปราคา */}
                        <div className="border-t-2 border-dashed border-gray-200 pt-6 space-y-3">
                            <div className="flex justify-between text-gray-600">
                                <span>ราคาห้องพัก (x{numberOfNights} คืน)</span>
                                <span>฿{totalPrice.toLocaleString()}</span>
                            </div>
                            
                            {/* แสดงส่วนลดเฉพาะเมื่อมี discount > 0 */}
                            {discount > 0 && (
                                <div className="flex justify-between text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                                    <span className="flex items-center gap-2">
                                        <FaFileInvoiceDollar /> ส่วนลด ({promoCodeUsed})
                                    </span>
                                    <span>-฿{discount.toLocaleString()}</span>
                                </div>
                            )}
                        </div>

                        {/* ยอดรวมสุทธิ */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-xl font-bold text-gray-800 block">ยอดชำระสุทธิ</span>
                                    <span className="text-xs text-gray-500">รวมภาษีและค่าธรรมเนียมแล้ว</span>
                                </div>
                                <span className="text-4xl font-bold text-green-600">
                                    ฿{finalPriceToPay.toLocaleString()}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiptPage;
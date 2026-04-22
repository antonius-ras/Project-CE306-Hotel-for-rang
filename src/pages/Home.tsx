import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProvinceList from '../components/ProvinceList';
import { ProductCard } from '../components/ProductCard';
import { MOCK_HOTEL_DATA } from './HotelDetailPage';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

//array เอาไว้เก็บรูป banner
const BANNERS = [
    'Banner/banner1.png',
    'Banner/banner2.jpg',
    'Banner/banner3.jpg',
    'Banner/banner4.jpg',
    'Banner/banner5.jpg'


];
//แปลงค่าใน Object ออกมาเป็น Array ทำให้ใช้ .Map()ได้
const displayProducts = Object.values(MOCK_HOTEL_DATA);

// 💡 สร้าง Component สำหรับหน้าแรก
const Home = () => {

// ฟังก์ชันสำหรับเปลี่ยนหน้า
    const navigate = useNavigate();
    
// เก็บสถานะสไลด์ปัจจุบันของ Banner ว่ากำลังแสดง Banner ตัวไหนอยู่
    const [currentSlide, setCurrentSlide] = useState(0);

// ทำให้ Banner เลื่อนเองอัตโนมัติทุกๆ 5 วินาที และหยุดเมื่อ component ถูกลบ
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

// ฟังก์ชันเมื่อผู้ใช้เลือกโรงแรม จะเปลี่ยนหน้าไปที่ URL ของโรงแรม
    const handleNavigateToDetails = (hotelId: string) => {
        navigate(`/hotel/${hotelId}`);
    };

    return (
        <main className="max-w-7xl mx-auto p-6">
            <section id="home">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-2">
                    {/* วนลูปแสดงรูป banner แต่ละตัวจาก array banner */}
                    {BANNERS.map((banner, index) => (
                        <img
                            key={banner} //ใช้ระบุ element ให้ React อัปเดตถูกต้อง
                            src={banner} 
                            alt={"Banner โปรโมทหน้าหลัก"}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} // แสดงเฉพาะภาพที่กำลังโชว์บน Banner
                        />
                    ))}
                    {/* ปุ่มลูกศรซ้าย */}
                    <button onClick={() => setCurrentSlide((prev) => prev === 0 ? BANNERS.length - 1 : prev - 1)} className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full'>
                        <HiChevronLeft size={24} />{/* ไอคอนลูกศรซ้าย */}
                    </button>
                    {/* ปุ่มลูกศรขาว */}
                    <button onClick={() => setCurrentSlide((prev) => (prev + 1) % BANNERS.length)} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full">
                        <HiChevronRight size={24} />{/* ไอคอนลูกศรขวา */}
                    </button>
                </div>

                <div className='space-y-6 mt-8 p-6'>
                    <h2 className="font-semibold text-center text-3xl sm:text-4xl font-heading text-gray-800 tracking-wide">
                        ค้นหาที่พักที่สมบูรณ์แบบ
                    </h2>
                    <div className="flex items-center justify-center mt-2">

                        <span className="w-14 h-[1px] bg-cyan-500"></span>
                        <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                        <span className="w-14 h-[1px] bg-cyan-500"></span>

                    </div>
                    <p className="font-semibold text-gray-700 text-xs  sm:text-base leading-relaxed font-body">
                        ค้นพบที่พักในฝันของคุณ ตั้งแต่โรงแรมหรู 5 ดาวใจกลางเมืองที่มองเห็นวิวตึกระฟ้า ไปจนถึงพูลวิลล่าส่วนตัวริมชายหาด หรือโฮมสเตย์บรรยากาศอบอุ่นท่ามกลางขุนเขา เรามีตัวเลือกที่ตอบโจทย์ทุกไลฟ์สไตล์และงบประมาณของคุณ ค้นหาและกรองที่พักได้ง่าย ๆ ตามสถานที่, ราคา, สิ่งอำนวยความสะดวก เช่น สระว่ายน้ำ, ฟิตเนส, หรือที่พักที่ต้อนรับสัตว์เลี้ยง เพื่อให้คุณได้พักผ่อนอย่างสมบูรณ์แบบ
                    </p>
                </div>
            </section>

            {/* component ที่นำเข้ามาจากอีกไฟล์หนึ่ง */}
            <ProvinceList />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* วนลูปข้อมูลโรงแรมแต่ละตัวจาก displayProducts */}
                {displayProducts.map((p) => (
                    <ProductCard
                        key={`hotel-${p.id}`}                           // id เฉพาะของแต่ละโรงแรม ใช้บอก React ว่าแต่ละกล่องแทนโรงแรมตัวไหน
                        imageUrl={p.imageUrl}                           //รูปของโรงแรม
                        title={p.title}                                 // ชื่อโรงแรม
                        location={p.location}                           // ที่ตั้งโรงแรม
                        description={p.description}                     // คำอธิบาย
                        amenities={p.amenities}                         // สิ่งอำนวยความสะดวก
                        id={p.id}                                       //รหัสโรงแรม
                        onNavigateToDetails={handleNavigateToDetails}   //เมื่อคลิกจะไปยังหน้ารายละเอียดโรงแรม
                    />
                ))}
            </div>
        </main>
    );
};

export default Home;

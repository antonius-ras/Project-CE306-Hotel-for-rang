import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProvinceList from '../components/ProvinceList';
import { ProductCard } from '../ProductCard';
import { MOCK_HOTEL_DATA } from '../HotelDetailPage';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const BANNERS = [
    'Banner/banner1.jpg',
    'Banner/banner2.jpg',
    'Banner/banner3.jpg',
];

// 💡 สร้าง array ของสินค้าที่ต้องการแสดงผลจากข้อมูล MOCK_HOTEL_DATA
const displayProducts = Object.values(MOCK_HOTEL_DATA);

// 💡 สร้าง Component สำหรับหน้าแรกโดยเฉพาะ (Home Component)
// เพื่อให้สามารถใช้ useNavigate ได้
const Home = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    // ❗ ปรับเวลาออโต้สไลด์ถ้าต้องการ
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // ฟังก์ชันจัดการการคลิกและนำทาง
    const handleNavigateToDetails = (hotelId: string) => {
        // นำทางไปยังเส้นทาง /booking/ ตามด้วย ID ของสินค้า
        navigate(`/hotel/${hotelId}`);
    };


    return (
        <main className="max-w-7xl mx-auto p-6">
            <section id="home" className="mb-8">
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                    {BANNERS.map((banner, index) => (
                        <img
                            key={banner}
                            src={banner} // ❗ ใส่ path ของ Banner
                            alt={`Banner ${index + 1}`} // ❗ ใส่คำอธิบายภาพ
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}

                    <button onClick={() =>
                        setCurrentSlide((prev) =>
                            prev === 0 ? BANNERS.length - 1 : prev - 1
                        )
                    }
                        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full'
                    >
                        <HiChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() =>
                            setCurrentSlide((prev) => (prev + 1) % BANNERS.length)
                        }
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full"
                    >
                        <HiChevronRight size={24} />
                    </button>
                </div>
                
                <div className='mt-6 mb-10 max-w-3xl'>
                    <h2 className="font-semibold text-3xl text-gray-800 mb-3">
                        ค้นหาที่พักที่สมบูรณ์แบบ
                    </h2>
                    <p className="text-gray-600 font-semibold text-base">
                        ตั้งแต่โรงแรมหรู 5 ดาวใจกลางเมืองที่มองเห็นวิวตึกระฟ้า ไปจนถึงพูลวิลล่าส่วนตัวริมชายหาดให้คุณได้ดื่มด่ำกับความเป็นส่วนตัว หรือโฮมสเตย์บรรยากาศอบอุ่นท่ามกลางขุนเขา... เรามีตัวเลือกที่พักที่ตอบโจทย์ทุกไลฟ์สไตล์และงบประมาณของคุณ ค้นหาและกรองตัวเลือกได้ง่ายๆ ทั้งตามสถานที่ตั้ง, ราคา, สิ่งอำนวยความสะดวก (เช่น สระว่ายน้ำ, ฟิตเนส, หรือที่พักที่ต้อนรับสัตว์เลี้ยง) เพื่อให้คุณได้พบกับ "บ้าน" ที่สมบูรณ์แบบที่สุดสำหรับการพักผ่อนครั้งนี้
                    </p>
                </div>
            </section>
            <ProvinceList />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* เปลี่ยนมาใช้ displayProducts ที่ดึงมาจาก MOCK_HOTEL_DATA แทน */}
                {displayProducts.map((p) => (
                    <ProductCard
                        key={`g-${p.id}`}
                        imageUrl={p.imageUrl}
                        title={p.title}
                        location={p.location}
                        description={p.description}
                        amenities={p.amenities}
                        id={p.id}
                        onNavigateToDetails={handleNavigateToDetails}
                    />
                ))}
            </div>
        </main>
    );
};

export default Home;

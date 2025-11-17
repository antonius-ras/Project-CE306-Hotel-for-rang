import './App.css'
import Navbar from './Navbar';
import { ProductCard } from './ProductCard';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom'; 
import HotelDetailPage, { MOCK_HOTEL_DATA } from './HotelDetailPage'; // 💡 นำเข้า MOCK_HOTEL_DATA ที่ export ออกมา
import ProvinceList from './components/ProvinceList'
import ReceiptPage from './Receipt';

// 💡 สร้าง array ของสินค้าที่ต้องการแสดงผลจากข้อมูล MOCK_HOTEL_DATA
const displayProducts = Object.values(MOCK_HOTEL_DATA);




// 💡 สร้าง Component สำหรับหน้าแรกโดยเฉพาะ (Home Component)
// เพื่อให้สามารถใช้ useNavigate ได้
const Home = () => {
    const navigate = useNavigate();

  // ฟังก์ชันจัดการการคลิกและนำทาง
    const handleNavigateToDetails = (hotelId: string) => {
    // นำทางไปยังเส้นทาง /booking/ ตามด้วย ID ของสินค้า
    navigate(`/hotel/${hotelId}`);
    };

    return (
    <main className="max-w-7xl mx-auto p-6">
        <section id="home" className="mb-8">
        <img src="banner.png" alt="Banner" className="w-full h-64 object-cover rounded-lg mb-4" />
        <div className="mb-10">
    <h2 className="flex text-3xl font-bold text-gray-800 mb-3">
            ค้นหาที่พักที่สมบูรณ์แบบ
    </h2>
    <p className="text-gray-600 text-base max-w-3xl">
        ตั้งแต่โรงแรมหรู 5 ดาวใจกลางเมืองที่มองเห็นวิวตึกระฟ้า ไปจนถึงพูลวิลล่าส่วนตัวริมชายหาดให้คุณได้ดื่มด่ำกับความเป็นส่วนตัว หรือโฮมสเตย์บรรยากาศอบอุ่นท่ามกลางขุนเขา... เรามีตัวเลือกที่พักที่ตอบโจทย์ทุกไลฟ์สไตล์และงบประมาณของคุณ ค้นหาและกรองตัวเลือกได้ง่ายๆ ทั้งตามสถานที่ตั้ง, ราคา, สิ่งอำนวยความสะดวก (เช่น สระว่ายน้ำ, ฟิตเนส, หรือที่พักที่ต้อนรับสัตว์เลี้ยง) เพื่อให้คุณได้พบกับ "บ้าน" ที่สมบูรณ์แบบที่สุดสำหรับการพักผ่อนครั้งนี้
    </p>
</div>
        </section>
        <ProvinceList/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* 💡 เปลี่ยนมาใช้ displayProducts ที่ดึงมาจาก MOCK_HOTEL_DATA แทน */}
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

const FilterHotel =() => {
    const navigate = useNavigate();
    // ดึงชื่อจังหวัดจาก URL (เช่น "Bangkok")
    const { provinceName } = useParams<{ provinceName: string }>();

    const handleNavigateToDetails = (hotelId: string) => {
        navigate(`/hotel/${hotelId}`);
    };

    // ตรรกะการกรอง
    const filteredHotels = displayProducts.filter(hotel => {
        if (!provinceName) return false;
        const location = hotel.location.toLowerCase();
        const province = provinceName.toLowerCase();

        // เงื่อนไขการค้นหา (เผื่อข้อมูลเป็นภาษาไทย)
        if (province === 'bangkok') return location.includes('bangkok') || location.includes('กรุงเทพ');
        if (province === 'chonburi') return location.includes('chonburi') || location.includes('ชลบุรี');
        if (province === 'chiangmai') return location.includes('chiangmai') || location.includes('เชียงใหม่');
        if (province === 'phuket') return location.includes('phuket') || location.includes('ภูเก็ต');
        if (province === 'ayutthaya') return location.includes('ayutthaya') || location.includes('อยุธยา');
        if (province === 'kanchanaburi') return location.includes('kanchanaburi') || location.includes('กาญจณบุรี');
        if (province === 'chiangrai') return location.includes('chiangrai') || location.includes('เชียงราย');
        if (province === 'chachoengsao') return location.includes('chachoengsao') || location.includes('ฉะเชิงเทรา');

        // จังหวัดอื่นๆ ที่ชื่อตรงตัว
        return location.includes(province);
    });

    return (
        <main className="max-w-7xl mx-auto p-6">
            <button onClick={() => navigate('/')} className="mb-6 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                &larr; กลับไปหน้าหลัก
            </button>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                โรงแรมใน {provinceName} ({filteredHotels.length} แห่ง)
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredHotels.length > 0 ? (
                    filteredHotels.map((p) => (
                        <ProductCard
                            key={`g-${p.id}`}
                            imageUrl={p.imageUrl}
                            title={p.title}
                            location={p.location} // แสดง location ที่นี่ด้วย
                            description={p.description}
                            amenities={p.amenities}
                            id={p.id} 
                            onNavigateToDetails={handleNavigateToDetails} 
                        />
                    ))
                ) : (
                    <p className="text-gray-600 col-span-3 text-center">ไม่พบโรงแรมสำหรับจังหวัดนี้</p>
                )}
            </div>
        </main>
    );
};
const FilterHotelBySearch = () => {
    const navigate = useNavigate();
    // 💡 1a. ดึง "query" (คำค้นหา) จาก URL
    const { query } = useParams<{ query: string }>();

    const handleNavigateToDetails = (hotelId: string) => {
        navigate(`/hotel/${hotelId}`);
    };

    // 💡 1b. ตรรกะการกรองตามคำค้นหา
    const filteredHotels = displayProducts.filter(hotel => {
        if (!query) return false;
        const searchTerm = query.toLowerCase();

        // ค้นหาใน: ชื่อโรงแรม, สถานที่, และรายละเอียด
        return (
            hotel.title.toLowerCase().includes(searchTerm) ||
            hotel.location.toLowerCase().includes(searchTerm) ||
            hotel.description.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <main className="max-w-7xl mx-auto p-6">
            <button onClick={() => navigate('/')} className="mb-6 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                &larr; กลับไปหน้าหลัก
            </button>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                ผลการค้นหาสำหรับ "{query}" ({filteredHotels.length} แห่ง)
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredHotels.length > 0 ? (
                    filteredHotels.map((p) => (
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
                    ))
                ) : (
                    <p className="text-gray-600 col-span-3 text-center">ไม่พบโรงแรมที่ตรงกับการค้นหาของคุณ</p>
                )}
            </div>
        </main>
    );
};
// --- App Component (ตัวจัดการ Route หลัก) ---
export default function App() {
    return (
    <Router> 
        <div className="min-h-screen bg-white">
        <Navbar/>
        
        {/* 5. ลบ <ProvinceList/> ที่อยู่ผิดที่ออกจากตรงนี้ */}
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotel/:hotelId" element={<HotelDetailPage />} />
            <Route path="/receipt" element={<ReceiptPage />} />
          {/* 6. แก้ Route นี้ให้ชี้ไปที่ Component ใหม่ */}
            <Route path="/province/:provinceName" element={<FilterHotel />} />
            <Route path="/search/:query" element={<FilterHotelBySearch />} />
        </Routes>
        </div>
    </Router>
    );
}

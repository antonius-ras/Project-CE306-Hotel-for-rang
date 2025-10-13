import './App.css'
import Navbar from './Navbar';
import { ProductCard } from './ProductCard';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; 
import HotelDetailPage, { MOCK_HOTEL_DATA } from './HotelDetailPage'; // 💡 นำเข้า MOCK_HOTEL_DATA ที่ export ออกมา

// 💡 ตัวแปร products ถูกลบออกแล้ว

// 💡 สร้าง array ของสินค้าที่ต้องการแสดงผลจากข้อมูล MOCK_HOTEL_DATA
const displayProducts = Object.values(MOCK_HOTEL_DATA);

// 💡 สร้าง Component สำหรับหน้าแรกโดยเฉพาะ (Home Component)
// เพื่อให้สามารถใช้ useNavigate ได้
const Home = () => {
  const navigate = useNavigate();

  // ฟังก์ชันจัดการการคลิกและนำทาง
  const handleNavigateToDetails = (hotelId: string) => {
    // นำทางไปยังเส้นทาง /booking/ ตามด้วย ID ของสินค้า
    navigate(`/booking/${hotelId}`);
  };

  return (
    <main className="max-w-7xl mx-auto p-6">
      <section id="home" className="mb-8">
        <img src="banner.png" alt="Banner" className="w-full h-64 object-cover rounded-lg mb-4" />
        <h1 className="text-gray-600 text-2xl font-semibold mb-2">ยินดีต้องรับสู่ศูนย์บริการรถยนต์ Toyota</h1>
        <p className="text-gray-600">สู่อีกขั้นของยนตรกรรมที่ตอบโจทย์ทุกการใช้ชีวิต ด้วยดีไซน์และเทคโนโลยีที่ล้ำสมัย ครบครันกับฟังก์ชันความละดวกสบายเหนือใครในทุกสัมผัส พร้อมยกระดับการเดินทางของคุณให้ดีกว่าที่เคย เพื่อทุกการเดินทางที่ตอบ...ทุกความหมายของชีวิต</p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* 💡 เปลี่ยนมาใช้ displayProducts ที่ดึงมาจาก MOCK_HOTEL_DATA แทน */}
        {displayProducts.map((p) => ( 
          <ProductCard
            key={`g-${p.id}`}
            imageUrl={p.imageUrl}
            title={p.title}
            description={p.description}
            price={p.pricePerNight} // 💡 ใช้ pricePerNight เป็นราคา
            id={p.id} 
            onNavigateToDetails={handleNavigateToDetails} 
          />
        ))}
      </div>
    </main>
  );
};


function App() {
  return (
    <Router> 
      <div className="min-h-screen bg-gray-100">
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:hotelId" element={<HotelDetailPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App
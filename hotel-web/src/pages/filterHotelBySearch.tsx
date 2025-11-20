import { useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { MOCK_HOTEL_DATA } from './HotelDetailPage';
import { FaArrowLeft} from 'react-icons/fa'; 

//แปลงค่าใน Object ออกมาเป็น Array ทำให้ใช้ .Map()ได้
const displayProducts = Object.values(MOCK_HOTEL_DATA);

// Component แสดงรายการโรงแรมที่กรองตามคำค้นหา (Search)
const FilterHotelBySearch = () => {

// ฟังก์ชันสำหรับเปลี่ยนหน้า
    const navigate = useNavigate();
    
// ดึงค่าที่ผู้ใช้พิมพ์ค้นหามาจาก URL
    const { query } = useParams<{ query: string }>();

// ฟังก์ชันเมื่อผู้ใช้เลือกโรงแรม จะเปลี่ยนหน้าไปที่ URL ของโรงแรม
    const handleNavigateToDetails = (hotelId: string) => {
        navigate(`/hotel/${hotelId}`);
    };

// สร้างรายชื่อโรงแรมที่ "ตรงกับคำค้นหา"
    const filteredHotels = displayProducts.filter(hotel => {
        
// ถ้าผู้ใช้ไม่พิมพ์ค้นหาจะไม่แสดงโรงแรม
        if (!query) return false;

//ทำให้คำค้นหาของผู้ใช้เป็นตัวพิมพ์เล็กทั้งหมด
        const searchTerm = query.toLowerCase();

// เช็คว่าคำค้นหาอยู่ในชื่อโรงแรม, ที่ตั้ง, หรือคำอธิบายหรือไม่
        return (
            hotel.title.toLowerCase().includes(searchTerm) ||      // ค้นหาในชื่อโรงแรม
            hotel.location.toLowerCase().includes(searchTerm) ||    // ค้นหาในจังหวัด/ที่ตั้ง
            hotel.description.toLowerCase().includes(searchTerm)     // ค้นหาในข้อความอธิบายโรงแรม
        );
    });

    return (
        <main className="max-w-7xl mx-auto p-6">
            <button onClick={() => navigate('/')}className="group px-4 py-2 rounded-lg shadow-md text-sm font-semibold transition-all flex items-center gap-2 bg-green-100 text-green-700 hover:bg-green-200 transition-colors" >
                {/* ปุ่มกลับไปหน้าหลัก */}
                <FaArrowLeft size={15}/> {/* ไอคอนลูกศร */}
                กลับไปหน้าหลัก
            </button>
            {/* แสดงคำค้นหาที่ผู้ใช้พิมพ์และบอกจำนวนโรงแรม */}
            <h1 className="text-xl font-semibold text-cyan-700 mb-6 mt-6">
                ผลการค้นหาสำหรับ "{query}" ({filteredHotels.length} แห่ง)
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* ตรวจว่ามีโรงแรมที่ตรงกับคำค้นหาหรือไม่ ถ้ามีจะลูปแสดงหน้าโรงแรม */}
                {filteredHotels.length > 0 ? (
                    filteredHotels.map((p) => (
                        <ProductCard
                            key={`hotel-${p.id}`}                               // id เฉพาะของแต่ละโรงแรม ใช้บอก React ว่าแต่ละกล่องแทนโรงแรมตัวไหน
                            imageUrl={p.imageUrl}                               //รูปของโรงแรม
                            title={p.title}                                     // ชื่อโรงแรม
                            location={p.location}                               // ที่ตั้งโรงแรม
                            description={p.description}                         // คำอธิบาย
                            amenities={p.amenities}                             // สิ่งอำนวยความสะดวก
                            id={p.id}                                           //รหัสโรงแรม
                            onNavigateToDetails={handleNavigateToDetails}       //เมื่อคลิกจะไปยังหน้ารายละเอียดโรงแรม
                        />
                    ))
                ) : (
                    // กรณีไม่มีโรงแรมในจังหวัดนั้น
                    <p className="text-gray-600 col-span-3 text-center">ไม่พบโรงแรมที่ตรงกับการค้นหาของคุณ</p>
                )}
            </div>
        </main>
    );
};

export default FilterHotelBySearch;

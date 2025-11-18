import { useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { MOCK_HOTEL_DATA } from './HotelDetailPage';
import { FaArrowLeft} from 'react-icons/fa'; 

// 💡 สร้าง array ของสินค้าที่ต้องการแสดงผลจากข้อมูล MOCK_HOTEL_DATA
const displayProducts = Object.values(MOCK_HOTEL_DATA);

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
            <button onClick={() => navigate('/')}className="group px-4 py-2 rounded-lg shadow-md text-sm font-semibold transition-all flex items-center gap-2 bg-green-100 text-green-700 hover:bg-green-200 transition-colors" >
                <FaArrowLeft className="group-hover:translate-x-1 transition-transform" />
                กลับไปหน้าหลัก
            </button>
            <h1 className="text-xl font-semibold text-cyan-700 mb-6 mt-6">
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

export default FilterHotelBySearch;

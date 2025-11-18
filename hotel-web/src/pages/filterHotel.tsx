import { useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from '../ProductCard';
import { MOCK_HOTEL_DATA } from '../HotelDetailPage';

// 💡 สร้าง array ของสินค้าที่ต้องการแสดงผลจากข้อมูล MOCK_HOTEL_DATA
const displayProducts = Object.values(MOCK_HOTEL_DATA);

const FilterHotel = () => {
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
            <button
                onClick={() => navigate('/')}
                className="mb-6 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
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

export default FilterHotel;

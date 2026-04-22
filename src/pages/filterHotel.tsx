import { useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { MOCK_HOTEL_DATA } from './HotelDetailPage';
import { FaArrowLeft} from 'react-icons/fa';  


//แปลงค่าใน Object ออกมาเป็น Array ทำให้ใช้ .Map()ได้
const displayProducts = Object.values(MOCK_HOTEL_DATA);

// Component แสดงรายการโรงแรมที่กรองตามจังหวัด
const FilterHotel = () => {

// ฟังก์ชันสำหรับเปลี่ยนหน้า
    const navigate = useNavigate();

// ดึงชื่อจังหวัดจาก URL หลังจากที่ผู้ใช้คลิกเลือกจังหวัด เพื่อเอาไปใช้กรองและแสดงโรงแรมของจังหวัดนั้น
    const { provinceName } = useParams<{ provinceName: string }>();

// ฟังก์ชันเมื่อผู้ใช้เลือกโรงแรม จะเปลี่ยนหน้าไปที่ URL ของโรงแรม
    const handleNavigateToDetails = (hotelId: string) => {
        navigate(`/hotel/${hotelId}`);
    };

// กรองรายชื่อโรงแรมให้เหลือเฉพาะจังหวัดที่ผู้ใช้เลือก
    const filteredHotels = displayProducts.filter(hotel => {

// ถ้าไม่มีชื่อจังหวัดใน URL ให้หยุด ไม่แสดงอะไรเลย
        if (!provinceName) return false;

// แปลงชื่อจังหวัดและที่ตั้งเป็นตัวพิมพ์เล็ก เพื่อให้ค้นหาได้ง่ายขึ้น
        const location = hotel.location.toLowerCase();
        const province = provinceName.toLowerCase();

// เงื่อนไขการค้นหาทั้งภาษาไทยและอังกฤษ
        if (province === 'bangkok') return location.includes('bangkok') || location.includes('กรุงเทพ');
        if (province === 'chonburi') return location.includes('chonburi') || location.includes('ชลบุรี');
        if (province === 'chiangmai') return location.includes('chiangmai') || location.includes('เชียงใหม่');
        if (province === 'phuket') return location.includes('phuket') || location.includes('ภูเก็ต');
        if (province === 'ayutthaya') return location.includes('ayutthaya') || location.includes('อยุธยา');
        if (province === 'kanchanaburi') return location.includes('kanchanaburi') || location.includes('กาญจนบุรี');
        if (province === 'chiangrai') return location.includes('chiangrai') || location.includes('เชียงราย');
        if (province === 'chachoengsao') return location.includes('chachoengsao') || location.includes('ฉะเชิงเทรา');

// เช็คว่าโรงแรมนี้อยู่ในจังหวัดที่ผู้ใช้เลือกหรือไม่
        return location.includes(province);
    });

    return (
        <main className="max-w-7xl mx-auto p-6">
             {/* ปุ่มกลับไปหน้าหลัก */}
            <button onClick={() => navigate('/')}className="group px-4 py-2 rounded-lg shadow-md text-sm font-semibold transition-all flex items-center gap-2 bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                <FaArrowLeft size={15}/> {/* ไอคอนลูกศร */}
                กลับไปหน้าหลัก
            </button>
             {/* แสดงชื่อจังหวัดและจำนวนโรงแรม */}
            <h1 className="text-xl font-semibold text-cyan-700 mb-6 mt-6">
                โรงแรมใน {provinceName} ({filteredHotels.length} แห่ง)
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* เช็คว่ามีโรงแรมมั้ย ถ้ามีจะทำการวนลูป ถ้าไม่มีจะแสดงข้อความไม่พบโรงแรม */}
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
                    <p className="text-gray-600 col-span-3 text-center">ไม่พบโรงแรมสำหรับจังหวัดนี้</p>
                )}
            </div>
        </main>
    );
};

export default FilterHotel;

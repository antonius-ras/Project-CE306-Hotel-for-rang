import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilterHotel from './pages/filterHotel';
import FilterHotelBySearch from './pages/filterHotelBySearch';
import HotelDetailPage from './pages/HotelDetailPage';
import ReceiptPage from './pages/Receipt';
import Footer from './components/Footer';

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                {/*  Navbar ตามไปทุกหน้า */}
                <Navbar />

                {/* Routes หลักของแอป */}
                <Routes>
                    {/*  หน้าแสดงผลหน้าแรก */}
                    <Route path="/" element={<Home />} />
                    {/*  หน้าแสดงผลรายละเอียดโรงแรม */}
                    <Route path="/hotel/:hotelId" element={<HotelDetailPage />} />
                    {/*  หน้าแสดงผลโรงแรมตามจังหวัด */}
                    <Route path="/province/:provinceName" element={<FilterHotel />} />
                    {/* หน้าแสดงผลโรงแรมตามคำค้นหา */}
                    <Route path="/search/:query" element={<FilterHotelBySearch />} />
                    {/*  หน้าแสดงผลใบเสร็จ */}
                    <Route path="/receipt" element={<ReceiptPage />} />
                </Routes>
                
                {/*  Footer ตามไปทุกหน้า */}
                <Footer />
            </div>
        </Router>
    );
}



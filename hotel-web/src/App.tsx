import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilterHotel from './pages/filterHotel';
import FilterHotelBySearch from './pages/filterHotelBySearch';
import HotelDetailPage from './pages/HotelDetailPage';
import ReceiptPage from './pages/Receipt';

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Navbar />
                
                {/* 💡 Routes หลักของแอป */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hotel/:hotelId" element={<HotelDetailPage />} />
                    <Route path="/receipt" element={<ReceiptPage />} />
                    {/* 💡 หน้าแสดงผลโรงแรมตามจังหวัด */}
                    <Route path="/province/:provinceName" element={<FilterHotel />} />
                    {/* 💡 หน้าแสดงผลโรงแรมตามคำค้นหา */}
                    <Route path="/search/:query" element={<FilterHotelBySearch />} />
                </Routes>
            </div>
        </Router>
    );
}



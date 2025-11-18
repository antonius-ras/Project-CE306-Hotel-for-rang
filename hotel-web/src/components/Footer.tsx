import React from 'react';
// Import ไอคอนสวยๆ จาก react-icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* ส่วนบน: Grid 4 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-green-600 tracking-tight">
              Hotel For Rang
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              ดื่มด่ำกับธรรมชาติและท้องทะเลในบรรยากาศสุดหรู<br/> 
              ที่พักที่คุณวางใจได้เสมอสำหรับการพักผ่อนที่สมบูรณ์แบบ
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6 relative inline-block">
              ลิงก์ด่วน
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {['หน้าหลัก', 'ห้องพักของเรา', 'โปรโมชั่น', 'บริการเสริม', 'ติดต่อเรา'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-green-600 hover:translate-x-1 transition-all duration-300 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6 relative inline-block">
              ติดต่อเรา
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-500 mt-1 text-lg flex-shrink-0" />
                <span>123/45 ถนนเลียบชายหาดจอมเทียน<br />บางละมุง ชลบุรี 20150</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500 flex-shrink-0" />
                <span>038-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-500 flex-shrink-0" />
                <span>booking@hotelforrang.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-green-500 flex-shrink-0" />
                <span>ทุกวัน 24 ชั่วโมง</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">รับข่าวสารโปรโมชั่น</h4>
            <p className="text-sm text-gray-500 mb-4">
              ลงทะเบียนเพื่อรับสิทธิพิเศษและส่วนลดก่อนใคร
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="อีเมลของคุณ..." 
                className="w-full px-4 py-3 bg-gray-50 text-gray-900  border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm"
              />
              <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-green-600/20">
                สมัครรับข่าวสาร <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>

        </div>

        {/* เส้นแบ่ง */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4"> 
            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Hotel For Rang. สงวนลิขสิทธิ์.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
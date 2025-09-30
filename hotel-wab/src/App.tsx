
import './App.css'
import Navbar from './Navbar';
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <main className="max-w-7xl mx-auto p-6">
        <section id="home" className="mb-8">
          <h1 className="text-gray-600 text-2xl font-semibold mb-2">ยินดีต้องรับสู่ศูนย์บริการรถยนต์ Toyota</h1>
          <p className="text-gray-600">สู่อีกขั้นของยนตรกรรมที่ตอบโจทย์ทุกการใช้ชีวิต ด้วยดีไซน์และเทคโนโลยีที่ล้ำสมัย ครบครันกับฟังก์ชันความละดวกสบายเหนือใครในทุกสัมผัส พร้อมยกระดับการเดินทางของคุณให้ดีกว่าที่เคย เพื่อทุกการเดินทางที่ตอบ...ทุกความหมายของชีวิต</p>
        </section>
      </main>
    </div>
  )
}

export default App

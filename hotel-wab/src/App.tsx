
import './App.css'
import Navbar from './Navbar';
import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    imageUrl: 'https://theness.com/neurologicablog/wp-content/uploads/sites/3/2020/04/crew-dragon.jpg',
    title: 'space x',
    description: 'ยานอวกาศ น้ำหนักเบาประหยัดน้ำมันสามารถเดินทางได้ไกลถึง 10 ปีแสง',
    price: 110000000000,
  }
];


function App() {
  const handleAdd = (product: typeof products[0]) => {
    alert(`Added ${product.title} to cart!`);
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <main className="max-w-7xl mx-auto p-6">
        <section id="home" className="mb-8">
          <img src="banner.png" alt="Banner" className="w-full h-64 object-cover rounded-lg mb-4"/>
          <h1 className="text-gray-600 text-2xl font-semibold mb-2">ยินดีต้องรับสู่ศูนย์บริการรถยนต์ Toyota</h1>
          <p className="text-gray-600">สู่อีกขั้นของยนตรกรรมที่ตอบโจทย์ทุกการใช้ชีวิต ด้วยดีไซน์และเทคโนโลยีที่ล้ำสมัย ครบครันกับฟังก์ชันความละดวกสบายเหนือใครในทุกสัมผัส พร้อมยกระดับการเดินทางของคุณให้ดีกว่าที่เคย เพื่อทุกการเดินทางที่ตอบ...ทุกความหมายของชีวิต</p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.slice().map((p) => (
        <ProductCard
          key={`g-${p.id}`}
          imageUrl={p.imageUrl}
          title={p.title}
          description={p.description}
          price={p.price}
          onAddToCart={() => handleAdd(p)}
        />
      ))}
    </div>
      </main>

    </div>
  )
}

export default App

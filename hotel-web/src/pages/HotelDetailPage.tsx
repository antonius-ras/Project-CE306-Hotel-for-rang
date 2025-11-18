import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaCheckCircle, FaRegImages } from 'react-icons/fa'; // อย่าลืม import เพิ่มนะครับ


export const HOTEL_DATA = [
    { name: "Bangkok", image: "./Provinces/Bangkok.webp" },
    { name: "Chonburi", image: "./Provinces/Chonburi.jpg" },
    { name: "ChiangMai", image: "./Provinces/ChiangMai.webp" },
    { name: "Phuket", image: "./Provinces/Phuket.jpeg" },
    { name: "Ayutthaya", image: "./Provinces/Ayutthaya.png" },
    { name: "Kanchanaburi", image: "./Provinces/Kanchanaburi.webp" },
    { name: "ChiangRai", image: "./Provinces/ChiangRai.jpg" },
    { name: "Chachoengsao", image: "./Provinces/Chachoengsao.jpg" }
];
export const MOCK_HOTEL_DATA = {
    // --- Bangkok ---
    '1': {
        id: '1',
        title: 'Holiday Inn Bangkok',
        location: '971 ถนนเพลินจิต, ปทุมวัน, กรุงเทพฯ',
        rating: 4.5,
        description: 'สัมผัสความมหัศจรรย์ของเมืองหลวง เพียง 35 นาทีจากสนามบินสุวรรณภูมิ ตั้งอยู่ใจกลางย่านราชประสงค์ ใกล้เซ็นทรัลเวิลด์และแหล่งช้อปปิ้งชั้นนำ สะดวกสบายด้วยทางเชื่อม BTS',
        imageUrl: '/hotel1/hotel1.png',
        amenities: ['สระว่ายน้ำกลางแจ้ง', 'ฟิตเนส 24 ชม.', 'ห้องอาหารนานาชาติ', 'ใกล้รถไฟฟ้า'],
        numberOfReviews: 1240,
        roomTypes: [
            {
                name: 'Standard King', price: 3000, imageUrls: [
                    "/hotel1/1b.png", "/hotel1/1b(1).png", "/hotel1/1br.png", "/hotel1/1rs.png", "/hotel1/1lr.png"
                ]
            },
            {
                name: 'Twin Executive', price: 3500, imageUrls: [
                    "/hotel1/2b.png", "/hotel1/2b(1).png", "/hotel1/2rs.png", "/hotel1/1lr.png"
                ]
            },
        ],
    },
    '2': {
        id: '2',
        title: 'City Center Tower',
        location: 'สุขุมวิท 21, อโศก, กรุงเทพฯ',
        rating: 4.3,
        description: 'โรงแรมสไตล์ Business Hotel ใจกลางย่านธุรกิจอโศก เดินทางสะดวกด้วย MRT และ BTS เหมาะสำหรับการประชุมและการพักผ่อนใจกลางเมือง พร้อมวิวตึกระฟ้าที่สวยงาม',
        imageUrl: '/hotel2/hotel2.png',
        amenities: ['Co-working Space', 'High-Speed WiFi', 'Rooftop Bar', 'บริการซักรีด'],
        numberOfReviews: 850,
        roomTypes: [
            {
                name: 'Deluxe Single', price: 3000, imageUrls: [
                    "/hotel2/2b.png", "/hotel2/pool-hotel2.png", "/hotel2/tennis-hotel2.png"
                ]
            },
            {
                name: 'Executive Suite', price: 3500, imageUrls: [
                    "/hotel2/2b.png", "/hotel2/pool-hotel2.png", "/hotel2/tennis-hotel2.png", "/hotel2/1lr.png"
                ]
            },
        ],
    },
    '3': {
        id: '3',
        title: 'Seaside Serenity Resort',
        location: 'ริมแม่น้ำเจ้าพระยา, บางรัก, กรุงเทพฯ',
        rating: 4.8,
        description: 'รีสอร์ทหรูริมแม่น้ำเจ้าพระยา ให้บรรยากาศเงียบสงบเหมือนอยู่ชายทะเล แต่อยู่ใจกลางกรุงเทพฯ ผ่อนคลายไปกับสปาระดับโลกและวิวพระอาทิตย์ตกดินที่งดงามที่สุด',
        imageUrl: '/hotel3/hotel3.png',
        amenities: ['สปาครบวงจร', 'เรือรับ-ส่งฟรี', 'สระว่ายน้ำ Infinity Pool', 'ร้านอาหารริมน้ำ'],
        numberOfReviews: 450,
        roomTypes: [
            {
                name: 'River View Suite', price: 4500, imageUrls: [
                    "/hotel3/2b.png", "/hotel3/lr.png", "/hotel3/pool-hotel3.png"
                ]
            },
            {
                name: 'Family Grand', price: 6500, imageUrls: [
                    "/hotel3/3b.png", "/hotel3/3b(1).png", "/hotel3/3b(2).png", "/hotel3/lr.png"
                ]
            },
        ],
    },

    // --- Chonburi ---
    '4': {
        id: '4',
        title: 'Mountain View Lodge',
        location: 'ศรีราชา, ชลบุรี',
        rating: 4.6,
        description: 'หลีกหนีความวุ่นวายมาพักผ่อนท่ามกลางธรรมชาติ วิวภูเขาโอบล้อม อากาศบริสุทธิ์ ใกล้สวนสัตว์เปิดเขาเขียว เหมาะสำหรับครอบครัวและกลุ่มเพื่อนที่รักธรรมชาติ',
        imageUrl: '/hotel4/hotel4.png',
        amenities: ['กิจกรรมเดินป่า', 'ลานบาร์บีคิว', 'จักรยานให้เช่า', 'สวนสัตว์ขนาดเล็ก'],
        numberOfReviews: 210,
        roomTypes: [
            {
                name: 'Garden Villa', price: 3200, imageUrls: [
                    "/hotel4/1b.png", "/hotel4/pool-1b-hotel4.png"
                ]
            },
            {
                name: 'Pool Villa', price: 3800, imageUrls: [
                    "/hotel4/2b.png", "/hotel4/2b(1).png"
                ]
            },
            {
                name: 'Family Lodge', price: 8000, imageUrls: [
                    "/hotel4/4b.png", "/hotel4/pool-4b-hotel4.png"
                ]
            },
        ],
    },
    '5': {
        id: '5',
        title: 'Urban Chic Hotel',
        location: 'บางแสน, ชลบุรี',
        rating: 4.4,
        description: 'โรงแรมดีไซน์เก๋ไก๋ทันสมัย ใกล้หาดบางแสนเพียง 200 เมตร รายล้อมด้วยคาเฟ่และร้านอาหารยอดฮิต ตอบโจทย์ไลฟ์สไตล์คนรุ่นใหม่ มุมถ่ายรูปเพียบ',
        imageUrl: '/hotel5/hotel5.png',
        amenities: ['Cafe ในตัว', 'สระว่ายน้ำดาดฟ้า', 'Smart TV', 'Free Minibar'],
        numberOfReviews: 560,
        roomTypes: [
            {
                name: 'Chic Room', price: 3000, imageUrls: [
                    "/hotel5/1b.png", "/hotel5/1b(1).png", "/hotel5/pool-hotel5.png"
                ]
            },
            {
                name: 'Suite with Bathtub', price: 4500, imageUrls: [
                    "/hotel5/1b.png", "/hotel5/spa-hotel5.png", "/hotel5/pool-hotel5(1).png"
                ]
            },
        ],
    },
    '6': {
        id: '6',
        title: 'The Zleep Chonburi',
        location: 'เมืองชลบุรี, ชลบุรี',
        rating: 4.2,
        description: 'ที่พักสไตล์มินิมอล เรียบง่ายแต่ครบครัน ราคาประหยัดคุ้มค่า สะอาด ปลอดภัย เดินทางสะดวกใกล้ห้างเซ็นทรัลชลบุรี เหมาะสำหรับนักเดินทางและคนทำงาน',
        imageUrl: '/hotel6/hotel6.jpg',
        amenities: ['ที่จอดรถกว้างขวาง', 'ระบบ Keycard', 'WiFi แรง', 'ร้านสะดวกซื้อ 24 ชม.'],
        numberOfReviews: 300,
        roomTypes: [
            {
                name: 'Standard Double', price: 2800, imageUrls: [
                    "/hotel6/1b.jpg", "/hotel6/1b(1).jpg", "/hotel6/1lr.jpg", "/hotel6/1rs.jpg"
                ]
            },
            {
                name: 'Twin Room', price: 3500, imageUrls: [
                    "/hotel6/2b.jpg", "/hotel6/2lr.jpg", "/hotel6/2lr(1).jpg", "/hotel6/2rs(1).jpg"
                ]
            },
        ],
    },

    // --- Chiang Mai ---
    '7': {
        id: '7',
        title: 'Por Santitham',
        location: 'ช้างเผือก, เชียงใหม่',
        rating: 4.9,
        description: 'สัมผัสวิถีชีวิตชาวเชียงใหม่ในย่านสันติธรรม โรงแรมบรรยากาศอบอุ่นเหมือนบ้าน การตกแต่งผสมผสานล้านนาร่วมสมัย มีบริการน้ำดื่มและขนมทานเล่นฟรีตลอด 24 ชม.',
        imageUrl: '/hotel7/hotel7.jpg',
        amenities: ['อาหารเช้าท้องถิ่น', 'สระว่ายน้ำเกลือ', 'บริการจักรยาน', 'Snack Bar 24 ชม.'],
        numberOfReviews: 620,
        roomTypes: [
            {
                name: 'Superior Twin', price: 3500, imageUrls: [
                    "/hotel7/2rs.jpg", "/hotel7/2rs(1).jpg"
                ]
            },
        ],
    },
    '8': {
        id: '8',
        title: 'Eastin Tan Hotel Chiang Mai',
        location: 'นิมมานเหมินท์, เชียงใหม่',
        rating: 4.7,
        description: 'โรงแรมหรูตรงข้ามห้างเมญ่า วิวดอยสุเทพแบบพาโนรามา ห้องพักกว้างขวาง ตกแต่งสไตล์โมเดิร์นเอเชีย สะดวกสบายที่สุดในย่านนิมมาน',
        imageUrl: '/hotel8/hotel8.jpg',
        amenities: ['ซาวน่า & สตรีม', 'ห้องอาหาร T-Station', 'ฟิตเนสวิวภูเขา', 'รถรับส่งสนามบิน'],
        numberOfReviews: 980,
        roomTypes: [
            {
                name: 'Superior Room', price: 3000, imageUrls: [
                    "/hotel8/1b.jpg", "/hotel8/1b(1).jpg", "/hotel8/1lr.jpg", "/hotel8/1rs.jpg"
                ]
            },
            {
                name: 'Deluxe Mountain View', price: 3800, imageUrls: [
                    "/hotel8/2b.jpg", "/hotel8/2b(1).jpg", "/hotel8/2lr.jpg", "/hotel8/2rs.jpg", "/hotel8/2rs(1).jpg"
                ]
            },
        ],
    },
    '9': {
        id: '9',
        title: 'Travelodge Nimman Hotel',
        location: 'นิมมานเหมินท์, เชียงใหม่',
        rating: 4.5,
        description: 'ที่พักใหม่ล่าสุดในนิมมาน ตกแต่งสไตล์สดใส เหมาะกับวัยรุ่นและ Digital Nomad มีพื้นที่ส่วนกลางกว้างขวาง ใกล้แหล่งคาเฟ่และร้านอาหารชื่อดัง',
        imageUrl: '/hotel9/hotel9.jpg',
        amenities: ['สระว่ายน้ำ Rooftop', 'Gym', 'Co-working area', 'ใกล้ One Nimman'],
        numberOfReviews: 410,
        roomTypes: [
            {
                name: 'Standard Queen', price: 3000, imageUrls: [
                    "/hotel9/1b.jpg", "/hotel9/1lr.jpg", "/hotel9/1rs.jpg", "/hotel9/1rs(1).jpg"
                ]
            },
            {
                name: 'Standard Twin', price: 3500, imageUrls: [
                    "/hotel9/2b.jpg", "/hotel9/2b(1).jpg", "/hotel9/2lr.jpg", "/hotel9/2rs.jpg"
                ]
            },
            {
                name: 'Family Room', price: 4500, imageUrls: [
                    "/hotel9/3b.jpg", "/hotel9/3b(1).jpg", "/hotel9/3lr.jpg", "/hotel9/3rs.jpg"
                ]
            },
        ],
    },

    // --- Phuket ---
    '10': {
        id: '10',
        title: 'SHIN Arch39 Phuket Beach Front',
        location: 'หาดป่าตอง, ภูเก็ต',
        rating: 4.6,
        description: 'บูทีคโฮเทลดีไซน์ชิค ติดหาดป่าตองเพียงข้ามถนน ห้องพักตกแต่งสไตล์ Minimal Loft เน้นโทนสีขาวสบายตา ถ่ายรูปสวยทุกมุม พร้อมวิวทะเลอันดามัน',
        imageUrl: '/hotel10/hotel10.webp',
        amenities: ['Beachfront', 'Beach Club', 'บริการทัวร์เกาะ', 'บาร์ริมหาด'],
        numberOfReviews: 330,
        roomTypes: [
            {
                name: 'Sea View King', price: 3200, imageUrls: [
                    "/hotel10/1b.jpg", "/hotel10/1b(1).webp", "/hotel10/1lr.webp", "/hotel10/1lr(1).webp", "/hotel10/1rs.jpg"
                ]
            },
            {
                name: 'Deluxe Twin', price: 3800, imageUrls: [
                    "/hotel10/2b.webp", "/hotel10/2lr.webp", "/hotel10/2rs.jpg", "/hotel10/2rs(1).jpg"
                ]
            },
        ],
    },
    '11': {
        id: '11',
        title: 'Royal Phuket City Hotel',
        location: 'เมืองภูเก็ต, ภูเก็ต',
        rating: 4.5,
        description: 'โรงแรมระดับตำนานใจกลางเมืองภูเก็ต ใกล้ย่านเมืองเก่าชิโนโปรตุกีส ศูนย์รวมความสะดวกสบาย ห้องพักกว้างขวาง บริการระดับ 5 ดาว',
        imageUrl: '/hotel11/hotel11.webp',
        amenities: ['สระว่ายน้ำขนาดใหญ่', 'ห้องอาหารจีน', 'ฟิตเนสเซ็นเตอร์', 'ห้องจัดเลี้ยง'],
        numberOfReviews: 1150,
        roomTypes: [
            {
                name: 'Superior Room', price: 3000, imageUrls: [
                    "/hotel11/1b.webp", "/hotel11/1b(1).webp", "/hotel11/1lr.webp", "/hotel11/1rs.jpg"
                ]
            },
            {
                name: 'Deluxe Twin', price: 3500, imageUrls: [
                    "/hotel11/2b.jpg", "/hotel11/2b(1).webp", "/hotel11/2lr.webp", "/hotel11/2rs.jpg"
                ]
            },
        ],
    },
    '12': {
        id: '12',
        title: 'Woovo Phuket Patong',
        location: 'ป่าตอง, ภูเก็ต',
        rating: 4.4,
        description: 'โรงแรมสุดเทรนดี้ใจกลางป่าตอง ห่างจากซอยบางลาและห้างจังซีลอนเพียงไม่กี่ก้าว สนุกสุดเหวี่ยงกับชีวิตกลางคืน และพักผ่อนในห้องพักที่เงียบสงบ',
        imageUrl: '/hotel12/hotel12.webp',
        amenities: ['Pool Bar', 'ห้องเล่นเกม', 'ใกล้สถานบันเทิง', 'ยิม'],
        numberOfReviews: 540,
        roomTypes: [
            {
                name: 'Woovo Standard', price: 3000, imageUrls: [
                    "/hotel12/1rs.webp", "/hotel12/1rs(1).jpg"
                ]
            },
            {
                name: 'Woovo Deluxe', price: 3500, imageUrls: [
                    "/hotel12/2b.webp", "/hotel12/2b(1).webp", "/hotel12/2lr.webp", "/hotel12/2rs.webp"
                ]
            },
        ],
    },

    // --- Ayutthaya ---
    '13': {
        id: '13',
        title: 'Kunst Ayutthaya',
        location: 'เกาะเมือง, อยุธยา',
        rating: 4.7,
        description: 'เปลี่ยนบรรยากาศมานอนเสพศิลป์ ริมแม่น้ำเจ้าพระยา โรงแรมที่รวม Art Gallery และที่พักเข้าด้วยกัน ตกแต่งอย่างมีเอกลักษณ์ ใกล้วัดมหาธาตุ',
        imageUrl: '/hotel13/holtel13.jpg',
        amenities: ['Art Gallery', 'Coffee Bar', 'มุมอ่านหนังสือ', 'อาหารเช้า Homemade'],
        numberOfReviews: 180,
        roomTypes: [
            {
                name: 'Artistic Single', price: 2500, imageUrls: [
                    "/hotel13/1b.jpg", "/hotel13/1b(1).jpg", "/hotel13/1lr.jpg", "/hotel13/1rs.jpg"
                ]
            },
            {
                name: 'River View Twin', price: 3000, imageUrls: [
                    "/hotel13/2b.jpg", "/hotel13/2b(2).jpg", "/hotel13/2lr.jpg", "/hotel13/2rs.jpg"
                ]
            },
        ],
    },
    '14': {
        id: '14',
        title: 'Centara Ayutthaya',
        location: 'โรจนะ, อยุธยา',
        rating: 4.8,
        description: 'โรงแรมหรูเครือเซ็นทารา ติดศูนย์การค้าเซ็นทรัล อยุธยา สะดวกสบาย ครบครันด้วยสิ่งอำนวยความสะดวก พร้อมสระว่ายน้ำวิวเมืองเก่า',
        imageUrl: '/hotel14/hotel14.jpg',
        amenities: ['ทางเชื่อมเข้าห้าง', 'Rooftop Bar', 'สระว่ายน้ำ', 'ฟิตเนส'],
        numberOfReviews: 320,
        roomTypes: [
            {
                name: 'Deluxe King', price: 3200, imageUrls: [
                    "/hotel14/1b.jpg", "/hotel14/1b(1).jpg", "/hotel14/1lr.jpg", "/hotel14/1rs.jpg"
                ]
            },
            {
                name: 'Deluxe Twin', price: 3800, imageUrls: [
                    "/hotel14/2b.jpg", "/hotel14/2b(2).jpg", "/hotel14/2lr.jpg", "/hotel14/2rs.jpg"
                ]
            },
        ],
    },
    '15': {
        id: '15',
        title: 'S3 Ayutthaya Hotel',
        location: 'คลองสวนพลู, อยุธยา',
        rating: 4.3,
        description: 'ที่พักดีไซน์โมเดิร์น ราคาคุ้มค่า ห้องพักสะอาด กว้างขวาง เดินทางสะดวกไปยังนิคมอุตสาหกรรมและแหล่งท่องเที่ยว เหมาะสำหรับทั้ง Business และ Leisure',
        imageUrl: '/hotel15/hotel15.jpg',
        amenities: ['ที่จอดรถฟรี', 'คาเฟ่', 'บริการเรียกรถ', 'Wifi ความเร็วสูง'],
        numberOfReviews: 250,
        roomTypes: [
            {
                name: 'Superior Room', price: 2800, imageUrls: [
                    "/hotel15/1b.jpg", "/hotel15/1b(1).jpg", "/hotel15/1rs.jpg", "/hotel15/1rs(1).jpg"
                ]
            },
            {
                name: 'Twin Room', price: 3400, imageUrls: [
                    "/hotel15/2b.jpg", "/hotel15/2b(2).jpg", "/hotel15/2rs.jpg", "/hotel15/2rs(2).jpg"
                ]
            },
        ],
    },

    // --- Kanchanaburi ---
    '16': {
        id: '16',
        title: 'Tara Villa',
        location: 'แม่น้ำแควใหญ่, กาญจนบุรี',
        rating: 4.9,
        description: 'วิลล่าหรูริมแม่น้ำแควใหญ่ เน้นความเป็นส่วนตัวสูงสุด ห้องพักทุกหลังหันหน้าเข้าหาแม่น้ำ พร้อมสระว่ายน้ำส่วนตัว บริการระดับ VVIP',
        imageUrl: '/hotel16/hotel16.webp',
        amenities: ['Private Pool', 'Floating Breakfast', 'Afternoon Tea', 'Bathtub'],
        numberOfReviews: 410,
        roomTypes: [
            {
                name: 'Pool Villa King', price: 4000, imageUrls: [
                    "/hotel16/1b.jpg", "/hotel16/1b(1).jpg", "/hotel16/1lr.jpg", "/hotel16/1rs.webp"
                ]
            },
            {
                name: 'Riverfront Suite', price: 5500, imageUrls: [
                    "/hotel16/2b.webp", "/hotel16/2lr.webp", "/hotel16/2lr(1).jpg", "/hotel16/2rs.jpg"
                ]
            },
        ],
    },
    '17': {
        id: '17',
        title: 'Z9 Resort',
        location: 'เขื่อนศรีนครินทร์, กาญจนบุรี',
        rating: 4.8,
        description: 'มัลดีฟส์เมืองไทย สัมผัสประสบการณ์พักผ่อนบนแพหรูลอยน้ำ ดีไซน์โมเดิร์นล้ำสมัย ท่ามกลางบรรยากาศเงียบสงบของเขื่อนศรีนครินทร์',
        imageUrl: '/hotel17/hotel17.webp',
        amenities: ['พายเรือคายัคฟรี', 'กิจกรรมทางน้ำ', 'Jet Ski', 'ร้านอาหารวิวเขื่อน'],
        numberOfReviews: 600,
        roomTypes: [
            {
                name: 'South the Scene', price: 4500, imageUrls: [
                    "/hotel17/1b.jpg", "/hotel17/1b(1).jpg", "/hotel17/1lr.jpg", "/hotel17/1rs.jpg"
                ]
            },
            {
                name: 'Escape North', price: 5500, imageUrls: [
                    "/hotel17/2b.webp", "/hotel17/2lr.webp", "/hotel17/2lr(1).webp", "/hotel17/2rs.jpg"
                ]
            },
        ],
    },
    '18': {
        id: '18',
        title: 'Felix River Kwai Resort',
        location: 'สะพานข้ามแม่น้ำแคว, กาญจนบุรี',
        rating: 4.5,
        description: 'รีสอร์ทคลาสสิกขนาดใหญ่ริมแม่น้ำแคว ร่มรื่นด้วยสวนสวย ใกล้สะพานข้ามแม่น้ำแควเพียงเดินถึง เหมาะสำหรับครอบครัวและการจัดสัมมนา',
        imageUrl: '/hotel18/hotel18.jpg',
        amenities: ['สระว่ายน้ำ 2 สระ', 'สนามเทนนิส', 'ล่องแพอาหาร', 'สปา'],
        numberOfReviews: 780,
        roomTypes: [
            {
                name: 'Superior Garden', price: 3000, imageUrls: [
                    "/hotel18/1b.jpg", "/hotel18/1b(1).jpg", "/hotel18/1lr(1).jpg", "/hotel18/1rl.jpg"
                ]
            },
            {
                name: 'Deluxe River View', price: 3800, imageUrls: [
                    "/hotel18/2b.jpg", "/hotel18/2b(1).jpg", "/hotel18/2lr.jpg", "/hotel18/2lr(1).jpg"
                ]
            },
        ],
    },

    // --- Chiang Rai ---
    '19': {
        id: '19',
        title: 'Cape Dara Resort',
        location: 'ริมแม่น้ำกก, เชียงราย',
        rating: 4.9,
        description: 'รีสอร์ทหรูริมแม่น้ำกก บรรยากาศเงียบสงบ โดดเด่นด้วยการตกแต่งที่ผสมผสานวัฒนธรรมล้านนา ชมวิวพระอาทิตย์ตกที่สวยงามที่สุดในเชียงราย',
        imageUrl: '/hotel19/hotel19.webp',
        amenities: ['สระว่ายน้ำ Infinity', 'ท่าเรือส่วนตัว', 'สปาล้านนา', 'ร้านอาหารริมน้ำ'],
        numberOfReviews: 350,
        roomTypes: [
            {
                name: 'Deluxe Room', price: 3500, imageUrls: [
                    "/hotel19/1b.webp", "/hotel19/1b(1).jpg", "/hotel19/1lr.webp", "/hotel19/1rs.webp"
                ]
            },
            {
                name: 'Corner Suite', price: 4200, imageUrls: [
                    "/hotel19/2b.webp", "/hotel19/2b(1).webp", "/hotel19/2lr.jpg", "/hotel19/2rs.jpg"
                ]
            },
        ],
    },
    '20': {
        id: '20',
        title: 'LK The Empress',
        location: 'ใจกลางเมือง, เชียงราย',
        rating: 4.6,
        description: 'สัมผัสความหรูหราสไตล์ยุโรปใจกลางเมืองเชียงราย ตกแต่งอย่างวิจิตรบรรจง ห้องพักกว้างขวาง สะดวกสบาย ใกล้หอนาฬิกาและตลาดไนท์บาซาร์',
        imageUrl: '/hotel20/hotel20.webp',
        amenities: ['อาหารเช้านานาชาติ', 'รถรับส่งฟรี', 'สระว่ายน้ำโรมัน', 'ห้องประชุม'],
        numberOfReviews: 420,
        roomTypes: [
            {
                name: 'Classic King', price: 3200, imageUrls: [
                    "/hotel20/1b.webp", "/hotel20/1b(1).jpg", "/hotel20/1lr.jpg", "/hotel20/1rs.jpg"
                ]
            },
            {
                name: 'Empress Twin', price: 3900, imageUrls: [
                    "/hotel20/2b.webp", "/hotel20/2b(1).webp", "/hotel20/2lr.jpg", "/hotel20/2rs.jpg"
                ]
            },
        ],
    },
    '21': {
        id: '21',
        title: 'e Patta Resort & Hotel',
        location: 'ใกล้ไนท์บาซาร์, เชียงราย',
        rating: 4.7,
        description: 'รีสอร์ทเล็กๆ ที่อบอุ่นและร่มรื่นใจกลางเมือง ออกแบบสไตล์ Modern Contemporary เดินไปไนท์บาซาร์และถนนคนเดินได้ใน 5 นาที',
        imageUrl: '/hotel21/hotel21.jpg',
        amenities: ['สระว่ายน้ำระบบเกลือ', 'สวนหย่อม', 'บริการยืมจักรยาน', 'Fitness'],
        numberOfReviews: 290,
        roomTypes: [
            {
                name: 'Superior Room', price: 2800, imageUrls: [
                    "/hotel21/1b.jpg", "/hotel21/1lr.jpg", "/hotel21/1rs.jpg"
                ]
            },
            {
                name: 'Deluxe Twin', price: 3400, imageUrls: [
                    "/hotel21/2b.jpg", "/hotel21/2b(1).jpg", "/hotel21/2lr.jpg", "/hotel21/2rs.jpg"
                ]
            },
        ],
    },

    // --- Chachoengsao ---
    '22': {
        id: '22',
        title: 'Grand Sappaya Hotel',
        location: 'บางคล้า, ฉะเชิงเทรา',
        rating: 4.8,
        description: 'สวรรค์ของคนรักกอล์ฟและธรรมชาติ โรงแรมหรูในสนามกอล์ฟ Lotus Valley Golf Resort บรรยากาศเขียวขจี สงบเงียบ เหมาะสำหรับการพักผ่อนอย่างแท้จริง',
        imageUrl: '/hotel22/hotel22.jpg',
        amenities: ['สนามกอล์ฟ 18 หลุม', 'คลับเฮ้าส์', 'สปา', 'สระว่ายน้ำ'],
        numberOfReviews: 120,
        roomTypes: [
            {
                name: 'Golfer Suite', price: 3000, imageUrls: [
                    "/hotel22/1br.jpg", "/hotel22/1br(1).jpg", "/hotel22/1lr.jpg", "/hotel22/1rs.jpg"
                ]
            },
            {
                name: 'Family Golf View', price: 3600, imageUrls: [
                    "/hotel22/2b.jpg", "/hotel22/2b(2).jpg", "/hotel22/2lr.jpg", "/hotel22/2rs.jpg"
                ]
            },
        ],
    },
    '23': {
        id: '23',
        title: 'Sirapa Resident',
        location: 'เมืองฉะเชิงเทรา, ฉะเชิงเทรา',
        rating: 3.8,
        description: 'อพาร์ทเมนท์เซอร์วิสและโรงแรมราคาประหยัด สะอาด ปลอดภัย ห้องพักกว้างขวาง ใกล้วัดหลวงพ่อโสธรเพียง 10 นาที',
        imageUrl: '/hotel23/hotel23.jpg',
        amenities: ['ระบบรักษาความปลอดภัย', 'ที่จอดรถ', 'ลิฟต์', 'WiFi ฟรี'],
        numberOfReviews: 180,
        roomTypes: [
            {
                name: 'Standard Room', price: 1500, imageUrls: [
                    "/hotel23/1b.jpg", "/hotel23/1lr.jpg", "/hotel23/1rs.jpg"
                ]
            },
            {
                name: 'Double Room', price: 2000, imageUrls: [
                    "/hotel23/2b.jpg", "/hotel23/2lr.jpg", "/hotel23/2rs.jpg"
                ]
            },
        ],
    },
    '24': {
        id: '24',
        title: 'The Wish Hotel',
        location: 'หน้าเมือง, ฉะเชิงเทรา',
        rating: 4.0,
        description: 'โรงแรมมาตรฐานใจกลางเมืองฉะเชิงเทรา ห้องพักทันสมัย รองรับงานจัดเลี้ยงและงานแต่งงาน ใกล้ห้างโรบินสัน เดินทางสะดวกสบาย',
        imageUrl: '/hotel24/hotel24.jpg',
        amenities: ['ห้องประชุมสัมมนา', 'ห้องอาหารบุฟเฟต์', 'ฟิตเนส', 'ที่จอดรถขนาดใหญ่'],
        numberOfReviews: 220,
        roomTypes: [
            {
                name: 'Superior King', price: 2200, imageUrls: [
                    "/hotel24/1b.jpg", "/hotel24/1b(1).jpg", "/hotel24/1lr.jpg", "/hotel24/1rs.jpg"
                ]
            },
            {
                name: 'Deluxe Twin', price: 2800, imageUrls: [
                    "/hotel24/2b.jpg", "/hotel24/2b(2).jpg", "/hotel24/2lr.jpg", "/hotel24/2rs.jpg"
                ]
            },
        ],
    },
};


const HotelDetailPage: React.FC = () => {
    const { hotelId } = useParams<{ hotelId: string }>();
    const hotel = MOCK_HOTEL_DATA[hotelId as keyof typeof MOCK_HOTEL_DATA];

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [guests, setGuests] = useState(1);
    const [selectedRoom, setSelectedRoom] = useState(0);
    const navigate = useNavigate();

    if (!hotel) {
        return (
            <div className="text-center p-10 text-red-600 text-2xl">
                ไม่พบข้อมูลโรงแรม (ID: {hotelId || 'N/A'})
            </div>
        );
    }

    const handleRoomTypeChange = (e: { target: { value: string; }; }) => {
        const newRoomIndex = parseInt(e.target.value);
        setSelectedRoom(newRoomIndex);
        setActiveImageIndex(0); // 👈 **สำคัญ:** รีเซ็ต index รูปภาพเป็น 0 ทุกครั้งที่เปลี่ยนห้อง
    };
    // ฟังก์ชันสำหรับคลิกที่รูปย่อ
    const handleThumbnailClick = (index: React.SetStateAction<number>) => {
        setActiveImageIndex(index); // 👈 แค่ set index รูปที่ถูกคลิก
    };

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const selectedRoomData = hotel.roomTypes[selectedRoom];
        const date1 = new Date(checkInDate);
        const date2 = new Date(checkOutDate);
        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        const numberOfNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const totalPrice = selectedRoomData.price * numberOfNights;
        const bookingDetails = {
            hotelName: hotel.title,
            room: selectedRoomData,
            checkIn: checkInDate,
            checkOut: checkOutDate,
            guests: guests,
            numberOfNights: numberOfNights,
            totalPrice: totalPrice,
            mainHotelImage: hotel.imageUrl // รูปหลักของโรงแรม (ภาพรวม)
        };

        navigate('/receipt', {state: {bookingData: bookingDetails}});
    };


    return (
        <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                {/* รูปภาพ */}
                <div className="relative h-96">
                    <img src={hotel.imageUrl} alt={hotel.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                            {hotel.title}
                        </h1>
                    </div>
                </div>

                <div className="p-8 lg:flex lg:space-x-8">
                    {/* รายละเอียด */}
                    <div className="lg:w-2/3 space-y-10 font-sans"> {/* ใช้ font-sans และเพิ่มระยะห่างแนวตั้ง */}

                        {/* Section: รายละเอียด */}
                        <section>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b border-gray-100 pb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                                        รายละเอียดที่พัก
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 mb-2">
                                        <span className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-1 rounded-md">
                                            <FaStar /> {hotel.rating}
                                        </span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"> </span>
                                        <span className=" text-gray-800">
                                            {hotel.numberOfReviews} รีวิว
                                        </span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span className="flex text-gray-800 items-center gap-1 ">
                                            <FaMapMarkerAlt className='text-red-600'/> {hotel.location}
                                        </span>
                                    </div>
                                    {/* สิ่งอำนวยความสะดวก */}
                                    <div className=" flex flex-wrap gap-4">
                                        {hotel.amenities.map((item) => (
                                            <span key={item}className="bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-loose text-lg mb-8 font-light">
                                {hotel.description}
                            </p>


                            {/* --- Image Gallery Design ใหม่ --- */}
                            <div className="space-y-4">
                                {/* รูปใหญ่ */}
                                <div className="group relative w-full h-[250px] overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                                    <img
                                        src={hotel.roomTypes[selectedRoom].imageUrls[activeImageIndex]}
                                        alt={hotel.roomTypes[selectedRoom].name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    />
                                    {/* Badge บอกชื่อห้องมุมขวาบน */}
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                                        {hotel.roomTypes[selectedRoom].name}
                                    </div>
                                </div>

                                {/* รูปย่อ (Thumbnails) */}
                                {hotel.roomTypes[selectedRoom].imageUrls.length > 1 && (
                                    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide p-2">
                                        
                                        {hotel.roomTypes[selectedRoom].imageUrls.map((imgUrl, index) => (
                                            <button key={index} onClick={() => handleThumbnailClick(index)} className={`relative w-24 h-20 shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${activeImageIndex === index? 'ring-2 ring-green-600 ring-offset-2 shadow-md scale-105': 'opacity-70 hover:opacity-100 hover:scale-105'}`}>
                                                <img src={imgUrl} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover"/>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>


                    {/* ฟอร์มการจอง */}
                    <div className="lg:w-1/3 mt-10 lg:mt-0">
                        <div className="sticky top-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
                            <div className="text-3xl font-bold text-gray-900 mb-4">
                                ฿{hotel.roomTypes[selectedRoom].price.toLocaleString()}
                                <span className="text-base font-normal text-gray-500"> / คืน</span>
                            </div>
                            <form onSubmit={handleBookingSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="roomType"className="block text-sm font-medium text-gray-700">
                                        ประเภทห้อง
                                    </label>
                                    <select id="roomType" value={selectedRoom} onChange={handleRoomTypeChange} className="mt-1 block w-full text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm p-2">
                                        {hotel.roomTypes.map((room, index) => (
                                            <option key={index} value={index}>
                                                {room.name} — ฿{room.price.toLocaleString()}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">
                                        เช็คอิน
                                    </label>
                                    <input
                                        type="date"
                                        id="checkin"
                                        value={checkInDate}
                                        onChange={(e) => setCheckInDate(e.target.value)}
                                        className="mt-1 block w-full text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm p-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="checkout" className="block text-sm text-gray-700 bg-white font-medium text-gray-700">
                                        เช็คเอาท์
                                    </label>
                                    <input
                                        type="date"
                                        id="checkout"
                                        value={checkOutDate}
                                        onChange={(e) => setCheckOutDate(e.target.value)}
                                        className="mt-1 block w-full text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm p-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                                        จำนวนแขก
                                    </label>
                                    <input
                                        type="number"
                                        id="guests"
                                        min="1"
                                        value={guests}
                                        onChange={(e) => setGuests(parseInt(e.target.value))}
                                        className="mt-1 block w-full text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm p-2"
                                        required
                                    />
                                </div>
                                <button type="submit"className="w-full py-3 group bg-green-100 text-green-700 hover:bg-green-200  font-semibold rounded-lg transition duration-150">
                                    จองทันที
                                </button>
                            </form>
                            <p className="text-xs text-center text-gray-500 mt-3">
                                คุณจะไม่ถูกเรียกเก็บเงินตอนนี้
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetailPage;

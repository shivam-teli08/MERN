import React from 'react'
import './Card.css'
let data = [
  {
    "id": 1,
    "name": "EchoPods Wireless",
    "price": "$100",
    "image": "https://m.media-amazon.com/images/I/51f1YbJdQBL._UF1000,1000_QL80_.jpg",
    "description": "Experience crystal-clear sound and a secure fit with EchoPods. Designed for music lovers, they offer long battery life, easy pairing, and a compact case for everyday use."
  },
  {
    "id": 2,
    "name": "PixelBeats Pro",
    "price": "$120",
    "image": "https://cdn.mos.cms.futurecdn.net/8VTyDkyenSqcyqgphgy9E4.jpg",
    "description": "PixelBeats Pro delivers deep bass and high-definition audio. Perfect for workouts or work calls, it features noise cancellation and a comfortable, ergonomic design for long hours of use."
  },
  {
    "id": 3,
    "name": "ZenPods Max",
    "price": "$95",
    "image": "https://www.zexxus.co.in/cdn/shop/files/10.png?v=1721799088",
    "description": "ZenPods Max brings balanced audio and stylish aesthetics. Water-resistant and lightweight, they are ideal companions for everyday listening, commuting, or working from home with superb call clarity."
  },
  {
    "id": 4,
    "name": "NovaSound Air",
    "price": "$110",
    "image": "https://m.media-amazon.com/images/I/71FmKs46T8L._UF894,1000_QL80_.jpg",
    "description": "NovaSound Air offers immersive sound with touch controls. The compact charging case fits in any pocket, making it perfect for travel, gym sessions, or remote work meetings anytime."
  },
  {
    "id": 5,
    "name": "AeroPods Lite",
    "price": "$80",
    "image": "https://m.media-amazon.com/images/I/612IPd3aKHL._UF1000,1000_QL80_.jpg",
    "description": "AeroPods Lite provides reliable connectivity and high-quality audio. Its lightweight build and soft ear tips ensure all-day comfort. Great choice for students and professionals on a budget."
  },
  {
    "id": 6,
    "name": "FalconFire RGB",
    "price": "$60",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NIwGZZ5imGbdduybP7Wj0qkrGgRntOc-7g&s",
    "description": "FalconFire RGB mouse features adjustable DPI, customizable lighting, and ergonomic contours for long gaming sessions. Built for precision and speed to enhance your competitive edge in every match."
  },
  {
    "id": 7,
    "name": "StealthCore V2",
    "price": "$75",
    "image": "https://playstealth.com/cdn/shop/files/16.jpg?v=1739557714&width=1445",
    "description": "StealthCore V2 is a high-performance gaming mouse with ultra-fast response time. Its textured grip and customizable side buttons make it ideal for FPS, RPG, or MOBA players."
  },
  {
    "id": 8,
    "name": "GlideX Spectra",
    "price": "$90",
    "image": "https://m.media-amazon.com/images/I/61vO8mgbtxL._UF1000,1000_QL80_.jpg",
    "description": "GlideX Spectra offers sleek RGB lighting, smooth glide, and a braided USB cable. Precision-tuned for both right- and left-handed gamers looking for style and performance together."
  },
]

export function Card() {

  return (

    <>
      {data.map((item) => (
        <div className="Card" key={item.id}>
          <div className='cardContent'>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}
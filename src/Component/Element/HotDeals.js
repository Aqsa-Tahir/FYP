import React from 'react'

const HotDeals = () => {
    const hotDeals = [
        {
          id: 11,
          name: 'Kids Special Box',
          description: 'Special offer',
          price: 1000,
          image: '/Assets/10.jpg',
        },
        {
          id: 12,
          name: 'Brushes',
          description: 'Limited time deal',
          price: 1500,
          image: '/Assets/15.jpg',
        },
        {
          id: 13,
          name: 'Basic Products',
          description: 'Limited time deal',
          price: 4000,
          image: '/Assets/25.jpg',
        },
        {
          id: 14,
          name: 'Nail Paint Set',
          description: 'Special offer',
          price: 1500,
          image: '/Assets/26.jpg',
        },
        {
          id: 15,
          name: 'Rings',
          description: 'Limited time deal',
          price: 850,
          image: '/Assets/27.jpg',
        },
        {
          id: 16,
          name: 'All Products',
          description: 'Special offer',
          price: 6000,
          image: '/Assets/28.jpg',
        },
        {
          id: 17,
          name: 'Makeup Products',
          description: 'Limited time deal',
          price: 5000,
          image: '/Assets/31.jpg',
        },
        {
          id: 18,
          name: 'Hair Band Set',
          description: 'Special offer',
          price: 500,
          image: '/Assets/9.jpg',
        },
        
      ];
  return (
    <div>
       <div className="bg-cover bg-center bg-pink-200 z-20 relative mt-0">
        <h2  data-aos="zoom-out-right"  className="text-4xl font-bold  py-10 text-pink-900 text-center">Hot Deals</h2>
        <div data-aos="zoom-out-down" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
          {hotDeals.map((product) => (
            <div key={product.id} className="product p-10 border border-gray-300 rounded-md shadow-md bg-white">
              <img src={product.image} alt={product.name} className="w-full h-36 w-36 object-cover mb-4 rounded-md" />
              <p className="text-lg font-bold mb-2">{product.name}</p>
              <p className="text-sm mb-2">{product.description}</p>
              <p className="text-sm text-pink-700">Rs{product.price}</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 focus:outline-none focus:shadow-outline-blue ">
        Add to Cart
      </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HotDeals

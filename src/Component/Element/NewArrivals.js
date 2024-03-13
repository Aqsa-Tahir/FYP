import React from 'react'

const NewArrivals = () => {
    const newArrivals = [
        {
          id: 7,
          name: 'Contour Stick',
          description: 'Latest addition',
          price: 900,
          image: '/Assets/21.jpg',
        },
        {
          id: 8,
          name: 'Bb Cream',
          description: 'New and exciting',
          price: 980,
          image: '/Assets/22.jpg',
        },
        {
          id: 9,
          name: 'Primer',
          description: 'New and exciting',
          price: 1500,
          image: '/Assets/23.jpg',
        },
        {
          id: 10,
          name: 'Compact Powder',
          description: 'Latest addition',
          price: 2900,
          image: '/Assets/24.jpg',
        },
        
      ];
  return (
    <div>
     <div className="z-20 relative bg-cover bg-center bg-pink-200 mb-0">
        <h2  data-aos="zoom-out-right"  className="text-4xl font-bold mb-8 text-pink-900 text-center">New Arrivals</h2>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
          {newArrivals.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-10 text-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 mb-4 mx-auto" />
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

export default NewArrivals

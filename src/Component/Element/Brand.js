import React from 'react'

const Brand = () => {

    const brandData = [
        {
         
          image: '/Assets/j.jpg',
         
        },
        {
        
          image: '/Assets/hudabeauty.jpg',
          
        },
        {
     
          image: '/Assets/sheglam.jpg',
        
        },
        {
          
          image: '/Assets/saeedghani.jpg',
        
        },
        {
          
          image: '/Assets/missrose.jpg',
          
        },
        {
        
          image: '/Assets/xqm.jpg',
          
        },
        {
        
          image: '/Assets/fitme.jpg',
         
        },
        {
          
          image: '/Assets/bonanza.jpg',
         
        },
      ];
  return (
    <div>
       <div className=" mx-auto my-0 bg-pink-200">
      <h2 className="text-5xl font-bold mb-4 text-center text-pink-500" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Our Brands</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up"
     data-aos-duration="3000">
        {brandData.map((brand, index) => (
          <li key={index} className="bg-white rounded-2xl p-4 text-center">
            <img src={brand.image} alt={`${brand.name} Logo`} className="w-24 h-24 mx-auto mb-2 object-contain" />
            <h3 className="text-lg font-bold mb-2 text-pink-500">{brand.name}</h3>
          
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Brand;

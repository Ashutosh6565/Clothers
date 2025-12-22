import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from "../../assets/featured.webp";

const FeaturedCollection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50'>

        {/* left content  */}
        <div className='lg:w-1/2 p-8 text-center lg:text-left'>
            <h2 className='text-lg font-semibold text-gray-700 mb-2'>
                Comfort and style
            </h2>
            <h3 className='text-4xl lg:text-5xl font-bold mb-6'>
                Apparel made for your everyday life 
            </h3>
            <p className='text-lg text-gray-600 mb-6'>
                Discover our latest collection of comfortable and stylish apparel designed to fit your everyday lifestyle. From casual wear to versatile pieces, find the perfect outfit for any occasion.
            </p>

            <Link to="/collection/all" className='bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800'>Shop Now</Link>
        </div>

        {/* right image  */}
        <div className='lg:w-1/2'>
            <img src={heroImg} alt="Featured Collection"  className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl'/>
        </div>
        </div>
    </section>
  )
}

export default FeaturedCollection

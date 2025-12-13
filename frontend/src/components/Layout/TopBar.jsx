import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'

const TopBar = () => {
  return (
    <div className='bg-[#ea2f0e] text-white '>
        <div className='container mx-auto px-4 flex justify-between items-center py-1'>
            <div className='hidden md:flex items-center space-x-4'>
                <a href="#" className='hover:text-gray-300'>
                    <TbBrandMeta className='h-5 w-5' />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5' />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <RiTwitterLine className='h-5 w-5' />
                </a>
            </div>

            <div className='text-sm text-center flex-grow'>
                <span>We Ship word wide 1:01 </span>
            </div>

            <div className='text-sm hidden md:block'>
            <a href="tel:7302401472" className='hover:text-gray-300'>
                +91 7302401472
            </a>
            </div>
        </div>
    </div>
  )
}

export default TopBar
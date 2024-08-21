import React from 'react'
import brand1 from '../assets/brands/brand1.png'
import brand2 from '../assets/brands/brand2.png'
import brand5 from '../assets/brands/brand5.png'


const Brand = () => {
  return (
    <div className='py-8 mt-12 bg-gray-300'>
          <div className='container '>
               <div className='grid grid-cols-3  place-items-center  '>
                  <img className='w-[80px]  dark:invert' src={brand1} alt="brand" />
                  <img className='w-[80px] dark:invert' src={brand2} alt="brand" />
                  <img className='w-[80px] dark:invert' src={brand5} alt="brand" />
               </div>
            
            
        </div>      
    </div>
  )
}

export default Brand

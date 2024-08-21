import React from 'react'
import headphone from '../assets/hero/headphone.png'
const bannerData = {
    discount:'30% 0FF',
    title:'Fine Smile',
    date: '15 Jun to 29 Jun ',
    image: 'headphone',
    title2:'Air Solo Bass',
    title3:'Winter Sell',
    title4: ' Lorem ipsum dolor sit amet consectetur adipisicing voluptatibus sint excepturi hic est rerum! Earum!',
    bgColor: '#f42c37' 
};

const Banner = () => {
  return (
    <div    className= '   flex justify-center items-center    '>
          <div   className='container min-h-[300px]   '>
            <div  style={{ backgroundColor: bannerData.bgColor }} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white  rounded-3xl '>
                {/* first col */}
                <div className='p-6 sm:p-8 '>
                     <p className='text-sm '>{bannerData.discount}</p>
                     <h1 className='uppercase text-4xl lg:text-7xl font-bold '>{bannerData.title}</h1>
                     <p>{bannerData.date}</p>
                </div>
                {/* second col */}
                <div className='h-full flex items-center '>
                    <img  className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover  ' src={headphone} alt="/" />
                </div>
                 {/* third col */}
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                     <p className='font-bold text-xl '>{bannerData.title2}</p>
                     <p className='text-3xl sm:text-5xl font-bold '>{bannerData.title3}</p>
                     <p className='text-sm trackng-wide leading-5'>{bannerData.title4}</p>
                    <div>
                        <button className='bg-white text-primary rounded-full py-2 px-4  '>Shop Now</button>
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Banner


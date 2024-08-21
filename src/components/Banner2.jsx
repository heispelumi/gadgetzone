import React from 'react'
import bannerwatch from '../assets/bannerwatch.png'

const banner2Data = {
    discount:'30% 0FF',
    title:'Happy Hours',
    date: '15 Jun to 29 Jun ',
    image: 'headphone',
    title2:'Air Solo Bass',
    title3:'Winter Sell',
    title4: ' Lorem ipsum dolor sit amet consectetur adipisicing voluptatibus sint excepturi hic est rerum! Earum!',
    bgColor: '#2dcc6f' 
};

const Banner2 = () => {
  return (
    <div    className= '   flex justify-center items-center    '>
          <div   className='container min-h-[300px]   '>
            <div  style={{ backgroundColor: banner2Data.bgColor }} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white  rounded-3xl '>
                {/* first col */}
                <div className='p-6 sm:p-8 '>
                     <p className='text-sm '>{banner2Data.discount}</p>
                     <h1 className='uppercase text-4xl lg:text-7xl font-bold '>{banner2Data.title}</h1>
                     <p>{banner2Data.date}</p>
                </div>
                {/* second col */}
                <div className='h-full flex items-center '>
                    <img  className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover  ' src={bannerwatch} alt="/" />
                </div>
                 {/* third col */}
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                     <p className='font-bold text-xl '>{banner2Data.title2}</p>
                     <p className='text-3xl sm:text-5xl font-bold '>{banner2Data.title3}</p>
                     <p className='text-sm trackng-wide leading-5'>{banner2Data.title4}</p>
                    <div>
                        <button className='bg-white text-brandGreen rounded-full py-2 px-4  '>Shop Now</button>
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Banner2


import React from 'react'
import Slider from 'react-slick'
import Image1 from '../assets/hero/vr.png'
import Image2 from '../assets/hero/headphone.png'
import Image3 from '../assets/hero/gaming.png'

const heroData =[
    {
        id: 1 ,
        img: Image1,
        Subtitle: 'Beats Solo',
        title: 'Wireless',
        title2: 'Virtual',
    
    },
    {
        id: 2 ,
        img: Image2,
        Subtitle: 'Beats Solo',
        title: 'Wireless',
        title2: 'HEADPHONES',
    
    },
    {
        id: 3 ,
        img: Image3,
        Subtitle: 'Beats Solo',
        title: 'Console',
        title2: 'GAMES',
    
    },
]

const Hero = () => {
    const settings = {
        dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : 8000,
    autoplaySpeed:4000,
    cssEase:'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
    }
  return (
    <div className='container sm:py-5    '>
         <div className='w-full  overflow-hidden sm:rounded-3xl hero-bg  flex justify-center items-center h-[700px]  max-h-[600px] sm:min-h-[650px]'>
            <div className='container '>
            <Slider {...settings}>
               {
                heroData.map((data)=>(
                    <div key={data.id}> 
                      <div className='grid grid-cols-1  sm:grid-cols-2'>
                        {/* text */}
                        <div className='flex flex-col space-y-2 pt-[80px] sm:space-y-3 md:pl-8   justify-center text-center sm:text-left sm:pt-0   '> 
                          <h1 className='text-2xl sm:text-2xl lg:text-xl md:text-xl'>{data.Subtitle}</h1>
                          <h2 className='text-3xl  md:text-6xl lg:text-5xl'>{data.title}</h2>
                          <h3 className='md:text-7xl lg:text-[120px] text-5xl font-bold text-white '>{data.title2}</h3>

                          <div>
                              <button className='text-white sm:text-[20px]  sm:flex px-5 py-3 text-[15px]  sm:py-3 hover:scale-105 duration-300 sm:px-8 rounded-xl bg-brandBlue'>
                                Shop Now
                              </button>
                          </div>
                       
                        </div>
                        {/* img */}
                        <div>
                            <div>
                                <img
                                className='w-[300px] h-[400px] sm:h-[500px] sm:w-[250px] sm:scale-105  lg:w-[400px] justify-center  object-contain mx-auto  '
                                 src={data.img}alt="/" />
                            </div>
                        </div>
                    
                      </div>
 
                    </div>
                ))
               }
            </Slider>
            </div>
         </div>
    </div>
  )
}

export default Hero

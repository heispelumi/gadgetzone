import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='pt-12'>
      <footer className='text-white  bg-primary '>
        <div className='container mx-auto max-w-[1200px] p-4'>
     {/* top footer */}
      <div className='grid py-5 md:grid-cols-3'>
      <div className='px-3 py-6'>
     <div className='space-y-2 '>

        <h1 className='text-brandBlue' >gadgetzone</h1>
          <p className='text-sm'>Lorem ipsum dolor sit  tempora!</p>
     </div>

          <br/>


          <div className='flex text-[15px] items-center gap-3 '>
          <FaLocationArrow />
          <p className='flex text-[15px] items-center gap-3 '>Lagos, Nigeria.</p>
          </div>
          <div className='flex items-center gap-3 mt-3 '>
          <FiPhoneCall />
          <p>+234 23465789</p>
          </div>
          </div>

          <div className='grid grid-cols-2 sm:grid sm:grid-cols-3 px-3 py-6 col-span-2 md:pl-[56px] '>
                 <div>
                  <h1 className='mb-3 text-justify text-[18px]  font-bold sm:text-left'>Important Links</h1>
                    <div className='flex flex-col text-[15px] space-y-2  md:space-y-4'>
                      <Link>Home</Link>
                      <Link>Shop</Link>
                      <Link>About</Link>
                   
                    </div>
                  </div>
                 <div>
                 <h1 className='mb-3 text-justify text-[18px] font-bold sm:text-left'>Userful  Links</h1>
                 <div className='flex flex-col  text-[15px] space-y-4'>
                 <Link>Privacy Policy</Link>
                  <Link>Services</Link>
                  <Link>About us</Link>
                   </div>
                 </div>
                 <div>
                 <h1 className='text-justify w-full  text-[18px] pt-4 sm:pt-0  font-bold sm:text-left'>Social Links</h1>
                 <p className='text-sm py-2'>Subscribe to our newsletter </p>
                 <input className='border rounded-full  outline-none w-full text-black px-4  py-2 ' type="text" placeholder='Enter your e-mail' />

            
                 </div>
          </div> 
      
      </div>



      {/* bottom footer */}
      <div >
      <p className= "border-t-2 border-gray-300/50 py-6 text-center">
              © 2024 All Rights Reserved
            </p>
      </div>
        </div>

      
      
      
 
       </footer>
    </div>
  )
}

export default Footer

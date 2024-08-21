import React from 'react'
import { FaCarSide, FaCheckCircle, FaWallet } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className='container w-full py-12 h-full mx-auto'>
        <div className='flex flex-row flex-wrap items-center justify-center space-x-4 lg:space-x-12'>
          <div className='flex items-center space-x-2'>
            <FaCarSide className='text-4xl text-primary lg:text-5xl' />
            <p className='text-base lg:text-2xl'>Free Shipping</p>
          </div>

          <div className='flex items-center space-x-2'>
            <FaCheckCircle className='text-4xl text-primary lg:text-5xl' />
            <p className='text-base lg:text-2xl'>Fast Response</p>
          </div>

          <div className='flex items-center py-2 space-x-2'>
            <FaWallet className='text-4xl text-primary lg:text-5xl' />
            <p className='text-base lg:text-2xl'>Secure Payment</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;

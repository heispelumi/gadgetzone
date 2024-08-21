import React, { useState, useEffect } from 'react';
import { MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {

    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [nav]);

  return (
    <div className='bg-white'>
      {/* Desktop View */}
      <div className='py-6'>
        <div className='container items-center flex px-4 justify-between'>
          {/* Brand Logo */}
          <div className='flex'>
            <h1 className='sm:mr-12 text-brandBlue flex items-center text-xl'>gadget<span>zone</span></h1>
          </div>

          {/* Menu Links */}
          <div className='items-center text-gray hidden text-gray-500 sm:flex space-x-4'>
            <Link>Home</Link>
            <Link>Shop</Link>
            <Link>Blogs</Link>
            <Link>About</Link>

            <div className='relative group'>
              <Link className='flex items-center mr-2'>Quick Links
                <span>
                  <IoMdArrowDropdown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </Link>
              {/* Dropdown */}
              <div className="absolute z-10 mt-2 hidden w-[200px] rounded-md bg-gray-100 shadow-md p-2 text-black group-hover:block">
                <Link className="block px-4 py-2 hover:text-white hover:bg-secondary/90">Trending Products</Link>
                <Link className="block px-4 py-2 hover:text-white hover:bg-secondary/90">Best Selling</Link>
                <Link className="block px-4 py-2 hover:text-white hover:bg-secondary/90">Top Rated</Link>
              </div>
            </div>
          </div>

          {/* Searchbar and Cart */}
          <div className='relative group hidden sm:flex space-x-3'>
            <div className='flex items-center'>
              <input type="text" placeholder='Search' className='searchbar' />
              <MdSearch className='text-gray-600 text-2xl' />
            </div>
            <button className='relative p-3'>
              <IoCart className='text-2xl' />
              <div className='w-4 h-4 bg-red-500 text-white z-10 rounded-full absolute top-1 right-1 flex items-center justify-center text-xs'>
                4
              </div>
            </button>
          </div>

          <div className='flex items-center sm:hidden'>
            <CiMenuFries onClick={() => setNav(!nav)} size={20} />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {nav ? <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10"></div> : null}

      {/* Side Navigation */}
      <div className={nav ? 'fixed top-0 px-8 py-4 left-0 h-screen w-[80%] bg-white flex flex-col z-10 duration-300' : 'fixed top-0 left-[-100%] p-6 w-[80%] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={() => setNav(!nav)} className='absolute top-4 right-4 cursor-pointer' size={25} />
        <h1 className='text-2xl mt-4'>gadget<span>zone</span></h1>

        <div className='pt-[80px]'>
          <div className='flex-grow'>
            <div className='flex flex-col'>
              <div className='flex items-center'>
                <IoHome size={20} className='flex mr-2' />
                <Link className='flex text-2xl mr-2 py-3'>Home</Link>
              </div>
              <div className='flex items-center'>
                <RiShoppingBag3Fill size={20} className='flex mr-2' />
                <Link className='flex text-2xl mr-2 py-3'>Shop</Link>
              </div>
              <div className='flex items-center'>
                <MdOutlinePostAdd size={20} className='flex mr-2 text-2xl' />
                <Link className='flex text-2xl mr-2 py-3'>Blogs</Link>
              </div>
              <div className='flex items-center border-b pt-2 pb-4 border-slate-600'>
                <IoCart size={20} className='flex mr-2 text-2xl' />
                <Link className='flex text-2xl mr-2 py-3'>Cart</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='relative group pt-12 w-full h-full flex-col'>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className='flex text-[20px] items-center'>
            Quick Links
            <span>
              <RiArrowDropDownLine size={30}
                className={`transition-all duration-200 ${dropdownOpen ? 'rotate-180 text-secondary/90 ' : ''}`}
              />
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute z-10 mt-2 w-[200px] p-2 text-black">
              <div className="flex items-center">
                <IoMdTrendingUp size={20} className="mr-3" />
                <Link className="block px-4 text-[15px] py-2">Trending Products</Link>
              </div>
              <div className='flex items-center'>
                <FaShippingFast size={20} className="mr-3" />
                <Link className="block px-4 py-2 text-[15px]">Best Selling</Link>
              </div>
              <div className='flex items-center'>
                <MdStarRate size={20} className="mr-3" />
                <Link className="block px-4 py-2 text-[15px]">Top Rated</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

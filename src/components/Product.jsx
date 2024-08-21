import React from 'react';
import Img1 from '../assets/products/p-1.jpg';
import Img2 from '../assets/products/p-2.jpg';
import Img3 from '../assets/products/p-3.jpg';
import Img4 from '../assets/products/p-4.jpg';
import Img5 from '../assets/products/p-5.jpg';
import Img7 from '../assets/products/p-7.jpg';
import Img9 from '../assets/products/p-9.jpg';


import ProductCard from './ProductCard';

const productData = [
  {
    id: 1,
    img: Img1,
    title: 'Boat',
    price: '120',
    aosDelay: '0',
  },
  {
    id: 2,
    img: Img2,
    title: 'Rocky ',
    price: '420',
    aosDelay: '200',
  },
  {
    id: 3,
    img: Img3,
    title: 'Googles',
    price: '420',
    aosDelay: '400',
  },
  {
    id: 4,
    img: Img4,
    title: 'Printed',
    price: '220',
    aosDelay: '600',
  },
  {
    id: 5,
    img: Img5,
    title: 'Printed',
    price: '220',
    aosDelay: '600',
  },

  {
    id: 7,
    img: Img7,
    title: 'Printed',
    price: '220',
    aosDelay: '600',
  },

  {
    id: 9,
    img: Img9,
    title: 'Printed',
    price: '220',
    aosDelay: '600',
  },
];

const Product = () => {
  return (
    <div>
      <div className="container  py-8 text-center lg:py-[100px]  mx-auto lg:space-y-6 ">
        <h1 className="text-3xl font-bold  lg:text-6xl">Our Products</h1>
        <p className="text-xm">Explore Our Products</p>

        <ProductCard data={productData} />
      </div>
    </div>
  );
};

export default Product;

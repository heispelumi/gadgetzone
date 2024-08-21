import React from 'react';

const ProductCard = ({ data }) => {
  return (
    <div className="py-8"> 
      <div className="grid grid-cols-1 space-y-2 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((product) => (
          <div className='group shadow-xl' key={product.id}>
            <div className="relative space-y-3">
              <img
                src={product.img}
                alt={product.title}
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* Button */}
              <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center hidden group-hover:flex group-hover:backdrop-blur-sm h-full justify-center items-center duration-200'>
                <button className='bg-brandBlue text-white px-4 py-2 rounded-full'>
                  Add to cart
                </button>
              </div>
            </div>

            <div className="leading-7">
              <h2 className="font-semibold">{product.title}</h2>
              <p className="font-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

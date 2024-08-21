
import React from "react";
import earphone from "../assets/Categories/earphone.png";
import watch from "../assets/Categories/watch.png";
import macbook from "../assets/Categories/macbook.png";
import speaker from "../assets/Categories/speaker.png";
import vr from "../assets/Categories/vr.png";
import gaming from '../assets/hero/gaming.png'

const Categories = () => {
  return (
    <div className="py-8   md:pl-[80px] lg:pl-[80px]">
      {/* Top Section */}
      <div className="container  flex sm:items-start items-center  justify-center sm:justify-normal">
        <div className="grid grid-cols-1  gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 lg:gap-x-8">
          
          {/* first column */}
          <div className="relative py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white w-full sm:w-[300px] rounded-3xl h-[300px]">
            <div className="md:py-8 md:px-2 space-y-4 lg:px-2">
              <div className="flex flex-col space-y-2 lg:py-[30px] px-[7px] leading-tight">
                <h1 className="text-[14px]">Enjoy</h1>
                <p className="text-[18px] font-bold leading-none">With</p>
                <p className="text-[35px] text-black/6 opacity-30 font-bold leading-none">
                  EARPHONES
                </p>
              </div>
              {/* button */}
              <div>
                <p className="bg-secondary text-center rounded-full px-4 py-2 w-[90px]">
                  Browse
                </p>
              </div>
            </div>
            {/* image */}
            <div>
              <img
                className="absolute h-full bottom-0 right-0 w-[200%]"
                src={earphone}
                alt="/"
              />
            </div>
          </div>

          {/* second column */}
          <div className="relative py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-black/60 text-white w-full sm:w-[300px] rounded-3xl h-[300px]">
            <div className="md:py-8 md:px-2 space-y-4 lg:px-2">
              <div className="flex flex-col space-y-2 lg:py-[30px] px-[7px] leading-tight">
                <h1 className="text-[14px]">Enjoy</h1>
                <p className="text-[18px] font-bold leading-none">With</p>
                <p className="text-[35px] text-brandYellow/6 opacity-30 font-bold leading-none">
                  WATCH
                </p>
              </div>
              {/* button */}
              <div>
                <p className="bg-brandYellow -white text-center rounded-full px-4 py-2 w-[90px]">
                  Browse
                </p>
              </div>
            </div>

            {/* image */}
            <div>
              <img
                className="absolute h-[200px] bottom-8 left-12 pl-4 w-[300px]"
                src={watch}
                alt="/"
              />
            </div>
          </div>

          {/* third column */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="relative py-10 pl-5 bg-gradient-to-br from-secondary/90 to-black/60 text-white w-full rounded-3xl h-[300px]">
              <div className="md:py-8 md:px-2 space-y-4 lg:px-2">
                <div className="flex flex-col space-y-2 lg:py-[30px] md:pt-[7px] leading-tight">
                  <h1 className="text-[14px]">Enjoy</h1>
                  <p className="text-[18px] font-bold leading-none">With</p>
                  <p className="text-[35px] text-primary/6 opacity-30 font-bold leading-none">
                    Games
                  </p>
                </div>
                {/* Button */}
                <div>
                  <p className="text-secondary bg-white text-center rounded-full px-4 py-2 w-[40%] sm:w-[20%]">
                    Browse
                  </p>
                </div>
              </div>
              {/* Image */}
              <div>
                <img
                  className="absolute w-[200px] bottom-0 left-24 md:w-[320px] lg:w-[300px] md:left-1/2 lg:top-0 lg:left-1/2"
                  src={macbook}
                  alt="/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Bottom Section */}
      <div className="container py-8 hidden md:hidden lg:flex flex sm:items-start items-center justify-center sm:justify-normal">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 lg:gap-x-8">
          
          {/* first column */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="relative py-10 pl-5 bg-gradient-to-br from-brandWhite/90 to-black/60 text-white w-full rounded-3xl h-[300px]">
              <div className="md:py-8 md:px-2 space-y-4 lg:px-2">
                <div className="flex flex-col space-y-2 lg:py-[30px] md:pt-[7px] leading-tight">
                  <h1 className="text-[14px]">Enjoy</h1>
                  <p className="text-[18px] font-bold leading-none">With</p>
                  <p className="text-[35px] text-primary/6 opacity-50 font-bold leading-none">
                    Laptops
                  </p>
                </div>
                {/* Button */}
                <div>
                  <p className="text-black bg-white text-center rounded-full px-4 py-2 w-[40%] sm:w-[20%]">
                    Browse
                  </p>
                </div>
              </div>
              {/* Image */}
              <div>
                <img
                  className="absolute w-[200px] bottom-0 left-24 md:w-[320px] lg:w-[250px] md:left-1/2 lg:top-8 lg:left-1/2"
                  src={gaming}
                  alt="/"
                />
              </div>
            </div>
          </div>

          {/* second column */}
          <div className="relative py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-black/70 text-white w-full sm:w-[300px] rounded-3xl h-[300px]">
            <div className="md:py-8 md:px-2 space-y-4 lg:px-2">
              <div className="flex flex-col space-y-2 lg:py-[30px] px-[7px] leading-tight">
                <h1 className="text-[14px]">Enjoy</h1>
                <p className="text-[18px] font-bold leading-none">With</p>
                <p className="text-[35px] text-black/6 opacity-30 font-bold leading-none">
                  Speaker
                </p>
              </div>
              {/* button */}
              <div>
                <p className="bg-brandBlue text-center rounded-full px-4 py-2 w-[90px]">
                  Browse
                </p>
              </div>
            </div>
            {/* image */}
            <div>
              <img
                className="absolute h-[200px] bottom-0 left-12 pl-4 w-[300px]"
                src={speaker}
                alt="/"
              />
            </div>
          </div>

          {/* third column */}
          <div className="relative py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-black/60 text-white w-full sm:w-[300px] rounded-3xl h-[300px]">
            <div className="md:py-8 md:px-2 space-y-4 lg:px-2">
              <div className="flex flex-col space-y-2 lg:py-[30px] px-[7px] leading-tight">
                <h1 className="text-[14px]">Enjoy</h1>
                <p className="text-[18px] font-bold leading-none">With</p>
                <p className="text-[35px] text-brandYellow/6 z-10 opacity-30 font-bold leading-none">
                Vr
                </p>
              </div>
              {/* button */}
              <div>
                <p className="text-brandGreen bg-white text-center rounded-full px-4 py-2 w-[90px]">
                  Browse
                </p>
              </div>
            </div>

            {/* image */}
            <div>
              <img
                className="absolute h-[200px] bottom-8 left-4 pl-4 w-[300px] "
                src={vr}
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;


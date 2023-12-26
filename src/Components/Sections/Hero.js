import React, { useState } from "react";
import Button from "./Button";
import arrowright from "../icons/arrow-right.svg";
import ShoeCard from "./ShoeCard";
import { statistics , shoes } from "../Constant/Index";
import { bigShoe1 } from "../images";
const Hero = () => {
  const [ bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen     gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
          <p className="text-red-500 text-xl font-montserrat">
            Our Summer Collection
          </p>
          <h1 className="text-black  mt-10 font-palan-quin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrivals</span>
            <br />
            <span className="text-red-600 inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-500 sm:max-w-sm text-lg leading-8 mt-6 mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, vel est dolores nemo fuga quasi!
          </p>
          <Button label="ShopNow" iconUrl={arrowright} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex  justify-center items-center xl:min-h-screen max-xl:py-40 bg-gray-200 bg-hero bg-cover bg-center">
          <img src={bigShoeImg} alt="shoes collection" 
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
     <div className="flex absolute sm:gap-6 gap-4 sm:left-[10%] -bottom-[5%] max-sm:px-6:">
        {
          shoes.map((shoe)=>(
            <div key={shoe}>
           <ShoeCard
            imgURL={shoe}
            changBigShoeImage={(shoe) => setbigShoeImg(shoe)}
            bigShoeImg={bigShoeImg}
            
           />
           
            </div>
          
          ))}
         
        </div>

        </div>

      </section>
    </>
  );
};

export default Hero;

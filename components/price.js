"use client";




const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex p-4 items-start gap-3 sm:gap-10 lg:w-[90%]">
      
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
        <button className="bg-black1 p-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>

      </div>

        

    </div>
  );
};

const NiyuPrice = () => {
  return (
    <section className="bg-yellow ">
      <div className="flex gap-10 items-center">
       
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          
          <ServiceCard
          
            title="REGULAR BASIC CLEANING"
            desc="From
            €
            26.90
            /h"
          />
          <ServiceCard
            title="BASIC CLEANING"
            desc="From
            €
            30.90
            /h"
          />

<ServiceCard
            title="DEEP CLEANING"
            desc="From
            €
            36.90
            /h"
          />
        </div>

        <div className="relative w-full flex-1">
          <img
            src='/assets/svg/broom1.svg'
            width="60px"
            height="60px"
            alt="video banner"
            className="object-cover w-[300px]"
          />
          
        </div>
      </div>
    </section>
  );
};

export default NiyuPrice;

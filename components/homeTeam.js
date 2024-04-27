import React from "react";




const TeamCard = ({ imgSrc, name, title }) => {
    return (
      <div className=" relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
        <img
          src={imgSrc}
        
          style={{width: '150px', height: '150px'}}
          alt="team member"
          className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-yellow mx-auto"
        />
        <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
        <p className="text-center sm:text-base text-sm">{title}</p>
  
      </div>
    );
  };
  
  const HomeTeam = () => {
    return (
      <section className="container mx-auto px-5 md:px-16 lg:px-24 mt-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center lg:text-center mt-4">
         Lawrencegebäudereinigung Team
        </h2>
  
        <div className="mx-auto md:grid grid-cols-2 lg:grid-cols-3 md:gap-y-8 sm:gap-10 mt-16">
          <TeamCard
            imgSrc='/assets/team/team8.jpeg'
            
          />
          <TeamCard imgSrc='/assets/team/team9.jpeg' />
          <TeamCard
            imgSrc='/assets/team/team10.jpeg'
            
          />

       
         
         
        </div>
      </section>
    );
  };
  
  export default HomeTeam;
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
  
  const Team = () => {
    return (
      <section className="container mx-auto px-5 md:px-16 lg:px-24 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-center mt-4">
        OUR TEAM
        </h2>
  
        <div className="mx-auto md:grid grid-cols-2 lg:grid-cols-3 md:gap-y-8 sm:gap-10 mt-16">
          <TeamCard
            imgSrc='/assets/team/team7.jpeg'
            name="Fabian Lawrence"
            title="CEO and Founder"
          />
          <TeamCard imgSrc='/assets/team/team10.jpeg' name="Ruth Fabian" title="MD" />
          <TeamCard
            imgSrc='/assets/team/paul.jpeg'
            name="Peter Paul"
            title="Manager"
          />

          <TeamCard
            imgSrc='/assets/team/team51.jpeg'
            name="Queeneeth ibeabuchi"
            title="Secretary"
          />

          

<TeamCard
            imgSrc='/assets/team/team14.jpeg'
            name="Simon Godsfavour Chiamaka"
            title="Content analyst"
          />
         
         
        </div>
      </section>
    );
  };
  
  export default Team;
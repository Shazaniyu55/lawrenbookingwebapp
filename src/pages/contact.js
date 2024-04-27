import React from 'react';
import Layouts from '../../components/layout';
import AdainNavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { useState } from 'react';
import ScrollTop from '../../components/top';


// components for new card
const NewCard = ({ imgSrc, title, desc }) => {
  return (
      <div className="flex items-start">
        

      <img
        src={imgSrc}
        width="60px"
        height="60px"
        alt="features"
        className="mx-auto"
      />

          <div className='flex-1'>
        <h3 className="text-lg text-white font-semibold mb-2">{title}</h3>
        <p className="leading-loose tracking-tighter leading-normal text-white">{desc}</p>
      </div>
      
    </div>
  );
};


// component for frquently asked questions
const Faq = ({question1, answer1, question2, answer2, question3, answer3}) => {
  return (
    <section
    className="bg-yellow p-10"
  >
    
    
    <div className="md:w-3/4 ">
    
    <h1 className='line-clamp-2 text-2xl md:text-2xl font-bold text-center lg:text-center mt-4'>Frequently asked questions</h1>

    <p className='text-center mt-10 text-2xl font-bold'>General Info</p>

    
      <details
        className="border mt-10 border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300 "
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >{question1}
          <div
            className="absolute top-0 right-0 bg-blue rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
          >
            <svg
              class="h-5 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </summary>
        <p className="text-xs pt-3">
          {answer1}
         
        </p>
      </details>


      <details
        className="border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >{question2}
          <div
            className="absolute top-0 right-0 bg-blue rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
          >
            <svg
              class="h-5 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </summary>
        <p className="text-xs pt-3">
          {answer2}
          
        </p>
      </details>


      <details
        className="border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >{question3}
          <div
            className="absolute top-0 right-0 bg-blue rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
          >
            <svg
              class="h-5 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </summary>
        <p className="text-xs pt-3">
          {answer3}
        
        </p>
      </details>
      
      
    </div>
  </section>
  );
};



// components for grid card
const Card = ({ imgSrc, name, }) => {
    return (
      <div className=" relative flex flex-col gap-1 rounded-xl md:py-10 team-card md:cursor-pointer">
        <img
          src={imgSrc}
        
          style={{width: '150px', height: '150px'}}
          alt="team member"
          className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-yellow mx-auto"
        />
        <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
  
      </div>
    );
  };



function Contact(){


  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const endpoint = '/api/message'; // Update the endpoint URL

      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("ok") // Reset the form state
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };

    return(
       <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
        
     

        <section className="container mx-auto px-16 lg:px-32  bg-white">
        <h1 className="text-3xl md:text-4xl mt-20 text-black1 p-10 font-bold text-center lg:text-center">We usually reply within 3 hours</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto m-10">
          <Card imgSrc='/assets/team/team10.jpeg' />
          <Card imgSrc='/assets/team/team12.jpeg' />
          <Card imgSrc='/assets/team/team13.jpeg' />

         
        </div>

        
      </section>

      <div className='flex justify-center items-center p-10'>
      <form onSubmit={handleSubmit}  method='post' className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md" action='http://localhost:2300/send-email'>

      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-600">
          City/Location
        </label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

    

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md"
          required
        ></textarea>
      </div>

      <div className="flex items-center justify-end">
        <button
          type="submit"
          
          className="bg-yellow text-black p-2 rounded-md hover:bg-adainyellow"
        >
          Submit
        </button>
      </div>
    </form>

      </div>

      {/* section for */}
        <section className="bg-black1 ">
            <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
            <div className="flex gap-5 md:gap-10 flex-col">
                <div className="flex flex-col gap-4 ">
      
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
                   English-speaking customer support 7 days/week
                  </h2>
                </div>
                <h2 className="text-3xl md:text-2xl font-bold text-white text-center lg:text-left">
                Always ready to help
                  </h2>
                <NewCard
                  imgSrc='/assets/svg/phone.svg'
                  title="VIA PHONE"
                  desc="Get in contact with us via phone by calling +49 30 588 494 40 where are always available by 8 am - 6 pm (Monday - Sunday)"
                />
                <NewCard
                  imgSrc='/assets/svg/email.svg'
                  title="VIA EMAIL"
                  desc="Get in contact with us via email by sending a mail to info@spicandspan.de where are always available 24/7 (every day)"
                />

                <NewCard
                  imgSrc='/assets/svg/chat.svg'
                  title="VIA CHAT"
                  desc="You can also reach us by Chat on our website 8 am - 6 pm (Monday - Sunday)"
                />
              </div>

             
             
            </div>
          </section>
    

    

      <Faq 
      question1="How does the 100% satisfaction guarantee work?" 
      answer1="After the cleaning service, you have 24 hours to check whether you like the results. If you're not satisfied, please contact our customer support via email or phone, and tell us about what went wrong. You may request a free 'correction cleaning' (with the same, or different cleaning lady depending on your preference). You may also be eligible for a discount on future cleanings, as well as a partial or 100% refund."
      question2="Is every cleaner a female?"
      answer2="No! Cleaning lady is a term people commonly use when searching for a cleaning person online. Both male and female cleaners use our marketplace to deliver high-quality cleaning services. We're not trying to promote outdated gender stereotypes."

      question3="What if I need to cancel the cleaning?"
      answer3="To cancel your booking, simply contact our customer support via email or phone specifying the appointment details (appointment date and your name/email address are enough). We'll confirm your cancellation via email. If your cancellation is made no later than 48 hours before the original cleaning date, you'll receive 100% of your deposit back."
      />

    
      <ScrollTop/>
       </Layouts>

    
        
    );
}


export default Contact;
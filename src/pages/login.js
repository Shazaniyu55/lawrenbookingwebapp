import React from "react";
import Layouts from "../../components/layout";
import {Alert} from 'flowbite-react'
import { useState } from "react";
import AdainNavBar from "../../components/navbar";
import Footer from "../../components/footer";


function Login(){

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
        <>
        <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
        <div className="relative container  p-10 mt-10">
       <div className="bg-yellow p-10 px-5 md:px-16 mx-auto m-10 rounded-2xl">

        <div className="flex justify-center items-center">
            <img src='/assets/svg/broom1.svg' alt="broom" width="60px" height="60px"/>

            

        </div>

        <Alert typeof="danger" className=" bg-gray-200">
            If you previously booked cleaning services with us, you will receive a unique log-in link to your account. There are no passwords to set or remember.
          </Alert>
            
           
    <form onSubmit={handleSubmit}  method='post' className='mt-12 flex flex-col gap-8'>
        
          <label className='flex flex-col'>
            <input
              type='email'
              id='email'
             onChange={handleChange}
              placeholder="Email address"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
         

           <button
            type='submit'
            className='bg-black py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary'
          >
            Get login link 
          </button>

        


        </form>

            </div>
        </div>
        </Layouts>
        </>
    );
}

export default Login;
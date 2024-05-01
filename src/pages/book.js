import React from "react";
import Layouts from "../../components/layout";
import AdainNavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

function Book(){

  const [selectedOption, setSelectedOption] = useState('one-time');
  const [price, setPrice] = useState(50);
  const [counter , setCounter] =useState(1)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });


  const updatePrice = (option) => {
    let newPrice = 0;
    switch(option) {
      case 'one-time':
        newPrice = 50; // Sample price for one-time cleaning
        break;
      case 'basic':
        newPrice = 100; // Sample price for basic cleaning
        break;
      case 'regular':
        newPrice = 150; // Sample price for regular cleaning
        break;
      default:
        newPrice = 0;
    }
    setPrice(newPrice);
    setSelectedOption(option);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic for form submission (e.g., sending data to server)
  }

  const increment = ()=>{
    if (counter == 5) {
        setCounter(counter )
    }else{
      var arith = price + counter
        setCounter(counter + 1)
        setPrice(arith)
        
    }
    
  }



        return(
            <>
            <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
                    
            <div className="md:grid grid-cols-2 gap-10 mt-20">
            <div className="md:container  bg-yellow m-10 p-4 rounded-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">BOOK A CLEANING</h1>

                <div className="flex justify-center items-center">
                    <img src="/broom1.png" width="50px" height="50px" alt="logo"/>
                </div>

                <div className="flex justify-center items-center">
                <span className="text-center">Lawrencegebäudereinigung</span>

                </div>



                <div className="flex justify-center mt-10 items-center">
                <span className="text-center">Packages</span>

                </div>


           <div className="md:grid gap-8 md:grid-cols-3">


        <div className="flex items-center mb-2 mt-10">

            <div className="relative container  flex flex-col gap-5 bg-white p-8 rounded-lg">
            <input
                        type="radio"
                        value="one-time"
                        checked={selectedOption === 'one-time'}
                        onChange={() => updatePrice('one-time')}
                        className="mr-2"
                    />
                    <label htmlFor="one-time">One-time Cleaning</label>



                    <p>
                        On-demand cleaning service<br/>
                        <span>PRICE PER CLEANER</span>
                    </p>

            </div>
                
                    
            </div>


        <div className="flex items-center mb-2 mt-10">
        <div className="relative container md:w-[400px]  flex flex-col gap-5  bg-white p-8 rounded-lg">

          <input
            type="radio"
            value="basic"
            checked={selectedOption === 'basic'}
            onChange={() => updatePrice('basic')}
            className="mr-2"
          />
          <label htmlFor="basic">Basic Cleaning</label>

          <p>
            On-demand cleaning service<br/>
            <span>PRICE PER CLEANER</span>
          </p>

          </div>

         
        </div>




        <div className="flex items-center mb-2 mt-10">
        <div className="relative container md:w-[400px]  flex flex-col gap-5  bg-white p-8 rounded-lg">

          <input
            type="radio"
            value="regular"
            checked={selectedOption === 'regular'}
            onChange={() => updatePrice('regular')}
            className="mr-2"
          />
          <label htmlFor="regular">Regular Cleaning</label>

          <p>
            On-demand cleaning service<br/>
            <span>PRICE PER CLEANER</span>
          </p>
        </div>

        </div>

        {/* selecting number of cleaners */}

        <div className="md:grid gap-8 grid-row-2">

        <span>Select number of cleaners 1X</span>

        <div className="flex items-center gap-4">
                                <button
                                    className="group rounded-md w-20 border border-black shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-yellow hover:bg-yellow hover:border-yellow focus-within:outline-gray-300">
                                      

                                      +


                                </button>
                               
                                <button
                                    className="group rounded-md w-20 border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                   -
                                </button>
                            </div>

          </div>


          {/* calender and time div */}
          <div>

            {/* <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  /> */}

            

          </div>


                   
                    
        </div>

          {/* check out form */}
        <div className="mt-10">
        <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Email
      </label>
      <div className="relative">
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="Email"/>

       
      </div>
    </div>
   


  </div>

  
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Phone Number
      </label>
      <PhoneInput
            inputStyle={{width: '100%'}}
            country={'ng'}
          />
    </div>
</form>
        </div>

            

          <div className="flex justify-center m-4 p-4 items-center">
          <button  className="bg-black py-3 px-8 rounded-md outline-none w-40 text-white">Book Cleaning</button>


          </div>




            </div>


            <div className="md:container  bg-yellow m-10 p-4 rounded-md  ">
            <div className="md:grid md:grid-cols-2 ">

                {/* packages */}
                <div>
                    <p>Package</p>
                    <p>Cleaners</p>
                    <p>Price</p>
                </div>

                {/* result */}
                <div>
                    <p>{selectedOption}</p>
                    <p className="text-lg">{counter}</p>

                    <p className="text-lg">${price}</p>

                </div>
            
            </div>

            </div>
        </div>

            </Layouts>
            
            
            </>
          
        );
}

export default Book;
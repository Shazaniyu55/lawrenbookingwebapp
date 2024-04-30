import React from "react";
import Layouts from "../../components/layout";
import AdainNavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { useState } from "react";

function Book(){

  const [selectedOption, setSelectedOption] = useState('one-time');
  const [price, setPrice] = useState(0);
  const [cleaners , setCleaners] =useState(1)
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



        return(
            <>
            <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
                    
            <div className="grid md:grid-cols-2 gap-10 mt-20 ">
            <div className="md:container  bg-yellow m-10 p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">BOOK A CLEANING</h1>

                <div className="flex justify-center items-center">
                    <img src="/broom1.png" width="50px" height="50px" alt="logo"/>
                </div>

                <div className="flex justify-center items-center">
                <span className="text-center">Lawrencegebäudereinigung</span>
                </div>



           <div className="md:grid md:grid-cols-3">


        <div className="flex items-center mb-2 mt-10">
                <input
                        type="radio"
                        value="one-time"
                        checked={selectedOption === 'one-time'}
                        onChange={() => updatePrice('one-time')}
                        className="mr-2"
                    />
                    <label htmlFor="one-time">One-time Cleaning</label>
                    </div>


            <div className="flex items-center mb-2 mt-10">
          <input
            type="radio"
            value="basic"
            checked={selectedOption === 'basic'}
            onChange={() => updatePrice('basic')}
            className="mr-2"
          />
          <label htmlFor="basic">Basic Cleaning</label>
        </div>




        <div className="flex items-center mb-2 mt-10">
          <input
            type="radio"
            value="regular"
            checked={selectedOption === 'regular'}
            onChange={() => updatePrice('regular')}
            className="mr-2"
          />
          <label htmlFor="regular">Regular Cleaning</label>
        </div>




                   
                    
                </div>




            </div>


            <div className="md:container  bg-yellow m-10 p-4">
            <div className="md:grid md:grid-cols-2">

                {/* packages */}
                <div>
                    <p>Package</p>
                    <p>Cleaners</p>
                    <p>Price</p>
                </div>

                {/* result */}
                <div>
                    <p>{selectedOption}</p>
                    <p className="text-lg">{cleaners}</p>

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
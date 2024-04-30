import React from "react";
import Layouts from "../../components/layout";
import AdainNavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { useState } from "react";

function Book(){

    const [selectedOption, setSelectedOption] = useState('Onetime')
    const handleOptionChange = (option) => {
        setSelectedOption(option);
      };


        return(
            <>
            <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
            
            <div className="tw-bg-gray-10 tw-grow tw-flex">
            <div className="mt-20 tw-flex tw-flex-col tw-items-center tw-flex-1 tw-z-10 tw-px-4 xl:tw-px-8 tw-py-8">
            <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-mb-12">
            <h1 className="tw-uppercase tw-text-black1 tw-text-3xl tw-mb-12">BOOK A CLEANING</h1>

            <img className="tw-mb-3" src="/broom1.png" width={50} height={50} alt="logo"/>

                




            </div>

        </div>
        </div>

            </Layouts>
            
            
            </>
          
        );
}

export default Book;
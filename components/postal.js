import React, { useState } from "react";
import { postcodeValidator } from "postcode-validator";

const Getpostal = () => {
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setPostalCode(event.target.value);
  };

  const navigateToCheckout = () => {
    setLoading(true);

    try {
      // Check if the postal code is valid for the specified country code
      const isValidPostalCode = postcodeValidator(postalCode, "DE"); // Assuming DE for Germany
      if (isValidPostalCode) {
        window.location.href = "/about";
      } else {
        
        alert(`${postalCode} Invalid postal code`);
      }
    } catch (error) {
      console.error("Error checking postal code:", error);
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-5 md:px-16 p-10 sm:w-[800px]">
      <div className="bg-blue rounded-lg text-white py-16 sm:py-24">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:w-4/5 lg:w-1/2 text-center mx-auto">
          <p className="leading-loose font-[500]">
            Enter your postal code to get started:
          </p>

          <div className="relative sm:w-full">
            <input
              type="text"
              placeholder="Enter your postal code"
              value={postalCode}
              onChange={handleInputChange}
              className="rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none md:w-full font-[500] text-black"
            />
            <button
              onClick={navigateToCheckout}
              className="md:w-fit w-full mt-2 md:mt-0 capitalize sm:absolute sm:top-2 md:top-[.4rem] sm:right-2 md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-4 px-7 text-white bg-yellow hover:border-green-600 hover:bg-green-700 sm:hover:bg-green-600 hover:shadow-2xl hover:shadow-black-600 rounded-full"
              disabled={loading || !postalCode.trim()}
            >
              {loading ? "Checking..." : "Book now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getpostal;

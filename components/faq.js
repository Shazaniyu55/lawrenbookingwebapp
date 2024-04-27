import React, { useState } from 'react';



const Faq = () => {
  return (
    <section
    className="bg-white p-10 mt-20 md:w-4/5 md:px-10 md:pb-8 md:pt-10 rounded-lg md:flex justify-between flex-row"
  >
    
    <div className="w-full md:w-2/6">
      <p className="text-3xl md:text-4xl font-bold text-center lg:text-center mt-4">
      Frequently asked questions
      </p>
    </div>
    <div className="md:w-3/4">
    
      <details
        className="border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >Do I have to be at home during the cleaning service?
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
        It is completely up to you. Some customers enjoy the opportunity to have some time for themselves out in the city while their apartment <br/>is being cleaned. Others like to be around to have a chance to give the cleaning lady directions when needed. The only thing you need<br/> to make sure is that your cleaner has a way to access your home.
          
        </p>
      </details>


      <details
        className="border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >Will the cleaning lady bring the cleaning solvents & equipment with her/him?
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
        If you would like your cleaner to bring cleaning solvents, mop, and vacuum cleaner with him/her, you need to specify that option in the booking form. If you forget to do it while booking, simply contact our customer support via email, phone, or chat, and we'll add it to your booking.
        </p>
      </details>


      <details
        className="border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >How can I pay for the cleaning?
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
        When you book a cleaning service on our platform, your initial deposit for the first hour secures your booking. This process seamlessly pre-arranges the method for completing your payment after service delivery. We emphasize that cash payments are not an option to maintain simplicity and security in transactions.

        Following the completion of your cleaning service, you'll receive an email with a summary of the service provided. To facilitate a smooth transaction, the balance will be settled using the payment method you initially provided, automatically, 48 hours after the summary email is sent. This setup is part of our effort to ensure a hassle-free experience for you.

        If you prefer to settle the balance sooner or wish to use a different payment method for the final payment, you can easily do so by accessing the payment link in your service summary email. Additionally, you have full control over your payment methods through your dashboard, where you can update, add, or remove payment options at any time.
        </p>
      </details>


      <details
        className="border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >Can I pay via bank transfer?
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
        Yes, you can pay for your cleaning service via bank transfer upon request. However, it's important to understand that some cleaning providers require a pre-authorized online payment method to secure your booking. In other words, we may not be able to match you with a cleaning service provider unless you pre-authorize a payment method. This requirement helps ensure trust between you and the cleaning provider, as it assures them that payment will be made post-service.

        To initiate a bank transfer payment or if you have any questions about using this method, please contact our customer support team. We are here to assist you through the process and provide you with all the necessary details to complete your transaction smoothly.

        Remember, your dashboard allows you to manage and update your preferred payment methods at any time, ensuring flexibility and convenience in your payment process.
        </p>
      </details>




      <details
        className="border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none font-semibold md:relative text-sm cursor-pointer pr-7"
          >What if I need to cancel the cleaning?
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
        To cancel your booking, simply contact our customer support via email or phone specifying the appointment details (appointment date and your name/email address are enough). We'll confirm your cancellation via email. If your cancellation is made no later than 48 hours before the original cleaning date, you'll receive 100% of your deposit back.
        </p>
      </details>


      
      
      
    </div>
  </section>
  );
};

export default Faq;

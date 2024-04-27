import React from "react";


function Table(){
    return(
    
        <div className="relative overflow-x-auto shadow-md">
    <table className="w-full text-sm text-left rtl:text-right text-black1 ">
        <thead className="text-xs text-white uppercase bg-black1 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    THE BASIC
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white  even:bg-gray border-b hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap">
                   Frequency
                </th>
                <td className="px-6 py-4">
                every 1, 2, 3 or 4 weeks1
                </td>
                <td className="px-6 py-4">
                Just once / on-demand
                </td>
                <td className="px-6 py-4">
                Just once / on-demand
                </td>
                
            </tr>
            <tr className="odd:bg-white hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap">
                Minimum Duration
                </th>
                <td className="px-6 py-4">
                2 hours
                </td>
                <td className="px-6 py-4">

                2 hours
                </td>
                <td className="px-6 py-4">
                2 hours
                </td>
                
            </tr>


            <tr className="odd:bg-white hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap">
                English-Speaking Cleaner
                </th>
                <td className="px-6 py-4">
                                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                
            </tr>

            <tr className="odd:bg-white hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap">
                Last-Minute Service
                </th>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                <td className="px-6 py-4">
                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                
            </tr>



            <tr className="odd:bg-white hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap">
                Subscribe & Save
                </th>
                <td className="px-6 py-4">
                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
                
                </td>
                
            </tr>
            
           
        </tbody>
    </table>


{/* table 2 */}


<table className="w-full text-sm text-left rtl:text-right text-black1 ">
        <thead className="text-xs text-white uppercase bg-black1 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Equipment
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white  even:bg-gray border-b hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap">
                   Frequency
                </th>
                <td className="md:px-6 md:py-4">
                There are no extra charges if you have the below equipment tems at home.
                </td>
                
                
            </tr>
            <tr className="odd:bg-white hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap">
                Minimum Duration
                </th>
                <td className="px-6 py-4">
                2 hours
                </td>
                <td className="px-6 py-4">

                2 hours
                </td>
                <td className="px-6 py-4">
                2 hours
                </td>
                
            </tr>


            <tr className="odd:bg-white hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap">
                English-Speaking Cleaner
                </th>
                <td className="px-6 py-4">
                                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                
            </tr>

            <tr className="odd:bg-white hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap ">
                Last-Minute Service
                </th>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                <td className="px-6 py-4">
                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                
            </tr>



            <tr className="odd:bg-white hover:bg-yellow">
                <th scope="row" className="px-6 py-4 font-medium text-black1 whitespace-nowrap ">
                Subscribe & Save
                </th>
                <td className="px-6 py-4">
                <img src='/assets/svg/check2.svg' width="20px" height="20px" alt="check"/>

                </td>
                <td className="px-6 py-4">
                
                </td>
                <td className="px-6 py-4">
                
                </td>
                
            </tr>
            
           
        </tbody>
    </table>
</div>

    );
}

export default Table;
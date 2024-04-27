
import Table from "../../components/pricetable";
import Layouts from "../../components/layout";
import AdainNavBar from "../../components/navbar";
import Footer from "../../components/footer";
import NiyuPrice from "../../components/price";

function Price(){
        return(
                <Layouts showNavbar={AdainNavBar} showFooter={Footer}>
               <section className="container mx-auto p-10 mt-28 px-16 lg:px-32 bg-white">
                <h1 className="text-3xl md:text-4xl text-black p-10 font-bold text-center lg:text-center mt-4">How much is the home cleaning service?</h1>
                <p className="m-4 tracking-tighter leading-normal">
                You can book a regular home cleaning service starting at €26.90/h. This price is reserved for customers deciding to have their apartment cleaned on at least monthly basis. If you''re interested in a one-time cleaning service, compare the options below, and see which one is the best fit for you.
                </p>
                </section>

               
                <NiyuPrice/>

                <Table/>

                </Layouts>
        );
}

export default Price;
import Image from "next/image";
import About from "@/components/About";
import React from "react";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10 dark:bg-black text-white">
      <Header />
      
          {/* heading font design scheme for the website */}
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Untangle your
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Musical Strings
            </span></h1>


      <About />

            {/* heading font design scheme for the website */}
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Melodious Symphony,
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Our Services!
            </span></h1>

      <Services />

           {/* heading font design scheme for the website */}
           <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> What our
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Happy Customers
                </span> say</h1>


      <Testimonials />
      <Footer/>

    </div>
  );
}

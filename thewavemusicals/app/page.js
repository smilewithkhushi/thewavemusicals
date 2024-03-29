import Image from "next/image";
import About from "@/components/About";
import React from "react";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Branding from "@/components/Branding";
import Gallery from "@/components/Gallery";
import Link from "next/link";
import { Navbar } from 'flowbite-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-10 bg-black text-white ">

      <Header />
      <About />
      <Gallery />
      <Services />
      <Branding/>
      <Testimonials />
      <Footer />

    </div>
  );
}

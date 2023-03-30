import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import PagesNavbar from "@/components/PagesNavbar";
import React from "react";

const About = () => {
  return (
    <>
      <PagesNavbar />
      <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-center text-4xl font-bold">About Us</h1>
      </div>
      <Footer />
    </>
  );
};

export default About;

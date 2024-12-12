import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import FeatureSection from "./component/FeatureSection";
import Workflow from "./component/Workflow";
import Price from "./component/Price";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mx-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;

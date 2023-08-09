import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Banner from "../components/HomeComponents/Banner";
import Help from "../components/HomeComponents/Help";
import PracticeArea from "../components/HomeComponents/PracticeArea";
import LawyerSection from "../components/HomeComponents/LawyerSection";
import ClientReviewSection from "../components/HomeComponents/ClientReviewSection";
import AppointmentSection from "../components/HomeComponents/AppointmentSection";
import BlogSection from "../components/HomeComponents/BlogSection";
const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        {/* help */}
        <Help />
        {/* practice area: m */}
        <PracticeArea />
        {/* lawyer Section: m */}
        <LawyerSection />
        {/* Client Review Section: m */}
        <ClientReviewSection />
        {/* appointment section */}
        <AppointmentSection />
        {/* blog Section: m */}
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
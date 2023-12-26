import React from "react";
import AppointmentSection from "./AppointmentSection";
import { IoMdLock } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { BsHeartFill } from "react-icons/bs";
import { GiSwordsEmblem } from "react-icons/gi";
const AboutUsSection = () => {
  return (
    <section >
      <div className="text-white bg-[#161D27] py-10">
      <div className="flex flex-col  justify-center items-center gap-5 lg:justify-between px-5 py-10 max-w-[1300px] mx-auto w-full">
        <h1 className="font-titleFont text-5xl font-bold">
          What We Offering Our Values
        </h1>
        <p className="font-titleFont text-lg flex text-center justify-end w-1/2">
          Our seasoned team of attorneys is dedicated to providing clear
          communication, collaborative partnerships, and innovative legal
          solutions. We believe in accessibility, community engagement, and the
          power of diversity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card bg-[#1F2732] shadow-xl rounded-md">
            <div className="card-body">
            <div className="flex justify-between items-center card-actions mt-10">
                <GoLaw className="text-4xl font-bold text-[#D1B06B]" />
              </div>
              <h2 className="card-title">Direct Way Of Justice</h2>
              <p>
              Ensuring a swift and direct path to justice, we navigate legal complexities with efficiency and determination. Our commitment is to provide you with straightforward and effective solutions, streamlining the legal process for your peace of mind.
              </p>
            </div>
          </div>
          <div className="card bg-[#1F2732] shadow-xl rounded-md">
            <div className="card-body">
            <div className="flex justify-between items-center card-actions mt-10">
                <IoMdLock className="text-4xl font-bold text-[#D1B06B]" />
              </div>
              <h2 className="card-title">Protecting Your Business</h2>
              <p>
              Safeguarding your business interests is our priority. From legal counsel on corporate matters to navigating complex regulations, we offer comprehensive solutions tailored to protect your business. Trust us to be your legal partners in securing the future of your enterprise.
              </p>
            </div>
          </div>
          <div className="card bg-[#1F2732] shadow-xl rounded-md">
            <div className="card-body">
            <div className="flex justify-between items-center card-actions mt-10">
                <BsHeartFill className="text-4xl font-bold text-[#D1B06B]" />
              </div>
              <h2 className="card-title">Relationship Based On Trust</h2>
              <p>
              At the core of our practice is a relationship built on trust. We value the confidence you place in us and strive to foster open communication, transparency, and reliability. Your trust forms the foundation of our client-attorney relationship.
              </p>
            </div>
          </div>
          <div className="card bg-[#1F2732] shadow-xl rounded-md">
            <div className="card-body">
            <div className="flex justify-between items-center card-actions mt-10">
                <GiSwordsEmblem className="text-4xl font-bold text-[#D1B06B]" />
              </div>
              <h2 className="card-title">Fight For Justice</h2>
              <p>
              Advocating for justice is our unwavering commitment. Whether in civil disputes or criminal cases, we stand by your side, fighting tirelessly to ensure fair and just outcomes. Trust us to be your dedicated allies in the pursuit of justice.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-[#eaebec]">
      <AppointmentSection />
      </div>
    </section>
  );
};
export default AboutUsSection;

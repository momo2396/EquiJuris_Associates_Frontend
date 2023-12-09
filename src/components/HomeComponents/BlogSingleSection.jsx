import React from "react";
import blog1 from "../../assets/other_images/Lawyer-writing.jpg";
const BlogSingleSection = () => {
    return (
      <section className="bg-[#1F2732] py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-center items-center gap-5 w-full">
          <img className="md:w-1/2" src={blog1} alt="" />
          <div className="md:w-1/2">
            <p className="text-[#D1B06B] pb-1">
              Legal Advice | Sunday, July 24, 2022
            </p>
            <div className="border border-gray-700 mb-5"></div>
            <h3 className="text-2xl font-bold pb-2">
              An Independent Examination Of Charity Accounts
            </h3>
            <p>
              There are of Lorem Ipsum available, but the majority have su
              alteration in some form, by injected oir which don't look even
              slightly believable.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogSingleSection;
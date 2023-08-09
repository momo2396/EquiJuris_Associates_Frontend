import React from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const Help = () => {
  return (
    <section className="py-20">
      <h3 className="pb-10 text-3xl font-medium text-center max-w-[753px]mx-auto">
        If you're in trouble<br></br> we can help.
      </h3>
      <p className="text-center max-w-[753px] mx-auto">
        There are of Lorem Ipsum available, but the majority have su alteration
        in some form, by injected humour, oir which don't look even slightly
        believable.
      </p>
      <div className="max-w-[1200px] mx-auto px-5 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
        <div className="bg-gray-100 border py-3 px-5 flex items-center gap-3">
          <div className="border-2 border-[#D1B06B] rounded-full p-3">
            <AiFillHeart className="text-[#D1B06B]" />
            <h4>1234</h4>
          </div>
          <div>
            <h2 className="text-lg font-bold">Trusted Clients</h2>
            <p className="text-sm text-[#909090]">There are of Lorem Ipsum</p>
          </div>
        </div>
        <div className="bg-gray-100 border py-3 px-5 flex items-center gap-3">
          <div className="border-2 border-[#D1B06B] rounded-full p-3">
            <AiFillStar className="text-[#D1B06B]" />
            <h4>98%</h4>
          </div>
          <div>
            <h2 className="text-lg font-bold">Successful Cases</h2>
            <p className="text-sm text-[#909090]">There are of Lorem Ipsum</p>
          </div>
        </div>
        <div className="bg-gray-100 border py-3 px-5 flex items-center gap-3">
          <div className="border-2 border-[#D1B06B] rounded-full p-3">
            <AiFillHeart className="text-[#D1B06B]" />
            <h4>200+</h4>
          </div>
          <div>
            <h2 className="text-lg font-bold">Criminal Defense Case</h2>
            <p className="text-sm text-[#909090]">There are of Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;

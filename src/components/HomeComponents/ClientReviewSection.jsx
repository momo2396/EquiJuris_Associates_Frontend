import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ClientReviewSection = () => {
  return (
    <section className="bg-[#1F2732] text-white py-20">
      <h1 className="text-center text-3xl font-medium pb-10">
        Top Client Opinions & Reviews
      </h1>
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-[#2E3947] rounded-bl-2xl p-10">
          <ImQuotesLeft className="text-[#D1B06B] text-3xl" />
          <p className="py-5 text-[#D7D7D7]">
            ⭐⭐⭐⭐⭐
            <br />
            "Expertise and Dedication"
            <br />
            Working with EquiJuris Associates was a game-changer for my case.
            Their team demonstrated exceptional expertise and dedication in
            handling my legal matter. They listened attentively to my concerns
            and kept me informed throughout the entire process. I couldn't have
            asked for a better team to have by my side."
          </p>
          <h3 className="text-lg font-bold">Asif</h3>
          <p className="text-[#D7D7D7] text-sm">Business Man</p>
        </div>
        <div className="bg-[#2E3947] rounded-bl-2xl p-10">
          <ImQuotesLeft className="text-[#D1B06B] text-3xl" />
          <p className="py-5 text-[#D7D7D7]">
            ⭐⭐⭐⭐⭐
            <br />
            "Professional and Caring" <br />I highly recommend EquiJuris
            Asscoiates to anyone in need of legal assistance. Their lawyers are
            not only highly professional and knowledgeable, but they genuinely
            care about their clients. They took the time to understand my
            situation and provided me with clear guidance and support. I'm
            grateful for their help during a challenging time.
          </p>
          <h3 className="text-lg font-bold">Momo</h3>
          <p className="text-[#D7D7D7] text-sm">CEO, XYZ Corporation</p>
        </div>
        <div className="bg-[#2E3947] rounded-bl-2xl p-10">
          <ImQuotesLeft className="text-[#D1B06B] text-3xl" />
          <p className="py-5 text-[#D7D7D7]">
            ⭐⭐⭐⭐
            <br />
            "Skilled Negotiators" <br />I am pleased with the legal services
            provided by EquiJuris Associates. Their team proved to be skilled
            negotiators and achieved a favorable settlement for my case. My only
            suggestion for improvement would be to enhance communication between
            updates.
          </p>
          <h3 className="text-lg font-bold">Mahmud</h3>
          <p className="text-[#D7D7D7] text-sm">Real Estate Investor</p>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewSection;

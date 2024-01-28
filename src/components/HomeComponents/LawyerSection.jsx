import React from "react";
import lawyerImage from "../../assets/other_images/lawyer.jfif";
import lawyerImage1 from "../../assets/other_images/lawyer2.jpg";
import lawyerImage2 from "../../assets/other_images/lawyer3.jpg";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import useGetData from "../../routes/UseGetData";
import Loading from "../shared/Loading/Loading";
const LawyerSection = () => {
  const { data, isLoading } = useGetData("/users/all-users");
  if (isLoading) return <Loading></Loading>;
  return (
    <section className="bg-white py-20">
      <h1 className="text-[#161D27] text-center text-3xl font-medium pb-10">
        Our Experienced Attorney Are Ready <br></br>To answer any questions
      </h1>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-20">
        {data?.data?.slice(0, 3)?.map((m) => {
          if (m?.role === "lawyer" && m?.status === "active")
            return (
              <>
                {" "}
                <div key={m}>
                  <div className="relative bg-base-100 shadow-xl pb-3 w-full ">
                    <img
                      src={m?.image}
                      alt="lawyer"
                      className="w-full aspect-square object-cover object-center"
                    />
                  </div>
                  <div className="p-3 -ml-3 -mt-16 relative z-10 flex justify-center bg-base-100 rounded-lg shadow-xl w-[200px]">
                    <div>
                      <div className="flex justify-between">
                        <button className="btn bg-transparent border-none">
                          <BsFacebook className="text-3xl" />
                        </button>
                        <button className="btn bg-transparent border-none">
                          <AiOutlineTwitter className="text-3xl" />
                        </button>
                        <button className="btn bg-transparent border-none">
                          <BsInstagram className="text-3xl" />
                        </button>
                      </div>
                      <div className="border border-[#D1B06B] my-3 w-[180px]"></div>
                      <h1 className="text-center pb-3">{m?.name}</h1>
                      <p className="text-[#D1B06B] text-center">
                        Civil Attorney
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
        })}
      </div>
    </section>
  );
};

export default LawyerSection;

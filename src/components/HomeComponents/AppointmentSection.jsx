import { useState } from "react";
import useGetData, { backendURL } from "../../routes/UseGetData";
import TooltipButton from "../shared/toolTipButton/TooltipButton";
import { MdOutlinePersonAdd } from "react-icons/md";
import Swal from "sweetalert2";

const AppointmentSection = () => {
  const { data } = useGetData("/users/all-users");
  const [lawyer, setLawyer] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    clientEmail: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log("Form Data:", formData);
      const response = await fetch(backendURL + "/appointment/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          lawyerEmail: lawyer,
          status: "pending",
          createdAt: new Date(),
        }),
      });

      if (response.ok) {
        Swal.fire("Appointment Message Sent!");
      } else {
        Swal.fire("Failed!");
      }
    } catch (error) {
      Swal.fire("Error: ", +error.message);
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center mx-auto appointment_background py-20">
        <div className="container w-full m-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-[#141516]">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <div className="dropdown">
                <div tabIndex={3} role="button">
                  {" "}
                  <TooltipButton>
                    <p className="flex gap-2 items-center">
                      Select Lawyer <MdOutlinePersonAdd size={20} />
                    </p>
                  </TooltipButton>
                </div>
                <ul
                  tabIndex={3}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg  w-max"
                >
                  {data?.data?.map((u) => {
                    if (u?.role === "lawyer")
                      return (
                        <button
                          onClick={() => setLawyer(u?.email)}
                          className="flex gap-4 justify-between w-fit"
                          key={u?._id}
                        >
                          <img
                            src={u?.image}
                            alt="client"
                            className="w-10 h-10 object-cover object-center"
                          />

                          <div className="flex flex-col items-start justify-between">
                            <p>{u?.email}</p>
                            <p className="font-bold">{u?.name}</p>
                          </div>
                        </button>
                      );
                  })}
                </ul>
              </div>
              <input
                required
                name="lawyerEmail"
                className="w-full bg-[#141516] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline text-white"
                disabled
                type="email"
                value={lawyer}
                placeholder="Lawyer Email Address*"
                onChange={handleInputChange}
              />
              <input
                required
                name="fullName"
                className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Your Full Name*"
                onChange={handleInputChange}
              />
              <input
                required
                name="clientEmail"
                className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email Address*"
                onChange={handleInputChange}
              />
              <input
                required
                name="phoneNumber"
                className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline "
                type="text"
                placeholder="Phone Number*"
                onChange={handleInputChange}
              />
              <input
                required
                name="subject"
                className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject*"
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <textarea
                required
                name="message"
                placeholder="Your Message*"
                className="w-full h-32 bg-[#141516] placeholder-gray-400 text-white mt-2 p-3 border-b-[1px] border-slate-400 focus:outline-none focus:shadow-outline"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mt-10  flex items-center justify-center">
              <button
                className="btn capitalize text-sm font-bold tracking-wide bg-white text-black p-3 rounded-lg 
              hover:bg-[#D1B06B] hover:border-[#D1B06B] focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Get An Appointment
              </button>
            </div>
            {/* {appointmentStatus && (
              <div
                className={`mt-4 text-center $ 
              {appointmentStatus.includes('successfully')?'text-green-500' :
            'text-red-500'}`}
              >
                {appointmentStatus}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

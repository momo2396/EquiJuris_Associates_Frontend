import React, { useState } from "react";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [appointmentStatus, setAppointmentStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log("Form Data:", formData);
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAppointmentStatus("Appointment booked successfully!");
      } else {
        setAppointmentStatus("Failed to book appointment");
      }
    } catch (error) {
      setAppointmentStatus("Error: ", +error.message);
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center mx-auto appointment_background py-20">
        <div className="container w-full m-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-[#141516]">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                name="fullName"
                className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name*"
                onChange={handleInputChange}
              />
              <input
                name="emailAddress"
                className="w-full bg-[#141516] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email Address*"
                onChange={handleInputChange}
              />
              <input
                name="phoneNumber"
                className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline "
                type="text"
                placeholder="Phone Number*"
                onChange={handleInputChange}
              />
              <input
                name="subject"
                className="w-full bg-[#141516] text-white mt-2 p-3 border-b-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject*"
                onChange={handleInputChange}
              />
            </div>
            <div className="my-4">
              <textarea
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
            {appointmentStatus && (
              <div
                className={`mt-4 text-center $ 
              {appointmentStatus.includes('successfully')?'text-green-500' :
            'text-red-500'}`}
              >
                {appointmentStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

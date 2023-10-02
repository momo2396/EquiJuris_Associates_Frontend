import { myBrown } from "../../utilities/color";
import loginBanner from "../../assets/banner/scale02.jpg";
import { useState } from "react";

const SignUpForm = () => {
  const [userType, setUserType] = useState("client"); //by deafualt client page arrive

  const handleUserTypeChange = (type) => {
    console.log(type);
    setUserType(type);
  };

  const handleRegister = (e) => {
    e.preventDEfault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block min-h-[90vh] login_banner bg-cover bg-center">
        <div className="hero-overlay bg-opacity-60">
          <div className="pt-72 lg:pt-80">
            <h1 className="text-white text-center text-3xl font-bold">
              Welcome to EquiJuris
            </h1>
          </div>
        </div>
      </div>
      <div
        className={`py-36 lg:py-70 bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')] lg:bg-none bg-opacity-60 bg-cover bg-center lg:bg-[#161D27] text-white`}
      >
        <h1 className="text-center text-[#D1B06B] mb-5  text-3xl pb-5  font-bold">
          Sign Up Here
        </h1>

        <div className="flex gap-3 items-center justify-center">
          <label className="ml-4">
            <input
              className="ml-4"
              type="radio"
              name="userType"
              value="lawyer"
              checked={userType === "lawyer"}
              onChange={() => handleUserTypeChange("lawyer")}
            />
            Lawyer
          </label>
          <label>
            <input
              className="ml-4"
              type="radio"
              name="userType"
              value="client"
              checked={userType === "client"}
              onChange={() => handleUserTypeChange("client")}
            />
            Client
          </label>
        </div>
        {userType == "lawyer" ? (
          // Display lawyer signup form
          <div className="p-5">
            <h2 className="text-center ">Lawyer Sign Up</h2>
            <form
              onSubmit={handleRegister}
              className="backdrop-blur-xl mt-5 py-10 px-5 mx-10 border-2 border-slate-400 rounded-xl"
            >
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Name"
                name="name"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="e.g.; abc@gmail.com"
                name="email"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Enter Password*"
                required
                name="password"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Address"
                name="address"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter City"
                name="city"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Zip Code"
                name="zip"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Enter Date of Birth"
                name="birthdate"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Your License Number*"
                required
                name="license"
              />
              <div className="pt-5 flex flex-col lg:flex-row items-center gap-5">
                <input
                  type="submit"
                  className="btn bg-[#1F2732] border-[#1F2732] text-white hover:bg-[#D1B06B] hover:border-[#D1B06B] hover:text-black"
                  value="Sign Up"
                />
                <p>
                  Already have an account? Please{" "}
                  <a href="" className={`text-[${myBrown}] underline`}>
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : userType == "client" ? (
          // Display client signup form
          <div className="p-5">
            <h2 className="text-center">Client Sign Up</h2>
            <form
              onSubmit={handleRegister}
              className="backdrop-blur-xl mt-5 py-10 px-5 mx-10 border-2 border-slate-400 rounded-xl"
            >
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Name"
                name="name"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="e.g.; abc@gmail.com"
                name="email"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Enter Password*"
                required
                name="password"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Address"
                name="address"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter City"
                name="city"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Zip Code"
                name="zip"
              />
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Enter Date of Birth"
                name="birthdate"
              />
              <div className="pt-5 flex flex-col lg:flex-row items-center gap-5">
                <input
                  type="submit"
                  className="btn bg-[#1F2732] border-[#1F2732] text-white hover:bg-[#D1B06B] hover:border-[#D1B06B] hover:text-black"
                  placeholder="Sign Up"
                />
                <p>
                  Already have an account? Please{" "}
                  <a href="" className={`text-[${myBrown}] underline`}>
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SignUpForm;

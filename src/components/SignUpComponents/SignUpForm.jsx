import { myBrown } from "../../utilities/color";

import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { postUser } from "../providers/postUser";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const [userType, setUserType] = useState("client");
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const license = e.target.license?.value;
    console.log(email, password, license);
    let userData = {};
    if (userType === "client") {
      userData = {
        name,
        email,
        password,
        role: userType,
      };
    } else {
      userData = {
        name,
        email,
        password,
        role: userType,
        license,
      };
    }
    createUser(email, password)
      .then(async () => {
        // const loggedUser = result?.user;
        await postUser(userData);
      })
      .catch((err) => {
        Swal.fire({
          title: err.code,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
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
        <div className="p-5">
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
            <select
              className="bg-[#161D27] select select-bordered w-full text-white"
              onChange={(e) => setUserType(e.target.value)}
              name="role"
              id=""
              defaultValue={userType}
            >
              <option value="client">Client</option>
              <option value="lawyer">Lawyer</option>
            </select>
            {userType === "lawyer" && (
              <input
                className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Your License Number*"
                required
                name="license"
              />
            )}
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
      </div>
    </div>
  );
};

export default SignUpForm;

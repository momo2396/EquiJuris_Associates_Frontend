import { myBrown } from "../../utilities/color";
const LoginForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className=" hidden lg:block min-h-[90vh] login_banner bg-cover bg-center">
        <div className="hero-overlay bg-opacity-60">
          <div className="pt-72 lg:pt-80">
            <h1 className="text-white text-center text-3xl font-bold">
              Welcome to EquiJuris
            </h1>
          </div>
        </div>
      </div>
      <div
        className={`py-36 lg:py-80 bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')] lg:bg-none bg-opacity-60 bg-cover bg-center lg:bg-[#161D27] text-white`}
      >
        <h1 className="text-center text-[#D1B06B] text-3xl pb-5 font-bold">
          Login Here
        </h1>
        <div className="backdrop-blur-xl py-10 px-5 mx-10 border-2 border-slate-400 rounded-xl">
          <input
            className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="e.g.; abc@gmail.com"
          />
          <input
            className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter Password*"
            required
          />
          <div className="pt-5 flex flex-col lg:flex-row items-center gap-5">
            <button className="btn bg-[#1F2732] border-[#1F2732] text-white hover:bg-[#D1B06B] hover:border-[#D1B06B] hover:text-black">
              Login
            </button>
            <p>
              Don't you have any account? Please{" "}
              <a href="" className={`text-[${myBrown}] underline`}>
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

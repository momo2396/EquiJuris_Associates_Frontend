import { useContext, useState } from "react";
import { myBrown } from "../../utilities/color";
import { AuthContext } from "../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loading, setLoading] = useState(false);
  const handleLogin = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        Swal.fire("Logged In!", "You logged in successfully!", "success");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire(error?.message);
        setLoading(false);
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className=" hidden lg:block min-h-[90vh] login_banner bg-cover bg-center">
        <div className="hero-overlay bg-opacity-60">
          <div className="text-white pt-72 lg:pt-80 text-center">
            <h1 className="mb-5 text-4xl font-titleFont font-bold">
              Welcome to EquiJuris Associates
            </h1>
            <p className="mb-5 font-titleFont font-semibold text-lg">
              We stand for justice and champion your rights. With our
              experienced team of attorneys, your legal matters are in capable
              hands. Trust us to advocate for your best interests every step of
              the way.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`py-36 lg:py-80 bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')] lg:bg-none bg-opacity-60 bg-cover bg-center lg:bg-[#161D27] text-white`}
      >
        <h1 className="font-titleFont text-center text-[#D1B06B] text-3xl pb-5 font-bold">
          Login Here
        </h1>
        <form
          className="backdrop-blur-xl py-10 px-5 mx-10 border-2 border-slate-400 rounded-xl"
          onSubmit={handleLogin}
        >
          <input
            className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="e.g.; abc@gmail.com"
          />
          <input
            className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter Password*"
            name="password"
            required
          />
          <div className="pt-5 flex flex-col lg:flex-row items-center gap-5">
            {loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <input
                className="btn bg-[#1F2732] border-[#1F2732] text-white hover:bg-[#D1B06B] hover:border-[#D1B06B] hover:text-black"
                value="Login"
                type="submit"
              />
            )}

            <p>
              Don't you have any account? Please{" "}
              <Link to="/signUp" className={`text-[${myBrown}] underline`}>
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

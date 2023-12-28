import { myBrown } from "../../utilities/color";

import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { postUser } from "../providers/postUser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { hostImage } from "../shared/hostImage/hostImage";
import { MdUpload } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const SignUpForm = () => {
  const [photo, setPhoto] = useState(null);
  const [imageError, setImageError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const photoRef = useRef(null);
  const [userType, setUserType] = useState("client");
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (photo) {
      setImageError("");
    }
  }, [photo]);
  const onSubmit = async (data) => {
    setLoading(true);
    if (!photo) {
      setImageError("The image is required");
      setLoading(false);
      return;
    }
    let image = photo;
    image = await hostImage(image);
    let userData = {};
    if (userType === "client") {
      userData = {
        name: data?.name,
        email: data?.email,
        password: data?.password,
        role: userType,
        image,
      };
    } else {
      userData = {
        name: data?.name,
        email: data?.email,
        password: data?.password,
        role: userType,
        license: data?.license,
        image,
        status: "pending",
      };
    }
    createUser(data?.email, data?.password)
      .then(async () => {
        await postUser(userData);
        Swal.fire("Good job!", "You are registered successfully!", "success");

        logOut().then(() => {
          navigate("/login");
          setLoading(false);
        });
      })
      .catch((err) => {
        Swal.fire("Error!", err.code, "error");
        setLoading(false);
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block min-h-[90vh] login_banner bg-cover bg-center">
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
        className={`py-36 lg:py-70 bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')] lg:bg-none bg-opacity-60 bg-cover bg-center lg:bg-[#161D27] text-white`}
      >
        <h1 className="font-titleFont text-center text-[#D1B06B] mb-5  text-3xl pb-5  font-bold">
          Sign Up Here
        </h1>
        <div className="p-5">
          <input
            // value={photo}
            // ref={(e) => {
            //   ref(e)
            //   photoRef.current = e
            // }}
            ref={photoRef}
            onChange={(e) => setPhoto(e.target.files[0])}
            // {...register("image", {
            //   required: true,
            // })}
            className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline hidden"
            id="signUpImage"
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            required
            name="image"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="backdrop-blur-xl mt-5 py-10 px-5 mx-10 border-2 border-slate-400 rounded-xl flex flex-col gap-2"
          >
            <input
              {...register("name", { required: true })}
              className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your full name*"
            />
            {errors.name && (
              <span className="text-[#D1B06B]">The name is required</span>
            )}
            {photo ? (
              <div
                className="relative h-[200px] w-[200px] bg-center bg-cover mx-auto bg-no-repeat"
                style={{
                  backgroundImage: `url("${URL.createObjectURL(photo)}")`,
                }}
              >
                <div
                  onClick={(e) => {
                    // setPhoto(null);
                    photoRef.current.click();
                  }}
                  className="absolute bottom-2 right-2 z-10 bg-gray-700 p-2 rounded-xl"
                >
                  <FaEdit color="red" size={20} />
                </div>
              </div>
            ) : (
              <label
                htmlFor="signUpImage"
                className="border-[1px] text-gray-400  border-slate-400 h-[150px] w-full flex flex-col items-center justify-center"
              >
                <MdUpload size={30} />
                <p>Upload your photo</p>
              </label>
            )}

            {imageError && <span className="text-[#D1B06B]">{imageError}</span>}
            <input
              {...register("email", { required: true })}
              className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="e.g.; abc@gmail.com*"
            />
            {errors.email && (
              <span className="text-[#D1B06B]">The email is required</span>
            )}

            <input
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Z\d#$@!%&*?]/,
              })}
              className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter Password*"
            />
            {errors.password?.type === "required" && (
              <span className="text-[#D1B06B]">The password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-[#D1B06B]">Minimum length is 6</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-[#D1B06B]">
                Minimum One Special Character, One Capital Letter, One Digit
              </span>
            )}
            <select
              {...register("role")}
              className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
              onChange={(e) => setUserType(e.target.value)}
              name="role"
              defaultValue={userType}
            >
              <option value="client">Client</option>
              <option value="lawyer">Lawyer</option>
            </select>
            {/* {errors.role && (
              <span className="text-[#D1B06B]">This field is required</span>
            )} */}
            {userType === "lawyer" && (
              <>
                <input
                  {...register("license", { required: true })}
                  className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter Your License Number*"
                />

                {errors.license && (
                  <span className="text-[#D1B06B]">
                    The license is required
                  </span>
                )}
              </>
            )}

            <div className="pt-5 flex flex-col lg:flex-row items-center gap-5">
              {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                <input
                  type="submit"
                  className="btn btn-outline bg-transparent border-[#D1B06B] text-[#D1B06B] hover:scale-125 hover:text-[#D1B06B] border-2"
                  value="Sign Up"
                />
              )}
              <p>
                Already have an account? Please{" "}
                <Link to="/login" className={`text-[${myBrown}] underline`}>
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

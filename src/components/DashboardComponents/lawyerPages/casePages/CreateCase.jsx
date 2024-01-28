import InputButton from "../../../shared/InputButton/InputButton";
import axios from "axios";
import { backendURL } from "../../../../routes/UseGetData";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const CreateCase = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    const lawyerEmail = user?.email;
    const lawyerImage = user?.image;
    const lawyerName = user?.name;
    const title = data?.title;
    const description = data?.description;
    const caseMoney = data?.caseMoney;
    const response = await axios.post(
      backendURL + "/cases/insert-case",
      {
        lawyerEmail: lawyerEmail,
        lawyerName: lawyerName,
        lawyerImage: lawyerImage,
        title: title,
        caseMoney: caseMoney,
        description: description,
        createdAt: new Date(),
        status: "pending",
        isPaid: "unpaid",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    try {
      if (response?.data?.success) {
        Swal.fire("Good job!", "Practice Area has been Inserted", "success");
      } else {
        Swal.fire(
          "ERROR!",
          "Practice Area Insertion Failed. Try Again.",
          "error"
        );
      }
      setLoading(false);
      navigate("/dashboard/lawyer/myCases");
    } catch (error) {
      Swal.fire("ERROR!", error.message, "error");
      setLoading(false);
    }
  };

  return (
    <div
      className={`py-36  bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')]  bg-opacity-60 bg-cover bg-center bg-[#161D27] text-white`}
    >
      <section className="backdrop-blur-xl px-5 mx-10 border-2 border-slate-400 rounded-xl">
        <div className="flex justify-center items-center mx-auto appointment_background py-20">
          <div className="container w-full m-auto my-4 px-4 lg:px-20">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full p-8 lg:pr-40 mr-auto rounded-2xl shadow-2xl "
            >
              <input
                {...register("lawyerEmail", {
                  required: true,

                  disabled: true,
                })}
                className="w-full bg-[#141516] text-white-900 mt-2 p-3 border-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline
                disabled:cursor-not-allowed"
                value={user?.email}
                // disabled
                type="email"
                placeholder="email*"
              />
              {errors.lawyerEmail && (
                <span className="text-[#D1B06B]">The field is required</span>
              )}
              <input
                {...register("title", { required: true })}
                className="w-full bg-[#141516] placeholder-gray-400 text-white mt-2 p-3 border-[1px] border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Appropriate title of the case*"
              />
              {errors.title && (
                <span className="text-[#D1B06B]">The field is required</span>
              )}
              <input
                {...register("caseMoney", { required: true })}
                className="w-full bg-[#141516] placeholder-gray-400 text-white mt-2 p-3 border-[1px] border-slate-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Case Money*"
              />
              {errors.caseMoney && (
                <span className="text-[#D1B06B]">The field is required</span>
              )}
              {/* <div className="">
                <input
                  className="w-full bg-[#141516] text-white mt-2 p-3 border-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                  name="type"
                  type="text"
                  placeholder="Practice Area*"
                  required
                />
              </div> */}
              {/* <div className="my-4"> */}
              <textarea
                {...register("description", { required: true })}
                placeholder="Short Description*"
                className="w-full h-32 bg-[#141516] placeholder-gray-400 text-white mt-2 p-3 border-[1px] border-slate-400 focus:outline-none focus:shadow-outline"
              ></textarea>
              {errors.description && (
                <span className="text-[#D1B06B]">The field is required</span>
              )}
              {/* </div> */}
              <div className="mt-10  flex items-center justify-center">
                {loading ? (
                  <span className="loading loading-spinner loading-lg"></span>
                ) : (
                  <InputButton>Create</InputButton>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateCase;

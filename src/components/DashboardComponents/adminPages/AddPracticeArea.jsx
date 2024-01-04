import axios from "axios";
import { backendURL } from "../../../routes/UseGetData";
import Swal from "sweetalert2";
import InputButton from "../../shared/InputButton/InputButton";
import { useState } from "react";

const AddPracticeArea = () => {
  const [loading, setLoading] = useState(false);
  const handleArea = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const type = form.type.value;
    const description = form.description.value;
    const response = await axios.post(
      backendURL + "/practiceAreas/insert-practiceArea",
      {
        type: type,
        description: description,
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
        form.reset();
      } else {
        Swal.fire(
          "ERROR!",
          "Practice Area Insertion Failed. Try Again.",
          "error"
        );
      }
      setLoading(false);
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
              onSubmit={handleArea}
              className="w-full p-8 lg:pr-40 mr-auto rounded-2xl shadow-2xl "
            >
              <div className="">
                <input
                  className="w-full bg-[#141516] text-white mt-2 p-3 border-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                  name="type"
                  type="text"
                  placeholder="Practice Area*"
                  required
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Short Description*"
                  className="w-full h-32 bg-[#141516] placeholder-gray-400 text-white mt-2 p-3 border-[1px] border-slate-400 focus:outline-none focus:shadow-outline"
                  required
                  name="description"
                ></textarea>
              </div>
              <div className="mt-10  flex items-center justify-center">
                {loading ? (
                  <span className="loading loading-spinner loading-lg"></span>
                ) : (
                  <InputButton>Add</InputButton>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPracticeArea;

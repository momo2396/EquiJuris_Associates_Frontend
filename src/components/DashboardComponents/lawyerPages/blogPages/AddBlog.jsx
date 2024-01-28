import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useEffect, useRef, useState } from "react";
import InputButton from "../../../shared/InputButton/InputButton";
import useGetData, { backendURL } from "../../../../routes/UseGetData";
import { useForm } from "react-hook-form";
import { hostImage } from "../../../shared/hostImage/hostImage";
import { MdUpload } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [imageError, setImageError] = useState("");
  const [category, setCategory] = useState("");
  const { data, isLoading } = useGetData("/practiceAreas/categories");
  useEffect(() => {
    setCategory(data?.data[0]);
  }, [isLoading]);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const photoRef = useRef(null);
  useEffect(() => {
    if (photo) {
      setImageError("");
    }
  }, [photo]);
  const onSubmit = async (info) => {
    setLoading(true);
    if (!photo) {
      setImageError("The image is required");
      setLoading(false);
      return;
    }
    let image = photo;
    image = await hostImage(image);
    const response = await axios.post(
      backendURL + "/blogs/insert-blog",
      {
        title: info?.title,
        category: category,
        blogImage: image,
        body: info?.body,
        lawyerEmail: user?.email,
        createdDate: new Date(),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    try {
      if (response?.data?.success) {
        Swal.fire("Good job!", "Blog has been Inserted", "success");
        reset();
      } else {
        Swal.fire("ERROR!", "Blog Insertion Failed. Try Again.", "error");
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
            <input
              ref={photoRef}
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full bg-[#161D27] text-white-900 mt-2 p-3 border-b-[1px] placeholder-gray-400  border-slate-400 focus:outline-none focus:shadow-outline hidden"
              id="blogImage"
              type="file"
              accept="image/jpg, image/png, image/jpeg"
              required
              name="image"
            />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full p-8 lg:pr-40 mr-auto rounded-2xl shadow-2xl "
            >
              <div>
                <input
                  {...register("title", { required: true })}
                  className="w-full bg-[#141516] text-white mt-2 p-3 border-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="blog title*"
                />
                {errors.title && (
                  <span className="text-[#D1B06B]">The title is required</span>
                )}
              </div>
              <div className="mt-2">
                {photo ? (
                  <div
                    className="relative h-[200px] w-[200px] bg-center bg-cover mx-auto bg-no-repeat"
                    style={{
                      backgroundImage: `url("${URL.createObjectURL(photo)}")`,
                    }}
                  >
                    <div
                      onClick={(e) => {
                        photoRef.current.click();
                      }}
                      className="absolute bottom-2 right-2 z-10 bg-gray-700 p-2 rounded-xl"
                    >
                      <FaEdit color="red" size={20} />
                    </div>
                  </div>
                ) : (
                  <label
                    htmlFor="blogImage"
                    className="border-[1px] text-gray-400  border-slate-400 h-[150px] w-full flex flex-col items-center justify-center"
                  >
                    <MdUpload size={30} />
                    <p>Upload your photo</p>
                  </label>
                )}

                {imageError && (
                  <span className="text-[#D1B06B]">{imageError}</span>
                )}
              </div>
              <div className="my-4">
                <textarea
                  {...register("body", { required: true })}
                  placeholder="blog description*"
                  className="w-full h-36 bg-[#141516] placeholder-gray-400 text-white mt-2 p-3 border-[1px] border-slate-400"
                ></textarea>
                {errors.body && (
                  <span className="text-[#D1B06B]">This field is required</span>
                )}
              </div>
              <div>
                <select
                  {...register("category")}
                  className="w-full bg-[#141516] text-white mt-2 p-3 border-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                  onChange={(e) => setCategory(e.target.value)}
                  defaultValue={category}
                >
                  {data?.data.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
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

export default AddBlog;

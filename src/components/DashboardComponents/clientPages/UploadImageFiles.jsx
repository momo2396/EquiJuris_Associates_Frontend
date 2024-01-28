import { useContext, useEffect, useRef, useState } from "react";
import useGetData, { backendURL } from "../../../routes/UseGetData";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { hostImage } from "../../shared/hostImage/hostImage";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import InputButton from "../../shared/InputButton/InputButton";
import Icon1 from "../../../assets/customicon/icon1";
import OutlineButton from "../../shared/OutlineButton/OutlineButton";
import { TbListDetails } from "react-icons/tb";
import { ImCross } from "react-icons/im";

const UploadImageFiles = ({ id, status }) => {
  const [loading, setLoading] = useState(false);
  const [clientDoc, setClientDoc] = useState([]);
  const [file, setFile] = useState(null);
  const { data, refetch, isLoading } = useGetData(`/cases/single-case/${id}`);
  useEffect(() => {
    if (data?.data?.clientDocs) {
      setClientDoc(data?.data?.clientDocs);
    } else setClientDoc([]);
  }, [isLoading]);
  const [photo, setPhoto] = useState(null);
  const [imageError, setImageError] = useState("");
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
    const response = await axios.put(
      backendURL + "/cases/update-case/" + id,
      {
        clientDocs: [
          ...clientDoc,
          {
            title: info?.title,
            fileImage: image,
            clientEmail: user?.email,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    try {
      if (response?.data?.success) {
        Swal.fire("Good job!", "File has been Inserted", "success");
        reset();
        setPhoto(null);
        refetch();
      } else {
        Swal.fire("ERROR!", "File Insertion Failed. Try Again.", "error");
      }
      setLoading(false);
    } catch (error) {
      Swal.fire("ERROR!", error.message, "error");
      setLoading(false);
    }
  };
  console.log(file);
  return (
    <>
      <section className="backdrop-blur-xl px-5 mx-10 border-2 border-slate-400 rounded-xl">
        <div className="flex flex-col justify-center items-center gap-2 pb-5">
          <p className="pt-2 font-bold font-titleFont text-2xl text-[#D1B06B]">
            Upload Your Documents{" "}
          </p>
          <p className=" text-slate-400">Only image file is acceptable</p>
          <Icon1></Icon1>
        </div>
        <div className="flex justify-center items-center mx-auto appointment_background py-5">
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
              className="w-full mr-auto rounded-2xl shadow-2xl "
            >
              <div>
                <input
                  {...register("title", { required: true })}
                  className="w-full bg-[#141516] text-white mt-2 p-3 border-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="file title*"
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
                    <p>Upload image file</p>
                  </label>
                )}

                {imageError && (
                  <span className="text-[#D1B06B]">{imageError}</span>
                )}
              </div>
              {status === "pending" && (
                <div className="mt-10  flex items-center justify-center">
                  {loading ? (
                    <span className="loading loading-spinner loading-lg"></span>
                  ) : (
                    <InputButton>Add</InputButton>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <div className="py-10">
        <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
          <thead>
            <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
              <td>File Name</td>
              <td>View</td>
            </tr>
          </thead>
          <tbody>
            {data?.data?.clientDocs
              ?.filter((c) => c?.clientEmail === user?.email)
              ?.map((l) => (
                <>
                  <tr key={l} className="text-center">
                    {/* <td className="flex justify-center items-center">
                    <img className="w-10 h-10 rounded-full" src={l?.image} />
                  </td> */}
                    <td>{l?.title}</td>
                    <>
                      <td>
                        <label
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                          className="flex justify-center items-center"
                        >
                          <OutlineButton onClick={() => setFile(l)}>
                            <TbListDetails />
                          </OutlineButton>
                        </label>
                      </td>
                    </>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#161D27] border-2 border-white">
          <img className="w-[500px] rounded-lg" src={file?.fileImage} />
          <div className="modal-action">
            <form method="dialog">
              <OutlineButton>
                <ImCross />
              </OutlineButton>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UploadImageFiles;

import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetData, { backendURL } from "../../../../routes/UseGetData";
import InputButton from "../../../shared/InputButton/InputButton";
import { AuthContext } from "../../../providers/AuthProviders";
import PDFFile from "./PDFFile";
import Loading from "../../../shared/Loading/Loading";
const CreateCaseFile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();
  const [loading, setLoading] = useState(false);
  const [dsc, setDsc] = useState("");
  const [tt, setTt] = useState("");
  const [files, setFiles] = useState([]);
  const { data, refetch, isLoading } = useGetData(`/cases/single-case/${id}`);
  useEffect(() => {
    if (data?.data) {
      setFiles(data?.data?.caseFiles || []);
    }
  }, [isLoading]);
  const handleUpdate = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const pdfTitle = form.pdfTitle.value;
    const description = form.description.value;
    const createdAt = new Date();
    const author = user?.email;
    console.log(files);
    const caseFiles = [
      ...files,
      {
        pdfTitle: pdfTitle,
        description: description,
        createdAt: createdAt,
        author: author,
      },
    ];
    console.log(files, caseFiles);
    try {
      const response = await axios.put(
        backendURL + "/cases/update-case/" + id,
        {
          caseFiles: caseFiles,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.data?.success) {
        Swal.fire("Good job!", "File has been Inserted", "success");
        form.reset();
        navigate(`/dashboard/lawyer/singleCase/${id}`);
      } else {
        Swal.fire("ERROR!", "File Insertion Failed. Try Again.", "error");
      }
      setLoading(false);
    } catch (error) {
      Swal.fire("ERROR!", error.message, "error");
      setLoading(false);
    }
    refetch();
  };
  if (isLoading) return <Loading></Loading>;
  return (
    <div
      className={`py-36  bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')]  bg-opacity-60 bg-cover bg-center bg-[#161D27] text-white`}
    >
      <section className="backdrop-blur-xl px-5 mx-10 border-2 border-slate-400 rounded-xl">
        <div className="flex justify-center items-center mx-auto appointment_background py-20">
          <div className="container w-full m-auto my-4 px-4 lg:px-20">
            <form
              onSubmit={handleUpdate}
              className="w-full p-8 lg:pr-40 mr-auto rounded-2xl shadow-2xl "
            >
              <div className="">
                <input
                  onBlur={(e) => setTt(e.target.value)}
                  className="w-full bg-[#141516] text-white mt-2 p-3 border-[1px] placeholder-gray-400 border-slate-400 focus:outline-none focus:shadow-outline"
                  name="pdfTitle"
                  type="text"
                  placeholder="Pdf Title*"
                  required
                />
              </div>
              <div className="my-4">
                <textarea
                  onBlur={(e) => setDsc(e.target.value)}
                  placeholder="File Description*"
                  className="w-full h-32 bg-[#141516] placeholder-gray-400 text-white mt-2 p-3 border-[1px] border-slate-400 focus:outline-none focus:shadow-outline"
                  required
                  name="description"
                ></textarea>
              </div>
              <PDFFile description={dsc} pdfTitle={tt}></PDFFile>
              <div className="mt-10  flex items-center justify-center">
                {loading ? (
                  <span className="loading loading-spinner loading-lg"></span>
                ) : (
                  <InputButton>Save File</InputButton>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateCaseFile;

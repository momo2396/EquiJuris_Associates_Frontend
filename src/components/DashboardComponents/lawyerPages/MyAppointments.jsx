import { TbListDetails } from "react-icons/tb";
import Icon1 from "../../../assets/customicon/icon1";
import useGetData, { backendURL } from "../../../routes/UseGetData";
import OutlineButton from "../../shared/OutlineButton/OutlineButton";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { ImCross } from "react-icons/im";
import Loading from "../../shared/Loading/Loading";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaQuestionCircle } from "react-icons/fa";
const MyAppointments = () => {
  const { data, isLoading, refetch } = useGetData("/appointment/all");
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const handleEmail = async () => {
    const emailData = {
      clientEmail: file?.clientEmail,
      lawyerEmail: file?.lawyerEmail,
      fullName: file?.fullName,
    };
    await emailjs.send(
      import.meta.env.VITE_emailJSServiceID,
      import.meta.env.VITE_emailJSAppointmentTemplateID,
      emailData,
      import.meta.env.VITE_emailJSPublicKey
    );
    let res = await fetch(backendURL + "/appointment/update/" + file?._id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        status: "approved",
      }),
    });
    const resdata = await res.json();
    Swal.fire("Email has been sent");
    refetch();
  };
  if (isLoading) return <Loading></Loading>;
  return (
    <>
      <div className="backdrop-blur-xl px-5 py-20 border-2 border-slate-400 rounded-xl bg-[#161D27]">
        <div className="overflow-x-auto bg-[#1F2732] mx-5">
          <div className="flex flex-col justify-center items-center gap-2 pb-5">
            <p className="font-bold font-titleFont text-2xl text-[#D1B06B]">
              Appointments{" "}
            </p>
            <Icon1></Icon1>
          </div>
          <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
            <thead>
              <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
                <td>Subject</td>
                <td>Created At</td>
                <td>Sender Email</td>
                <tb>Status</tb>
                <td>View</td>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((l) => {
                if (l?.lawyerEmail === user?.email)
                  return (
                    <>
                      <tr key={l?.createdAt} className="text-center">
                        <td>{l?.subject}</td>
                        <td>{l?.createdAt}</td>

                        <td className="text-[#D1B06B]">{l?.clientEmail}</td>
                        <td className="flex gap-2 justify-center items-center">
                          <p> {l?.status}</p>
                          {l?.status === "pending" && (
                            <button
                              onClick={handleEmail}
                              className="border-2 border-white rounded-full text-lg"
                            >
                              <FaQuestionCircle />
                            </button>
                          )}
                        </td>
                        <>
                          <td>
                            <label
                              onClick={() =>
                                document
                                  .getElementById("my_modal_6")
                                  .showModal()
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
                  );
              })}
            </tbody>
          </table>
          )
        </div>
      </div>
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#161D27] border-2 border-white">
          <div className="text-white">
            <p>Subject: {file?.subject}</p>
            <p>Message: {file?.message}</p>
          </div>
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

export default MyAppointments;

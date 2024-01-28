import { TbListDetails } from "react-icons/tb";
import Icon1 from "../../../../assets/customicon/icon1";
import OutlineButton from "../../../shared/OutlineButton/OutlineButton";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const ClientDocs = ({ clientDocs }) => {
  const [file, setFile] = useState(null);
  return (
    <div className="backdrop-blur-xl px-5 py-20 border-2 border-slate-400 rounded-xl">
      <div className="overflow-x-auto bg-[#1F2732] mx-5">
        <div className="flex flex-col justify-center items-center gap-2 pb-5">
          <p className="font-bold font-titleFont text-2xl text-[#D1B06B]">
            Client Documents{" "}
          </p>
          <Icon1></Icon1>
        </div>

        {clientDocs ? (
          <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
            <thead>
              <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
                <td>Title</td>
                <td>Client Email</td>
                <td>View</td>
              </tr>
            </thead>
            <tbody>
              {clientDocs?.map((l) => (
                <>
                  <tr key={l} className="text-center">
                    <td>{l?.title}</td>
                    <td className="text-[#D1B06B]">{l?.clientEmail}</td>
                    <>
                      <td>
                        <label
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
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
        ) : (
          <p className="text-white text-center">No files uploaded</p>
        )}
      </div>
      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
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
    </div>
  );
};

export default ClientDocs;

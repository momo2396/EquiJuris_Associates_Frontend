import { TbListDetails } from "react-icons/tb";
import Icon1 from "../../../assets/customicon/icon1";
import OutlineButton from "../../shared/OutlineButton/OutlineButton";
import PDFFile from "../lawyerPages/casePages/PDFFile";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const ViewFileClient = ({ caseFiles }) => {
  const [file, setFile] = useState(null);
  return (
    <>
      <div className="backdrop-blur-xl px-5 py-20 border-2 border-slate-400 rounded-xl">
        <div className="overflow-x-auto bg-[#1F2732] mx-5">
          <div className="flex flex-col justify-center items-center gap-2 pb-5">
            <p className="font-bold font-titleFont text-2xl text-[#D1B06B]">
              Case Files{" "}
            </p>
            <Icon1></Icon1>
          </div>

          {caseFiles ? (
            <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
              <thead>
                <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
                  <td>Title</td>
                  <td>Created At</td>
                  <td>Author Email</td>
                  <td>View</td>
                </tr>
              </thead>
              <tbody>
                {caseFiles?.map((l) => (
                  <>
                    <tr key={l?.createdAt} className="text-center">
                      <td>{l?.pdfTitle}</td>
                      <td>{l?.createdAt}</td>
                      <td className="text-[#D1B06B]">{l?.author}</td>
                      <>
                        <td>
                          <label
                            onClick={() =>
                              document.getElementById("my_modal_9").showModal()
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
            <p className="text-white text-center"> No case files added</p>
          )}
        </div>
      </div>
      <dialog id="my_modal_9" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#161D27] border-2 border-white">
          <PDFFile
            description={file?.description}
            pdfTitle={file?.pdfTitle}
          ></PDFFile>
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

export default ViewFileClient;

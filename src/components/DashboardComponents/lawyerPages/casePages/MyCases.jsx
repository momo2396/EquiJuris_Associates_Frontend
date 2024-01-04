import { useContext } from "react";
import Icon1 from "../../../../assets/customicon/icon1";
import useGetData from "../../../../routes/UseGetData";
import { AuthContext } from "../../../providers/AuthProviders";
import OutlineButton from "../../../shared/OutlineButton/OutlineButton";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const MyCases = () => {
  const { user } = useContext(AuthContext);
  const { data } = useGetData(`/cases/my-cases?email=${user?.email}`);
  return (
    <>
      <div
        className={`py-36  bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')]  bg-cover bg-center bg-[#161D27] text-white`}
      >
        <div className="backdrop-blur-xl px-5 py-20 border-2 border-slate-400 rounded-xl mx-5">
          <div className="overflow-x-auto bg-[#1F2732] mx-5">
            <div className="flex flex-col justify-center items-center gap-2 pb-5">
              <p className="font-bold font-titleFont text-2xl text-[#D1B06B]">
                My Cases{" "}
              </p>
              <Icon1></Icon1>
            </div>

            <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
              <thead>
                <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
                  <td>Title</td>
                  <td>Created At</td>

                  <td>Status</td>
                  <td>View</td>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((l) => (
                  <tr key={l?._id} className="text-center">
                    <td>{l?.title}</td>
                    <td>{l?.createdAt}</td>
                    <td className="text-[#D1B06B]">{l?.status}</td>
                    <td>
                      <Link
                        to={`/dashboard/lawyer/singleCase/${l?._id}`}
                        className="flex justify-center items-center"
                      >
                        <OutlineButton>
                          <TbListDetails />
                        </OutlineButton>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCases;

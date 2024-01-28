import { TbListDetails } from "react-icons/tb";
import OutlineButton from "../../shared/OutlineButton/OutlineButton";
import useGetData from "../../../routes/UseGetData";
import Icon1 from "../../../assets/customicon/icon1";

const AllCases = () => {
  const { data } = useGetData("/cases");
  return (
    <div
      className={`py-36  bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')]  bg-cover bg-center bg-[#161D27] text-white`}
    >
      <div className="backdrop-blur-xl px-5 py-20 border-2 border-slate-400 rounded-xl mx-5">
        <div className="overflow-x-auto bg-[#1F2732] mt-20 mx-5">
          <div className="flex flex-col justify-center items-center gap-2 pb-5">
            <p className="font-bold font-titleFont text-2xl text-[#D1B06B]">
              All Cases{" "}
            </p>
            <Icon1></Icon1>
          </div>
          <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
            <thead>
              <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
                <td>Appointed Lawyer</td>
                <td>Status</td>
                <td>isPaid</td>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((m) => (
                <>
                  <tr className="text-center">
                    <td>{m?.lawyerEmail}</td>
                    <td>{m?.status}</td>
                    <td>{m?.isPaid}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCases;

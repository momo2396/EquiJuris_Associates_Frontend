import { useLocation } from "react-router-dom";
import useGetData from "../../../routes/UseGetData";
import Title from "../../shared/Title";
// import Icon1 from "../../../assets/customicon/icon1";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import UploadImageFiles from "./UploadImageFiles";

const SingleCaseClient = () => {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();
  const { data, refetch, isLoading } = useGetData(`/cases/single-case/${id}`);
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-[#1F2732] min-h-screen px-5">
      <Title heading={data?.data?.title} subHeading={data?.data?.description} />
      <div className="pt-10 flex flex-col justify-center items-center gap-2 pb-5">
        <p className="font-bold font-titleFont text-xl text-[#D1B06B]">
          Appointed Lawyer{" "}
        </p>
      </div>
      <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
        <thead>
          <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
            <td>Image</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="flex justify-center items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={data?.data?.lawyerImage}
              />
            </td>
            <td>{data?.data?.lawyerName}</td>
            <td className="text-[#D1B06B]">{data?.data?.lawyerEmail}</td>
          </tr>
        </tbody>
      </table>
      <div className="pt-10 flex flex-col justify-center items-center gap-2 pb-5">
        <p className="font-bold font-titleFont text-xl text-[#D1B06B]">
          Additional Lawyers{" "}
        </p>
      </div>
      <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
        <thead>
          <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
            <td>Image</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {data?.data?.lawyers.map((l) => (
            <tr key={l?.email} className="text-center">
              <td className="flex justify-center items-center">
                <img className="w-10 h-10 rounded-full" src={l?.image} />
              </td>
              <td>{l?.name}</td>
              <td className="text-[#D1B06B]">{l?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pt-10 flex flex-col justify-center items-center gap-2 pb-5">
        <p className="font-bold font-titleFont text-xl text-[#D1B06B]">
          Other Clients{" "}
        </p>
      </div>
      <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
        <thead>
          <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
            <td>Image</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {data?.data?.clients
            ?.filter((c) => c?.email !== user?.email)
            ?.map((l) => (
              <tr key={l?.email} className="text-center">
                <td className="flex justify-center items-center">
                  <img className="w-10 h-10 rounded-full" src={l?.image} />
                </td>
                <td>{l?.name}</td>
                <td className="text-[#D1B06B]">{l?.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="py-20">
        <UploadImageFiles id={id} />
      </div>
    </div>
  );
};

export default SingleCaseClient;

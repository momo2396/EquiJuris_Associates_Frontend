import { useLocation } from "react-router-dom";
import useGetData from "../../../routes/UseGetData";
import Title from "../../shared/Title";
// import Icon1 from "../../../assets/customicon/icon1";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import UploadImageFiles from "./UploadImageFiles";
import ViewFileClient from "./ViewFileClient";

const SingleCaseClient = () => {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();
  const { data, refetch, isLoading } = useGetData(`/cases/single-case/${id}`);
  const { user } = useContext(AuthContext);
  const paymentInfo = useGetData("/pay/view-payment/" + id);
  return (
    <div className="bg-[#1F2732] min-h-screen px-5">
      <Title heading={data?.data?.title} subHeading={data?.data?.description} />
      <div className="flex justify-center items-center p-10 text-white">
        <ul className="steps steps-vertical">
          <li className="step step-success">Case Started</li>
          {data?.data?.hearingDates &&
            data?.data?.hearingDates.map((h, index) => (
              <li key={h?.date} className="step step-success">{`Hearing date ${
                index + 1
              } (${h?.date})`}</li>
            ))}
          {data?.data?.status === "closed" ? (
            <li className="step step-success">Case Ended</li>
          ) : (
            <li className="step">Case Ended</li>
          )}
        </ul>
      </div>
      <div className="text-white text-center py-10">
        {data?.data?.isPaid === "unpaid" ? (
          <p className="border-1 p-2 border-white">Not paid yet..</p>
        ) : (
          <>
            <p>Transaction ID: {paymentInfo?.data?.data?.transactionID}</p>
            <p>Paid By(email): {paymentInfo?.data?.data?.paidByEmail}</p>
            <p>Paid By(name): {paymentInfo?.data?.data?.paidByName}</p>
          </>
        )}
      </div>
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
        <UploadImageFiles id={id} status={data?.data?.status} />
      </div>
      <div className="py-20">
        <ViewFileClient caseFiles={data?.data?.caseFiles} />
      </div>
    </div>
  );
};

export default SingleCaseClient;

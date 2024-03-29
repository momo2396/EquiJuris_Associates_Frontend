import { useContext, useEffect, useState } from "react";
import useGetData, { backendURL } from "../../../../routes/UseGetData";
import { Link, useLocation } from "react-router-dom";

import Swal from "sweetalert2";
import Title from "../../../shared/Title";
import { MdOutlinePersonAdd } from "react-icons/md";
import TooltipButton from "../../../shared/toolTipButton/TooltipButton";
import Loading from "../../../shared/Loading/Loading";
import OutlineButton from "../../../shared/OutlineButton/OutlineButton";
import { AuthContext } from "../../../providers/AuthProviders";
import { ImCross } from "react-icons/im";
import ViewFiles from "./ViewFiles";
import HearingDates from "./HearingDates";
import ClientDocs from "./ClientDocs";
// import { AuthContext } from "../../../providers/AuthProviders";
const SingleCase = () => {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();
  const [caseClients, setCaseClients] = useState([]);
  const [caseLawyers, setCaseLawyers] = useState([]);
  const [stat, setStat] = useState("");
  const { data, refetch, isLoading } = useGetData(`/cases/single-case/${id}`);
  const usersQuery = useGetData("/users/all-users");
  const paymentInfo = useGetData("/pay/view-payment/" + id);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!isLoading) {
      setCaseClients(data?.data?.clients || []);
      setCaseLawyers(data?.data?.lawyers || []);
      setStat(data?.data?.status);
    }
  }, [isLoading]);

  const handleUpdate = async () => {
    let res = await fetch(backendURL + "/cases/update-case/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        clients: caseClients,
        lawyers: caseLawyers,
        status: stat,
      }),
    });
    const resdata = await res.json();
    refetch();
    Swal.fire("Updated Successfully");
  };
  const handleClose = async () => {
    let res = await fetch(backendURL + "/cases/update-case/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        status: "closed",
      }),
    });
    const resdata = await res.json();
    refetch();
    Swal.fire("Case Closed");
    refetch();
  };
  const handleAddClient = (u) => {
    const exist = caseClients.find((f) => f?.email === u?.email);
    if (exist) {
      return Swal.fire("Client already added");
    } else {
      setCaseClients([
        ...caseClients,
        { name: u?.name, email: u?.email, image: u?.image },
      ]);
    }
  };
  const handleAddLawyer = (u) => {
    const exist = caseLawyers.find((f) => f?.email === u?.email);
    if (exist) {
      return Swal.fire("Lawyer already added");
    } else {
      setCaseLawyers([
        ...caseLawyers,
        { name: u?.name, email: u?.email, image: u?.image },
      ]);
    }
  };
  const handleRemoveClient = (c) => {
    const remaining = caseClients.filter((f) => f?.email !== c?.email);
    setCaseClients(remaining);
  };
  const handleRemoveLawyer = (c) => {
    const remaining = caseLawyers.filter((f) => f?.email !== c?.email);
    setCaseLawyers(remaining);
  };
  if (isLoading) return <Loading />;
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
      <div className="text-white text-center pb-10">
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
      <div className="">
        <div>
          <div className="flex flex-col gap-5">
            <div>
              <div className="dropdown">
                {data?.data?.status !== "closed" && (
                  <div tabIndex={2} role="button">
                    {" "}
                    <TooltipButton>
                      <p className="flex gap-2 items-center">
                        Add client <MdOutlinePersonAdd size={20} />
                      </p>
                    </TooltipButton>
                  </div>
                )}
                <ul
                  tabIndex={2}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg  w-max"
                >
                  {usersQuery?.data?.data?.map((u) => {
                    if (u?.role === "client")
                      return (
                        <button
                          onClick={() => handleAddClient(u)}
                          className="flex gap-4 justify-between w-fit"
                          key={u?._id}
                        >
                          <img
                            src={u?.image}
                            alt="client"
                            className="w-10 h-10 object-cover object-center"
                          />

                          <div className="flex flex-col items-start justify-between">
                            <p>{u?.email}</p>
                            <p className="font-bold">{u?.name}</p>
                          </div>
                        </button>
                      );
                  })}
                </ul>
              </div>
              <p className="text-white text-center">Added Clients</p>
              <div className="text-white flex gap-5 flex-wrap mt-5">
                {caseClients?.map((c) => (
                  <div key={c?.email} className="flex gap-2">
                    <p>{c?.email}</p>
                    {data?.data?.status !== "closed" && (
                      <button
                        className="bg-white p-2 rounded-lg text-black"
                        onClick={() => handleRemoveClient(c)}
                      >
                        <ImCross />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="dropdown">
                {data?.data?.status !== "closed" && (
                  <div tabIndex={2} role="button">
                    {" "}
                    <TooltipButton>
                      <p className="flex gap-2 items-center">
                        Add Lawyer <MdOutlinePersonAdd size={20} />
                      </p>
                    </TooltipButton>
                  </div>
                )}
                <ul
                  tabIndex={2}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg  w-max"
                >
                  {usersQuery?.data?.data?.map((u) => {
                    if (
                      u?.role === "lawyer" &&
                      u?.email !== user?.email &&
                      u?.status === "active"
                    )
                      return (
                        <button
                          onClick={() => handleAddLawyer(u)}
                          className="flex gap-4 justify-between w-fit"
                          key={u?._id}
                        >
                          <img
                            src={u?.image}
                            alt="lawyer"
                            className="w-10 h-10 object-cover object-center"
                          />

                          <div className="flex flex-col items-start justify-between">
                            <p>{u?.email}</p>
                            <p className="font-bold">{u?.name}</p>
                          </div>
                        </button>
                      );
                  })}
                </ul>
              </div>
              <p className="text-white text-center">Added Clients</p>
              <div className="flex gap-5 flex-wrap mt-5 text-white">
                {caseLawyers?.map((c) => (
                  <div key={c?.email} className="flex gap-2">
                    <p>{c?.email}</p>
                    {data?.data?.status !== "closed" && (
                      <button
                        className="bg-white p-2 rounded-lg text-black"
                        onClick={() => handleRemoveLawyer(c)}
                      >
                        <ImCross />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {data?.data?.status !== "closed" && (
            <div className="pt-5">
              <OutlineButton onClick={handleUpdate}>Update</OutlineButton>
            </div>
          )}
        </div>
      </div>
      <div className="pt-5">
        <HearingDates id={id} status={data?.data?.status} />
      </div>
      {data?.data?.status !== "closed" && (
        <div className="pt-5">
          <Link to={`/dashboard/lawyer/caseFile/${id}`}>
            {" "}
            <OutlineButton>Create Case File</OutlineButton>
          </Link>
        </div>
      )}
      <div className="pt-5 pb-10">
        <ViewFiles caseFiles={data?.data?.caseFiles} />
      </div>
      <div className="pt-5 pb-10">
        <ClientDocs clientDocs={data?.data?.clientDocs} />
      </div>
      {stat === "pending" ? (
        <div className="pt-5 pb-10 flex gap-3 justify-end items-center">
          <p className="text-white">Want to Close the Case?</p>
          <OutlineButton onClick={handleClose}>Close</OutlineButton>
        </div>
      ) : (
        <p className="text-white">Case Closed..</p>
      )}
    </div>
  );
};

export default SingleCase;

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
import ViewFiles from "./ViewFiles";
import HearingDates from "./HearingDates";
// import { AuthContext } from "../../../providers/AuthProviders";
const SingleCase = () => {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();
  const [caseClients, setCaseClients] = useState([]);
  const [caseLawyers, setCaseLawyers] = useState([]);
  const { data, refetch, isLoading } = useGetData(`/cases/single-case/${id}`);
  const usersQuery = useGetData("/users/all-users");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!isLoading) {
      setCaseClients(data?.data?.clients || []);
      setCaseLawyers(data?.data?.lawyers || []);
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
      }),
    });
    const resdata = await res.json();
    refetch();
    Swal.fire("Updated Successfully");
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
          <li className="step">Case Ended</li>
        </ul>
      </div>
      <div className="">
        <div>
          <div className="flex flex-col gap-5">
            <div>
              <div className="dropdown">
                <div tabIndex={2} role="button">
                  {" "}
                  <TooltipButton>
                    <p className="flex gap-2 items-center">
                      Add client <MdOutlinePersonAdd size={20} />
                    </p>
                  </TooltipButton>
                </div>
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
              <div className="flex gap-5 flex-wrap mt-5">
                {caseClients?.map((c) => (
                  <button
                    className="bg-white p-2 rounded-lg"
                    key={c?.email}
                    onClick={() => handleRemoveClient(c)}
                  >
                    {c?.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="dropdown">
                <div tabIndex={2} role="button">
                  {" "}
                  <TooltipButton>
                    <p className="flex gap-2 items-center">
                      Add Lawyer <MdOutlinePersonAdd size={20} />
                    </p>
                  </TooltipButton>
                </div>
                <ul
                  tabIndex={2}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg  w-max"
                >
                  {usersQuery?.data?.data?.map((u) => {
                    if (u?.role === "lawyer" && u?.email !== user?.email)
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
              <div className="flex gap-5 flex-wrap mt-5">
                {caseLawyers?.map((c) => (
                  <button
                    className="bg-white p-2 rounded-lg"
                    key={c?.email}
                    onClick={() => handleRemoveLawyer(c)}
                  >
                    {c?.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-5">
            <OutlineButton onClick={handleUpdate}>Update</OutlineButton>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2 text-white">
          <h1>{data?.data?.title}</h1>
        </div> */}
      </div>
      <div className="pt-5">
        <HearingDates id={id} />
      </div>
      {/* <div>
        {mailLoading ? (
          <div>progressing</div>
        ) : (
          <button className="btn" onClick={handleEmail}>
            Send
          </button>
        )}
      </div> */}
      <div className="pt-5">
        <Link to={`/dashboard/lawyer/caseFile/${id}`}>
          {" "}
          <OutlineButton>Create Case File</OutlineButton>
        </Link>
      </div>
      <div className="pt-5 pb-10">
        <ViewFiles caseFiles={data?.data?.caseFiles} />
      </div>
    </div>
  );
};

export default SingleCase;

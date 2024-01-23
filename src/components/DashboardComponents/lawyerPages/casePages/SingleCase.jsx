import { useState } from "react";
import useGetData from "../../../../routes/UseGetData";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Title from "../../../shared/Title";
import { MdOutlinePersonAdd } from "react-icons/md";
import TooltipButton from "../../../shared/toolTipButton/TooltipButton";
// import { AuthContext } from "../../../providers/AuthProviders";
const SingleCase = () => {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();
  const [mailLoading, setMailLoading] = useState(false);
  const [caseClients, setCaseClients] = useState([]);
  const [caseLawyers, setCaseLawyers] = useState([]);
  const { data } = useGetData(`/cases/single-case/${id}`);
  const usersQuery = useGetData("/users/all-users");
  const handleEmail = async () => {
    const clients = [
      {
        name: "Momo",
        email: "foyazunnesamomo.345@gmail.com",
      },
      {
        name: "Tomo",
        email: "foyazunnesaalammomo@gmail.com",
      },
      {
        name: "Colossus",
        email: "sayemazizchy@gmail.com",
      },
    ];

    setMailLoading(true);
    clients?.forEach(async (c) => {
      const emailData = {
        client: c?.name,
        date: "12-01-24",
        time: "9:00 AM",
        lawyer: "Foyazunnesa Alam",
        designation: "Senior Lawyer",
        clientEmail: c?.email,
      };
      await emailjs.send(
        import.meta.env.VITE_emailJSServiceID,
        import.meta.env.VITE_emailJSTemplateID,
        emailData,
        import.meta.env.VITE_emailJSPublicKey
      );
    });
    Swal.fire("Email has been sent");
    setMailLoading(false);
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
  return (
    <div className="bg-[#1F2732] min-h-screen px-5">
      <Title heading={data?.data?.title} subHeading={data?.data?.description} />
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
                    if (u?.role === "lawyer")
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
        </div>
        {/* <div className="flex flex-col gap-2 text-white">
          <h1>{data?.data?.title}</h1>
        </div>
      </div>
      <div> */}
        {/* <input type="date" />
        <input type="time" /> */}
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
    </div>
  );
};

export default SingleCase;

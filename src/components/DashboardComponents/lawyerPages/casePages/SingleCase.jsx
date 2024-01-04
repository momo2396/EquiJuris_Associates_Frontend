import { useState } from "react";
import useGetData from "../../../../routes/UseGetData";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import { AuthContext } from "../../../providers/AuthProviders";
const SingleCase = () => {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();
  const [client, setClient] = useState([{ email: "" }]);
  const [mailLoading, setMailLoading] = useState(false);
  const { data } = useGetData(`/cases/single-case/${id}`);
  const handleClick = () => {
    setClient([...client, { email: "" }]);
  };
  const handleChange = (e, i) => {
    const onChangeVal = [...client];
    onChangeVal[i].email = e.target.value;
    setClient(onChangeVal);
  };
  const handleDelete = (i) => {
    const deleteVal = [...client];
    deleteVal.splice(i, 1);
    setClient(deleteVal);
  };
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
  return (
    <>
      <div className="bg-[#1F2732] flex flex-row gap-5">
        <div>
          <button onClick={handleClick} className="btn">
            add client
          </button>
          <div>
            {client?.map((val, i) => (
              <div key={i} className="flex gap-5 py-2 ">
                <input
                  className="border-2 border-black"
                  type="email"
                  value={val.email}
                  // name={`email${i}`}
                  onChange={(e) => handleChange(e, i)}
                />
                <button className="btn" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h1>{data?.data?.title}</h1>
        </div>
      </div>
      <div>
        <input type="date" />
        <input type="time" />
      </div>
      <div>
        {mailLoading ? (
          <div>progressing</div>
        ) : (
          <button className="btn" onClick={handleEmail}>
            Send
          </button>
        )}
      </div>
    </>
  );
};

export default SingleCase;

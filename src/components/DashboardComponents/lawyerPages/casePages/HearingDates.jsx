import { useEffect, useState } from "react";
import InputButton from "../../../shared/InputButton/InputButton";
import Icon1 from "../../../../assets/customicon/icon1";
import Swal from "sweetalert2";
import useGetData, { backendURL } from "../../../../routes/UseGetData";
import axios from "axios";
import Loading from "../../../shared/Loading/Loading";
import emailjs from "@emailjs/browser";
import OutlineButton from "../../../shared/OutlineButton/OutlineButton";
const HearingDates = ({ id, status }) => {
  const [mailLoading, setMailLoading] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState(false);
  const [hearingDate, setHearingDate] = useState([]);
  const { data, refetch, isLoading } = useGetData(`/cases/single-case/${id}`);
  useEffect(() => {
    if (data?.data?.hearingDates) {
      setHearingDate(data?.data?.hearingDates);
    } else setHearingDate([]);
  }, [isLoading]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const time = form.time.value;
    const hearingDates = [
      ...hearingDate,
      {
        date: date,
        time: time,
      },
    ];

    try {
      const response = await axios.put(
        backendURL + "/cases/update-case/" + id,
        {
          hearingDates: hearingDates,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.data?.success) {
        Swal.fire("Good job!", "Date has been Inserted", "success");
        form.reset();
        refetch();
        setEmail(true);
      } else {
        Swal.fire("ERROR!", "Date Insertion Failed. Try Again.", "error");
      }
    } catch (error) {
      Swal.fire("ERROR!", error.message, "error");
    }
  };
  console.log(data?.data?.clients, date, time);
  const handleEmail = async () => {
    setMailLoading(true);
    let allLawyers = [];
    data?.data?.lawyers?.forEach((f) => {
      allLawyers.push(f?.email);
    });
    data?.data?.clients?.forEach(async (c) => {
      const emailData = {
        client: c?.name,
        date: date,
        time: time,
        lawyer: data?.data?.lawyerEmail,
        designation: "Senior Lawyer",
        clientEmail: c?.email,
        allLawyers: data?.data?.lawyers ? allLawyers?.join(", ") : "",
      };
      await emailjs.send(
        import.meta.env.VITE_emailJSServiceID,
        import.meta.env.VITE_emailJSTemplateID,
        emailData,
        import.meta.env.VITE_emailJSPublicKey
      );
    });
    Swal.fire("Email has been sent");
    setEmail(false);
    setMailLoading(false);
  };

  if (isLoading) return <Loading></Loading>;
  return (
    <div className="backdrop-blur-xl px-5 py-20 border-2 border-slate-400 rounded-xl">
      <div className="flex flex-col justify-center items-center gap-2 pb-5">
        <p className="font-bold font-titleFont text-2xl text-[#D1B06B]">
          Hearing Dates{" "}
        </p>
        <Icon1></Icon1>
      </div>
      <div className="flex flex-wrap gap-5 justify-center ">
        {hearingDate?.map((h, index) => (
          <div
            key={h?.date}
            className="border-2 border-white rounded-2xl text-white w-fit p-2 flex gap-2"
          >
            <p className="">
              {index + 1}: {h?.date}
            </p>
            <p>{h?.time}</p>
          </div>
        ))}
      </div>
      <div className="">
        {status !== "closed" && (
          <form
            onSubmit={handleUpdate}
            className="w-full p-8 mr-auto flex flex-col gap-3 justify-center items-center "
          >
            <div className="flex gap-5 justify-center my-5">
              <input
                className="input"
                onChange={(e) => setDate(e.target.value)}
                type="date"
                name="date"
                required
              />
              <input
                className="input"
                onChange={(e) => setTime(e.target.value)}
                type="time"
                name="time"
                required
              />
            </div>
            <InputButton>Add</InputButton>
          </form>
        )}
      </div>
      {email && (
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
          <p className="text-white">
            Notify your clients about upcoming hearing date
          </p>
          <OutlineButton onClick={handleEmail}>Notify</OutlineButton>
        </div>
      )}
    </div>
  );
};

export default HearingDates;

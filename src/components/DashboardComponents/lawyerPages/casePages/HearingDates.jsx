import { useEffect, useState } from "react";
import InputButton from "../../../shared/InputButton/InputButton";
import Icon1 from "../../../../assets/customicon/icon1";
import Swal from "sweetalert2";
import useGetData, { backendURL } from "../../../../routes/UseGetData";
import axios from "axios";
import Loading from "../../../shared/Loading/Loading";
import emailjs from "@emailjs/browser";
const HearingDates = ({ id }) => {
  const [mailLoading, setMailLoading] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
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
        handleEmail();
        form.reset();
      } else {
        Swal.fire("ERROR!", "Date Insertion Failed. Try Again.", "error");
      }
    } catch (error) {
      Swal.fire("ERROR!", error.message, "error");
    }
    refetch();
  };
  console.log(data?.data?.clients, date, time);
  const handleEmail = async () => {
    setMailLoading(true);
    data?.data?.clients?.forEach(async (c) => {
      const emailData = {
        client: c?.name,
        date: date,
        time: time,
        lawyer: data?.data?.lawyerEmail,
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

  if (isLoading) return <Loading></Loading>;
  return (
    <div className="backdrop-blur-xl px-5 py-20 border-2 border-slate-400 rounded-xl">
      <div className="flex flex-col justify-center items-center gap-2 pb-5">
        <p className="font-bold font-titleFont text-2xl text-[#D1B06B]">
          Hearing Dates{" "}
        </p>
        <Icon1></Icon1>
      </div>
      <div className="flex flex-wrap gap-5">
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
        <form
          onSubmit={handleUpdate}
          className="w-full p-8 mr-auto flex flex-col gap-3 justify-center items-center "
        >
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
          />
          <input
            onChange={(e) => setTime(e.target.value)}
            type="time"
            name="time"
          />
          <InputButton>Add</InputButton>
        </form>
      </div>
    </div>
  );
};

export default HearingDates;

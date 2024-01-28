import { useContext } from "react";
import { backendURL } from "../../../routes/UseGetData";
import OutlineButton from "../../shared/OutlineButton/OutlineButton";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation } from "react-router";

const Payment = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();
  const handlePayment = () => {
    const data = {
      caseID: id,
      name: user?.name,
      email: user?.email,
    };
    fetch(backendURL + "/pay", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result?.url);
        console.log(result?.url);
      });
  };
  return (
    <div
      className={`py-36  bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')]  bg-opacity-60 bg-cover bg-center bg-[#161D27] text-white`}
    >
      <section className="backdrop-blur-xl px-5 mx-10 border-2 border-slate-400 rounded-xl">
        <div className="flex justify-center items-center mx-auto appointment_background py-20">
          <div className="text-center container w-full m-auto my-4 px-4 lg:px-20">
            <h1 className="text-white font-titleFont text-4xl">
              Pay for the case <br />
            </h1>
            <h3 className="text-white font-generalFont">Hi, i am payment</h3>
            <div className="pt-7 flex justify-center items-center">
              <OutlineButton onClick={handlePayment}>Pay</OutlineButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;

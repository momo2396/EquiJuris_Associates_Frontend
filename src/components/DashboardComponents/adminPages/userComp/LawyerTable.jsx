import useGetData, { backendURL } from "../../../../routes/UseGetData";
// import Loading from "../../../shared/Loading/Loading";
import { TbListDetails } from "react-icons/tb";
import OutlineButton from "../../../shared/OutlineButton/OutlineButton";
import Icon1 from "../../../../assets/customicon/icon1";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";
const LawyerTable = () => {
  const { data } = useGetData("/users/all-users");
  const { user } = useContext(AuthContext);
  const handleCheck = async (e) => {
    let status = "";
    if (e?.target?.checked === true) status = "active";
    else status = "inactive";
    try {
      await axios.put(
        backendURL +
          `/users/status-update?status=${status}&email=${user?.email}`
      );
      Swal.fire("The status has been changed");
    } catch (err) {
      Swal.fire("Something went wrong");
    }
  };

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div className="overflow-x-auto bg-[#1F2732] mx-5">
      <div className="flex flex-col justify-center items-center gap-2 pb-5">
        <p className="font-bold font-titleFont text-2xl text-[#D1B06B]">
          Lawyers{" "}
        </p>
        <Icon1></Icon1>
      </div>

      <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
        <thead>
          <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
            <td>Name</td>
            <td>Email</td>
            <td>License</td>
            <td>Status</td>
            <td>View</td>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((l) => {
            if (l?.role === "lawyer")
              return (
                <tr className="text-center">
                  <td>{l?.name}</td>
                  <td>{l?.email}</td>
                  <td>{l?.license}</td>
                  <td>
                    <input
                      defaultChecked={l?.status === "active" ? true : false}
                      type="checkbox"
                      className="toggle toggle-warning"
                      onChange={handleCheck}
                    />
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <OutlineButton>
                        <TbListDetails />
                      </OutlineButton>
                    </div>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LawyerTable;

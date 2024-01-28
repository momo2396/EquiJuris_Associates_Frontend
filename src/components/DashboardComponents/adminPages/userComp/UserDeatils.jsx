import { useLocation } from "react-router-dom";
import useGetData, { backendURL } from "../../../../routes/UseGetData";

const UserDeatils = () => {
  const location = useLocation();
  const { pathname } = location;
  const email = pathname.split("/").pop();
  const { data } = useGetData(backendURL + `/users/single-user/${email}`);
  console.log(`/users/single-user/?email=${email}
  `);
  console.log(data?.data);
  return (
    <div className="overflow-x-auto bg-[#1F2732] mx-5">
      <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
        <thead>
          <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
            <td>Name</td>
            <td>Email</td>
            <td>License</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>{data?.data?.name}</td>
            <td>{data?.data?.email}</td>
            <td>{data?.data?.license}</td>
            <td>{data?.data?.status}</td>
          </tr>
          );
        </tbody>
      </table>
    </div>
  );
};

export default UserDeatils;

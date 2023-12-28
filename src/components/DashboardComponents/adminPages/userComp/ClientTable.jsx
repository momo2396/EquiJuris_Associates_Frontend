import useGetData from "../../../../routes/UseGetData";
import Loading from "../../../shared/Loading/Loading";
import { TbListDetails } from "react-icons/tb";
import OutlineButton from "../../../shared/OutlineButton/OutlineButton";
import Icon1 from "../../../../assets/customicon/icon1";
const ClientTable = () => {
  const { data, isLoading } = useGetData("/users/all-users");
  if (isLoading) {
    <Loading />;
  }
  return (
    <div className="overflow-x-auto bg-[#1F2732] mt-20 mx-5">
      <div className="flex flex-col justify-center items-center gap-2 pb-5">
        <p className="font-bold font-titleFont text-2xl text-[#D1B06B]">
          Clients{" "}
        </p>
        <Icon1></Icon1>
      </div>
      <table className="table table-xs   text-gray-400 table-pin-rows table-pin-cols">
        <thead>
          <tr className="text-center z-0 bg-[#1F2732] text-white text-lg">
            <td>Name</td>
            <td>Email</td>
            <td>View</td>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((l) => {
            if (l?.role === "client")
              return (
                <tr className="text-center">
                  <td>{l?.name}</td>
                  <td>{l?.email}</td>
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

export default ClientTable;

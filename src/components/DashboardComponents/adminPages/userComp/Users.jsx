import ClientTable from "./ClientTable";
import LawyerTable from "./LawyerTable";

const Users = () => {
  return (
    <div
      className={`py-36  bg-[url('https://i.ibb.co/vL9HCtH/scale02.jpg')]  bg-cover bg-center bg-[#161D27] text-white`}
    >
      <div className="backdrop-blur-xl px-5 py-20 border-2 border-slate-400 rounded-xl mx-5">
        <LawyerTable />
        <div className="pt-20"></div>
        <ClientTable />
      </div>
    </div>
  );
};

export default Users;

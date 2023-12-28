import { Link } from "react-router-dom";
import logo from "../../assets/other_images/eja.png";

const DashboardNavbar = () => {
  return (
    <div className="navbar bg-[#1F2732] w-full text-white flex">
      <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#d1b06b]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <Link
        to="/"
        className="items-center flex gap-2 btn btn-ghost normal-case text-xl"
      >
        <img src={logo} className="h-full" alt="" />
        <div className="flex flex-col items-start text-sm text-[#d1b06b] font-titleFont font-bold">
          <p>Equijuris</p>
          <p>Associates</p>
        </div>
      </Link>
    </div>
  );
};

export default DashboardNavbar;

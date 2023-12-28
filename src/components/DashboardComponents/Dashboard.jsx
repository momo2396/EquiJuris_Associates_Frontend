import { Outlet } from "react-router";
import DashboardNavbar from "./DashboardNavbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const lawyerMenu = (
    <>
      <li>
        <Link
          to="/dashboard/admin/addPracticeArea"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>Add Practice Area</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/admin/allUsers"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>All Users</span>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <DashboardNavbar />
      <div className="">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-[#d1b06b] text-gray-500 text-base">
              {user?.role === "lawyer" && lawyerMenu}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

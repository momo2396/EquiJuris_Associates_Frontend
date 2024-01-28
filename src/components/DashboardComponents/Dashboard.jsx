import { Outlet } from "react-router";
import DashboardNavbar from "./DashboardNavbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router-dom";
import { FaPlus, FaUser } from "react-icons/fa";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const clientMenu = (
    <>
    <li>
        <Link
          to="/dashboard/profile"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaUser />
          <span>Profile</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/client/myCases"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>My Cases</span>
        </Link>
      </li>
    </>
  );
  const lawyerMenu = (
    <>
    <li>
        <Link
          to="/dashboard/profile"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaUser />
          <span>Profile</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/lawyer/myAppointments"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>My Appointments</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/lawyer/myAppointments"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>My Appointments</span>
        </Link>
      </li>
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
          to="/dashboard/client/myCases"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>My Cases</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/lawyer/addBlog"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>Add Blog</span>
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
      <li>
        <Link
          to="/dashboard/lawyer/createCase"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>Create case</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/lawyer/myCases"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>My Cases</span>
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/client/payment"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <FaPlus />
          <span>Pay</span>
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
              {user?.role === "client" && clientMenu}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

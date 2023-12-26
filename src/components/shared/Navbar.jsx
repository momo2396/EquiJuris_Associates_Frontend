import { Link, NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton/LogoutButton";
import { MdLogin } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import logo from "../../assets/other_images/eja.png";
const Navbar = () => {
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("access_token");
      })
      .catch((error) => console.log(error));
  };
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-[#1F2732] sticky top-0 w-full left-0 text-white z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={0}
            className="relative menu menu-sm dropdown-content mt-3 p-2 shadow bg-black backdrop-blur-lg z-50 rounded-box w-52 text-[#d1b06b] font-titleFont font-bold"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/ourAttorneys">Our Attorneys</NavLink>
            </li>
            <li>
              <NavLink to="/practiceAreas">Practice Areas</NavLink>
              {/* <ul className="p-2">
                <li>
                  <a>Corporate and Commercial Law</a>
                </li>
                <li>
                  <a>Civil Law</a>
                </li>
                <li>
                  <a>Criminal Law</a>
                </li>
                <li>
                  <a>Intellectual Property Law</a>
                </li>
                <li>
                  <a>Labor Law</a>
                </li>
                <li>
                  <a>Banking and Finance Law</a>
                </li>
                <li>
                  <a>Administrative Law</a>
                </li>
                <li>
                  <a>Family Law</a>
                </li>
                <li>
                  <a>Tax Law</a>
                </li>
              </ul> */}
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
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
      <div className="text-[#d1b06b] font-bold font-titleFont navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/ourAttorneys">Our Attorneys</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                {" "}
                <NavLink to="/practiceAreas">Practice Areas</NavLink>
              </summary>
              {/* <ul className="p-2 bg-black backdrop-blur-lg">
                <li>
                  <a>Corporate and Commercial Law</a>
                </li>
                <li>
                  <a>Civil Law</a>
                </li>
                <li>
                  <a>Criminal Law</a>
                </li>
                <li>
                  <a>Intellectual Property Law</a>
                </li>
                <li>
                  <a>Labor Law</a>
                </li>
                <li>
                  <a>Banking and Finance Law</a>
                </li>
                <li>
                  <a>Administrative Law</a>
                </li>
                <li>
                  <a>Family Law</a>
                </li>
                <li>
                  <a>Tax Law</a>
                </li>
              </ul> */}
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        {!user ? (
          <>
            <NavLink
              to="/login"
              className="p-3 bg-transparent text-2xl border-[#d1b06b] text-[#d1b06b] hover:bg-[#d1b06b] hover:border-[#d1b06b] hover:text-white rounded-full rounded-tr-[10px] border-2 shadow-[#d1b16b64] shadow-md"
            >
              <MdLogin />
            </NavLink>
          </>
        ) : (
          <>
            <p>{user?.email}</p>
            <LogoutButton onClick={handleLogOut} />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

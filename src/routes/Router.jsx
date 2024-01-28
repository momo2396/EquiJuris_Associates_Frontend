import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Blogs from "../pages/Blogs";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
import PracticeAreas from "../pages/PracticeAreas";
import Contact from "../pages/Contact";
import OurAttorneys from "../pages/OurAttorneys";
import AddPracticeArea from "../components/DashboardComponents/adminPages/AddPracticeArea";
import Dashboard from "../components/DashboardComponents/Dashboard";
import RoleCheck from "../components/providers/RoleCheck";
import PrivateRoute from "../components/providers/PrivateRoute";
import Users from "../components/DashboardComponents/adminPages/userComp/Users";
import CreateCase from "../components/DashboardComponents/lawyerPages/casePages/CreateCase";
import MyCases from "../components/DashboardComponents/lawyerPages/casePages/MyCases";
import SingleCase from "../components/DashboardComponents/lawyerPages/casePages/SingleCase";
import UserDeatils from "../components/DashboardComponents/adminPages/userComp/UserDeatils";
import Payment from "../components/DashboardComponents/clientPages/Payment";
import MyCasesClients from "../components/DashboardComponents/clientPages/MyCasesClients";
import SingleCaseClient from "../components/DashboardComponents/clientPages/SingleCaseClient";
import CreateCaseFile from "../components/DashboardComponents/lawyerPages/casePages/CreateCaseFile";
import AddBlog from "../components/DashboardComponents/lawyerPages/blogPages/AddBlog";
import SingleBlog from "../pages/SingleBlog";
import MyAppointments from "../components/DashboardComponents/lawyerPages/MyAppointments";
import AllCases from "../components/DashboardComponents/adminPages/AllCases";
import UserProfile from "../components/DashboardComponents/UserProfile";
import MyAppointments from "../components/DashboardComponents/lawyerPages/MyAppointments"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog></SingleBlog>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/practiceAreas",
        element: <PracticeAreas></PracticeAreas>,
      },
      {
        path: "/ourAttorneys",
        element: <OurAttorneys></OurAttorneys>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <p className="text-center text-3xl font-bold mt-20">Select option </p>
        ),
      },
      {
        path: "/dashboard/admin/addPracticeArea",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <AddPracticeArea></AddPracticeArea>
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/admin/singleUser/:email",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <UserDeatils></UserDeatils>
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/admin/allUsers",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <Users></Users>
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/client/myCases",
        element: (
          <RoleCheck role={"client"}>
            {" "}
            <MyCasesClients></MyCasesClients>
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/client/payment/:id",
        element: (
          <RoleCheck role={"client"}>
            {" "}
            <Payment></Payment>
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/admin/allCases",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <AllCases />
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/lawyer/createCase",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <CreateCase />
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/lawyer/addBlog",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <AddBlog></AddBlog>
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/lawyer/myCases",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <MyCases />
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/lawyer/singleCase/:id",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <SingleCase />
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/client/singleCase/:id",
        element: (
          <RoleCheck role={"client"}>
            {" "}
            <SingleCaseClient />
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/lawyer/caseFile/:id",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <CreateCaseFile />
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/lawyer/myAppointments",
        element: (
          <RoleCheck role={"lawyer"}>
            {" "}
            <MyAppointments />
          </RoleCheck>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);

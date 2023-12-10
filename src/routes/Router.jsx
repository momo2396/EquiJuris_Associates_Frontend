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
]);

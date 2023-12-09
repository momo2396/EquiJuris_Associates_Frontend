import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Root from "./pages/Root.jsx";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import PracticeAreas from "./pages/PracticeAreas";
import OurAttorneys from "./pages/OurAttorneys";
import Contact from "./pages/Contact";
import BlogSingle from "./pages/BlogSingle";
const router = createBrowserRouter([
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
      {
        path: "/blogSingle",
        element: <BlogSingle></BlogSingle>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

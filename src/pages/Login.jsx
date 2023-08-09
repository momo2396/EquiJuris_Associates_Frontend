import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import LoginForm from "../components/LoginComponents/LoginForm";

const Login = () => {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;

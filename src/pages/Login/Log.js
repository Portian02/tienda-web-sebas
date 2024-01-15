import React from "react";
import Form from "../../components/Form/input";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../components/navigation";
import { useNavigate } from "react-router-dom";
import "./log.css";
import Carousels from "../../components/carrusel";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (userInfo) => {
    setAuth(userInfo);
    navigate("/");
  };

  return (
    <>
      <Navigation />

      <div className="container-carousel">
        <Carousels />
      </div>
      <center>
        <Form onSubmit={handleLogin} />
      </center>
    </>
  );
};

export default Login;

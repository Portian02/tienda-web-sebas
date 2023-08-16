import { Routes, Route } from "react-router-dom";
import React from "react";
import Inicio from "../../pages/Home/Inicio";
import Login from "../../pages/Login/Log";
import NoPage from "../../pages/Nopage/Nopage";
import PrivateRoute from "../routes/privateRoute";
import Details from "../../pages/details/Profile";
import Sell from "../../pages/Sell/add";
const Routing = () => {
  return (
    <Routes>
      {/* SOLO SE MOSTRARÁN AL INICIAR SESIÓN  */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/details" element={<Details />} />
        <Route path="/sell" element={<Sell />} />
      </Route>

      <Route path="/Sesion" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;

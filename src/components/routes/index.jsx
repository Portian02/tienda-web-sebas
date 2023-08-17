import { Routes, Route } from "react-router-dom";
import React from "react";
import Inicio from "../../pages/Home/Inicio";
import Login from "../../pages/Login/Log";
import NoPage from "../../pages/Nopage/Nopage";
import PrivateRoute from "../routes/privateRoute";
import Details from "../../pages/details/Profile";
import Sell from "../../pages/Sell/add";
import Princess from "../../pages/Products/princess";
import Pixar from "../../pages/Products/pixar";
import Villians from "../../pages/Products/villians";
import CharactersDisney from "../../pages/Products/characters";
const Routing = () => {
  return (
    <Routes>
      {/* SOLO SE MOSTRARÁN AL INICIAR SESIÓN  */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/princess" element={<Princess />} />
        <Route path="/pixar" element={<Pixar />} />
        <Route path="/villians" element={<Villians />} />
        <Route path="/characters Disney" element={<CharactersDisney />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;

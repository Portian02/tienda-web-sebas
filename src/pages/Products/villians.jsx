import React from "react";
import Navigation from "../../components/navigation";
import DisneyVillians from "../../components/villians";
import Carousels from "../../components/carrusel";

const Villians = () => {
  return (
    <div>
      <Navigation />
      <Carousels />
      <h2>Disney´s Villians</h2>

      <DisneyVillians />
    </div>
  );
};

export default Villians;

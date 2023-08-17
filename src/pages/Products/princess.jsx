import React from "react";
import Navigation from "../../components/navigation";
import ShowPrincess from "../../components/princess";
import Carousels from "../../components/carrusel";

const Princess = () => {
  return (
    <div>
      <Navigation />
      <Carousels />
      <h2>Disney´s Princess</h2>

      <ShowPrincess />

    </div>
  );
};

export default Princess;

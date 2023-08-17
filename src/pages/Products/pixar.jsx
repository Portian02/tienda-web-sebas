import React from "react";
import Navigation from "../../components/navigation";
import ShowCharcatersPixar from "../../components/Pixar";
import Carousels from "../../components/carrusel";

const Pixar = () => {
  return (
    <div>
      <Navigation />
      <Carousels />
      <h2>Pixar Characters</h2>

      <ShowCharcatersPixar />
    </div>
  );
};

export default Pixar;

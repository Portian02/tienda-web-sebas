import React from "react";
import Navigation from "../../components/navigation";
import ShowCharcaters from "../../components/disney_characters";
import Carousels from "../../components/carrusel";
const CharactersDisney = () => {
  return (
    <>
      <Navigation />
      <Carousels />
      <h2>Disney Characters</h2>
      <ShowCharcaters />
    </>
  );
};

export default CharactersDisney;

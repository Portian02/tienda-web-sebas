import React from "react";
import Navigation from "../../components/navigation";
import AddNewProduct from "../../components/add/add";
const Sell = () => {
  return (
    <>
      <Navigation />

      <div className="conatiner-cards">
        <AddNewProduct />
      </div>
    </>
  );
};

export default Sell;

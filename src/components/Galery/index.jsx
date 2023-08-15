import React from "react";
import {productsData} from "../../API/Users";
const ShowProducts = () => {
  return (
    <div>
      {productsData.map((products) => {
        console.log({ productsData });
        return (
          <div>
            <p>{products[0]?.character}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProducts;

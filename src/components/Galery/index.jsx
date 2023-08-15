import React from "react";
import {productsData} from "../../API/Users";
const ShowProducts = () => {
  return (
    <div>
      {productsData.map((products) => {
        console.log({ productsData });
        return (
          <div>
            <p>{products.character}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProducts;

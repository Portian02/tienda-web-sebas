import React from "react";
import { funkoData } from "../../API/products";
import { Link } from "react-router-dom";

const DisneyVillians = () => {
  return (
    <div className="container-products">
      {funkoData.villians.map((products) => {
        return (
          <div key={products.id} className="card-Product">
            {/* <p className="poke-id-back">#{pokemon.id}</p> */}
            <h4 className="product-Info">{products.title}</h4>
            <div className="funko-imagen">
              <Link to={`details/${products.id}`}>
                <img src={products.img} alt={products.character} />
              </Link>
            </div>
            <div className="product-Info">
              <div className="product-name">
                <h2 className="product-names">{products.character}</h2>
              </div>
              <p className="id-product">
                {products.currency}
                {products.value}
              </p>{" "}
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default DisneyVillians;

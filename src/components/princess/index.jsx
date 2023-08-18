import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../API/Users";

const princess = productsData.items[0].type;

const ShowPrincess = () => {
  return (
    <div className="container-products">
      {productsData.items.map((products) => {
        if (products.type === princess) {
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
        }
      })}
      ;
    </div>
  );
};

export default ShowPrincess;

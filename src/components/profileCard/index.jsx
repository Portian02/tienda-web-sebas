import "./styles.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { productsData } from "../../API/Users";
import { useState } from "react";
const ProfileCard = () => {
  const navigate = useNavigate();
  const pages = 3;
  const [page] = useState(0);
  const param = useParams();
  // console.log(productsData.items[param.id]);
  // console.log(param.id);
  console.log(productsData.items[0].type);
  const backBtn = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const princess = productsData.items[0].type;
  const pixar = productsData.items[32].type;
  const villians = productsData.items[48].type;
  const disney = productsData.items[16].type;

  console.log({ princess });

  return (
    <div border="info" className="container-details ">
      <Card body className="card">
        <div className="card-details">
          <button className="info-btn" onClick={backBtn}>
            <h1 className="text-btn">X</h1>
          </button>
          {/* <p className="poke-id-back">#{pokemon.id}</p> */}
          <h1 className="details-Info-title">
            {productsData.items[param.id].title}
          </h1>
          <div className="details-imagen">
            <img
              src={productsData.items[param.id].img}
              alt={productsData.items[param.id].character}
            />
          </div>
          <br />
          <h1 className="details-names">
            {productsData.items[param.id].character}
          </h1>
          <br />
          <div className="details-Info">
            <div className="details-name"></div>
            <p className="id-details">
              {" "}
              Price:
              {productsData.items[param.id].currency}
              {productsData.items[param.id].value}
            </p>{" "}
            <p className="id-details">
              Weight: {productsData.items[param.id].weight}g
            </p>
            <p className="id-details">
              Height: {productsData.items[param.id].height}cm
            </p>
          </div>
          <div className="description">
            <p>
              <h3>Description:</h3>"{productsData.items[param.id].description}"
            </p>
          </div>
        </div>
      </Card>
      <br />
      <h2>Related Products</h2>
      <br />
      <div className="container-related">
        {productsData.items
          .slice(page * pages, page * pages + pages)
          .map((products) => {
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
                    {/* <p className="id-product">
                  {products.currency}
                  {products.value}
                </p>{" "} */}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default ProfileCard;

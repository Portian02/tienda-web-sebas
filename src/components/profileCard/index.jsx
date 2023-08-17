import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { productsData } from "../../API/Users";

const ProfileCard = ({}) => {
  const navigate = useNavigate();

  const param = useParams();
  console.log(productsData.items[param.id]);
  console.log(param.id);

  const backBtn = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div border="info" className="container-details ">
        <Card body>
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
            <div className="details-name">
            </div>
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
      </div>
  );
};

export default ProfileCard;

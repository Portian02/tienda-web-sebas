import Carousel from "react-bootstrap/Carousel";
import { productsData } from "../../API/Users";
import "./style.css";

function Carousels() {
  return (
    <Carousel data-bs-theme="dark" className="carusel">
      <Carousel.Item className="container-image" interval={1000}>
        <img
          className="d-block w-100"
          src={productsData.items[0].img}
          alt={productsData.items[0].character}
        />
        <Carousel.Caption>
          <h5>{productsData.items[0].character}</h5>
          <p>{productsData.items[0].title}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="container-image" interval={1000}>
        <img
          className="d-block w-100"
          src={productsData.items[25].img}
          alt={productsData.items[25].character}
        />
        <Carousel.Caption>
          <h5>{productsData.items[25].character}</h5>
          <p>{productsData.items[25].title}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="container-image" interval={1000}>
        <img
          className="d-block w-100"
          src={productsData.items[40].img}
          alt={productsData.items[40].character}
        />
        <Carousel.Caption>
          <h5>{productsData.items[40].character}</h5>
          <p>{productsData.items[40].title}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="container-image" interval={1000}>
        <img
          className="d-block w-100"
          src={productsData.items[55].img}
          alt={productsData.items[55].character}
        />
        <Carousel.Caption>
          <h5>{productsData.items[55].character}</h5>
          <p>{productsData.items[55].title}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="container-image" interval={1000}>
        <img
          className="d-block w-100"
          src={productsData.items[10].img}
          alt={productsData.items[10].character}
        />
        <Carousel.Caption>
          <h5>{productsData.items[10].character}</h5>
          <p>{productsData.items[10].title}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="container-image" interval={1000}>
        <img
          className="d-block w-100"
          src={productsData.items[29].img}
          alt={productsData.items[29].character}
        />
        <Carousel.Caption>
          <h5>{productsData.items[29].character}</h5>
          <p>{productsData.items[29].title}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="container-image" interval={1000}>
        <img
          className="d-block w-100"
          src={productsData.items[46].img}
          alt={productsData.items[46].character}
        />
        <Carousel.Caption>
          <h5>{productsData.items[46].character}</h5>
          <p>{productsData.items[46].title}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="container-image">
        <img
          className="d-block w-100"
          src={productsData.items[59].img}
          alt={productsData.items[59].character}
        />
        <Carousel.Caption>
          <h5>{productsData.items[59].character}</h5>
          <p>{productsData.items[59].title}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;

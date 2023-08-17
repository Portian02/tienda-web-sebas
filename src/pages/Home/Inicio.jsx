///////////////////////IMPORTACIONES////////////////////////////////

import Navigation from "../../components/navigation";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ShowProducts from "../../components/Galery";
import Carousels from "../../components/carrusel";
import "./home.css";
////////////////////////IMPORTACIONES////////////////////////////////
//
//
//
////////////////////////////////////FUNCIO DE HOME///////////////////////////////
const Inicio = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
    setAuth({});
    navigate("/login");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Navigation />
      <div className="container-carousel">
        <Carousels />
      </div>

      {auth.user ? (
        <>
          <div className="conatiner-cards">
            <div className="main">
              <ShowProducts />
            </div>
          </div>
          {/* <button onClick={Logout}>Cerrar Sesión</button> */}
        </>
      ) : (
        <>
          <button onClick={goToLogin}>Iniciar Sesión</button>
        </>
      )}
    </>
  );
};
////////////////////////////////////FUNCIO DE HOME///////////////////////////////
export default Inicio;

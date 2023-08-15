///////////////////////IMPORTACIONES////////////////////////////////

import Navigation from "../../components/navigation";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ShowProducts from "../../components/Galery";
////////////////////////IMPORTACIONES////////////////////////////////
////////////////////////////////////FUNCIO DE HOME///////////////////////////////
const Inicio = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
    setAuth({});
    navigate("/Sesion");
  };

  const goToLogin = () => {
    navigate("/Sesion");
  };

  return (
    <>
      <Navigation />
      {auth.user ? (
        <>
          <center>
            <h1>Bienvenido {auth.user}</h1>
            {/* <img
              src="https://thumbs.gfycat.com/OddBiodegradableAmphiuma-max-1mb.gif"
              alt=""
            /> */}
            <ShowProducts />
            <br />
            <br />
            <button onClick={Logout}>Cerrar Sesión</button>
          </center>
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

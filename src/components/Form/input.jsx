import { useState } from "react";
import "./Input.css";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
/////////////////////////////////////////////////FUNCION FORMULARIO////////////////////////////////////////////////////////////////////////////77
const Form = ({ onSubmit }) => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  //  const[showPwd, setShowPwd] = useState(false)

  //  const togglePwd=()=>{
  //   setShowPwd(!showPwd)
  //   }

  ///////////////////////////////////////////////funciones de Context inputs/////////////////////////////////////////////////////////
  const handleUserChange = (e) => {
    setUsuario(e.target.value);
  };
  const handlePasword = (e) => {
    setContrasena(e.target.value);
  };
  const handleLogin = (e) => {
    //   e.preventDefault();
    //   // Lista de objetos con usuarios y contraseñas para validar
    //   const users = [
    //     { usuario: "Sebas", password: "1234" },
    //     { usuario: "Jaki", password: "078901" },
    //     { usuario: "Prii", password: "010591" },
    //   ];
    //   const found = users.find(
    //     (user) =>
    //       user.usuario.toLowerCase() === usuario.toLowerCase() &&
    //       user.password === contrasena
    //   );
    //   console.log(found);

    if (e.target.value !== "") {
      onSubmit({ user: usuario, password: contrasena });
      console.log({ user: usuario, password: contrasena });
    } else {
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }
  };

  /////////////////////////////////////////////////funciones de Context inputs/////////////////////////////////////////////////////////

  //////////////////////////////////////////////ELEMENTOS HTML///////////////////////////////////////////////////////////////////////////////
  return (
    <div className="container3">
      <center>
        <Card
          bg="ligth"
          text="dark"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>
            <img
              src="https://d2i9ogginaqdr5.cloudfront.net/cmsstatic/pop%20animacion.png"
              alt=""
            />
            <h1>Log In</h1>
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleLogin}>
              <input
                type={"text"}
                className="usuario"
                placeholder="User Name"
                value={usuario}
                onChange={handleUserChange}
              />
              <br />
              <br />
              {/* /////////////////////////////////////INPUT PASSWORD/////////////////////////////////////////////////////////////////// */}

              <input
                className="contarsena"
                type="password"
                placeholder="Password"
                value={contrasena}
                onChange={handlePasword}
              />
              {/* <button onClick={togglePwd}>{showPwd? "ocultar": "ver"} contraseña</button> */}
              {/* /////////////////////////////////////INPUT PASSWORD/////////////////////////////////////////////////////////////////// */}
              <br />
              <br />
              {/* ///////////////////////////////////////BOTON INICIAR SESIÓN/////////////////////////////////////////////////////////////// */}
              <button type="submit" className="input">
                Log In
              </button>
              {/* ///////////////////////////////////////BOTON INICIAR SESIÓN/////////////////////////////////////////////////////////////// */}
            </form>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
};
//////////////////////////////////////////////ELEMENTOS HTML///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////EXPORTACIÓN////////////////////////////////////////////////////////////////////////////////////
export default Form;
//////////////////////////////////////////EXPORTACIÓN////////////////////////////////////////////////////////////////////////////////////

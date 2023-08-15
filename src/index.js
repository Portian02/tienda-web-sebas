import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/routes/index.jsx";
import { AuthProvider } from "./context/AuthContext";
import "../src/index.css";

import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


// Mostrar lo que está en parentesis
root.render(

  <StrictMode>
    {/* todos lo elementos dentro de esta etiqueta AuthProvider tendran acceso al contexto */}
    <AuthProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

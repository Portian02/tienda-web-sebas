  import { useState, createContext } from "react";
  import { productsData } from "../API/Users";
  const AuthContext = createContext();

  const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    const list = [];
    list.push(productsData);

    return (
      <AuthContext.Provider value={{ auth, setAuth, list }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export { AuthContext, AuthProvider };

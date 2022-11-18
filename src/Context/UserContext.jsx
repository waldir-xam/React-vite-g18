import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProviderLogin = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const storeUser = (dataUser) => {
    localStorage.setItem("user", JSON.stringify(dataUser));
    setUser(dataUser);
  };

  /*  */
  /*   const [user, setUser] = useState({
    name: "waldir",
    last_name: "apaza",
    edad:"31",
    talla:"1.84",
  });
 */

  return (
    <UserContext.Provider value={{ user, storeUser }}>
      {children}
    </UserContext.Provider>
  );
};

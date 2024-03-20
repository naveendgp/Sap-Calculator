import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext({});

export const AdminContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <AdminContext.Provider value={(user, setUser)}>
      {children}
    </AdminContext.Provider>
  );
};

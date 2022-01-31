import React, { useEffect, useState } from "react";
import sessionService from "../services/local/SessionService";

export const AuthContext = React.createContext(null);

export default function AuthContextProvider({ children }) {
  const [auth, setUser] = useState(sessionService.get());

  useEffect(() => {
    sessionService.set(auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

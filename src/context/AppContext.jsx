import { createContext, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const modalRef = useRef(null);
  return (
    <AppContext.Provider value={{ user, setUser, modalRef }}>
      {children}
    </AppContext.Provider>
  );
};

import { createContext, useRef } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const modalRef = useRef(null);
  return (
    <AppContext.Provider value={{ modalRef }}>{children}</AppContext.Provider>
  );
};

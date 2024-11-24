import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const user = useContext(AppContext);

  const navigate = useNavigate();
  if (user) {
    return children;
  } else {
    navigate("/signup");
  }
};

export default AuthWrapper;

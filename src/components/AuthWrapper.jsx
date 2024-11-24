import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../config/firebase";

const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/signup");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (user) {
    return children;
  } else {
    return null;
  }
};

export default AuthWrapper;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { auth } from "../config/firebase";

import { MdOutlineEmail as Email } from "react-icons/md";
import { BiShow as Show } from "react-icons/bi";
import { BiHide as Hide } from "react-icons/bi";

import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password
      );
      setUserCredentials({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="flex flex-col gap-4 items-center justify-center mt-20 lg:mt-40 px-4">
        <label className="w-full input input-bordered flex items-center justify-between">
          <input
            type="email"
            placeholder="email..."
            autoComplete="new-password"
            value={userCredentials.email}
            onChange={(e) =>
              setUserCredentials({ ...userCredentials, email: e.target.value })
            }
          />
          <Email />
        </label>

        <label className="w-full input input-bordered flex items-center justify-between">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password..."
            autoComplete="new-password"
            value={userCredentials.password}
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                password: e.target.value,
              })
            }
          />
          <button onClick={togglePasswordVisibility}>
            {showPassword ? <Hide /> : <Show />}
          </button>
        </label>

        <div className="flex w-full flex-col border-opacity-50">
          <div className="card  grid h-10 place-items-center">
            <button
              className="text-white bg-blue-500 w-full p-3 rounded-lg"
              onClick={login}
            >
              Login
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="card  grid h-10 place-items-center">
            <button className="text-white bg-red-500 w-full p-3 rounded-lg">
              login with Google
            </button>
          </div>
        </div>

        <p className="flex gap-2 items-center">
          dont have an account?
          <Link className="font-black hover:text-blue-500" to={"/signup"}>
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

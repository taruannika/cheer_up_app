import { useState } from "react";

import { BiShow as Show } from "react-icons/bi";
import { BiHide as Hide } from "react-icons/bi";
import { MdOutlineEmail as Email } from "react-icons/md";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="flex flex-col gap-4 items-center justify-center mt-20 lg:mt-40 px-4">
        <label className="w-full input input-bordered flex items-center justify-between">
          <input
            type="email"
            placeholder="email..."
            autoComplete="new-password"
          />
          <Email />
        </label>

        <label className="w-full input input-bordered flex items-center justify-between">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password..."
            autoComplete="new-password"
          />
          <button onClick={togglePasswordVisibility}>
            {showPassword ? <Hide /> : <Show />}
          </button>
        </label>

        <div className="flex w-full flex-col border-opacity-50">
          <div className="card  grid h-10 place-items-center">
            <button className="text-white bg-blue-500 w-full p-3 rounded-lg">
              Sign Up
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="card  grid h-10 place-items-center">
            <button className="text-white bg-red-500 w-full p-3 rounded-lg">
              Sign Up with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;

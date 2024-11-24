import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { IoMdClose as Close } from "react-icons/io";
import { IoMdMenu as Menu } from "react-icons/io";

import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

import Container from "./Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const OpenMenu = () => {
    setIsOpen(true);
  };

  const CloseMenu = () => {
    setIsOpen(false);
  };

  const logout = async (e) => {
    e.preventDefault();
    await signOut(auth);

    CloseMenu();
    navigate("/");

    console.log("Signed out");
  };

  const navigateToLoginPage = () => {
    navigate("/login");
    CloseMenu();
  };

  return (
    <Container>
      <header className="bg-slate-100 relative flex justify-between items-center px-4 py-4 ">
        <NavLink to={"/"}>Cheer Up</NavLink>

        <div className="hidden md:block">
          <p>User</p>
        </div>

        <div className="md:hidden">
          <MenuIcon
            isOpen={isOpen}
            onMenuOpen={OpenMenu}
            onMenuClose={CloseMenu}
          />
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } h-screen z-10 justify-center items-center bg-white w-full absolute top-0 left-0  transition-all`}
      >
        <div className="relative flex flex-col gap-4 items-center justify-center">
          {user && <p>Logged in as {user?.email}</p>}

          {user ? (
            <button
              className="px-8 py-2 bg-red-500 rounded-lg text-white"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <button
              className="px-8 py-2 bg-blue-500 rounded-lg text-white"
              onClick={navigateToLoginPage}
            >
              Login
            </button>
          )}
        </div>

        <div className="absolute top-5 right-5">
          <Close onClick={CloseMenu} />
        </div>
      </div>
    </Container>
  );
};

const MenuIcon = ({ isOpen, onMenuOpen, onMenuClose }) => {
  if (isOpen) return <Close onClick={onMenuClose} />;
  return <Menu onClick={onMenuOpen} />;
};

export default Header;

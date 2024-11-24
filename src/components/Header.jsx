import { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMdClose as Close } from "react-icons/io";
import { IoMdMenu as Menu } from "react-icons/io";

import Container from "./Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenMenu = () => {
    setIsOpen(true);
  };

  const CloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <header className="relative flex justify-between items-center px-4 py-4 ">
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
        <div className="relative">mobileMenu</div>

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

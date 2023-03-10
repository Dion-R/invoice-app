import React from "react";
import Logo from "../components/Logo";
import avatar from "../assets/image-avatar.jpg";
import moon from "../assets/icon-moon.svg";
const Navbar = () => {
  return (
    <div className="flex bg-gray-700 justify-between">
      <Logo />
      <div className="navbar-grid">
        <div className="flex justify-center items-center">
          <img src={moon} alt="moon" className="rounded-full h-5" />
        </div>
        <div className="line w-px bg-gray-600"></div>
        <div className="flex justify-center items-center">
          <img src={avatar} alt="avatar" className="rounded-full h-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

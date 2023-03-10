import React from "react";
import pacman from "../assets/pacman.png";
const Logo = () => {
  return (
    <div className="logo-container rounded-tr-2xl rounded-br-2xl h-16 bg-purple-500 inline-block w-16 overflow-hidden flex flex-col justify-end relative">
      <div className="h-2/4 bg-purple-300 rounded-tl-2xl"></div>
      <img
        src={pacman}
        alt="pacman"
        className="h-6 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
      />
    </div>
  );
};

export default Logo;

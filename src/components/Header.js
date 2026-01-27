import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-4 flex items-center bg-gradient-to-b from-black/70 to-transparent z-10">
      <img
        className="w-32 h-12 object-contain cursor-pointer"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header;

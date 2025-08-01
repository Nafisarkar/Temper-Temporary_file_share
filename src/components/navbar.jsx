import { Dice1 } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className="mx-6">
      <div
        className="bg-indigo-300/6 rounded-full  backdrop-blur-[12.7px]  border-2 border-indigo-500/30 max-w-3xl h-16 flex items-center justify-between px-4 m-10 text-white font-poppins mx-auto
      shadow-2xl
      "
      >
        <div className="mx-4 md:mx-8 flex items-center gap-2 text-white ">
          <img src={logo} alt="Temper" className="w-6" />
          <p className="font-bold text-xl">Temper</p>
        </div>

        <div className="flex gap-6 mx-6 text-sm">
          {currentPath === "/" ? (
            <Link
              to="/about"
              className="relative px-3 py-2 transition duration-300 ease-in-out hover:text-indigo-300 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ) : (
            <Link
              to="/"
              className="relative px-3 py-2 transition duration-300 ease-in-out hover:text-indigo-300 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

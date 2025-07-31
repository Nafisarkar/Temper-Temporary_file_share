import { Dice1 } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="mx-6">
      <div className="bg-gray-300/6 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[12.7px] border border-blue-400/42 max-w-3xl h-16  flex items-center justify-between px-4 m-10 text-white font-poppins mx-auto">
        <div className="mx-10">Logo</div>

        <div className="flex gap-4 mx-6 text-sm">
          <Link
            to="/"
            className="transition duration-300 ease-in-out hover:underline"
          >
            Home
          </Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

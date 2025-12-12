import React from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-2 px-8">
      <div>
        <Link to="/" className="text-2xl font-medium ">
          Rabbit
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Men
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          WoMen
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Top wear
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Bottom wear
        </Link>
      </div>
      {/* right icons */}

      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-black">
          <HiOutlineUser className="h-6 w-6 text-gray-700" />
        </Link>

        <button className="relative hover:text-black">
          <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
            4
          </span>
        </button>

        {/* searchbar */}

        <div className="overflow-hidden">
          <SearchBar />
        </div>

        <button className="md:hidden">
          <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

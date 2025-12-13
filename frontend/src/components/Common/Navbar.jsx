import React from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDraw from "../Layout/CartDraw";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [navDrawerOpen, setnavDrawerOpen] = React.useState(false);
  const toggleNavDraw = () => {
    setnavDrawerOpen(!navDrawerOpen);
  };
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
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

          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          {/* searchbar */}

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDraw} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDraw drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "transform-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button className={toggleNavDraw}>
<IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
          
        </div>
        <div className="p-4">
            <h2 className="p-4">Menu</h2>
            <nav className="space-y-4">
              <Link to="#" onClick={toggleNavDraw} className="block text-gray-600 hover:text-black">MEN</Link>
              <Link to="#" onClick={toggleNavDraw} className="block text-gray-600 hover:text-black">WOMEN</Link>
              <Link to="#" onClick={toggleNavDraw} className="block text-gray-600 hover:text-black">TOP WEAR</Link>
              <Link to="#" onClick={toggleNavDraw} className="block text-gray-600 hover:text-black">BOTTOM WEAR</Link>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

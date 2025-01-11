// src/Header.js

import { FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const cartdata = useSelector((state) => state.cartdata);
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-2xl font-bold">MyShop</div>
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/product"
            className="hover:text-gray-400 no-underline text-white text-lg px-3"
          >
            Products
          </Link>
          <a
            href="/about"
            className="hover:text-gray-400 no-underline text-white text-lg px-3"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="hover:text-gray-400 no-underline text-white text-lg px-3"
          >
            Contact Us
          </a>
          <a
            href="/register"
            className="hover:text-gray-400 no-underline text-white text-lg px-3"
          >
            Register
          </a>
          <a
            href="/login"
            className="hover:text-gray-400 no-underline text-white text-lg px-3"
          >
            Login
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 rounded bg-gray-700 text-white"
          />
          <Link to="/cart" className="no-underline text-white">
            <p className="pb-0 text-center" style={{ marginBottom: "-8px" }}>
              {cartdata}
            </p>
            <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-400" />
          </Link>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;

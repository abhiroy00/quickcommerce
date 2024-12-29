// src/Header.js

import { FaShoppingCart } from 'react-icons/fa';
import { Link ,Outlet} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">MyShop</div>
      <nav className="hidden md:flex space-x-4">
        <Link to="/product" className="hover:text-gray-400">Products</Link>
        <a href="/about" className="hover:text-gray-400">About Us</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
        
      </nav>
      <div className="flex items-center space-x-2">
        <input type="text" placeholder="Search products..." className="p-2 rounded bg-gray-700 text-white" />
        <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-400" />
      </div>
      
    </header>
    <Outlet></Outlet>
    </div>
  );
};

export default Header;
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Home", "BAG", "SNEAKERS", "BELT", "CONTACT"];

  return (
    <header className="top-0 w-full  bg-gray-400">
      <div className=" fixed w-full  z-50 bg-white shadow-sm  flex items-center justify-between px-4 py-4 ">
        {/* Logo */}
      <div className="flex items-center">
  <img src="./Images/Icon.png" alt="logo" className="ml-2" />
  <span className="text-2xl font-bold ml-2">E-Comm</span>
</div>

        {/* Desktop Nav Links */}
        <div className="flex ml-14">
        <nav className="hidden md:flex space-x-22 text-black-800 text-xl font-medium mr-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-blue-500 "
            >
              {link}
            </a>
          ))}
        </nav>
        </div>

        {/* Cart Section */}
        <div className="hidden md:flex items-center space-x-3 text-gray-900 mr-5">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-xl"> Items</span>
          <span className="text-gray-500 text-xl">$0.00</span>
        </div>                

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div> 
      
      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white  shadow-sm px-4 py-18 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-gray-700 hover:text-blue-500 font-medium"
            >
              {link}
            </a>
          ))}
          <div className="flex items-center space-x-2 pt-2">
            <ShoppingCart className="w-5 h-5" />
            <span>Items</span>
            <span>$0.00</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
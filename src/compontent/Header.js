import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b shadow-md bg-white">
      {/* Logo */}
      <div className="h-16 w-16 sm:h-20 sm:w-20 cursor-pointer">
        <img
          src={LOGO_URL}
          alt="logo"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex flex-1 justify-end items-center space-x-6">
        <ul className="flex space-x-4 text-gray-700 font-medium">
          <li className="hover:text-green-500 cursor-pointer transition">Home</li>
          <li className="hover:text-green-500 cursor-pointer transition">About Us</li>
          <li className="hover:text-green-500 cursor-pointer transition">Contact Us</li>
          <li className="hover:text-green-500 cursor-pointer transition">Cart</li>
        </ul>
        <button className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
          Login
        </button>
      </nav>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        {/* You can add a hamburger icon here for mobile menu */}
        <button className="text-gray-700">☰</button>
      </div>
    </header>
  );
};

export default Header;
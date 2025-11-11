import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {

  const[logBtn, setLogBtn]=useState("login")

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
          <li className="hover:text-green-500 cursor-pointer transition"><Link to={"/"}>Home</Link></li>
          <li className="hover:text-green-500 cursor-pointer transition"><Link to={"/about"}>About Us</Link></li>
          <li className="hover:text-green-500 cursor-pointer transition"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="hover:text-green-500 cursor-pointer transition">Cart</li>
        </ul>

        {/* Login Btn */}
        <button className=" login ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition" onClick={()=>{
           logBtn === "login" ? setLogBtn("logout") : setLogBtn("login")
        }}>
          {logBtn}
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
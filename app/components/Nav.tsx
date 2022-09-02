import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white flex justify-between items-center h-20 md:h-24 px-8 shadow">
      <a href="index">
        <h1 className="w-full md:text-3xl text-xl font-bold">
          <span className="hover:cursor-pointer">
            &#127822; Aaron Gesmer Nutrition
          </span>
        </h1>
      </a>

      <ul className="hidden md:flex">
        <li className="p-4 hover:cursor-pointer hover:text-red-500">
          <a href="index">Home</a>
        </li>
        <li className="p-4 hover:cursor-pointer hover:text-red-500">
          <a href="about">About</a>
        </li>
        <li className="p-4 hover:cursor-pointer hover:text-red-500">
          <a href="contact">Contact</a>
        </li>
      </ul>
      <div className="hover:cursor-pointer hover:text-red-500 block md:hidden" onClick={toggleNav}>
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-white ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-600 bg-white ease-in-out duration-500"
        }
      >
        <ul className="pt-12 uppercase">
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-red-500">
            <a href="index">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-red-500">
            <a href="about">About</a>
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-red-500">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;

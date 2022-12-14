import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleEvent() {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleEvent);

    // componentDidUnmount because dependency array is empty
    return function () {
      window.removeEventListener("resize", handleEvent);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white flex justify-between items-center h-20 md:h-24 px-8 shadow">
      <a href="index">
        <h1 className="w-full md:text-3xl text-xl font-bold">
          <span className="text-red hover:cursor-pointer">
            &#127869; Premier Plate Fitness
          </span>
        </h1>
      </a>

      <ul className="hidden md:flex text-gray">
        <li className="p-4 hover:cursor-pointer hover:text-red">
          <a href="index">Home</a>
        </li>
        <li className="p-4 hover:cursor-pointer hover:text-red">
          <a href="services">Services</a>
        </li>
        <li className="p-4 hover:cursor-pointer hover:text-red">
          <a href="contact">Contact</a>
        </li>
      </ul>
      <div
        className="hover:cursor-pointer block md:hidden text-red"
        onClick={toggleNav}
      >
        {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          isOpen
            ? "fixed left-0 border-t border-t-gray top-20 w-[100%] h-full bg-white ease-in-out duration-500"
            : "fixed left-[-100%] border-t border-t-gray top-20 w-[100%] h-full bg-white ease-in-out duration-500"
        }
      >
        <ul className="pt-0 uppercase text-gray">
          <li className="p-4 border-b border-gray hover:cursor-pointer hover:text-red">
            <a href="index">Home</a>
          </li>
          <li className="p-4 border-b border-gray hover:cursor-pointer hover:text-red">
            <a href="services">Services</a>
          </li>
          <li className="p-4 border-b border-gray hover:cursor-pointer hover:text-red">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;

import React, { useState } from "react";
import Button from "./Button";
import { BiMovie } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Feedback", link: "/feedback" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0 mb-3">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <Link to={`/`}>
              <BiMovie />
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <FaBars />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 z-50 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link to="/favorites">
            <Button>Favorites</Button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

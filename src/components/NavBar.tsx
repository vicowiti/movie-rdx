import React, { useState } from "react";
import { BiMovie } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Feedback", link: "/feedback" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-xl w-full top-0 left-0 mb-3">
      <div className="md:flex items-center justify-between bg-[#202124] py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-[#00CED1] mr-1 pt-2">
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
          className={`md:flex md:items-center md:pb-0 z-50 pb-12 absolute md:static  md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                onClick={() => setOpen(false)}
                to={link.link}
                className="text-white hover:text-[#ededed] duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link to="/favorites" onClick={() => setOpen(false)}>
            <button
              className="bg-[#00ced1] font-medium flex gap-2 items-center text-white  py-2 px-6 rounded md:ml-8 hover:bg-[#7dff56] 
    duration-500"
            >
              Favorites <MdFavorite />
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

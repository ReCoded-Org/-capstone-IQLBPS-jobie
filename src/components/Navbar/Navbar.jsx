/* eslint-disable */
/* eslint-disable no-console, no-control-regex*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Dropdown from "./DropDown";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Roadmap", link: "/roadmap" },
    { name: "Jobs", link: "/jobs" },
    { name: "Contact", link: "/contact" },
  ];
  const isAuthenticated = true;
  const [open, setOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  const { i18n } = useTranslation();

  const handleTranslate = () => {
    setIsEnglish(!isEnglish);
    i18n.changeLanguage(isEnglish ? "en" : "ar");
  };
  return (
    <div className="bg-white lg:flex-nowrap md:flex-wrap shadow-md max-w-10 sticky top-0 left-0 z-10 md:flex items-center  justify-between py-4 md:px-10 px-7">
      <img
        src="/logo.svg"
        alt="logo"
        className="h-8 md:flex md:h-12 cursor-pointer"
      />
      <div
        onClick={() => setOpen(!open)} //set open if close.
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden object-scale-down"
      >
        <ion-icon name={open ? "close" : "menu"} />
      </div>

      <ul
        className={`md:flex md:items-center md:justify-item-ends md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20" : "top-[-490px]"
        }`}
      >
        {Links.map((link) => (
          <li
            key={link.name}
            className="md:ml-8 lg:text-xl md:text-sm lg:my-0 my-7"
          >
            <Link
              to={link.link}
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              {link.name}
            </Link>
          </li>
        ))}

        <span onClick={handleTranslate} className="mx-3">
          <FontAwesomeIcon icon={faGlobe} className="mx-5" />
          {isEnglish ? "En" : "Ku"}
        </span>
        <div className="lg:w-50 md:w-45 flex items-center">
          <input
            type="text"
            className="block px-4 md:my-0 my-5 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 w-full"
            placeholder="Search..."
          />
          <button type="button" className="-ml-6">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        {isAuthenticated ? <Dropdown /> : <Button>Login</Button>}
      </ul>
    </div>
  );
};

export default Navbar;

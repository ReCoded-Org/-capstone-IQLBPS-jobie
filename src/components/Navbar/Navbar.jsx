/* eslint-disable */
/* eslint-disable no-console, no-control-regex*/
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGlobe,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const { t } = useTranslation();
  let Links = [
    { name: t('nav-home'), link: "/" },
    { name: t('nav-about'), link: "/" },
    { name: t('nav-roadmap'), link: "/" },
    { name: t('nav-jobs'), link: "/" },
    { name: t('nav-contact'), link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <img src="/logo.svg" alt="logo" className="h-8 md:flex md:h-12" />
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)} //set open if close.
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`mx-5 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          <FontAwesomeIcon icon={faGlobe} className="mx-5" />
          <div className="w-60 flex items-center md: flex ">
            <input
              type="text"
              className=" block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 w-full"
              placeholder="Search..."
            />
            <button type="button" className="-ml-6">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          <Button>{t('nav-login')}</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

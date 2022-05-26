import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <React.Fragment>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-[#64FCD9] to-[#00F5E6]">
        <div className="container px-4 mx-auto flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 uppercase text-slate-700"
              href="#pablo"
            >
              Aysha Tutorial Coaching Classes
            </a>
            <button
              className="text-slate-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={navbarOpen ? "uil uil-multiply" : "uil uil-bars"}
              ></i>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:items-center md:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 hover:opacity-75"
                >
                  <i className="uil uil-estate text-lg leading-lg text-slate-700 opacity-75"></i>
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/fees"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 hover:opacity-75"
                >
                  <i className="uil uil-money-bill text-lg leading-lg text-slate-700 opacity-75"></i>
                  <span className="ml-2">Fees</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 hover:opacity-75"
                >
                  <i className="uil uil-info-circle text-lg leading-lg text-slate-700 opacity-75"></i>
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <button className=" w-24 mt-3 md:ml-5 md:mt-0 border text-sm rounded-full py-1 border-slate-900">
                <a href="#contact">Contact</a>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;

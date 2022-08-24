import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavListItem } from "./NavListItem";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="flex justify-center bg-slate-300 max-w-full">
      <ul className="flex flex-row gap-x-3 p-2 ">
        <li>
          <NavLink
            to="/"
            // style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <img src="img/logo.png" className="h-10" alt="tasks logo"></img>
          </NavLink>
        </li>
        <NavListItem to="/" title="Home" />
        <NavListItem to="workspaces" title="Workspaces" />


        {isLoggedIn ? (
          <li>
            <NavLink
              to="login"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={logoutHandler}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-indigo-500" : "bg-slate-400"
                } inline-block px-5 py-2 rounded-md  hover:bg-indigo-400 tracking-wider font-semibold text-sm text-gray-900 shadow-lg sm:text-base`
              }
            >
              logout
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                to="login"
                onClick={loginHandler}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-indigo-500" : "bg-slate-400"
                  } inline-block px-5 py-2 rounded-md  hover:bg-indigo-400 tracking-wider font-semibold text-sm text-gray-900 shadow-lg sm:text-base`
                }
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="signup"
                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-indigo-500" : "bg-slate-400"
                  } inline-block px-5 py-2 rounded-md  hover:bg-indigo-400 tracking-wider font-semibold text-sm text-gray-900 shadow-lg sm:text-base`
                }
              >
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

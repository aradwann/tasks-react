import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { NavListItem } from "./NavListItem";

export default function Navbar() {
  const authContext = useContext(AuthContext);

  return (
    <nav className="flex justify-center bg-slate-300 max-w-full">
      <ul className="flex flex-row gap-x-3 p-2 ">
        <li>
          <NavLink to="/">
            <img src="img/logo.png" className="h-10" alt="tasks logo"></img>
          </NavLink>
        </li>
        <NavListItem to="/" title="Home" />

        {authContext.isAuthenticated ? (
          <>
            <NavListItem to="workspaces" title="Workspaces" />
            <li>
              <NavLink
                to="login"
                onClick={authContext.logout}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-indigo-500" : "bg-slate-400"
                  } inline-block px-5 py-2 rounded-md  hover:bg-indigo-400 tracking-wider font-semibold text-sm text-gray-900 shadow-lg sm:text-base`
                }
              >
                logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <NavListItem to="login" title="Login" />
            <NavListItem to="signup" title="Signup" />
          </>
        )}
      </ul>
    </nav>
  );
}

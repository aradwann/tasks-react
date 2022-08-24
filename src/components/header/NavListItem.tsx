import React from "react";
import { NavLink } from "react-router-dom";

type NavListItemProps = {
  to: string;
  title: string;
};

export function NavListItem(props: NavListItemProps) {
  return (
    <li>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          `${
            isActive ? "bg-indigo-500" : "bg-slate-400"
          } inline-block px-5 py-2 rounded-md  hover:bg-indigo-400 tracking-wider font-semibold text-sm text-gray-900 shadow-lg sm:text-base`
        }
      >
        {props.title}
      </NavLink>
    </li>
  );
}

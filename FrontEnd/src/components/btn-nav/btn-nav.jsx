import styles from "./btn-nav.module.css";
import { useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export function BtnNav({ link, name }) {
  return (
    <li>
      <NavLink
        to={`${link}`}
        className={({ isActive }) =>
          isActive ? styles.categoryActive : styles.category
        }>
        {name}
      </NavLink>
    </li>
  );
}

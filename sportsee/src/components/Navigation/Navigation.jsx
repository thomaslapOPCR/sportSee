import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import style from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={style.container}>
      <Logo /> {/* Rendering the Logo component */}

      <ul>
        {/* Navigation links using NavLink components */}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")} // Applying 'active' class for active links
            to={"/"} // Link to the home page
          >
            Accueil {/* Link text */}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/user"} // Link to the user profile page
          >
            Profil {/* Link text */}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/settings"} // Link to the settings page
          >
            Réglage {/* Link text */}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/community"} // Link to the community page
          >
            Communauté {/* Link text */}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

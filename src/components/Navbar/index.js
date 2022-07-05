import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-list">
      <NavLink className={({isActive}) => isActive ? "nav-link active navbar-brand logo nav__logo" : "nav-link navbar-brand logo nav__logo"} to="/">
        <img src="https://www.finnkino.fi/CustomAssets/new-finnkino-fi/Images/header-logo.png" alt="Finnkino"/>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link active nav-item__link" : "nav-link nav-item__link"} to="/turvallisuus">
              Stay safe together
            </NavLink>
          </li>
          <li className="nav-item nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link active nav-item__link" : "nav-link nav-item__link"} to="/nauti">
              Enjoy
            </NavLink>
          </li>
          <li className="nav-item nav-item">
            <a className="nav-link nav-item__link" href="https://www.finnkino.fi/en/sarjaliput/osta-sarjalippuja">
              Vouchers
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../utils/context";

import logo from "../img/logo.svg";

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    // console.log(e.target);
    const page = e.target.textContext;
    // get the location //
    const temBtn = e.target.getBoundingClientRect();
    // console.log(temBtn);
    const center = (temBtn.left + temBtn.right) / 2;
    const bottem = temBtn.bottem - 3; // "sebmenu lifted 3px up  "
    // openSubmenu(); ==>
    openSubmenu(page, { center, bottem });
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
}

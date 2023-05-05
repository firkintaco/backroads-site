import React from "react";
import logo from "../images/logo.svg";

const Navbar = ({ pageLinks, socialLinks }) => {
  console.log(pageLinks);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul class="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} class="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul class="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} target="_blank" class="nav-icon">
                  <i class={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

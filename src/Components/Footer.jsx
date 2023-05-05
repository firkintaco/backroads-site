import React from "react";

const Footer = ({ pageLinks, socialLinks }) => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((link) => (
          <li>
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul class="footer-icons">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="footer-icon">
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;

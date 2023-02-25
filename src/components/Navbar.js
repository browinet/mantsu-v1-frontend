import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";

// import AuthorList from "../pages/AuthorList";
import BookList from "../pages/BookList";
import FAQ from "../pages/FAQ";
import Logo from "../components/Logo";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggle = () => {
    setMenuToggle(!menuToggle);
  };
  const closeToggle = () => {
    setMenuToggle(false);
  };

  return (
    <nav>
      <Link to="/" element={<Home />} onClick={closeToggle}>
        <Logo />
      </Link>
      <div className="hamburger" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div
        className={
          menuToggle ? "nav-desktop-menu nav-mobile-menu" : "nav-desktop-menu"
        }
      >
        <ul>
          <li>
            <NavLink
              to="/api/booklist"
              element={<BookList />}
              onClick={closeToggle}
            >
              Books
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/api/authorlist"
              element={<AuthorList />}
              onClick={closeToggle}
            >
              Authors
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/faq" element={<FAQ />} onClick={closeToggle}>
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

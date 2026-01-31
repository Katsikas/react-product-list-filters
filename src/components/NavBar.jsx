import { useState } from "react";
import Sidenav from "./Sidenav";

const NavBar = ({ categories }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <nav>
          <a href="/">
            <img
              src="/heart_white.svg"
              height={25}
              width={25}
              className="logo"
              alt="logo"
            />
          </a>
          <ul className="navbar-links">
            <li>**</li>
            <li>**</li>
            <li>**</li>
          </ul>

          <div className="navbar-actions">
            {/* <button>
              <img src="/cart.svg" alt="cart" />
            </button> */}
            <button
              type="button"
              onClick={() => {
                setShowNav(!showNav);
              }}
            >
              <img src="/burger.svg" alt="search" />
            </button>
          </div>
        </nav>
      </header>
      <Sidenav showNav={showNav} categories={categories} />
    </>
  );
};

export default NavBar;

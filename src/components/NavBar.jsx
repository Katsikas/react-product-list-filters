import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img
          src="/heart_white.svg"
          height={25}
          width={25}
          className="logo"
          alt="logo"
        />
        <ul className="navbar-links">
          <li>**</li>
          <li>**</li>
          <li>**</li>
        </ul>

        <div className="navbar-actions">
          <button>
            <img src="/search.svg" alt="search" />
          </button>
          <button>
            <img src="/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

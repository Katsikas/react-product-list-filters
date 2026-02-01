import { useEffect, useRef, useState } from "react";
import Sidenav from "./Sidenav";

const NavBar = ({
  categories,
  selectedCategory,
  onCategorySelect,
  onClearFilters,
}) => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
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
              onClick={(e) => {
                e.stopPropagation();
                setShowNav((v) => !v);
              }}
            >
              <img src="/burger.svg" alt="search" />
            </button>
          </div>
        </nav>
      </header>
      <Sidenav
        ref={navRef}
        showNav={showNav}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={onCategorySelect}
        onClear={onClearFilters}
      />
    </div>
  );
};

export default NavBar;

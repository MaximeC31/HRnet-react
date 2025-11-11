import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HeaderDesktop = () => {
  return (
    <nav className="header__nav header__nav--desktop">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <Link to="/" className="header__nav-link">
            Create Employee
          </Link>
        </li>
        <li className="header__nav-item">
          <Link to="/employee-list" className="header__nav-link">
            View Employees
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const HeaderMobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header__mobile-container">
      <button
        className="header__burger"
        aria-label="Open navigation menu"
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </button>
      <nav
        className={`header__nav header__nav--mobile ${isMobileMenuOpen ? "header__nav--open" : ""}`}
      >
        <ul className="header__nav-list header__nav-list--mobile">
          <li className="header__nav-item">
            <Link
              to="/"
              className="header__nav-link"
              onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
            >
              Create Employee
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              to="/employee-list"
              className="header__nav-link"
              onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
            >
              View Employees
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="./logo.webp" alt="HRNet" className="header__logo-image" />
      </Link>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};

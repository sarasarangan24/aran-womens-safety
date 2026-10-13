import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, toggleTheme }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Safety Tips", path: "/safety-tips" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-name">அரண்</span>
        <span className="brand-tagline">
          A Safer Tomorrow for Every Woman
        </span>
      </NavLink>

      <nav className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          title="Toggle dark/light mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <NavLink to="/contact" className="nav-help-button">
          Get Help <span>↗</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
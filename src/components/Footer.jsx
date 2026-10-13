import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-name">அரண்</span>
            <span className="brand-tagline">
              A Safer Tomorrow for Every Woman
            </span>
          </Link>
          <p>
            Building awareness, sharing knowledge, and
            supporting safer communities for women.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/" aria-label="Instagram">◎</a>
            <a href="https://www.youtube.com/" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/safety-tips">Safety Tips</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <Link to="/services">Emergency Resources</Link>
          <Link to="/services">Legal Guidance</Link>
          <Link to="/safety-tips">Digital Safety</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column footer-newsletter">
          <h3>Stay Informed</h3>
          <p>Discover safety tips and helpful resources.</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
            />
            <button type="submit" aria-label="Subscribe">➤</button>
          </form>
          <small>UI demonstration only — no subscription is sent.</small>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ARAN. All rights reserved.</p>
        <div>
          <Link to="/about">Privacy & Safety</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: "🛡️",
    title: "Stay Aware",
    text: "Learn to recognise risks and make informed decisions.",
  },
  {
    icon: "💗",
    title: "Find Support",
    text: "Explore trusted resources and support information.",
  },
  {
    icon: "📖",
    title: "Learn Safety",
    text: "Discover practical tips for everyday situations.",
  },
  {
    icon: "🤝",
    title: "Feel Empowered",
    text: "Build confidence through awareness and preparation.",
  },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            WELCOME TO ARAN · அரண்
          </span>

          <h1>
            அவசர நேரத்தில்
            <br />
            அரண் உங்களுடன்.
          </h1>

          <p>
            Discover safety information, practical guidance,
            and support resources designed to help women
            across Sri Lanka.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="primary-button">
              Explore Services <span>↗</span>
            </Link>

            <Link to="/about" className="secondary-button">
              Learn More
            </Link>
          </div>

          <div className="hero-note">
            <span>♡</span>
            <p>
              You deserve to feel safe, heard and supported.
            </p>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="hero-visual">
          <img
            src="/aran-hero.png"
            alt="Woman representing confidence, strength and empowerment"
            className="hero-image"
            onError={(event) => {
              event.currentTarget.style.opacity = "0.3";
              console.error(
                "ARAN hero image not found. Check public/aran-hero.png"
              );
            }}
          />

          <div className="floating-card">
            <span className="floating-icon">🌸</span>

            <div>
              <strong>You Are Not Alone</strong>
              <p>Support and awareness matter.</p>
            </div>
          </div>

          <div className="hero-decoration" aria-hidden="true">
            ♡
          </div>
        </div>
      </section>

      {/* SAFETY HIGHLIGHTS */}
      <section className="highlights-section section-container">
        <div className="section-heading">
          <span className="eyebrow">
            YOUR SAFETY MATTERS
          </span>

          <h2>Knowledge. Confidence. Support.</h2>

          <p>
            Small steps towards awareness can make a
            meaningful difference.
          </p>
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <article
              className="highlight-card"
              key={item.title}
            >
              <div className="highlight-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="home-about">
        <div className="home-about-content">
          <span className="eyebrow">
            ABOUT அரண்
          </span>

          <h2>
            Every woman deserves a safer tomorrow.
          </h2>

          <p>
            ARAN is a women's-safety awareness platform
            concept focused on accessible information,
            everyday prevention, digital safety and
            finding appropriate support.
          </p>

          <Link to="/about" className="text-link">
            Discover Our Mission ↗
          </Link>
        </div>

        <div className="home-about-art">
          <span>அரண்</span>

          <p>A safer tomorrow for every woman.</p>

          <div className="art-heart" aria-hidden="true">
            ♡
          </div>
        </div>
      </section>

      {/* SUPPORT BANNER */}
      <section className="support-banner section-container">
        <div>
          <span className="eyebrow">
            YOU ARE NOT ALONE
          </span>

          <h2>
            Finding the right support starts with knowing
            where to look.
          </h2>

          <p>
            Explore safety guidance and official support
            information for Sri Lanka.
          </p>
        </div>

        <Link to="/services" className="primary-button">
          Find Resources ↗
        </Link>
      </section>
    </div>
  );
};

export default Home;
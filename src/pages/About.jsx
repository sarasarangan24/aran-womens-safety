import { Link } from "react-router-dom";

const values = [
  ["💗", "Safety First", "Promoting awareness and personal wellbeing."],
  ["🌍", "Inclusivity", "Welcoming women from all backgrounds."],
  ["🌱", "Awareness", "Sharing practical knowledge and guidance."],
  ["🤝", "Community", "Encouraging understanding and support."],
];

const About = () => (
  <div className="inner-page">
    <section className="page-hero">
      <span className="eyebrow">HOME / ABOUT</span>
      <h1>About <span>அரண்</span></h1>
      <p>A safer tomorrow for every woman.</p>
    </section>

    <section className="about-intro section-container">
      <div className="about-illustration">
        <span>அரண்</span>
        <div className="art-heart">♡</div>
        <p>Awareness is the beginning of change.</p>
      </div>
      <div>
        <span className="eyebrow">OUR STORY</span>
        <h2>Creating awareness. Encouraging confidence.</h2>
        <p>
          ARAN is a women's-safety awareness website concept created
          to make safety information and support resources easier to
          understand and navigate.
        </p>
        <p>
          Our focus is prevention, accessible information, digital
          awareness and helping users discover appropriate support
          services in Sri Lanka.
        </p>
        <Link to="/services" className="primary-button">
          Explore Our Services ↗
        </Link>
      </div>
    </section>

    <section className="mission-section">
      <article>
        <span className="large-symbol">◎</span>
        <h2>Our Mission</h2>
        <p>
          Make practical safety knowledge and relevant support
          information easier to access.
        </p>
      </article>
      <article>
        <span className="large-symbol">✧</span>
        <h2>Our Vision</h2>
        <p>
          Encourage a society where women are informed, respected
          and supported.
        </p>
      </article>
    </section>

    <section className="section-container values-section">
      <div className="section-heading">
        <span className="eyebrow">WHAT GUIDES US</span>
        <h2>Our Values</h2>
      </div>
      <div className="highlight-grid">
        {values.map(([icon, title, text]) => (
          <article className="highlight-card" key={title}>
            <div className="highlight-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default About;
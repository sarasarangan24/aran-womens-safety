import { Link } from "react-router-dom";

const services = [
  {
    icon: "☎",
    title: "Emergency Resources",
    text: "Find official helplines and understand where to seek urgent assistance.",
    link: "/contact",
    action: "View Support",
  },
  {
    icon: "⚖",
    title: "Legal Guidance",
    text: "Explore general information about reporting incidents and seeking legal support.",
    link: "/contact",
    action: "Explore Guidance",
  },
  {
    icon: "♡",
    title: "Counselling & Support",
    text: "Learn about emotional wellbeing and finding appropriate support services.",
    link: "/contact",
    action: "Find Resources",
  },
  {
    icon: "↗",
    title: "Travel Safety",
    text: "Prepare for journeys and explore practical public-transport safety tips.",
    link: "/safety-tips",
    action: "Travel Tips",
  },
  {
    icon: "⌘",
    title: "Digital Safety",
    text: "Understand online harassment, privacy and safer digital habits.",
    link: "/safety-tips",
    action: "Learn More",
  },
  {
    icon: "◎",
    title: "Community Resources",
    text: "Discover ways to find relevant official and community support.",
    link: "/contact",
    action: "Get Information",
  },
];

const Services = () => (
  <div className="inner-page">
    <section className="page-hero">
      <span className="eyebrow">HOME / SERVICES</span>
      <h1>Services <span>அரண்</span></h1>
      <p>
        Practical information and resources to support safer,
        more informed everyday decisions.
      </p>
    </section>

    <section className="section-container service-grid">
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <div className="service-icon">{service.icon}</div>
          <h2>{service.title}</h2>
          <p>{service.text}</p>
          <Link to={service.link} className="text-link">
            {service.action} ↗
          </Link>
        </article>
      ))}
    </section>

    <section className="support-banner section-container">
      <div>
        <span className="eyebrow">NEED MORE INFORMATION?</span>
        <h2>Find the appropriate support resource.</h2>
        <p>Use our contact page to explore official support options.</p>
      </div>
      <Link to="/contact" className="primary-button">
        Contact Us ↗
      </Link>
    </section>
  </div>
);

export default Services;
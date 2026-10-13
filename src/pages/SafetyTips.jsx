import { useState } from "react";

const tips = [
  {
    category: "Personal Safety",
    icon: "🛡️",
    title: "Stay aware of your surroundings",
    text: "Pay attention to your surroundings and trust your judgement when a situation feels uncomfortable.",
    action: "Think ahead about places where you can ask for help.",
  },
  {
    category: "Online Safety",
    icon: "🔐",
    title: "Protect your personal information",
    text: "Use strong passwords, review privacy settings and be cautious about sharing sensitive information.",
    action: "Review your account privacy settings regularly.",
  },
  {
    category: "Travel Safety",
    icon: "🚌",
    title: "Plan your journey",
    text: "Where practical, plan your route and identify official help resources before travelling.",
    action: "Keep important contact information accessible.",
  },
  {
    category: "Home Safety",
    icon: "🏠",
    title: "Review your home safety plan",
    text: "Consider your entry points, emergency contacts and a way to seek assistance if needed.",
    action: "Prepare a plan that suits your circumstances.",
  },
  {
    category: "Personal Safety",
    icon: "🤝",
    title: "Identify trusted support",
    text: "Consider identifying someone you trust and discussing how you would ask for help.",
    action: "Agree on a communication method that feels safe.",
  },
  {
    category: "Online Safety",
    icon: "📱",
    title: "Know how to report online abuse",
    text: "Learn how to document concerning messages safely and locate official reporting channels.",
    action: "Do not put yourself at risk to collect evidence.",
  },
];

const categories = [
  "All Tips",
  "Personal Safety",
  "Online Safety",
  "Travel Safety",
  "Home Safety",
];

const SafetyTips = () => {
  const [selected, setSelected] = useState("All Tips");
  const [expanded, setExpanded] = useState(null);

  const filteredTips =
    selected === "All Tips"
      ? tips
      : tips.filter((tip) => tip.category === selected);

  return (
    <div className="inner-page">
      <section className="page-hero">
        <span className="eyebrow">HOME / SAFETY TIPS</span>
        <h1>SafetyTips <span>அரண்</span></h1>
        <p>
          Practical guidance to help you stay informed,
          prepared and confident in everyday situations.
        </p>
      </section>

      <section className="section-container">
        <div className="tip-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={selected === category ? "filter active" : "filter"}
              onClick={() => {
                setSelected(category);
                setExpanded(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tip-grid">
          {filteredTips.map((tip) => (
            <article className="tip-card" key={tip.title}>
              <div className="tip-card-icon">{tip.icon}</div>
              <span className="tip-category">{tip.category}</span>
              <h2>{tip.title}</h2>
              <p>{tip.text}</p>
              {expanded === tip.title && (
                <div className="tip-extra">{tip.action}</div>
              )}
              <button
                className="text-link tip-more"
                onClick={() =>
                  setExpanded(expanded === tip.title ? null : tip.title)
                }
                aria-expanded={expanded === tip.title}
              >
                {expanded === tip.title ? "Show Less −" : "Read More ↗"}
              </button>
            </article>
          ))}
        </div>

        <p className="safety-disclaimer">
          These tips are general educational information, not a guarantee
          of safety or a substitute for professional advice.
        </p>
      </section>
    </div>
  );
};

export default SafetyTips;
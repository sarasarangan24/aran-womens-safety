import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const suggestions = [
  "How can I stay safe on a bus?",
  "What should I do about online harassment?",
  "Where can I find help in Sri Lanka?",
  "Give me some personal safety tips.",
];

function getReply(message) {
  const text = message.toLowerCase().trim();

  // Tamil-language responses
  if (/[அ-ஹ]/.test(text)) {
    if (/வணக்கம்|ஹலோ|hello/.test(text)) {
      return "வணக்கம்! 🌸 நான் ARAN AI. பெண்களின் பாதுகாப்பு, பயணப் பாதுகாப்பு மற்றும் உதவி தொடர்பான தகவல்களைக் கண்டறிய உதவுகிறேன்.";
    }

    if (/பேருந்து|பஸ்|பயணம்/.test(text)) {
      return "🚌 பயணப் பாதுகாப்புக் குறிப்புகள்:\n• முடிந்தவரை பயண வழியை முன்கூட்டியே திட்டமிடுங்கள்.\n• உங்கள் தொலைபேசியையும் முக்கியத் தொடர்புகளையும் அணுகக்கூடிய இடத்தில் வைத்திருங்கள்.\n• பாதுகாப்பற்றதாக உணர்ந்தால், சாத்தியமானால் பாதுகாப்பான இடத்திற்குச் சென்று நம்பகமான ஒருவரிடம் அல்லது அதிகாரப்பூர்வ சேவையிடம் உதவி கேளுங்கள்.";
    }

    if (/இணைய|ஆன்லைன்|மிரட்டல்|தொல்லை/.test(text)) {
      return "🔐 இணையப் பாதுகாப்பு:\n• சந்தேகமான கணக்குகளை Block அல்லது Report செய்யலாம்.\n• தனிப்பட்ட தகவல்களையும் கடவுச்சொற்களையும் பகிர வேண்டாம்.\n• பாதுகாப்பாக இருந்தால், மிரட்டல் செய்திகளைப் பதிவுசெய்து வைத்துக்கொள்ளுங்கள்.\n• தேவையானபோது அதிகாரப்பூர்வ உதவியை நாடுங்கள்.";
    }

    if (/உதவி|அவசர|ஆபத்து|போலீஸ்/.test(text)) {
      return "💗 உங்களுக்கு உடனடி ஆபத்து இருந்தால், இந்த chat-ஐ நம்பி காத்திருக்க வேண்டாம். பாதுகாப்பான இடத்திற்குச் செல்ல முடிந்தால் செல்லுங்கள்; இலங்கையில் பெண்கள் உதவி எண் 1938 அல்லது பொலிஸ் பெண்கள் மற்றும் சிறுவர் பணியக உதவி எண் 109 மூலம் உதவி பெறுவது குறித்து பரிசீலிக்கலாம். இந்த demo எந்த அவசரச் செய்தியையும் அனுப்பாது.";
    }

    return "🌸 உங்கள் கேள்விக்கு நன்றி. பாதுகாப்புக் குறிப்புகள், பயணப் பாதுகாப்பு, இணையப் பாதுகாப்பு அல்லது உதவி தொடர்புகள் பற்றி கேட்கலாம். இது முன்கூட்டியே அமைக்கப்பட்ட demo பதில்களை மட்டுமே வழங்கும்.";
  }

  // English-language responses
  if (/hello|hi\b|hey\b|good morning/.test(text)) {
    return "Hello! 🌸 Welcome to ARAN AI. I can share general safety tips and help you find support information. What would you like to know?";
  }

  if (/bus|travel|transport|journey|commut/.test(text)) {
    return "🚌 Travel safety tips:\n• Plan your route in advance where possible.\n• Keep your phone and important contacts accessible.\n• If you feel threatened, move towards a safer place or seek help from a trusted person or appropriate official service when possible.";
  }

  if (/online|internet|cyber|harass|stalk|threat|message|privacy/.test(text)) {
    return "🔐 Digital safety tips:\n• Review your account privacy settings.\n• Block and report abusive accounts where appropriate.\n• If it is safe, preserve threatening messages as evidence.\n• Avoid sharing passwords or sensitive personal details.\n• Consider contacting an appropriate official support service.";
  }

  if (/help|emergency|danger|police|helpline|support|contact/.test(text)) {
    return "💗 If you are in immediate danger, don't wait for this chatbot. Contact the appropriate emergency service directly and move to a safer place if you can. In Sri Lanka, you can consider the Women's Helpline at 1938 or the Police Women and Children Bureau at 109. This demo cannot call anyone or send emergency alerts.";
  }

  if (/home|house|personal|safe|safety|protect/.test(text)) {
    return "🛡️ General safety tips:\n• Think ahead about where you could get help.\n• Identify people you trust.\n• Protect your personal information.\n• Choose the steps that suit your situation. If someone may be monitoring your device, consider your digital privacy before saving sensitive information.";
  }

  if (/thank/.test(text)) {
    return "You're welcome! 💗 Remember, ARAN AI is a demonstration assistant. Please check official sources for important safety information.";
  }

  return "Thank you for your question. 🌸 I can help with general topics such as personal safety, bus travel, online harassment and support information. Try one of the suggested questions below. This UI-only demo uses predefined replies, not a real AI model.";
}

export default function AranChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "வணக்கம்! 🌸 Hello! I'm ARAN AI, your safety information companion. What would you like to know?",
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  function sendMessage(value = message) {
    const trimmed = value.trim();

    if (!trimmed) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getReply(trimmed),
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      botMessage,
    ]);

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <div className="aran-chatbot">
      {isOpen && (
        <section
          className="aran-chat-panel"
          role="dialog"
          aria-label="ARAN AI safety assistant"
          aria-modal="false"
        >
          <header className="aran-chat-header">
            <div className="aran-chat-avatar">
              <span>அ</span>
            </div>

            <div className="aran-chat-heading">
              <strong>ARAN AI</strong>
              <span>அரண் · Safety Companion</span>
              <small>
                <span className="aran-status-dot" />
                Demo assistant
              </small>
            </div>

            <button
              type="button"
              className="aran-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close ARAN AI chat"
              title="Close chat"
            >
              ×
            </button>
          </header>

          <div className="aran-chat-notice">
            This demo uses predefined replies. It does not send
            messages to a server or contact emergency services.
          </div>

          <div className="aran-chat-messages" aria-live="polite">
            {messages.map((item) => (
              <div
                key={item.id}
                className={`aran-message-row ${item.sender}`}
              >
                <div
                  className={`aran-message ${item.sender}`}
                >
                  {item.text}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="aran-chat-suggestions">
              <span>Try asking</span>

              {suggestions.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form
            className="aran-chat-input-area"
            onSubmit={handleSubmit}
          >
            <input
              ref={inputRef}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Ask about safety..."
              aria-label="Your message"
              maxLength={500}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={!message.trim()}
              aria-label="Send message"
              title="Send message"
            >
              ➤
            </button>
          </form>

          <footer className="aran-chat-footer">
            Need official information?{" "}
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Explore services
            </Link>
          </footer>
        </section>
      )}

      <button
        type="button"
        className={`aran-chat-launcher ${isOpen ? "opened" : ""}`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close ARAN AI" : "Open ARAN AI"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <span className="aran-launcher-close">×</span>
        ) : (
          <>
            <span className="aran-launcher-icon">✿</span>
            <span className="aran-launcher-label">
              ARAN AI
            </span>
          </>
        )}
      </button>
    </div>
  );
}
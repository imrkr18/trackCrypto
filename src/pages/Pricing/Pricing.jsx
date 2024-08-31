import { useEffect, useState } from "react";
import "./Pricing.css";

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const countdown = () => {
      const releaseDate = new Date("March 31, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = releaseDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(countdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNotifyClick = () => {
    setShowEmailInput(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsButtonDisabled(true);
      setShowEmailInput(false);
    }
  };

  return (
    <div className="coming-soon-container">
      <div className="content">
        <h1>Pricing</h1>
        <p>Our pricing plans are in the works and will be available soon.</p>
        <p>Stay tuned for updates!</p>
        <div className="countdown">
          <h2>Coming in:</h2>
          <div id="timer">
            <span className="days">{timeLeft.days}</span> Days
            <span className="hours">{timeLeft.hours}</span> Hours
            <span className="minutes">{timeLeft.minutes}</span> Minutes
            <span className="seconds">{timeLeft.seconds}</span> Seconds
          </div>
        </div>
        {!showEmailInput && (
          <button
            className="notify-btn"
            onClick={handleNotifyClick}
            disabled={isButtonDisabled}
          >
            Notify Me
          </button>
        )}

        {showEmailInput && (
          <form className="email-form" onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button
              type="submit"
              className="notify-btn"
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? "Notified" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Pricing;

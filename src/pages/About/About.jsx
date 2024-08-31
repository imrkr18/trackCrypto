import "./About.css";

const About = () => {
  return (
    <div className="about-box">
      <div className="about-container">

        <section className="section">
          <h2>About Us</h2>
          <p className="intro">
            Welcome to TrackCrypto, your go-to destination for real-time
            cryptocurrency tracking, insightful market analysis, and
            comprehensive crypto data visualization.
          </p>
        </section>

        <section className="section">
          <h2>Our Mission</h2>
          <p>
            At TrackCrypto, our mission is to bring clarity and transparency to
            the crypto market by offering a suite of tools that track, analyze,
            and display critical market data in an easily digestible format.
          </p>
        </section>

        <section className="section">
          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>Real-Time Price Tracking:</strong> Keep an eye on the
              latest prices of your favorite cryptocurrencies.
            </li>
            <li>
              <strong>Interactive Graphs:</strong> Visualize historical price
              trends and market movements.
            </li>
            <li>
              <strong>Market Capitalization:</strong> Get insights into the
              market cap of various cryptocurrencies.
            </li>
            <li>
              <strong>Price Change Analysis:</strong> Stay informed about the
              daily, weekly, and monthly price changes.
            </li>
            <li>
              <strong>Volume and Liquidity Metrics:</strong> Monitor the trading
              volume and liquidity of cryptocurrencies.
            </li>
            <li>
              <strong>Comprehensive Data for Altcoins:</strong> Discover
              emerging coins and track their performance.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Accuracy and Reliability:</strong> We pride ourselves on
              the accuracy of our data.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Our platform is designed
              with simplicity in mind.
            </li>
            <li>
              <strong>Customizable Dashboards:</strong> Tailor the data you see
              to your unique needs.
            </li>
            <li>
              <strong>Security and Privacy:</strong> We use state-of-the-art
              encryption and security protocols.
            </li>
            <li>
              <strong>Educational Resources:</strong> Enhance your understanding
              of the market with our content.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has access to the tools and
            information needed to participate in the cryptocurrency revolution.
          </p>
        </section>

        <section className="section">
          <h2>Join Our Community</h2>
          <p>
            We invite you to join our growing community of cryptocurrency
            enthusiasts, traders, and investors. Follow us on social media,
            subscribe to our newsletter, and participate in our forums to stay
            connected.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

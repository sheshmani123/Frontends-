import React, { useEffect } from "react";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is loaded
  }, []); // Empty dependency array ensures it runs only once on component mount

  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>Refund Policy</h2>
        <h3>Introduction</h3>
        <p>
          These Privacy Policy govern your use of our website and services. By
          accessing or using our services, you agree to be bound by these terms.
        </p>
        <h3>Prisuncart refunds policy</h3>
        <h4>Returns</h4>
        <p>
          Since we deal in online ebooks and it’s a digital service, we don't
          offer a refund. We request you to read the description of our books
          before buying. In simple terms, WE DON'T ACCEPT REFUND AT
          prisuncart.com
        </p>
        <h4>Refunds (if applicable)</h4>
        <p>
          We don't accept refund requests. Due to digital goods and services, we
          don't accept refund requests. Please contact us at{" "}
          <a href="mailto:support@prisuncart.com">support@prisuncart.com</a>
        </p>
        <h4>Sale items (if applicable)</h4>
        <p>Unfortunately, sale items cannot be refunded.</p>
        <h4>Exchanges (if applicable)</h4>
        <p>
          Since every book is a valuable property, we don't take exchange
          requests either.
        </p>
        <h4>Gifts</h4>
        <p>As of now, we don’t have any feature for gifting a book.</p>
        <h4>Shipping</h4>
        <p>On our website, everything is online. We don't provide CD or DVD.</p>
      </div>
    </section>
  );
};

export default RefundPolicy;

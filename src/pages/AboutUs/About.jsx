import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to PRISUNCART EBOOKSTRADE PRIVATE LIMITED, your go-to
          destination for all things related to books, literature, and reading.
          At PRISUNCART EBOOKSTRADE PRIVATE LIMITED, we are passionate about
          fostering a love for reading and providing book enthusiasts with a
          platform to connect, discover, and explore the fascinating world of
          literature.
        </p>
        <p>
          Our journey began with a simple mission: to make reading accessible
          and enjoyable for everyone. Over the years, we have grown into a
          thriving community of book lovers, authors, and publishers, united by
          our shared love for stories and knowledge.
        </p>
        <p>
          At PRISUNCART EBOOKSTRADE PRIVATE LIMITED, we offer a wide range of
          services and resources, including book recommendations, author
          interviews, literary events, and much more. Whether you're a seasoned
          bibliophile or a casual reader, you'll find something to inspire and
          delight you here.
        </p>
        <p>
          Join us on our mission to spread the joy of reading and celebrate the
          power of storytelling. Together, let's embark on a literary adventure
          and discover the magic of books!
        </p>
        <br />
        <br />
        <h2>Contact Us:</h2>
        <p>Email: support@prisuncart.com</p>
      </div>
    </section>
  );
};

export default About;

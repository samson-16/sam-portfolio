import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Samson Demessie </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
           a passionate Software developer based in Ethiopia with over two years of hands-on experience in front-end, back-end, and mobile app development.

            <br />
          I'm also part of the A2SV community, where I continue to sharpen my skills in Data Structures and Algorithms, team collaboration, and advanced software engineering.

            <br />
            <br />
            Whether I'm building apps, leading hackathon teams, or diving into system design, I’m driven by innovation, learning, and purpose. Let's build something great together!

          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Samson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

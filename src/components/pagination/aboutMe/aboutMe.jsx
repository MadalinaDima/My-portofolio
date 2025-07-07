import "./aboutMe.css";
import Footer from "../../Footer/Footer";

import { Container } from "react-bootstrap";
import Header from "../../header/Header";
import { useNavigate } from "react-router-dom";
function AboutMe() {
  const navigate = useNavigate();
  return (
    <>
      <Header onClick={() => navigate("/")} />
      <Container className="about-me-container">
        <h1> A few words about me </h1>
        <p>
          Hi! I'm Madalina. Welcome to my portofolio. I'm a junior front-end
          developer who loves building clean, responsive websites. I’m always
          learning, experimenting, and aiming to write code that’s both
          functional and fun to use.
        </p>
      </Container>
      <Container className="about-me-container">
        <h1>What i do</h1>
        <p>
          <br /> I take pride in managing all aspects of front-end development,
          from design through to implementation. If you're interested in
          learning more, I invite you to explore{" "}
          <span
            onClick={() => navigate("/projects")}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            my work.
          </span>
        </p>
      </Container>
      <Container className=" social-media-container">
        <h1>You can find me here</h1>
        <p>Social media :</p> <br />
        <div className="social-media-links">
          {" "}
          <a href="http://www.facebook.com"> Facebook</a> <br />
          <a href="http://www.instagram.com"> Instagram</a> <br />
          <a href="http://www.tiktok.com"> TikTok</a>
          <br />
          <a href="https://github.com/MadalinaDima"> Github</a>
          <a href="mailto:drugau.madalina@yahoo.com">Email me </a>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default AboutMe;

import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from "../assets/img/icons8-linkedin.svg";
import navIcon2 from "../assets/img/icons8-twitter.svg";
import navIcon3 from "../assets/img/icons8-github.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const scroll = () => {
    const section = document.querySelector("#contact-me");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skill
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("project")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ankit-kumar-89304622b/">
                <img src={navIcon1} alt="icons" />
              </a>
              <a href="https://twitter.com/k_ankit07">
                <img src={navIcon2} alt="icons" />
              </a>
              <a href="https://github.com/k-ankit07">
                <img src={navIcon3} alt="icons" />
              </a>
            </div>
            <button
              onClick={() => {
                scroll();
              }}
            >
              <span>Contact Me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

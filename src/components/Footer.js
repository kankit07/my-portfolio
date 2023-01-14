import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/icons8-linkedin.svg";
import navIcon2 from "../assets/img/icons8-twitter.svg";
import navIcon3 from "../assets/img/icons8-github.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6} className="text-center text-sm-end"></Col>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/ankit-kumar-89304622b/">
              <img src={navIcon1} />
            </a>
            <a href="https://twitter.com/k_ankit07">
              <img src={navIcon2} />
            </a>
            <a href="https://github.com/k-ankit07">
              <img src={navIcon3} />
            </a>
          </div>
          <p>🌱okgrass</p>
        </Row>
      </Container>
    </footer>
  );
};

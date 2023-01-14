import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mongodb from "../assets/img/mongodb.webp";
import express from "../assets/img/express.webp";
import react from "../assets/img/react.webp";
import node from "../assets/img/node.webp";

export const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={mongodb} alt="web" />
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src={express} alt="web" />
                  <h5>Express Js</h5>
                </div>
                <div className="item">
                  <img src={react} alt="app" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={node} alt="app" />
                  <h5>Node Js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

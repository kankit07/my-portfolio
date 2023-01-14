import { Col } from "react-bootstrap";
import github from "../assets/img/icons8-github.svg";
import internet from "../assets/img/icons8-internet.png";

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  sourceCode,
  link,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href={sourceCode}>
            <img src={github} alt="icons" />
          </a>
          <a href={link}>
            <img src={internet} alt="icons" />
          </a>
        </div>
      </div>
    </Col>
  );
};

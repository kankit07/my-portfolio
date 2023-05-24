import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import newsletter from "../assets/img/newsletter.png";
import todolist from "../assets/img/todolist.png";
import exercise from "../assets/img/exercise.png";

export const Projects = () => {
  const projects = [
    {
      title: "Newsletter",
      description: "Made using javascript.Email service used : mailchimp",
      imageUrl: newsletter,
      sourceCode: "https://github.com/k-ankit07/newsletter_page",
      link: "https://silly-onesies-mite.cyclic.app/",
    },
    {
      title: "Exercise Db",
      description:
        "A gym exercises web app built using Node.js, React, and Material UI, integrating Rapid API for fetching exercise details and displaying relevant YouTube videos.",
      imageUrl: exercise,
      // sourceCode:'',
      link: "https://ok-gym.netlify.app",
    },
    {
      title: "ToDoList",
      description:
        "Full stack todolist made using Javascript Node ejs and Mongodb.",
      imageUrl: todolist,
      // sourceCode:'',
      link: "https://famous-beret-toad.cyclic.app",
    },
//     {
//       title: "Calculator",
//       description: "Made using vanila javascript.",
//       imageUrl: calculator,
//       sourceCode: "https://github.com/k-ankit07/simpleCalculator",
//       link: "https://k-ankit07.github.io/simpleCalculator/",
//     },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p></p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

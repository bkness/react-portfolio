import Project from "../components/Project";
import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../data/projects";

function Portfolio() {
  return (
    <Container className="my-5">
      <Row>
        {projects.map((project, index) => (
          <Col sm={12} md={6} lg={6} key={index} className="mb-4">
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;

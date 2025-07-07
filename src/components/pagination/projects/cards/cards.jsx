import "./cards.css";
import { Card, Button } from "react-bootstrap";
import ProiectImg from "../../../../assets/foto/Culture.png";

function ProjectCard({ title, description, image, projectLink }) {
  return (
    <Card className="project-card" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "90%", margin: "auto", padding: "10px" }}
      />
      <Card.Body className="card-content">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => window.open(projectLink, "_blank")}
        >
          See Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;

import "./projects.css";
import Footer from "../../Footer/Footer";
import Header from "../../header/Header";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./cards/cards";
import { Container } from "react-bootstrap";
import projectImage from "../../../assets/foto/Culture.png";

export default function Projects() {
  const projectList = [
    {
      title: "Weather App",
      description: "Displays weather info using a public API.",
      image:
        "https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-gallery-icon-png-image_515223.jpg",
      projectLink: "https://proiect-final-it-school.vercel.app/",
    },
    {
      title: "To-Do List",
      description: "Task management app with local storage.",
      image:
        "https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-gallery-icon-png-image_515223.jpg",
      projectLink: "https://proiect-final-it-school.vercel.app/",
    },
    {
      title: "Online Store",
      description: "Landing page with products and cart.",
      image:
        "https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-gallery-icon-png-image_515223.jpg",
      projectLink: "https://proiect-final-it-school.vercel.app/",
    },
    {
      title: "Restaurant ",
      description: "A presentation page for a fine-dining restaurant.",
      image: projectImage,
      projectLink: "https://proiect-final-it-school.vercel.app/",
    },
  ];
  return (
    <>
      <Header onClick={() => navigate("/")} />{" "}
      <Container className="projects-container">
        {projectList.map((project, index) => (
          <ProjectCard
            className="card-detalies"
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            projectLink={project.projectLink}
          />
        ))}
      </Container>
      <Footer />;
    </>
  );
}

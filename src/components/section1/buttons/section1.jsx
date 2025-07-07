import "./section1.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";

function Section1() {
  const navigate = useNavigate();

  return (
    <>
      <div className="section1-div">
        <div className="buttons-div">
          <button
            onClick={() => navigate("/aboutMe")}
            className="btn text-glow-section1 btn-primary"
          >
            About me
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="btn text-glow-section1 btn-primary"
          >
            Projects
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Section1;

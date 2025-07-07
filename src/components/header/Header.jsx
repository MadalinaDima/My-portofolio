import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <nav className="navbar ">
      <div onClick={() => navigate("/")} className="container-fluid">
        <a className="navbar-brand text-glow" href="#">
          Madalina Dima
        </a>
      </div>
    </nav>
  );
}
export default Header;

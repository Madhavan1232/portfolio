import logo from "./logo1.png"
import "../Home/home.css";
import { Outlet, useNavigate} from "react-router-dom";
import Transition from "../transition";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="top-bar">
        <div className="logo" >
          <img src={logo} alt="Logo" onClick={() => navigate("/")} />
          <span>Maddy</span>
        </div>

        <nav className="Navbar">
          <ul className="bar-container">
            <li className="nav-bar-items" onClick={() => navigate("/")}>Home</li>
            <li className="nav-bar-items" onClick={() => navigate("/skills")}>Skills</li>
            <li className="nav-bar-items" onClick={() => navigate("/projects")}>Projects</li>
          </ul>
        </nav>
      </div>
        <Outlet />
    </div>
  );
}

export default Transition(Layout);

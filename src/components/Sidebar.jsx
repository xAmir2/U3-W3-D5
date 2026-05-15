import { House, Grid, Broadcast } from "react-bootstrap-icons";
import { Col } from "react-bootstrap";
import musicLogo from "../assets/logos/music.svg";

const Sidebar = () => {
  return (
    <Col md={3} className="sidebar d-none d-md-flex flex-column p-3">
      <div className="mb-4">
        <img
          src={musicLogo}
          alt="music"
          style={{ filter: "brightness(0) invert(1)", cursor: "pointer" }}
        />
      </div>

      <input
        type="text"
        className="form-control mb-4 bg-dark text-white border-secondary"
        placeholder="Search"
      />

      <div className="d-flex flex-column gap-3 text-white">
        <div style={{ cursor: "pointer" }}>
          <House className="text-danger me-2" />
          Home
        </div>

        <div style={{ cursor: "pointer" }}>
          <Grid className="text-danger me-2" />
          New
        </div>

        <div style={{ cursor: "pointer" }}>
          <Broadcast className="text-danger me-2" />
          Radio
        </div>
      </div>
    </Col>
  );
};

export default Sidebar;

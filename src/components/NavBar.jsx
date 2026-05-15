import { Navbar, Container } from "react-bootstrap";
import appleLogo from "../assets/logos/apple.svg";
import musicLogo from "../assets/logos/music.svg";

const NavBar = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#222", height: "60px" }}
      className="px-4"
      expand="md"
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center flex-nowrap"
      >
        <div className="d-none d-md-flex gap-3 text-white">
          <i className="bi bi-shuffle" style={{ cursor: "pointer" }}></i>
          <i
            className="bi bi-skip-backward-fill"
            style={{ cursor: "pointer" }}
          ></i>
          <i className="bi bi-play-fill" style={{ cursor: "pointer" }}></i>
          <i
            className="bi bi-skip-forward-fill"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
        <div className="d-md-none">
          <i class="bi bi-list text-danger" style={{ cursor: "pointer" }}></i>
        </div>
        <Navbar.Brand className="d-none d-md-flex justify-content-center w-100 ">
          <div className="rounded-2 py-1 px-3 bg-secondary d-flex align-items-center w-50 justify-content-center">
            <img
              src={appleLogo}
              alt="apple-icon"
              style={{
                filter: "brightness(0) invert(1)",
                cursor: "pointer",
              }}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Brand className="d-flex justify-content-center w-100 d-md-none">
          <img
            src={musicLogo}
            alt="music-icon"
            style={{
              filter: "brightness(0) invert(1)",
              cursor: "pointer",
            }}
          />
        </Navbar.Brand>

        <button className="btn btn-danger btn-sm text-nowrap d-none d-md-block">
          Log in
        </button>
        <p
          className="text-danger pt-3 d-md-none"
          style={{ whiteSpace: "nowrap" }}
        >
          Log in
        </p>
      </Container>
    </Navbar>
  );
};

export default NavBar;

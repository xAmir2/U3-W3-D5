import { Row, Col } from "react-bootstrap";

import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MusicSection from "./components/MusicSection";
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/Footer";

import "./app.css";
import { RadioSection } from "./components/RadioSection";

function App() {
  return (
    <Row className="bg-main text-white g-0">
      <Sidebar />

      <Col md={9} className="bg-dark">
        <NavBar />

        <main className="p-3 p-md-4 pb-5">
          <HeroSection />
          <RadioSection />
          <MusicSection title="EDM" query="edm" />
          <MusicSection title="New Realeses" query="rock" />
          <MusicSection title="Hip-Hop" query="eminem" />
          <ExploreSection />
          <Footer />
        </main>
      </Col>
    </Row>
  );
}

export default App;

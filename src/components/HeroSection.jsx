import { Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <h1 className="section-title mb-4">New</h1>

      <Row className="g-4 mb-5">
        <Col md={6}>
          <div>
            <p className="text-secondary mb-1">NEW RADIO STATION</p>

            <h4 className="mb-3 text-truncate">
              Relax we will take care of the rest. Listen Apple Music Chill
            </h4>

            <img
              src="./src/assets/images/1a.png"
              className="img-fluid rounded hero-img"
            />
          </div>
        </Col>

        <Col md={6}>
          <div>
            <p className="text-secondary mb-1">NEW RADIO STATION</p>

            <h4 className="mb-3">New house of Latin Music</h4>

            <img
              src="./src/assets/images/1b.png"
              className="img-fluid rounded hero-img"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HeroSection;

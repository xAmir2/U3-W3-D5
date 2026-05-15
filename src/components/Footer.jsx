import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-2 text-secondary small bg-dark">
      <p>
        <span className="text-white">Italy</span> | English &#40;UK&#41;
      </p>

      <p>
        Copyright © 2024 <span className="text-white">Apple Inc.</span> All
        rights reserved.
      </p>
      <Row className="w-75 text-white align-items-center">
        <Col xs="auto" style={{ cursor: "pointer" }}>
          Conditions of internet services
        </Col>

        <Col xs="auto" className="text-secondary">
          |
        </Col>

        <Col xs="auto" style={{ cursor: "pointer" }}>
          Apple Music and privacy
        </Col>

        <Col xs="auto" className="text-secondary">
          |
        </Col>

        <Col xs="auto" style={{ cursor: "pointer" }}>
          Cookie Notice
        </Col>

        <Col xs="auto" className="text-secondary">
          |
        </Col>

        <Col xs="auto" style={{ cursor: "pointer" }}>
          Support
        </Col>

        <Col xs="auto" className="text-secondary">
          |
        </Col>

        <Col xs="auto" style={{ cursor: "pointer" }}>
          Feedback
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

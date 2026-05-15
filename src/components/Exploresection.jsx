import { Col, Row } from "react-bootstrap";

const ExploreSection = () => {
  const items = [
    "Explore by genre",
    "Decades",
    "Activities and mood",
    "Worldwide",
    "Rankings",
    "Spatial Audio",
    "Musical Videos",
    "New Artists",
    "Hits of the past",
  ];

  return (
    <div className="mb-5">
      <h3 className="mb-4">More to explore</h3>

      <Row className="g-3">
        {items.map((item) => (
          <Col className="col-12 col-md-6 col-lg-4" key={item}>
            <div className="explore-box p-4 rounded">
              <div className="d-flex justify-content-between">
                <span>{item}</span>

                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExploreSection;

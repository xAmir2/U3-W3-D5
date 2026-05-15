import { useEffect, useState } from "react";

import { Row, Col, Spinner } from "react-bootstrap";

import MusicCard from "./MusicCard";

const MusicSection = ({ title, query }) => {
  const [songs, setSongs] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
        );

        const data = await response.json();

        setSongs(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-5">
      <h3 className="mb-4">{title}</h3>

      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Row className="g-4">
          {songs.slice(0, 6).map((song) => (
            <Col xs={6} md={4} lg={2} key={song.id}>
              <MusicCard song={song} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default MusicSection;

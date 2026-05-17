import { Heart, HeartFill } from "react-bootstrap-icons";

import { useDispatch, useSelector } from "react-redux";

import { addToFavorites, removeFromFavorites } from "../Redux/actions";

import { Col, Row } from "react-bootstrap";

export const RadioSection = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const pics = [
    "./src/assets/images/2a.png",
    "./src/assets/images/2b.png",
    "./src/assets/images/2c.png",
    "./src/assets/images/2d.png",
    "./src/assets/images/2e.png",
    "./src/assets/images/2f.png",
  ];

  const titles = [
    "Pròlogo con Abuelo",
    "The Wanderer",
    "Micheal Bublé & Carly Pearce",
    "Stephan Moccio: The Zane Lowe Interview",
    "Chart Spotlight: Julia Micheals",
    "Karri & Travis Mills",
  ];

  return (
    <Row className="g-4 mb-3">
      <h2>New Radio Episodes</h2>

      {pics.map((item, index) => {
        const album = {
          id: index,
          title: titles[index],
          image: item,
        };

        const isFavorite = favorites.find((fav) => fav.id === album.id);

        const toggleFavorite = (e) => {
          e.stopPropagation();

          if (isFavorite) {
            dispatch(removeFromFavorites(album.id));
          } else {
            dispatch(addToFavorites(album));
          }
        };

        return (
          <Col xs={6} md={4} lg={2} key={album.id}>
            <div className="music-card">
              <img
                src={item}
                className="img-fluid rounded mb-2"
                alt={album.title}
              />

              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-0">{album.title}</h6>
                </div>

                <div role="button" onClick={toggleFavorite}>
                  {isFavorite ? <HeartFill /> : <Heart />}
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

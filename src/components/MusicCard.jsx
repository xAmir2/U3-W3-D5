import { Heart, HeartFill } from "react-bootstrap-icons";

import { useDispatch, useSelector } from "react-redux";

import { addToFavorites, removeFromFavorites } from "../Redux/actions";

const MusicCard = ({ song }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  
  const isFavorite = favorites.some((song) => song.id === song.id);
  const toggleFavorite = (e) => {
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFromFavorites(song.id));
    } else {
      dispatch(addToFavorites(song));
    }
  };

  return (
    <div className="music-card">
      <img
        src={song.album.cover_medium}
        className="img-fluid rounded mb-2"
        alt={song.title}
      />

      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6 className="mb-0">{song.title}</h6>

          <small className="text-secondary">{song.artist.name}</small>
        </div>

        <div role="button" onClick={toggleFavorite}>
          {isFavorite ? <HeartFill /> : <Heart />}
        </div>
      </div>
    </div>
  );
};

export default MusicCard;

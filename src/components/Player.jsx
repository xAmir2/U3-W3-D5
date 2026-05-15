import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.player.currentSong);

  return (
    <div className="player-bar position-fixed bottom-0 start-0 end-0 d-flex justify-content-between align-items-center px-4">
      {currentSong ? (
        <>
          <div className="d-flex align-items-center gap-3">
            <img
              src={currentSong.album.cover_small}
              alt=""
              className="rounded"
            />

            <div>
              <div>{currentSong.title}</div>

              <small className="text-secondary">
                {currentSong.artist.name}
              </small>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-skip-backward-fill"></i>

            <i className="bi bi-play-fill"></i>

            <i className="bi bi-skip-forward-fill"></i>
          </div>

          <audio controls src={currentSong.preview}></audio>
        </>
      ) : (
        <div>Select a song</div>
      )}
    </div>
  );
};

export default Player;

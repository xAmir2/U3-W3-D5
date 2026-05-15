export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";


export const addToFavorites = (song) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: song,
  };
};

export const removeFromFavorites = (songId) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: songId,
  };
};

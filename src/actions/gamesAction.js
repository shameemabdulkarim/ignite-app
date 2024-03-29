import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchedGameURL,
} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchedGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};

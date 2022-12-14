import { configureStore } from "@reduxjs/toolkit";
import movie from "../store/movie";

const store = configureStore({
  reducer: {
    movie,
  },
});

type RootState = ReturnType<typeof store.getState>;

// shorthand for useSelector e.g. useSelector(selectTodos)
export const showAllMovies = (state: RootState) => state.movie.movies;

export default store;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../types/movie";

// interface Todo {
//   id: number;
//   done: boolean;
//   text: string;
// }

// interface TodoSlice {
//   todos: Todo[];
// }

const initialState: any = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    GET_MOVIES: (state, action: PayloadAction<IMovie | null>) => {
      state.movies = action.payload;
    },
  },
});

export const { GET_MOVIES } = movieSlice.actions;
export default movieSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SearchedMovie, SelectedMovie } from "./../interfaces/index";

interface MovieResult {
  Search: SearchedMovie[];
  totalResults: string;
  Response: string;
}

interface InitialState {
  movies: MovieResult | null;
  isLoading: boolean;
  isError: boolean;
  favorites: SelectedMovie[];
  selectedMovie: SelectedMovie | null;
}

const initialState: InitialState = {
  movies: null,
  isLoading: false,
  isError: false,
  favorites: JSON.parse(localStorage.getItem("myFavorites") as string) || [],
  selectedMovie: null,
};

const apikey = "ac91ba4";

export const getMovieByTitle = createAsyncThunk(
  "getMovieByTitle",
  async (title: string) => {
    const response = await fetch(
      `https://www.omdbapi.com/?&apikey=${apikey}&s=${title}`
    );

    const data = await response.json();
    return data;
  }
);

export const getMovieById = createAsyncThunk(
  "getMovieById",
  async (id: string) => {
    const response = await fetch(
      `https://www.omdbapi.com/?&apikey=${apikey}&i=${id}`
    );

    const data = await response.json();
    return data;
  }
);

const handleMovieState = createSlice({
  name: "handleMovieState",
  initialState,
  reducers: {
    addFave: (state, { payload }) => {
      const isAdded = state.favorites.find(
        (movie) => movie.imdbID === payload.imdbID
      );

      if (!isAdded) {
        state.favorites.push(payload);
        localStorage.setItem("myFavorites", JSON.stringify(state.favorites));
      }
    },

    removeFave: (state, { payload }) => {
      const newArr = state.favorites.filter((fave) => fave.imdbID !== payload);
      state.favorites = newArr;
      localStorage.setItem("myFavorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieByTitle.fulfilled, (state, { payload }) => {
      state.movies = payload;
      state.isError = false;
      state.isLoading = false;
    });

    builder.addCase(getMovieByTitle.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(getMovieByTitle.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });

    builder.addCase(getMovieById.fulfilled, (state, { payload }) => {
      state.selectedMovie = payload;
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(getMovieById.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(getMovieById.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
  },
});

export default handleMovieState.reducer;
export const { addFave, removeFave } = handleMovieState.actions;

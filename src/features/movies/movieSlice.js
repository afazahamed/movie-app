import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchTerm) => {
    if (searchTerm === "" || searchTerm === undefined) {
      searchTerm = "harry";
    }
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${searchTerm}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const searchTerm = "friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${searchTerm}&type=series`
    );
    // Store data to redux store
    return response.data;
  }
);

export const fetchAsyncMoviesOrShowsByID = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowsByID",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  singlePost: {},
  pending: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.movies = action.payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        state.pending = false;
      });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      state.pending = false;
      state.shows = action.payload;
    });
    builder
      .addCase(fetchAsyncMoviesOrShowsByID.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchAsyncMoviesOrShowsByID.fulfilled, (state, action) => {
        state.pending = false;
        state.singlePost = action.payload;
      });
  },
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSinglePost = (state) => state.movies.singlePost;
export const getPending = (state) => state.movies.pending;

export default movieSlice.reducer;

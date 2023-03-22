import React, { useState, useEffect } from "react";
import MovieListing from "../components/MovieListing";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByTitle } from "./../features/handleMoviesSlice";
import { RootState } from "../app/store";

type Props = {};

const Home = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const { movies, isLoading, isError } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch<any>(getMovieByTitle(searchTerm.length > 2 ? searchTerm : ""));
  }, [searchTerm]);

  return (
    <div
      className={
        searchTerm.length > 2
          ? "flex flex-col justify-start items- min-h-screen mx-4"
          : "flex flex-col justify-center items-center min-h-screen mx-4"
      }
    >
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {movies && (
        <MovieListing
          data={movies?.Search}
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </div>
  );
};

export default Home;

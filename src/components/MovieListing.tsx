import React from "react";
import { SearchedMovie } from "../interfaces";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

type Props = {
  data: SearchedMovie[];
  isLoading?: boolean;
  isError?: boolean;
};

const MovieListing = (props: Props) => {
  return (
    <>
      <div>{props.isLoading && <Spinner />}</div>
      <section className="lg:grid lg:grid-cols-3 gap-6">
        {props.data?.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </section>
    </>
  );
};

export default MovieListing;

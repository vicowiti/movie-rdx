import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import MovieListing from "../components/MovieListing";

type Props = {};

const Favorites = (props: Props) => {
  const { favorites } = useSelector((state: RootState) => state.movies);
  return (
    <div>
      {favorites.length < 1 ? (
        <div>No Favorite movies yet</div>
      ) : (
        <MovieListing data={favorites} />
      )}
    </div>
  );
};

export default Favorites;

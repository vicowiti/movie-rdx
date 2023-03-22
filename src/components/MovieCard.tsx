import React from "react";
import { SearchedMovie } from "./../interfaces/index";
import { FaCalendarAlt } from "react-icons/fa";
import { FcFilmReel } from "react-icons/fc";
import { Link } from "react-router-dom";

type Props = {
  movie: SearchedMovie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <Link to={`/details/${movie.imdbID}`}>
      <div className="bg-[#303134] p-2 my-4 rounded-lg flex items-center gap-5 shadow-lg dark:shadow-lg-dark">
        <div>
          <img src={movie.Poster} className="w-[100px] h-[150px]" />
        </div>
        <div>
          <div className="flex items-center mb-3 gap-3">
            <FcFilmReel size={25} />
            <h3 className="text-xl font-bold">{movie.Title}</h3>
          </div>
          <div className="flex items-center mb-3 gap-3">
            <FaCalendarAlt size={25} />
            <p>{movie.Year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

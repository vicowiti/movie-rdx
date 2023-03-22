import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import {
  BiTime,
  BiCalendar,
  BiBookmarkHeart,
  BiArrowBack,
} from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { TbReportMoney } from "react-icons/tb";
import { BsStarFill, BsPeopleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addFave,
  getMovieById,
  removeFave,
} from "../features/handleMoviesSlice";
import { RootState } from "../app/store";
import Favorites from "./Favorites";
import { toast } from "react-toastify";

type Props = {};
//
const Details = (props: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedMovie, isLoading, isError, favorites } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    dispatch<any>(getMovieById(String(id)));
  }, [id]);

  const isInFavorites = favorites.some((movie) => movie.imdbID === id);

  const addToFavorites = () => {
    dispatch(addFave(selectedMovie));
    toast.success("Added to favorites");
  };

  const removeFromFavorites = () => {
    dispatch(removeFave(id));
    toast.error("Removed from favorites");
  };

  return (
    <div className="mx-2">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="p-3 bg-[#303134] rounded-xl shadow-xl dark:shadow-xl-dark">
          <div className="my-2" onClick={() => navigate(-1)}>
            <BiArrowBack size={30} />
          </div>
          <div className="flex flex-col lg:flex-row gap-9 ">
            {/* Poster */}
            <div className="flex justify-center items-center">
              <img
                src={selectedMovie?.Poster}
                alt="Movie details poster"
                className="w-[50vw] lg:w-[30vw] h-auto"
              />
            </div>
            {/* Title and Plot */}
            <div className="">
              <small className="font-extrabold my-4">
                {selectedMovie?.Type}
              </small>
              <h1 className="font-extrabold text-4xl my-5">
                {selectedMovie?.Title}
              </h1>
              <p className="font-thin max-w-[600px] my-5">
                {selectedMovie?.Plot}
              </p>
              {/* favorites */}
              <section>
                {!isInFavorites ? (
                  <button
                    className="p-2 font-bold rounded-lg flex items-center gap-2 bg-[#7dff56]"
                    onClick={addToFavorites}
                  >
                    Add to favorites <BiBookmarkHeart size={20} />
                  </button>
                ) : (
                  <button
                    className="p-2 font-bold rounded-lg flex items-center gap-2 bg-red-700"
                    onClick={removeFromFavorites}
                  >
                    Remove from Favorites <AiOutlineDelete />
                  </button>
                )}
              </section>
              {/* data */}
              <section className="flex flex-col gap-3 p-3">
                <h1 className="font-bold">Movie Data</h1>
                <div className="flex items-center gap-3">
                  <BiTime size={25} color="#00ced1" />
                  <p>{selectedMovie?.Runtime}</p>
                </div>
                <div className="flex items-center gap-3">
                  <BiCalendar size={25} color="#00ced1" />
                  <p>{selectedMovie?.Released}</p>
                </div>
                <div className="flex items-center gap-3">
                  <TbReportMoney size={25} color="#00ced1" />
                  <p>{selectedMovie?.BoxOffice}</p>
                </div>
                <div className="flex items-center gap-3">
                  <BsStarFill color="gold" size={25} />
                  <p>{selectedMovie?.imdbRating}</p>
                </div>
                <div className="flex items-center gap-3">
                  <BsPeopleFill color="#00ced1" size={25} />
                  <p>{selectedMovie?.Actors}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;

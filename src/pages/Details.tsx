import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSearchByIdQuery } from "../features/movieSlice";
import {
  BiTime,
  BiCalendar,
  BiBookmarkHeart,
  BiArrowBack,
} from "react-icons/bi";
import { TbReportMoney } from "react-icons/tb";
import { BsStarFill } from "react-icons/bs";

type Props = {};

const Details = (props: Props) => {
  const { id } = useParams();
  const { data, isLoading, isError } = useSearchByIdQuery(id as string);

  return (
    <div className="mx-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="p-3 bg-white rounded-xl shadow-xl dark:shadow-xl-dark">
          <div className="my-2">
            <BiArrowBack size={30} />
          </div>
          <div className="flex flex-col lg:flex-row gap-9 ">
            {/* Poster */}
            <div className="flex justify-center items-center">
              <img
                src={data?.Poster}
                alt="Movie details poster"
                className="w-[50vw] lg:w-[30vw] h-auto"
              />
            </div>
            {/* Title and Plot */}
            <div className="">
              <small className="font-extrabold my-4">{data?.Type}</small>
              <h1 className="font-extrabold text-4xl my-5">{data?.Title}</h1>
              <p className="font-bold max-w-[600px] my-5">{data?.Plot}</p>
              {/* favorites */}
              <section>
                <button className="p-2 outline rounded-lg flex items-center gap-2">
                  Add to favorites <BiBookmarkHeart size={20} />
                </button>
              </section>
              {/* data */}
              <section className="flex flex-col gap-3 p-3">
                <h1 className="font-bold">Movie Data</h1>
                <div className="flex items-center gap-3">
                  <BiTime size={25} />
                  <p>{data?.Runtime}</p>
                </div>
                <div className="flex items-center gap-3">
                  <BiCalendar size={25} />
                  <p>{data?.Released}</p>
                </div>
                <div className="flex items-center gap-3">
                  <TbReportMoney size={25} />
                  <p>{data?.BoxOffice}</p>
                </div>
                <div className="flex items-center gap-3">
                  <BsStarFill color="gold" size={25} />
                  <p>{data?.imdbRating}</p>
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

import React, { useState } from "react";
import MovieListing from "../components/MovieListing";
import SearchBar from "../components/SearchBar";
import { useSearchByTitleQuery } from "../features/movieSlice";

type Props = {};

const Home = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError } = useSearchByTitleQuery(
    searchTerm.length > 2 ? searchTerm : ""
  );

  console.log(data);

  return (
    <div
      className={
        searchTerm.length > 2
          ? "flex flex-col justify-start items- min-h-screen mx-4"
          : "flex flex-col justify-center items-center min-h-screen mx-4"
      }
    >
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MovieListing
        data={data?.Search}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default Home;

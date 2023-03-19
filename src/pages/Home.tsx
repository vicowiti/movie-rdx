import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

type Props = {};

const Home = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div
      className={
        searchTerm.length > 2
          ? "flex flex-col justify-start items- min-h-screen mx-4"
          : "flex justify-center items-center min-h-screen mx-4"
      }
    >
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Home;

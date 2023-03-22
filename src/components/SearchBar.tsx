import React, { useState } from "react";
import Logo from "../assets/LOGO.png";

type Props = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = (props: Props) => {
  const { searchTerm, setSearchTerm } = props;
  return (
    <div
      className={
        searchTerm.length > 2
          ? "flex items-center flex-row "
          : "flex flex-col items-center lg:flex-col lg:justify-center gap-3 mt-[-150px]"
      }
    >
      {/* Logo */}
      <div>
        <img
          src={Logo}
          className={searchTerm.length > 2 ? "w-[50px] h-[50px] mr-4" : ""}
        />
      </div>
      <input
        autoFocus
        type="text"
        placeholder="Search By Title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[80vw] h-[39px] rounded-3xl outline-none lg:w-[40vw]  p-2 lg:rounded-xl bg-[#303134]"
      />
    </div>
  );
};

export default SearchBar;

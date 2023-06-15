"use client";
import React, { useState } from "react";
import SearchManufacture from "./SearchManufacture";

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const handleSearch = (e: any) => {
    e.preventDefault();
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacturer={manufacture}
          setManuFacturer={setManufacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;

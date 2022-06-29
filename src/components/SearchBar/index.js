import React from "react";

import search from "../../assets/icons/search.svg";

const SearchBar = ({ placeholder }) => {
  return (
    <div
      className="relative w-[423px] min-w-[200px]"
      style={{
        boxShadow: "0px 1px 1px rgba(51, 154, 240, 0.1)",
      }}
    >
      <input type="text" placeholder={placeholder} className="p-3 w-full bg-[#FBFBFB] rounded-xl" />
      <img src={search} alt="search" className="absolute ml-[90%] top-3" />
    </div>
  );
};

export { SearchBar };

import React from "react";

import search from "../../assets/icons/search.svg";

const SearchBar = ({ placeholder, onChange, value, widthSize = "300px" }) => {
  return (
    <div className={`relative w-[${widthSize}]`}>
      <img src={search} alt="search" className="absolute ml-[2%] top-3" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-3 w-full bg-[#FBFBFB] px-[10%] rounded-xl outline-none"
      />
    </div>
  );
};

export { SearchBar };

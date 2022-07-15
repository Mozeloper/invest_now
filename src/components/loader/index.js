import React from "react";

export default function Loader() {
  return (
    <div className="lds-ring w-full flex flex-col justify-center items-center">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

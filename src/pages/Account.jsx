import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[230px] md:h-[300] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/9f5d2d52-782f-40d3-bb43-dce2713ff628/NG-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-[600px]"></div>
        <div className="absolute p-4 md:p-6 top-[20%] md:top-[10%] lg:top-[21%]">
          <h1 className="text-2xl md:text-3xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;

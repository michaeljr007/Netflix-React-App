import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please Login!");
    }
  };

  return (
    <div className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-[93px] lg:h-[140px] rounded block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="top-0 left-0 absolute w-full h-full bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold justify-center items-center text-center h-full flex">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="top-3 left-3 absolute text-gray-300" />
          ) : (
            <FaRegHeart className="top-3 left-3 absolute text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;

import React from "react";
import { UserAuth } from "../context/AuthContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { db } from "../Firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = React.useState([]);
  const { user } = UserAuth();

  const scrollLeft = () => {
    let slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRight = () => {
    let slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  React.useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);

      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="my-5 md:my-9">
        <div className="items-center relative flex group">
          <MdChevronRight
            onClick={scrollLeft}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
          <div
            id={"slider"}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          >
            {movies.map((item, id) => (
              <div
                key={id}
                className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="top-0 left-0 absolute w-full h-full bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold justify-center items-center text-center h-full flex">
                    {item?.title}
                  </p>
                  <p
                    onClick={() => deleteShow(item.id)}
                    className="absolute text-gray-300 top-3 right-4"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronLeft
            onClick={scrollRight}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default SavedShows;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 w-full z-[100] absolute">
      <Link to={"/"}>
        <h1 className="text-red-600 text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={"/account"}>
            <button className="text-white pr-3 cursor-pointer">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="group relative overflow-hidden rounded cursor-pointer px-3 lg:px-6 py-[7px] text-white bg-red-600 shadow"
          >
            <div className="absolute inset-0 w-0 bg-red-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-sm md:text-lg text-white group-hover:text-white">
              Logout
            </span>
          </button>
          ;
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="text-white pr-3 cursor-pointer">Sign In</button>
          </Link>
          <Link to={"/signup"}>
            <button className="group relative overflow-hidden rounded cursor-pointer px-3 lg:px-6 py-1 md:py-2 text-white bg-red-600 shadow">
              <div className="absolute inset-0 w-0 bg-red-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-white group-hover:text-white">
                Sign Up
              </span>
            </button>
          </Link>
          ;
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../../redux/slices/services/authService";
import { setUser } from "../../../redux/slices/AuthSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { user  } = useSelector((state) => state.auth);
  const [logout] = useLogoutMutation();
  const handleLogout = () => {
    logout();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userData");
    dispatch(setUser(null));
    navigate("/login");
  };

  return (
    <div className="bg-black py-2 grid grid-cols-2 w-full h-full shadow-lg ">
      <div className="flex gap-4 col-start-2 justify-end items-center px-4 ">
        {!user ? (
          <button
            className="relative bg-[#FECC00] text-lg text-white transition-all duration-[800ms]
                 hover:bg-slate-200 px-4 py-2 rounded"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        ) : (
          <>
            <button className="flex gap-5">
              <div className="flex flex-col gap-1 justify-start items-start">
                <div className="text-primary-main text-[13px] text-white">
                  {" "}
                  Administrator{" "}
                </div>
                <div className="flex gap-1 items-center font-bold text-slate-500 text-sm">
{user?.name}                   <BiChevronDown className="text-lg font-bold" />{" "}
                </div>
              </div>
            </button>
            <button
              className="relative bg-gray-100  text-black transition-all duration-[800ms]
                 hover:bg-slate-200 px-4 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

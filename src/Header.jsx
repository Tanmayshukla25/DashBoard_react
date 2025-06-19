import React from "react";
import Logo from "./assets/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "./Component/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 


const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message);
      });
  };

  return (
    <header className="bg-[#272d34] fixed top-0 left-0 w-full z-50 px-4 py-2">
      <div className="mx-auto flex items-center justify-between">
        <div className="w-20">
          <img src={Logo} alt="Logo" className="w-full h-auto" />
        </div>

        <div className="relative hidden sm:block">
          <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#2a3f50] text-white pl-10 pr-4 py-2 rounded-md w-[250px] sm:w-[300px] lg:w-[400px]"
          />
        </div>

        <div className="hidden md:flex items-center gap-4 text-white">
          <h3 className="text-sm font-medium">Welcome back, Clark Kelly!</h3>
          <button
            className="flex items-center gap-1 hover:text-gray-300"
            onClick={handleLogout}
          >
            <span className="text-sm">Logout</span>
            <MdLogout className="text-lg" />
          </button>
        </div>

        <div className="md:hidden bg-white text-black p-2 rounded-lg text-2xl">
          <button aria-label="Menu">&#8801;</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

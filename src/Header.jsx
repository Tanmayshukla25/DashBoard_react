import React, { useState } from "react";
import Logo from "./assets/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { auth } from "./Component/Firebase";
import { useNavigate, NavLink,Link } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false); 

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

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-[20px] py-[10px] rounded-md text-[12px] font-medium ${
      isActive
        ? "bg-blue-200 text-sky-600"
        : "hover:bg-blue-200 hover:text-blue-400 text-gray-700"
    }`;

  return (
    <header className="bg-[#272d34] fixed top-0 left-0 w-full z-50 px-4 py-2">
      <div className="mx-auto flex items-center justify-between">
        <Link to="/app"><div className="w-20">
          <img src={Logo} alt="Logo" className="w-full h-auto" />
        </div></Link>

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
          <button aria-label="Menu" onClick={() => setToggle(!toggle)}>
            &#8801;
          </button>
        </div>
      </div>

      
      {toggle && (
        <div className="md:hidden fixed top-[60px] left-0 w-full z-40 bg-sky-50 shadow-lg">
          <div className="w-full text-gray-700 px-4 py-4">
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/app" className={linkClasses} onClick={() => setToggle(false)}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/support" className={linkClasses} onClick={() => setToggle(false)}>
                  Support Tickets
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/jobcard" className={linkClasses} onClick={() => setToggle(false)}>
                  Job Cards
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/clients" className={linkClasses} onClick={() => setToggle(false)}>
                  Clients
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/assets" className={linkClasses} onClick={() => setToggle(false)}>
                  Assets
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/contact" className={linkClasses} onClick={() => setToggle(false)}>
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/technicians" className={linkClasses} onClick={() => setToggle(false)}>
                  Technicians
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/toinvoice" className={linkClasses} onClick={() => setToggle(false)}>
                  To Invoice
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/resoursec" className={linkClasses} onClick={() => setToggle(false)}>
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/archive" className={linkClasses} onClick={() => setToggle(false)}>
                  Archive
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/setting" className={linkClasses} onClick={() => setToggle(false)}>
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink to="/app/users" className={linkClasses} onClick={() => setToggle(false)}>
                  Users
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setToggle(false);
                  }}
                  className="flex items-center gap-3 px-[20px] py-[10px] rounded-md text-[12px] font-medium text-red-500 hover:bg-red-100"
                >
                  Logout
                  <MdLogout className="text-lg" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

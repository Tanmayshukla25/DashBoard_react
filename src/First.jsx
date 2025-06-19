import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import UserContext from "./Context";

const First = () => {
    const [selectedTicket, setSelectedTicket] = useState(null);
  return (
    <>

    <UserContext.Provider value={{selectedTicket, setSelectedTicket }}   >
      <div className="h-screen ">
        <Header />

        <div className="flex flex-col  gap-10 md:flex-row mr-5" >
          <div className="w-full md:w-[20%] min-w-[200px] ">
            <LeftSideBar />
          </div>
          <div className="w-full md:w-[75%]  flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
  </UserContext.Provider>
    </>
  );
};

export default First;

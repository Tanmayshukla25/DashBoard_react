// import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router-dom";
import DummyData from "./DummyComponent";
import { useContext } from "react";
import UserContext from "./Context"

const Dashboard = () => {
  const {selectedTicket, setSelectedTicket} = useContext(UserContext);

  const handleComponent = (ticketId) => {
    setSelectedTicket(ticketId);
  };

  return (
    <>
      {!selectedTicket && (
        <div>
          <div className="mt-25 w-[96%]">
            <h1 className="text-2xl mt-[4%] font-bold mb-6">Dashboard</h1>
            <div>
              <div className="p-6 bg-white  border border-gray-300 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold mb-4">My Tickets</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-sky-100 text-[#254a9c] ">
                        <th className="px-4 py-3 font-semibold">Ticket No.</th>
                        <th className="px-4 py-3 font-semibold">Client Name</th>
                        <th className="px-4 py-3 font-semibold">Client Site</th>
                        <th className="px-4 py-3 font-semibold">Asset</th>
                        <th className="px-4 py-3 font-semibold">Job Title</th>
                        <th className="px-4 py-3 font-semibold">Age</th>
                        <th className="px-4 py-3 font-semibold">Technicians</th>
                        <th className="px-4 py-3 font-semibold">Status</th>
                        <th className="px-4 py-3 font-semibold"></th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 ">
                      <tr className="border-t border-gray-300 leading-8">
                        <td className="px-4 py-3">10005</td>
                        <td className="px-4 py-3">Sterling Infotech</td>
                        <td className="px-4 py-3">sterling</td>
                        <td className="px-4 py-3">Testing1</td>
                        <td className="px-4 py-3">Event - 22th Aug</td>
                        <td className="px-4 py-3">252 Days</td>
                        <td className="px-4 py-3">
                          <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                            U
                          </div>
                        </td>
                        <td className="pt-[20px]">
                          <button
                            className="bg-[#629C44] w-[125px]   text-white   rounded-md text-8   block text-center"
                            onClick={() => handleComponent("10005")}
                          >
                            On-site Technician
                          </button>
                        </td>

                        <td className="px-4 py-3">
                          <Link to="/DashboardonsitePageFirst">
                            <button className="p-1 border rounded hover:bg-gray-100">
                              <LuPencil />
                            </button>
                          </Link>
                        </td>
                      </tr>

                      <tr className="border-t  border-gray-300 ">
                        <td className="px-4 py-3">10003</td>
                        <td className="px-4 py-3">Sterling Infotech</td>
                        <td className="px-4 py-3">Client Site</td>
                        <td className="px-4 py-3">test</td>
                        <td className="px-4 py-3">Event - 25th Aug</td>
                        <td className="px-4 py-3">261 Days</td>
                        <td className="px-4 py-3">
                          <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                            U
                          </div>
                        </td>
                        <td className="pt-[20px]">
                          <button
                            className="bg-[#629C44] w-[126px]   text-white  p-1.5  rounded-md text-11   block text-center"
                            onClick={() => handleComponent("10003")}
                          >
                            On-site Technician
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <Link to="/DashboardOnsiteTechnincSecond">
                            <button className="p-1 border rounded hover:bg-gray-100">
                              <LuPencil />
                            </button>
                          </Link>
                        </td>
                      </tr>

                      <tr className="border-t  border-gray-300 h-8">
                        <td className="px-4 py-6">10002</td>
                        <td className="px-4 py-6">Sterling Infotech</td>
                        <td className="px-4 py-6">Client Site</td>
                        <td className="px-4 py-6">test</td>
                        <td className="px-4 py-6">Event - 25th Aug</td>
                        <td className="px-4 py-6">261 Days</td>
                        <td className="px-4 py-6">
                          <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                            U
                          </div>
                        </td>
                        <td className="">
                          <button
                            className="bg-yellow-400 w-[80px] text-white  py-2 rounded-md text-10  block text-center"
                            onClick={() => handleComponent("10002")}
                          >
                            Working
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <Link to="/DashboardWorking">
                            <button className="p-1 border rounded hover:bg-gray-100">
                              <LuPencil />
                            </button>
                          </Link>
                        </td>
                      </tr>

                      <tr className="border-t  border-gray-300">
                        <td className="px-4 py-3">10001</td>
                        <td className="px-4 py-3">Sterling Infotech</td>
                        <td className="px-4 py-3">Client Site</td>
                        <td className="px-4 py-3">test</td>
                        <td className="px-4 py-3">Event - 25th Aug</td>
                        <td className="px-4 py-3">280 Days</td>
                        <td className="px-4 py-3">
                          <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                            U
                          </div>
                        </td>
                        <td className=" ">
                          <button className="bg-yellow-400 w-[50px] text-white px-2 py-1 rounded-md text-10 block text-center"   onClick={() => handleComponent("10008")}>
                            Open
                          </button>
                        </td>
                        <td className="px-4 py-3">
                          <Link to="/DashboardOpen">
                            <button className="p-1 border rounded hover:bg-gray-100">
                              <LuPencil />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTicket === "10005" && (
        <div className="p-4 mt-4">
          <DummyData
            DataPass={{
              Heading: "Support Ticket #10005",
              Para: "Client Site - 345-9610 Aliquam Rd",
              Name: "Paul cox",
               selectedTicket:"10005",
          setSelectedTicket:{setSelectedTicket},
          selectedTicketpage:selectedTicket,
              PhoneNo: "4683842798",
              Email: "anshu@sterlinginfotech.com",
              TimeIssue: "MFG-9888",
              IssueName:"Invoice Number",
               BtnNameon:"Working",
                 BtnName:"Open",
            }}
          />
        </div>
      )}

      {selectedTicket === "10003" && (
        <div className="p-4 mt-4">
          <DummyData
            DataPass={{
              Heading: "Support Ticket #10003",
              Para: "Client Site - 345-9610 Aliquam Rd",
              Name: "Paul Jose",
              PhoneNo: "61402872296",
               selectedTicket:"10003",
               BtnName:"Open",
              Email: "info@streling.com",
              TimeIssue: "MFG-9888",
              IssueName:"Invoice Number",
               BtnNameon:"Working",
            }}
          />
        </div>
      )}
      {selectedTicket === "10002" && (
        <div className="p-4 mt-4">
          <DummyData
            DataPass={{
              Heading: "Support Ticket #10002",
              Name: "Paul Jose",
              Para: "Client Site-254/610 Alquants Rd",
              textColor: "Black",
              colorSite: "#FACC15",
              selectedTicket:"10002",
              BtnColor:"#22C55E",
              btnText:"#fff",
               OnTech: "#D1D5DB",
               btn: "	#D1D5DB",
              Time:"0hrs 0mins",
              BtnName:"Open",
               BtnNameon:"Working",
                BtnColortech:"#22C55E",
              color: "#E5E7EB",
              PhoneNo: "61402872296",
              Email: "info@streling.com",
               TimeIssue: "MFG-9888",
              IssueName:"Invoice Number"
            }}
          />
        </div>
      )}

        {selectedTicket === "10008" && (
        <div className="p-4 mt-4">
          <DummyData
            DataPass={{
              Heading: "Support Ticket #10008",
              Name: "Edit Contact",
              Para: "Streling-236, Maharani Farm",
              textColor: "Black",
              colorSite: "	#E5E7EB",
              selectedTicket:"10002",
                OnTech: "	#D1D5DB",
               btn: "	#D1D5DB",
             BtnColortech:"#FF8C00",
              BtnColor:"#D1D5DB",
              btnText:"#000",
              Time:"0hrs 0mins",
              BtnName:"Resolved",
              BtnNameon:"On-Site Technician",
              color: "#3B82F6",
              PhoneNo: "5558888",
              TextColor:"#FF8C00",
              Email: "edit@test.com",
              TimeIssue: "12:15AM",
              IssueName:"Time issue occured"

            }}
          />
        </div>
      )}
    </>
  );
};

export default Dashboard;

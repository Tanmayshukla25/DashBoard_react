import React, { useState } from "react";
import { FiArchive, FiClipboard } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import { FaSquare } from "react-icons/fa6";
import { FiPlus, FiFlag, FiTrash2 } from "react-icons/fi";
import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import ResolveTicketModal from "./ResolveTicketModal";


const SupportTicketNext = () => {
    const [activeTab, setActiveTab] = useState("asset");
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="   w-[98%] mx-auto mt-[10%] ">
      <div className="flex justify-between items-center  pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Link to="/app/support">
            <HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" />
          </Link>

          <div>
            <h1 className="text-2xl font-semibold">Support Ticket #10008</h1>
            <p className="text-sm text-gray-500">
              Created: May 04, 2025 : 03:01pm Claimed by:
              <span className="text-blue-500 border-b hover:underline cursor-pointer">
                Edit
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 border border-gray-400 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            <FiArchive />
            Archive
          </button>
          <button className="flex items-center gap-2 border border-gray-400 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            <FiClipboard />
            Ticket Log
          </button>
        </div>
      </div>

      <div className="flex relative w-[98%] mb-4.5 justify-between items-center">
        <div className="flex-1 py-2 px-4  bg-blue-500 text-white rounded-l-lg text-center font-semibold">
          Open
        </div>
        <BiSolidRightArrow className="absolute left-[267px] text-blue-500 text-5xl" />
        <div className="flex-1 py-2 px-4 bg-gray-200 text-gray-600 text-center">
          Working
        </div>
        <BiSolidRightArrow className="absolute left-[547px] text-gray-200 text-5xl" />
        <div className="flex-1 py-2 px-4 bg-gray-300 text-gray-600 text-center">
          On-site Technician
        </div>
        <BiSolidRightArrow className="absolute left-[824px] text-gray-300 text-5xl" />
        <button className="flex-1 py-2 px-4 bg-gray-400 text-gray-600 rounded-r-lg text-center"  onClick={() => setIsModalOpen(true)}>
          Resolved
        </button>
      </div>
      <div className="  min-h-screen w-[98%] ">
        <div className="grid grid-cols-2 gap-6">
          <div className="max-w-3xl mx-auto p-6 w-[100%] h-[100%]  border border-gray-300 rounded-xl space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl font-semibold">Sterling Infotech</h1>
                <p className="text-sm text-gray-600 py-1">
                  sterling - 236, Maharani Farm
                </p>
                <p className="text-sm text-gray-600 py-1">Edit Contact</p>
                <p className="text-sm text-gray-600 py-1">55588888</p>
                <p className="text-sm text-gray-600 py-1">edit@test.com</p>
                <Link
                  to="#"
                  className="text-blue-500 border-b text-sm mt-1 inline-block"
                >
                  Edit Contact
                </Link>
              </div>
              <Link to="#" className="text-blue-500 border-b text-sm mt-1">
                Edit Ticket
              </Link>
            </div>

            <hr className="text-gray-300" />

            <div className="space-y-5 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Sites</span>
                <span className="text-black border-b font-medium">
                  sterling
                </span>
              </div>
              <hr className="text-gray-300" />

              <div className="flex justify-between items-center">
                <span className="text-gray-500">Asset</span>
                <span className="text-black border-b font-medium">
                  Testing1 - #9789789
                </span>
              </div>
              <hr className="text-gray-300" />
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Warranty</span>
                <div className="flex gap-2">
                  <span className="bg-gray-200 px-3 py-1 text-xs rounded font-semibold text-white">
                    WARRANTY
                  </span>
                  <span className="bg-gray-200 px-3 py-1 text-xs rounded font-semibold text-white">
                    OUT OF WARRANTY
                  </span>
                  <span className="bg-gray-200 px-3 py-1 text-xs rounded font-semibold text-white">
                    FOC
                  </span>
                </div>
              </div>
              <hr className="text-gray-300" />

              <div className="flex justify-between items-center">
                <span className="text-gray-500">Parts</span>
                <div className="flex gap-2">
                  <span className="bg-gray-200 px-3 py-1 text-xs rounded font-semibold text-white">
                    PARTS REQUIRED
                  </span>
                  <span className="bg-gray-300 px-3 py-1 text-xs rounded font-semibold text-white">
                    NO PARTS
                  </span>
                </div>
              </div>
              <hr className="text-gray-300" />
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Production Impact</span>
                <span className="text-black border-b font-medium">
                  High impact / High urgency
                </span>
              </div>
              <hr className="text-gray-300" />
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Time issue occured</span>
                <span className="text-black border-b font-medium">12:15AM</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Title</h3>
              <select
                name=""
                id=""
                className="flex items-center w-full justify-between border px-4 py-2 rounded-md text-sm text-gray-700"
              >
                <option value="">Select</option>
                <option value="">Event-22th Aug</option>
                <option value="">Event-25th Aug</option>
              </select>
            </div>

            {/* Description Section */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Description</h3>
              <h6 className="text-[13px]">test</h6>
              <Link to="#" className=" text-sm mt-1 inline-block">
                <span className="text-blue-500  border-b">
                  {" "}
                  Edit Description
                </span>
              </Link>
            </div>
            <div className=" pt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-gray-800">
                  Attachments
                </h3>
                <button className="text-gray-800 hover:text-blue-500">
                  <LuUpload className="w-4 h-4" />
                </button>
              </div>
              <hr className="border-gray-200 pb-7" />
            </div>
          </div>

          <div>
            <div className="max-w-xl p-6 border h-[350px] border-gray-300 rounded-xl  bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-md font-semibold text-gray-800">
                    Total Time
                  </h2>
                  <p className="text-green-500 text-2xl font-bold mt-1">
                    0hrs 1mins
                  </p>
                  <Link
                    to="#"
                    className="text-sm text-blue-500 underline mt-1 inline-block"
                  >
                    View Time
                  </Link>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <button className="flex items-center gap-1 px-3 py-2 border border-gray-400  rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100">
                    <FaPlay className="text-black text-[10px]" />
                    Start Timer
                  </button>
                  <button className="p-2 border border-gray-400 rounded-md hover:bg-gray-100">
                    <FaSquare className="text-lg text-gray-400" />
                  </button>
                  <button className="flex items-center gap-1 border-gray-400 px-3 py-2 border rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100">
                    <FiPlus className="text-[15px]" />
                    Add Time
                  </button>
                </div>
              </div>

              <div className="mt-20 flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-md font-semibold text-gray-800 mb-2">
                    Technicians
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1  px-3 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-100">
                    <FiPlus />
                    Add Technician
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 border border-gray-400 hover:bg-gray-100 text-gray-700 rounded-md text-sm font-medium ">
                    <FiFlag />
                    On-site Technician Required
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between  border-gray-300 mb-10 py-7">
                  <Link to="#" className=" text-sm mt-1 inline-block">
                    <span className="text-blue-500  border-b"> Click here</span>{" "}
                    to add a technician
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-xl mt-8 p-5 bg-white space-y-4">
              <h2 className="text-md font-semibold">Comments / Updates</h2>

              <textarea
                className="w-full h-24 border border-gray-300 rounded-md p-3 text-sm text-black resize-none focus:outline-none"
                placeholder="Start typing..."
              ></textarea>

              <h1>Save As: </h1>
              <div className="flex items-center gap-3">
                <button className="p-2.5 border   border-gray-300 rounded-md hover:bg-gray-100">
                  <FiPhone />
                </button>
                <button className="p-2.5 border  border-gray-300  rounded-md hover:bg-gray-100">
                  <FiMail />
                </button>
                <button className="p-2.5 border  border-gray-300  rounded-md hover:bg-gray-100">
                  <FiMessageSquare />
                </button>
              </div>

              <div className="bg-blue-50 p-8 rounded-md  gap-1 ">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <FiMail className="text-[15px] text-blue-500" />

                    <span className="text-xs text-blue-500 ml-2">
                      Sunday, May 18 2025 - 03:18PM
                    </span>
                  </div>
                  <div className="text-xs text-blue-500  flex gap-3 cursor-pointer">
                    <span>Edit</span>
                    <span>Delete</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-1">test</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-xl p-5 w-[550px] bg-white max-w-3xl space-y-5">
                <h2 className="text-md font-semibold">Ticket History</h2>
        
                <div className="flex gap-6 border-b">
                  <button
                    className={`pb-2 text-sm font-medium ${
                      activeTab === "asset"
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("asset")}
                  >
                    Asset
                  </button>
                  <button
                    className={`pb-2 text-sm font-medium ${
                      activeTab === "site"
                        ? "text-blue-500  border-b-2 border-blue-500"
                        : "text-gray-500 "
                    }`}
                    onClick={() => setActiveTab("site")}
                  >
                    Site
                  </button>
                </div>
        
                <div className="flex items-center justify-between py-3 border-b border-gray-300">
                  <div className="text-sm text-gray-700"></div>
                  <div className="text-sm text-gray-700"></div>
                  <div className="text-sm text-gray-700">September 05, 2024</div>
                  
                  <div className="bg-amber-600 text-xs font-medium px-3 py-2 rounded text-white">
                    Resolved
                  </div>
                  <button className="p-1.5 border rounded-md">
                    <FiArrowRight className="text-gray-700" />
                  </button>
                </div>
        
                <div className="flex items-center justify-between py-3 border-b border-gray-300">
                  <div className="text-sm text-gray-700">Event - 25th Aug</div>
                  <div className="text-sm text-gray-700">September 24, 2024</div>
                 
                  <div className="bg-[#629C44] text-xs font-medium px-3 py-3 rounded text-white">
                  On Site-Technician
                  </div>
                  <button className="p-1.5 border rounded-md">
                    <FiArrowRight className="text-gray-700" />
                  </button>
                </div>
        
                <div className="flex items-center justify-between gap-5 py-3 border-b border-gray-300">
                  
                  <div className="text-sm ml-4 text-gray-700 ">May 04, 2025</div>
                  <div className="text-sm  text-gray-900 ">Event - 25th Aug</div>
                  <div className="bg-yellow-400 text-xs font-medium px-4 py-2 rounded text-white">
                    Open
                  </div>
                  <button className="p-1.5 border ml-8  rounded-md">
                    <FiArrowRight className="text-gray-700 " />
                  </button>
                </div>
              </div>
        </div>
      </div>
      <ResolveTicketModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default SupportTicketNext;

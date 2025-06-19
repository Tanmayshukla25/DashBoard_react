import React, { useState } from "react";
import ResolveTicketModal from "./ResolveTicketModal";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiPlus, FiFlag, FiTrash2 } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
import { FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { LuUpload } from "react-icons/lu";
import { FiArchive, FiClipboard } from "react-icons/fi";
import { BiSolidRightArrow } from "react-icons/bi";

function DashboardonsitePageSecond() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("asset");

  return (
    <div className="p-6 text-sm font-sans mt-24 bg-gray-50 min-h-screen">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-3">
            <div>
              <Link to="/app">
                <HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" />
              </Link>
            </div>
            <div>
              <h1 className="text-xl font-bold">Support Ticket #10002</h1>
            </div>
          </div>
          <p className="text-gray-500 text-xs pt-2 pb-6">
            Created: September 24, 2024 : 01:04pm | Claimed by: Clark Kelly,{" "}
            <span className="text-blue-500">Edit</span>
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            <FiArchive />
            Archive
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            <FiClipboard />
            Ticket Log
          </button>
        </div>
      </div>

      <div className="flex relative w-[100%] mb-6 p-1 justify-between items-center">
        <div className="flex-1 py-2.5 px-4  bg-gray-200 text-gray-900 rounded-l-lg text-center font-semibold">
          Open
        </div>
        <BiSolidRightArrow className="absolute left-[269px] text-gray-200 text-5xl" />
        <div className="flex-1 py-2.5 px-4 bg-yellow-400 text-gray-900 text-center">
          Working
        </div>
        <BiSolidRightArrow className="absolute left-[545px] text-yellow-400 text-5xl" />
        <div className="flex-1 py-2.5 px-4 bg-gray-300 text-gray-900 text-center">
          On-site Technician
        </div>
        <BiSolidRightArrow className="absolute left-[820px] text-gray-300 text-5xl" />
        <button
          className="flex-1 py-2.5 px-4 bg-gray-200 cursor-pointer text-gray-900 rounded-r-lg text-center"
          onClick={() => setIsModalOpen(true)}
        >
          Resolved
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="max-w-3xl mx-auto p-6 w-[100%] h-[97%]  border border-gray-300 rounded-xl space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-semibold">Sterling Infotech</h1>
              <p className="text-sm text-gray-600">
                Client Site - 254/610 Alquans Rd
                <br />
                Paul Jose
                <br />
                61402872296
                <br />
                info@strelinginfotech.com
              </p>
              <Link to="#" className="text-blue-500 text-sm mt-1 inline-block">
                Edit Contact
              </Link>
            </div>
          </div>

          <hr className="text-gray-300" />

          <div className="space-y-5 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Sites</span>
              <span className="text-black border-b font-medium">
                Client Site
              </span>
            </div>
            <hr className="text-gray-300" />

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Asset</span>
              <span className="text-black border-b font-medium">
                test - #34534
              </span>
            </div>
            <hr className="text-gray-300" />
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Warranty</span>
              <div className="flex gap-2">
                <span className="bg-green-500 px-3 py-1 text-xs rounded font-semibold text-white">
                  WARRANTY
                </span>
                <span className="bg-gray-300 px-3 py-1 text-xs rounded font-semibold text-black">
                  OUT OF WARRANTY
                </span>
                <span className="bg-gray-200 px-3 py-1 text-xs rounded font-semibold text-black">
                  FOC
                </span>
              </div>
            </div>
            <hr className="text-gray-300" />

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Parts</span>
              <div className="flex gap-2">
                <span className="bg-gray-200 px-3 py-1 text-xs rounded font-semibold text-black">
                  PARTS REQUIRED
                </span>
                <span className="bg-gray-200 px-3 py-1 text-xs rounded font-semibold text-black">
                  NO PARTS
                </span>
              </div>
            </div>
            <hr className="text-gray-300" />
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Title</h3>
            <div className="flex items-center justify-between border px-4 py-2 rounded-md text-sm text-gray-700">
              Event - 25th Aug
              <FiChevronDown />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-2">Description</h3>
            <p className="text-sm text-gray-700">test</p>
            <a
              href="#"
              className="text-blue-500  border-b text-sm mt-1 inline-block"
            >
              Edit Description
            </a>
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
            <hr className="border-gray-200 mb-19" />
          </div>
        </div>

        <div>
          <div className="max-w-xl p-6 border border-gray-300 rounded-xl  bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-md font-semibold text-gray-800">
                  Total Time
                </h2>
                <p className="text-green-500 text-2xl font-bold mt-1">
                  0hrs 0mins
                </p>
                <Link
                  to="#"
                  className="text-sm text-blue-500 underline mt-1 inline-block"
                >
                  View Time
                </Link>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <button className="flex items-center gap-1 px-3 py-2 border border-gray-400 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100">
                  <FaPlay className="text-black text-lg" />
                  Start Timer
                </button>
                <button className="p-2 border rounded-md border-gray-400 hover:bg-gray-100">
                  <FaSquare className="text-lg text-gray-400" />
                </button>
                <button className="flex items-center gap-1 px-3 border-gray-400 py-2 border rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100">
                  <FiPlus className="text-lg" />
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
                <button className="flex items-center border-gray-400 gap-1 px-3 py-2 border rounded-md text-sm font-medium hover:bg-gray-100">
                  <FiPlus />
                  Add Technician
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-[#f07c00] text-white rounded-md text-sm font-medium hover:bg-orange-600">
                  <FiFlag />
                  On-site Technician Required
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between border-b border-gray-300 mb-10 py-7">
                <span className="text-gray-800">User1</span>
                <button className="text-gray-500 text-xl hover:text-red-600">
                  <FiTrash2 />
                </button>
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
          <div className="text-sm text-gray-700">Event - 25th Aug</div>
          <div className="text-sm text-gray-700">September 16, 2014</div>
          <div className="text-sm font-bold text-gray-900">CK</div>
          <div className="bg-yellow-400 text-xs font-medium px-3 py-1 rounded text-white">
            Open
          </div>
          <button className="p-1.5 border rounded-md">
            <FiArrowRight className="text-gray-700" />
          </button>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <div className="text-sm text-gray-700">Event - 25th Aug</div>
          <div className="text-sm text-gray-700">September 24, 2014</div>
          <div className="text-sm font-bold text-gray-900">CK</div>
          <div className="bg-green-600 text-xs font-medium px-3 py-1 rounded text-white">
            On-Site Technician
          </div>
          <button className="p-1.5 border rounded-md">
            <FiArrowRight className="text-gray-700" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-5 py-3 border-b border-gray-300">
          <div className="text-sm text-gray-700 w-13"></div>
          <div className="text-sm ml-4 text-gray-700 ">May 14, 2015</div>
          <div className="text-sm font-bold text-gray-900 mr-40"></div>
          <div className="bg-yellow-400 text-xs font-medium px-3 py-1 rounded text-white">
            Open
          </div>
          <button className="p-1.5 border ml-8  rounded-md">
            <FiArrowRight className="text-gray-700 " />
          </button>
        </div>
      </div>

      <ResolveTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default DashboardonsitePageSecond;

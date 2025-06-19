import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobTable from "./JobTable";
import RecurringTable from "./RecurringTable";
import { FiArrowRight } from "react-icons/fi";

const Jobcard = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClickOpen, setIsClickOpen] = useState(false);
  const [isShowOpen, setIsShowOpen] = useState(false);
  const [isShowDiv, setIsShowDiv] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openClick = () => setIsClickOpen(true);
  const closeClick = () => setIsClickOpen(false);
  const openShow = () => setIsShowOpen(true);
  const closeShow = () => setIsShowOpen(false);
  const openDiv = () => setIsShowDiv(true);
  const closeDiv = () => setIsShowDiv(false);

  return (
    <div className="p-1 mt-25 font-sans min-h-screen w-[92%] m-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Job Cards
        </h1>
        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={openModal}
            className="text-sm font-medium text-gray-600 px-3 py-2 border border-gray-300 rounded-md"
          >
            + Add Client
          </button>
          <button className="text-sm font-medium text-gray-600 px-3 py-2 border border-gray-300 rounded-md">
            + Add Site
          </button>
          <button
            onClick={openClick}
            className="text-sm font-medium text-gray-600 px-3 py-2 border border-gray-300 rounded-md"
          >
            + Add Asset
          </button>
          <button
            onClick={openShow}
            className="text-sm font-medium text-blue-600 px-3 py-2 border border-blue-300 rounded-md"
          >
            + Add Recurring
          </button>
          <button
            onClick={openDiv}
            className="text-sm font-medium text-blue-600 px-3 py-2 border border-blue-300 rounded-md"
          >
            + Add Job Card
          </button>
        </div>
      </div>

      {/* Modals */}
      {isModalOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg w-[35%] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-5">
              <h2 className="text-xl font-bold">Add Client</h2>
              <button
                className="text-gray-900 text-[45px] hover:text-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Company Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter company name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">ABN</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter ABN"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter a location"
                />
              </div>
              <div className="flex items-center gap-2 mb-4 mt-[20px]">
                <input type="checkbox" id="single-site" className="w-4 h-4" />
                <label
                  htmlFor="single-site"
                  className="text-gray-800 font-bold text-[14px]"
                >
                  Single site company? Set as default site
                </label>
              </div>
              <div className="flex gap-4 mt-[30px]">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Client
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isClickOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeClick}
        >
          <div
            className="bg-white p-6 rounded-lg w-[80%] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-5">
              <h2 className="text-xl font-bold">Add Asset</h2>
              <button
                className="text-gray-900 text-[45px] hover:text-gray-700"
                onClick={closeClick}
              >
                &times;
              </button>
            </div>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                  <option>Select Client</option>
                </select>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                  <option>Select Site</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Type Machine Name"
                />
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Type Serial Number"
                />
              </div>
              <div className="grid grid-cols-5 gap-4 mb-4">
                <div className="flex items-center col-span-1">
                  <input type="checkbox" id="select-all" className="w-4 h-4" />
                  <label htmlFor="select-all" className="ml-2">
                    Select All
                  </label>
                </div>
                <button className="bg-blue-100 px-3 py-2 rounded">Sedan</button>
                <button className="bg-blue-100 px-3 py-2 rounded">SUV</button>
                <button className="bg-blue-100 px-3 py-2 rounded">
                  Hatchback
                </button>
                <button className="bg-blue-100 px-3 py-2 rounded">
                  Utility
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Make (e.g., Toyota)"
                />
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Model (e.g., Corolla)"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Asset
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeClick}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isShowOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeShow}
        >
          <div
            className="bg-white p-6 rounded-lg w-[35%] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-5">
              <h2 className="text-xl font-bold">Create Recurring Job Card</h2>
              <button
                className="text-gray-900 text-[45px] hover:text-gray-700"
                onClick={closeShow}
              >
                &times;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Client <span className="text-blue-500">(required)</span>
                </label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                  <option>Select</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Site <span className="text-blue-500">(required)</span>
                  </label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Asset <span className="text-blue-500">(required)</span>
                  </label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select Requester{" "}
                  <span className="text-blue-500">(required)</span>
                </label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                  <option>Select</option>
                </select>
                <button className="text-blue-600 text-sm mt-1">
                  New Requester?
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description of Issue
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  rows="4"
                  placeholder="Enter issue description"
                ></textarea>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Ticket
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeShow}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isShowDiv && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeDiv}
        >
          <div
            className="bg-white p-6 rounded-lg w-[35%] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-5">
              <h2 className="text-xl font-bold">Add Job Card</h2>
              <button
                className="text-gray-900 text-[45px] hover:text-gray-700"
                onClick={closeDiv}
              >
                &times;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Client <span className="text-blue-500">(required)</span>
                </label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                  <option>Select</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Site <span className="text-blue-500">(required)</span>
                  </label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Asset <span className="text-blue-500">(required)</span>
                  </label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select Requester{" "}
                  <span className="text-blue-500">(required)</span>
                </label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                  <option>Select</option>
                </select>
                <button className="text-blue-600 text-sm mt-1">
                  New Requester?
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description of Issue
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  rows="4"
                  placeholder="Enter issue description"
                ></textarea>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Ticket
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeDiv}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-5 justify-between items-center pt-6">
        <div className="flex justify-between items-center bg-gray-800 text-white p-6 rounded-lg w-72 h-30 shadow">
          <div>
            <h1 className="text-sm mb-1">Open Job Cards</h1>
            <p className="text-3xl font-bold text-cyan-400">0</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-gray-700 flex items-center justify-center text-sm">
            0%
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-6 rounded-lg w-72 h-30 shadow border border-gray-200">
          <div>
            <h1 className="text-sm text-gray-800 mb-1">In Progress</h1>
            <p className="text-3xl font-bold text-yellow-400">1</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-l-yellow-400 flex items-center justify-center text-sm text-gray-400">
            33%
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-6 rounded-lg w-72 h-30 shadow border border-gray-200">
          <div>
            <h1 className="text-sm text-gray-800 mb-1">Completed</h1>
            <p className="text-3xl font-bold text-green-500">2</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-r-green-500 flex items-center justify-center text-sm text-gray-400">
            67%
          </div>
        </div>
      </div>

      <div className="pt-5 w-full mx-auto">
        <div className="flex space-x-8 text-sm font-medium border-b border-gray-200 mb-4">
          <div
            className={`pb-2 cursor-pointer ${
              activeTab === "active"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("active")}
          >
            Active
          </div>
          <div
            className={`pb-2 cursor-pointer ${
              activeTab === "complete"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("complete")}
          >
            Complete
          </div>
          <div
            className={`pb-2 cursor-pointer ${
              activeTab === "recurring"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("recurring")}
          >
            Recurring
          </div>
        </div>

        {activeTab === "active" && (
          <div className="overflow-x-auto mt-12">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-sky-100 text-[#254a9c] font-semibold rounded-[5px]">
                <tr>
                  <th className="p-3">Ticket No</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Site</th>
                  <th className="p-3">Asset</th>
                  <th className="p-3">Date Allocated</th>
                  <th className="p-3">Date Created</th>
                  <th className="p-3">Job Type</th>
                  <th className="p-3">Status</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="p-3">30000</td>
                  <td className="p-3">
                    <div>Sterling</div>
                    <div>Infotech</div>
                  </td>
                  <td className="p-3">
                    <div>Client</div>
                    <div>Site</div>
                  </td>
                  <td className="p-3">test</td>
                  <td className="p-3">2 May 2025</td>
                  <td className="p-3">2 May 2025</td>
                  <td className="p-3">Installation</td>
                  <td className="p-3">
                    <div className="bg-yellow-400 text-white font-semibold rounded px-3 py-2 text-center w-24">
                      <div>Date</div>
                      <div>Confirmed</div>
                    </div>
                  </td>
                  <td className="p-3">
                    <Link to="/app/JobCardNext">
                      <button className="p-[5px] mt-1 border rounded hover:bg-gray-100 cursor-pointer">
                        <FiArrowRight />
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "complete" && <JobTable />}
        {activeTab === "recurring" && <RecurringTable />}
      </div>
    </div>
  );
};

export default Jobcard;

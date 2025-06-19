import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import Portal from "./Portal";

function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClickOpen, setIsClickOpen] = useState(false);
  const [isShowOpen, setIsShowOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openClick = () => setIsClickOpen(true);
  const closeclick = () => setIsClickOpen(false);

  const openShow = () => setIsShowOpen(true);
  const closeShow = () => setIsShowOpen(false);

  const [isPortalOpen, setPortalOpen] = useState(false);

  const togglePortal = () => {
    setPortalOpen(!isPortalOpen);
  };

  const closePortal = () => {
    setPortalOpen(false);
  };

  return (
    <div className=" mt-[50px] mb-20 pt-[50px] w-[97%] ">
      <div className="flex item-center justify-between">
        <h1 className="text-2xl font-bold mb-6">Support Tickets</h1>

        <div className="flex gap-4 mb-6">
          <button
            className="flex items-center gap-2 px-2 py-2 border rounded-lg text-black-600 hover:bg-blue-100"
            onClick={openModal}
          >
            <GoPlus /> Add Client
          </button>

          {isModalOpen && (
            <div
              className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-50 p-[60px]"
              onClick={closeModal}
            >
              <div
                className="bg-white p-6 rounded-lg w-[45%] shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center border-b pb-2 mb-5">
                  <h2 className="text-xl font-bold">Add Client</h2>
                  <button
                    className="text-gray-900 text-[30px] hover:text-gray-900 text-lg"
                    onClick={closeModal}
                  >
                    <RxCross2 />
                  </button>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block mb-1 text-gray-700">
                      Company Name
                    </label>
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
                    <input
                      type="checkbox"
                      id="single-site"
                      className="w-4 h-4"
                    />
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

          <button className="flex items-center gap-2 px-2 py-2 border rounded-lg text-black-600 hover:bg-blue-100">
            <GoPlus /> Add Site
          </button>
          <button
            className="flex items-center gap-2 px-3 py-2 border rounded-lg text-black-600 hover:bg-blue-100"
            onClick={openClick}
          >
            <GoPlus /> Add Asset
          </button>

          {isClickOpen && (
            <div
              className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-50 p-[60px]"
              onClick={closeclick}
            >
              <div
                className="bg-white p-6 rounded-lg w-[80%] shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center border-b pb-2 mb-5">
                  <h2 className="text-xl font-bold">Add Asset</h2>
                  <button
                    className="text-gray-900 text-[30px] hover:text-gray-900 text-lg"
                    onClick={closeclick}
                  >
                    <RxCross2 />
                  </button>
                </div>

                <form>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                      <option>Select Client</option>
                      <option>Client 1</option>
                      <option>Client 2</option>
                    </select>
                    <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none">
                      <option>Select Site</option>
                      <option>Site 1</option>
                      <option>Site 2</option>
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
                      <input
                        type="checkbox"
                        id="select-all"
                        className="w-4 h-4"
                      />
                      <label htmlFor="select-all" className="ml-2">
                        Select All
                      </label>
                    </div>
                    <button className="bg-blue-100 px-3 py-2 rounded">
                      Sedan
                    </button>
                    <button className="bg-blue-100 px-3 py-2 rounded">
                      SUV
                    </button>
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
                      onClick={closeclick}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <button
            className="flex items-center gap-2 px-3 py-2 border rounded-lg text-blue-600 hover:bg-blue-100 backdrop-blur-sm bg-white/30"
            onClick={openShow}
          >
            <GoPlus /> Add Ticket
          </button>

          {isShowOpen && (
            <div
              className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-50 p-[180px] "
              onClick={closeShow}
            >
              <div
                className="bg-white p-6 rounded-lg  w-[45%] shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center border-b pb-2 mb-5">
                  <h2 className="text-xl font-bold">Add Support Ticket</h2>
                  <button
                    className="text-gray-900 text-[30px] hover:text-gray-900"
                    onClick={closeShow}
                  >
                    <RxCross2 />
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

                  <div className="flex gap-4  mt-6">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
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
        </div>
      </div>

      <div className=" flex item-center justify-around mt-[10px] gap-6">
        <div className="p-4 bg-gray-800 text-white rounded-lg w-[250px] h-[110px] flex justify-between items-center">
          <div>
            <h2 className="text-[13px]">Open Tickets</h2>
            <h1 className="text-4xl font-bold text-blue-400 ">5</h1>
          </div>
          <span className=" border-4  border-l-blue-600 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm ">
            50%
          </span>
        </div>

        <div className="p-4 border bg-white rounded w-[250px] h-[110px] flex justify-between items-center">
          <div>
            <h2 className="text-[13px]">Working</h2>
            <h1 className="text-4xl font-bold text-yellow-400 ">5</h1>
          </div>
          <span className=" border-4 border-gray-400 border-t-yellow-600 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm ">
            50%
          </span>
        </div>

        <div className="p-4 bg-white border rounded-lg w-[250px] h-[110px] flex justify-between items-center">
          <div>
            <h2 className="text-[13px]">On-site Technician</h2>
            <h1 className="text-4xl font-bold text-yellow-700 ">2</h1>
          </div>
          <span className=" border-4 border-gray-400 border-t-yellow-700 p-[7px] mt-4 rounded-full h-[45px] w-[45px] font-bold text-sm  bg-orange-200 mb-3">
            20%
          </span>
        </div>

        <div className="p-4 bg-white border rounded-lg w-[250px] h-[110px] flex justify-between items-center">
          <div>
            <h2 className="text-[13px]">Resolved</h2>
            <h1 className="text-4xl font-bold text-green-500 ">1</h1>
          </div>
          <span className=" border-4 border-gray-400 border-t-green-500 p-[7px] mt-4 rounded-full h-[45px] w-[45px] font-bold text-sm   mb-3">
            10%
          </span>
        </div>
      </div>

      <div className="mt-[30px] my-8">
        <ul className="flex gap-[50px] text-[14px] py-2  border-b border-gray-300 mb-8 ml-4 font-md">
          <li>
            <Link to="#">Unresolved</Link>
          </li>
          <li>
            <Link to="#">Open</Link>
          </li>
          <li>
            <Link to="#">Working</Link>
          </li>
          <li>
            <Link to="#">On-site-Technician</Link>
          </li>
          <li>
            <Link to="#">Resolved</Link>
          </li>
        </ul>
      </div>

      <div className=" w-full">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-sky-100 text-[#254a9c] text-left text-[14px]">
              <th className="px-4 py-2 border-b border-gray-300 ">
                Ticket No.
              </th>
              <th className="px-4 py-2 border-b border-gray-300">
                Client Name
              </th>
              <th className="px-4 py-2 border-b border-gray-300">
                Client Site
              </th>
              <th className="px-4 py-2 border-b border-gray-300">Asset</th>
              <th className="px-4 py-2 border-b border-gray-300">Job Title</th>
              <th className="px-4 py-2 border-b border-gray-300">Age</th>
              <th className="px-4 py-2 border-b border-gray-300">
                Technicians
              </th>
              <th className="px-4 py-2 border-b border-gray-300">Status</th>
              <th className="px-4 py-2 border-b border-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-200 text-sm">
              <td className="px-4 py-2 p-[20px]">10010</td>
              <td className="px-4 py-2 p-[20px]">Job Client Add</td>
              <td className="px-4 py-2 p-[20px]">TSC</td>
              <td className="px-4 py-2 p-[20px]">Asset 1</td>
              <td className="px-4 py-2 p-[20px]"></td>
              <td className="px-4 py-2 p-[20px]">28 Days</td>
              <td className="px-4 py-2 flex gap-2 mt-[10px]">
              
              
              </td>
              <td className="px-4 py-2">
                <a href="">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">
                    Open
                  </span>
                </a>
              </td>
              <td className="px-4 py-2  gap-2">
                <button
                  className="p-[5px] border rounded hover:bg-gray-100 cursor-pointer"
                  onClick={togglePortal}
                >
                  <LuPencil />
                </button>

                {isPortalOpen && (
                  <div className="para_list">
                    <div
                      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
                      onClick={closePortal}
                    >
                      <div
                        className="bg-white rounded-lg shadow-lg p-6 w-[30%] max-w-lg max-h-[90%] overflow-y-auto relative top-[30px] left-[476px]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <form>
                          <IoIosArrowForward
                            className="text-2xl cursor-pointer"
                            onClick={closePortal}
                          />
                          <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
                            <div className="flex justify-between items-center border-b pb-2">
                              <div>
                                <h2 className="text-xl font-semibold">
                                  Ticket 10010
                                </h2>
                                <p className="text-gray-500 text-sm">
                                  May 15, 2025
                                </p>
                              </div>
                              <button className="text-blue-500 text-sm font-medium hover:underline">
                                View full details
                              </button>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 text-xl font-semibold">
                                Jc
                              </div>

                              <div className="flex-1">
                                <h3 className="text-lg font-medium">
                                  Job client add
                                </h3>
                                <p className="text-gray-500 text-sm">
                                  TSC - total
                                </p>
                                <p className="text-gray-400 text-sm">-</p>
                              </div>

                              <button className="p-[5px] border rounded hover:bg-gray-100 cursor-pointer">
                                <LuPencil className="text-gray-500" />
                              </button>
                            </div>
                          </div>

                          <div className="mb-6 mt-[20px]">
                            <label className="block text-gray-700 font-bold">
                              Sites
                            </label>
                            <hr />
                          </div>

                          <div className="mb-6">
                            <label className="block text-gray-700 font-bold">
                              Asset
                            </label>
                            <hr />
                          </div>

                          <div className="mb-6">
                            <label className="block text-gray-700 font-bold">
                              Primary Contact
                            </label>
                            <hr />
                          </div>

                          <div className="mb-6">
                            <label className="block text-gray-700 font-bold">
                              Phone
                            </label>
                            <hr />
                          </div>

                          <div className="mb-6">
                            <label className="block text-gray-700 font-bold">
                              Email
                            </label>
                            <hr />
                          </div>

                          <div className="mb-6">
                            <label className="block text-gray-700 font-bold">
                              Ticket Title
                            </label>
                            <hr />
                          </div>

                          <div className="mb-6">
                            <label className="block text-gray-700 font-bold">
                              Description
                            </label>
                            <textarea
                              className="border border-gray-300 rounded w-full p-2 "
                              rows="4"
                              placeholder="Enter description"
                            ></textarea>
                          </div>

                          <div className="flex justify-end space-x-4">
                            <button
                              type="button"
                              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                              onClick={closePortal}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                              onClick={closePortal}
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                <br />
                <Link to="/app/SupportTicket">
                  <button className="p-[5px] mt-1 border rounded hover:bg-gray-100 cursor-pointer">
                    <FiArrowRight />
                  </button>
                </Link>
              </td>
            </tr>

            <tr className="hover:bg-gray-200 text-sm">
              <td className="px-4 py-2 p-[20px]">10009</td>
              <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
              <td className="px-4 py-2 p-[20px]">Sterling</td>
              <td className="px-4 py-2 p-[20px]">Testing1</td>
              <td className="px-4 py-2 p-[20px]"></td>
              <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
              <td className="px-4 py-2 flex gap-2 mt-[5px]">
              
              </td>
              <td className="px-4 py-2">
                <a href="">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">
                    Open
                  </span>
                </a>
              </td>
              <td className="px-4 py-2  gap-2">
                <button
                  className="p-[5px] border rounded hover:bg-gray-100 cursor-pointer "
                  onClick={togglePortal}
                >
                  <LuPencil />
                </button>{" "}
                <br />
                <Link to="/app/SupportTicketNext">
                  <button className="p-[5px] mt-1 border rounded hover:bg-gray-100 cursor-pointer">
                    <FiArrowRight />
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr className="hover:bg-gray-200 text-sm">
              <td className="px-4 py-2 p-[20px]">10010</td>
              <td className="px-4 py-2 p-[20px]">Job Client Add</td>
              <td className="px-4 py-2 p-[20px]">TSC</td>
              <td className="px-4 py-2 p-[20px]">Asset 1</td>
              <td className="px-4 py-2 p-[20px]"></td>
              <td className="px-4 py-2 p-[20px]">28 Days</td>
              <td className="px-4 py-2 flex gap-2 mt-[10px]"></td>
              <td className="px-4 py-2">
                <a href="">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">
                    Open
                  </span>
                </a>
              </td>
              <td className="px-4 py-2  gap-2">
                <button
                  className="p-[5px]  border rounded hover:bg-gray-100 cursor-pointer"
                  onClick={togglePortal}
                >
                  <LuPencil />
                </button>{" "}
                <br />
                <Link to="/app/SupportTicket">
                  <button className="p-[5px] mt-1 border rounded hover:bg-gray-100 cursor-pointer">
                    <FiArrowRight />
                  </button>
                </Link>
              </td>
            </tr>

            <tr className="hover:bg-gray-200 text-sm">
              <td className="px-4 py-2 p-[20px]">10009</td>
              <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
              <td className="px-4 py-2 p-[20px]">Sterling</td>
              <td className="px-4 py-2 p-[20px]">Testing1</td>
              <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
              <td className="px-4 py-2 p-[20px]">268 Days</td>
              <td className="px-4 py-2 flex gap-2 mt-[5px]"></td>
              <td className="px-4 py-2">
                <Link to="#">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-[4px] text-lg]">
                    On site Technician
                  </span>
                </Link>
              </td>
              <td className="px-4 py-2  gap-2">
                <button
                  className="p-[5px]  border rounded hover:bg-gray-100 cursor-pointer"
                  onClick={togglePortal}
                >
                  <LuPencil />
                </button>{" "}
                <br />
                <Link to="/app/SupportTicketNext">
                  <button className="p-[5px] mt-1 border rounded hover:bg-gray-100 cursor-pointer">
                    <FiArrowRight />
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr className="hover:bg-gray-200 text-sm">
              <td className="px-4 py-2 p-[20px]">10010</td>
              <td className="px-4 py-2 p-[20px]">Job Client Add</td>
              <td className="px-4 py-2 p-[20px]">TSC</td>
              <td className="px-4 py-2 p-[20px]">Asset 1</td>
              <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
              <td className="px-4 py-2 p-[20px]">268 Days</td>
              <td className="px-4 py-2 flex gap-2 mt-[10px]">
                <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
                  U
                </span>
               
              </td>

              <td className="px-4 py-2 flex gap-2 ">
               
                <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
                  U
                </span>
              </td>
              <td className="">
                <Link to="#">
                  <span className="bg-yellow-300 text-white px-2 ml-3 py-1 rounded-[4px] text-lg]">
                   Working
                  </span>
                </Link>
              </td>
              <td className="px-4 py-2  gap-2">
                <button
                  className="p-[5px]  border rounded hover:bg-gray-100 cursor-pointer"
                  onClick={togglePortal}
                >
                  <LuPencil />
                </button>
                <br />
                <Link to="/app/SupportTicket">
                  <button className="p-[5px] mt-1 border rounded hover:bg-gray-100 cursor-pointer">
                    <FiArrowRight />
                  </button>
                </Link>
              </td>
            </tr>

            <tr className="hover:bg-gray-200 text-sm">
              <td className="px-4 py-2 p-[20px]">10009</td>
              <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
              <td className="px-4 py-2 p-[20px]">Sterling</td>
              <td className="px-4 py-2 p-[20px]">Test</td>
              <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
              <td className="px-4 py-2 p-[20px]">287 Days</td>
              <td className="px-4 py-2 flex gap-2 mt-[5px]">
               <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
                  U
                </span>
              </td>
              <td className="px-4 py-2">
                <a href="">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">
                    Open
                  </span>
                </a>
              </td>
              <td className="px-4 py-2  gap-2">
                <button
                  className="p-[5px]  border rounded hover:bg-gray-100 cursor-pointer"
                  onClick={togglePortal}
                >
                  <LuPencil />
                </button>
                <br />
                <Link to="/app/SupportTicketNext">
                  <button className="p-[5px] mt-1 border rounded hover:bg-gray-100 cursor-pointer">
                    <FiArrowRight />
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Support;

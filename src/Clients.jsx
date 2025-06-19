import React, { useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { MdNetworkCell } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
function Clients() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className=" mx-auto my-6 mt-25 w-[97%] mr-9">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Clients</h1>
        <button className="bg-sky-500 hover:bg-sky-600 rounded text-white px-4 py-2 mt-5 font-medium text-xs" onClick={openModal}>
          + Add Client
        </button>

        {isModalOpen && (
           <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50" >
              <div className="bg-white p-5 w-[500px] ">
                 <form>
        <div 
          className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50" 
          onClick={closeModal}
        >
          
          <div 
            className="bg-white p-6 rounded-lg w-[35%] shadow-lg" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-5">
              <h2 className="text-xl font-bold">Add Client</h2>
              <button 
                className="text-gray-900 text-[30px] hover:text-gray-700" 
                onClick={closeModal}
              >
           <RxCross2 />
              </button>
            </div>
           
            
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
              </div>
             </div>
            </form>
          </div></div>
)}
      </div>

      {/* Table Section */}
      <div className="border border-gray-300 p-5 rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            {/* Table Head */}
            <thead className="bg-[#dff6ff] text-blue-900">
              <tr className="">
                <th className="px-6 py-3 text-left font-semibold bg-sky-100 text-[#254a9c] w-[25%]">
                  Company Name
                </th>
                <th className="px-6 py-3 text-left font-semibold bg-sky-100 text-[#254a9c] w-[25%]">
                  <div className="flex items-center gap-2">
                    <FaLongArrowAltDown />
                    <MdNetworkCell />
                    Site
                  </div>
                </th>
                <th className="px-6 py-3 text-left font-semibold bg-sky-100 text-[#254a9c] w-[25%]">
                  No. of Asset
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-800 w-[10%]"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr className="border-t border-gray-500 hover:bg-gray-100">
                <td className="px-6 py-3">Google</td>
                <td className="px-6 py-3">0</td>
                <td className="px-6 py-3">0</td>
                <td className="px-6 py-3">
                  <div className="flex gap-2">
                    <Link
                      to="/app/Google"
                      className="p-[5px]  border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      <LuEye />
                    </Link>
                    <Link
                      to="/app/Google"
                      className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      <GoPencil />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-gray-500 hover:bg-gray-100">
                <td className="px-6 py-3">Job client add</td>
                <td className="px-6 py-3">1</td>
                <td className="px-6 py-3">1</td>
                <td className="px-6 py-3">
                  <div className="flex gap-2">
                    <Link
                      to="/app/JobClientAdd"
                      className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      <LuEye />
                    </Link>
                    <Link
                      to="/app/JobClientAdd"
                      className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      <GoPencil />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-gray-500 hover:bg-gray-100">
                <td className="px-6 py-3">Ster</td>
                <td className="px-6 py-3">0</td>
                <td className="px-6 py-3">0</td>
                <td className="px-6 py-3">
                  <div className="flex gap-2">
                    <Link
                      to="/app/SiteOverview"
                      className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      <LuEye />
                    </Link>
                    <Link
                      to="/app/SiteOverview"
                      className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      <GoPencil />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-gray-500 hover:bg-gray-100">
                <td className="px-6 py-3">Sterling Infotech</td>
                <td className="px-6 py-3">3</td>
                <td className="px-6 py-3">3</td>
                <td className="px-6 py-3">
                  <div className="flex gap-2">
                    <Link
                      to="/app/StrelingInfotech"
                      className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      <LuEye />
                    </Link>
                    <Link
                      to="/app/StrelingInfotech"
                      className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      <GoPencil />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr className="border-t border-gray-500 hover:bg-gray-100">
                <td className="px-6 py-3">test</td>
                <td className="px-6 py-3">0</td>
                <td className="px-6 py-3">0</td>
                <td className="px-6 py-3">
                  <div className="flex gap-2">
                    <Link
                      to="/app/Clientstest"
                      className="p-[5px] border border-gray-500 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      <LuEye />
                    </Link>
                    <Link
                      to="/app/Clientstest"
                      className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"
                    >
                      <GoPencil />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end gap-4 mt-5 mb-6">
          <button className="flex items-center border-gray-500 gap-2 px-4 py-1 border rounded hover:bg-gray-100 text-sm">
            <FaLessThan /> Prev
          </button>
          <button className="flex items-center border-gray-500 gap-2 px-4 py-1 border rounded hover:bg-gray-100 text-sm">
            Next <FaGreaterThan />
          </button>
        </div>

        {/* Page Info */}
        <div className="text-sm text-gray-600 flex justify-end mb-4">
          Page 1 of 1, showing 5 record(s) out of 5 total
        </div>
      </div>
    </div>
  );
}

export default Clients;

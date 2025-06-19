import React from "react";
import { FaArrowLeft, FaTrash, FaEdit, FaUpload, FaEye } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const AssetDetails1 = () => {
  return (
    <div className="p-6 min-h-screen mt-24 bg-gray-50">
   
      <div className="flex items-center gap-4 mb-6 px-[9%]">
        <button className="text-gray-600 hover:text-gray-800 h-[30px] w-[30px]  rounded-full flex justify-center items-center">
              <Link to="/app/Assets"><HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" /></Link>
        </button>
        <h1 className="text-2xl font-bold">Asset 1</h1>
      </div>

     
      <div className="flex justify-center gap-10 ">
       
        <div className="w-[60%] space-y-6">
         
          <div className="bg-white p-6 rounded-lg border-gray-200 border  ">
            <h2 className="text-lg font-semibold mb-4">Asset Details</h2>
            <div className="space-y-4">
              {[
                { label: "Date Created", value: "April 26, 2025" },
                { label: "Company", value: "Job client add" },
                { label: "Site", value: "TSC" },
                { label: "Site Address", value: "total" },
                { label: "Primary Contact", value: "" },
                { label: "Email", value: "" },
                { label: "Phone", value: "" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                  <hr className=" mt-[20px] text-gray-200" />
                </div>
              ))}
            </div>
          </div>

        
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Attachment</h2>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">No attachments</p>
              <button className="text-gray-600 hover:text-gray-800">
                <FaUpload size={18} />
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg  border  border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Ticket History</h2>
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-blue-200 ">
                  <th className="py-2 px-4 border-b">Ticket Title</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Ticket Owner</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>  
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">May 15</td>
                  <td className="py-2 px-4 border-b">2025</td>
                  <td className="py-2 px-4 border-b">Owner</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center gap-2">
                      <span className=" bg-yellow-400 px-3 py-1 rounded-[8px] text-white">
                        Open
                      </span>
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEye />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      
        <div className="w-[60%] space-y-6">
        
          <div className="bg-white p-6 rounded-lg  border  border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Comments / Updates</h2>
            <textarea
              className="w-full bg-blue-50 p-3 rounded border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 mb-4"
              rows="4"
              placeholder="Start typing..."
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Save
            </button>

         
            <div className="mt-6">
              <div className="p-4 rounded-lg border border-gray-200 mb-4 flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold">Clark Kelly</p>
                  <p className="text-xs text-gray-500">
                    Tuesday, June 17 2025 - 03:39PM
                  </p>
                  <p className="text-sm mt-2">sqq</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaEdit />
                  </button>
                  <button className=" hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails1;
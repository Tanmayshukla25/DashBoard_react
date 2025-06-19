import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FaArrowLeft, FaTrash, FaEdit, FaUpload, FaEye } from "react-icons/fa";
import { FiDownload, FiEdit2, FiTrash2 } from "react-icons/fi";
import { MdOutlineOpenInNew } from "react-icons/md";

const AssetsCPUComponent = () => {
    const attachments = ["dummy.pdf", "TestPDFfile.pdf", "dummy.pdf"];
const previews = [1, 2, 3, 4];
  return (
      <div className="p-6 min-h-screen mt-24 bg-gray-50">
   
      <div className="flex items-center gap-4 mb-6 ">
        <button className="text-gray-600 hover:text-gray-800 h-[30px] w-[30px]  rounded-full flex justify-center items-center">
              <Link to="/app/Assets"><HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" /></Link>
        </button>
        <h1 className="text-2xl font-bold">CPU</h1>
      </div>

     
      <div className="flex justify-center gap-10 ">
       
        <div className="w-[60%] space-y-6">
         
          <div className="bg-white p-6 rounded-lg border-gray-200 border  ">
            <h2 className="text-lg font-semibold mb-4">Asset Details</h2>
            <div className="space-y-4">
              {[
                { label: "Date Created", value: "August 21, 2024" },
                { label: "Company", value: "" },
                { label: "Site", value: "" },
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

     <div className="p-4 max-w-6xl mx-auto space-y-6">
      {/* Attachments Section */}
      <div className="border border-gray-200 rounded-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-700">Attachment</h2>
          <FiDownload className="cursor-pointer" />
        </div>

        {attachments.map((file, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-200  px-4 py-2"
          >
            <span className="text-sm text-black">{file}</span>
            <div className="flex items-center space-x-3 text-gray-600">
              <MdOutlineOpenInNew className="cursor-pointer" />
              <FiEdit2 className="cursor-pointer" />
              <FiTrash2 className="cursor-pointer" />
            </div>
          </div>
        ))}

        {/* Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          {previews.map((_, index) => (
            <div
              key={index}
              className="border border-gray-200  rounded p-2 h-68 flex justify-end items-start relative"
            >
              <div className="absolute top-2 right-2 flex space-x-2 text-gray-600">
                <FiDownload className="cursor-pointer" />
                <FiTrash2 className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticket History Table */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Ticket History
        </h2>
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">Ticket Title</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Ticket Owner</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
         
            <tr>
              <td className="px-4 py-2" colSpan={4}>
                <hr  className='text-gray-200'/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetsCPUComponent
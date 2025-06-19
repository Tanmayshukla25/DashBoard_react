import React, { useState } from "react";
import {  FiEdit2, FiUpload, FiLink } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Google = () => {
  const [notes, setNotes] = useState("");
  const [selectedSite, setSelectedSite] = useState("");

  return (
    <div className="p-6 max-w-7xl mt-24 mx-auto space-y-6">
      
     
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-xl font-semibold cursor-pointer">
       <Link to="/app/clients"><HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" /></Link>
          <span>Google</span>
        </div>
        <select
          value={selectedSite}
          onChange={(e) => setSelectedSite(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
        >
          <option value="">Select Site</option>
          <option value="ster">Ster</option>
          <option value="sterling">Sterling Infotech</option>
          <option value="google">Google</option>
        </select>
      </div>

  
      <div className="flex space-x-20 border-gray-300 border-b text-sm font-medium text-gray-600 overflow-x-auto">
        <button className="pb-2 text-sky-600 border-b-2 border-sky-600">Overview</button>
        <button className="pb-2">Service Agreements</button>
        <button className="pb-2">Work History</button>
        <button className="pb-2">Sites</button>
        <button className="pb-2">Contacts</button>
        <button className="pb-2">Assets</button>
        <button className="pb-2">Portal Users</button>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900  border-gray-300  justify-between text-white p-4 rounded-md flex  items-start">
          <span>Support Tickets</span>
          <span className="text-2xl font-bold mt-2 text-sky-400">0</span>
        </div>
        <div className="bg-white border border-gray-300  flex items-center justify-between p-1 rounded-md">
          <span>Assets</span>
          <span className="block mt-2 text-2xl text-yellow-500 font-bold">0</span>
        </div>
        <div className="bg-white flex border-gray-300  items-center justify-between border p-4 rounded-md">
          <span>Sites</span>
          <span className="block mt-2 text-2xl text-orange-500 font-bold">0</span>
        </div>
        <div className="bg-white flex  border-gray-300 items-center justify-between border p-4 rounded-md">
          <span>Contacts</span>
          <span className="block mt-2 text-2xl text-green-500 font-bold">0</span>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
       
        <div className="md:col-span-2 space-y-6">
          <div className="border border-gray-300 p-4 rounded-md space-y-4">
            <div className="flex justify-between text-sm text-gray-700">
              <span>Date Created</span>
              <div className="flex items-center gap-2">
                <FiEdit2 className="text-gray-400" />
                <span className="text-gray-600">10-09-2024</span>
              </div>
            </div>
              <hr className="mb-4 text-gray-200" />
            <div className="flex justify-between text-sm text-gray-700">
              <span>Company</span>
              <span>Google</span>
            </div>
              <hr className="mb-4 text-gray-200" />
            <div className="flex justify-between text-sm text-gray-700">
              <span>Address</span>
              <span className="font-medium text-sky-600">Narre Warren</span>
            </div>
              <hr className="mb-4 text-gray-200" />
            <div className="flex justify-between text-sm text-gray-700">
              <span>ABN</span>
              <span>324234</span>
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded-md space-y-4">
            <div>
              <strong>About</strong>
              <p className="text-sm text-gray-700 mt-1">lorum ipsum</p>
            </div>
            <div className="flex justify-between items-center">
              <strong>Attachment</strong>
              <FiUpload className="text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>

       
        <div className="space-y-6">
          <div className="border border-gray-300 p-4 rounded-md h-[100px]">
            <h4 className="text-sm font-semibold">Support Tickets by Title</h4>
            <p className="text-xs text-gray-500 mt-2 text-center">There are no tickets for this site.</p>
          </div>

          <div className="border border-gray-300 p-4 rounded-md flex justify-between items-center">
            <h4 className="text-sm font-semibold">Support Ticket URL</h4>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1 text-sm rounded-md flex items-center gap-1">
              <FiLink />
              Activate
            </button>
          </div>

          <div className="border border-gray-300 p-4 rounded-md">
            <h4 className="text-sm font-semibold mb-2">General Site Notes</h4>
            <div className="bg-blue-50 rounded-md p-2">
              <textarea
                rows="4"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Start typing..."
                className="w-full bg-transparent outline-none text-sm resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Google;

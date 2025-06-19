import React from 'react'
import { FaLink } from 'react-icons/fa';

import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
function Clientstest() {
  return (
     <div className="p-6 bg-gray-50 mt-24 min-h-screen text-sm">
      {/* Top Header */}
      <div className="flex items-center gap-2">
         <Link to="/app/clients"><HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" /></Link>
        <h1 className="text-2xl font-semibold">test</h1>
        <select className="border px-2 py-1 rounded">
          <option>Select Site</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="mt-4 border-b">
        <ul className="flex space-x-6 text-sm">
          {['Overview', 'Service Agreements', 'Work History', 'Sites', 'Contacts', 'Assets', 'Portal Users'].map((tab) => (
            <li
              key={tab}
              className={`pb-2 ${tab === 'Overview' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="bg-gray-800 text-white rounded p-4">
          <div>Support Tickets</div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="bg-white text-yellow-500 rounded p-4 shadow">
          <div>Assets</div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="bg-white text-orange-500 rounded p-4 shadow">
          <div>Sites</div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="bg-white text-green-500 rounded p-4 shadow">
          <div>Contacts</div>
          <div className="text-2xl font-bold">0</div>
        </div>
      </div>

      {/* Main Info Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Site Info */}
        <div className="bg-white rounded p-4 shadow">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Date Created</span>
              <span className="text-blue-600">01-01-1970</span>
            </div>
            <div className="flex justify-between">
              <span>Company</span>
              <span>test</span>
            </div>
            <div className="flex justify-between">
              <span>Address</span>
              <span className="font-medium">Tessensohn Road, Singapore</span>
            </div>
            <div className="flex justify-between">
              <span>ABN</span>
              <span>test</span>
            </div>
          </div>
        </div>

        {/* Ticket Chart + URL */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow h-[110px] flex items-center justify-center text-gray-400">
            There are no tickets for this site.
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center justify-between">
            <span>Support Ticket URL</span>
            <button className="bg-blue-500 text-white px-4 py-1 rounded flex items-center space-x-2">
              <FaLink />
              <span>Activate</span>
            </button>
          </div>
        </div>
      </div>

      {/* Notes & Attachments */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold mb-2">About</h4>
          <div className="h-10"></div>
          <h4 className="font-semibold mt-4 mb-2">Attachment</h4>
          <div className="h-10 flex items-center justify-between">
            <div></div>
            <span className="cursor-pointer">📤</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="mb-2 font-semibold">General Site Notes</h4>
          <textarea
            placeholder="Start typing..."
            className="w-full border border-blue-100 rounded p-2 bg-blue-50 h-24"
          />
        </div>
      </div>
    </div>
  )
}

export default Clientstest
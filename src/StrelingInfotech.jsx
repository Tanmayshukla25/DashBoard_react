import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiCopy, FiEdit, FiTrash2, FiUser, FiPhone } from "react-icons/fi";

const StrelingInfotech = () => {
  const [selectedSite, setSelectedSite] = useState("");

  const chartOptions = {
    chart: {
      type: "pie",
      events: {
        render() {
         
        },
      },
    },
   
    subtitle: {
      text:
        'Source: <a href="https://www.ssb.no/transport-og-reiseliv/faktaside/bil-og-transport">SSB</a>',
    },
   
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
       
        ],
        innerSize: "75%",
      },
    },
    series: [
      {
        name: "Registrations",
        colorByPoint: true,
        data: [
          { name: "EV", y: 23.9 },
          { name: "Hybrids", y: 12.6 },
          { name: "Diesel", y: 37.0 },
          { name: "Petrol", y: 26.4 },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="mt-24 p-4">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 text-xl font-semibold cursor-pointer">
           <Link to="/app/clients"><HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" /></Link>
          <span className="text-3xl text-gray-800 font-bold">
            Sterling Infotech
          </span>
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

      {/* Tab Buttons */}
      <div className="flex space-x-8 border-b border-gray-300 text-sm mt-10 font-medium text-gray-600 overflow-x-auto">
        <button className="pb-2 text-sky-600 border-b-2 border-sky-600">
          Overview
        </button>
        <button className="pb-2">Service Agreements</button>
        <button className="pb-2">Work History</button>
        <button className="pb-2">Sites</button>
        <button className="pb-2">Contacts</button>
        <button className="pb-2">Assets</button>
        <button className="pb-2">Portal Users</button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gray-900 text-white p-4 rounded-md flex justify-between items-center">
          <span>Support Tickets</span>
          <span className="text-4xl font-bold text-sky-400">9</span>
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-md flex justify-between items-center">
          <span>Assets</span>
          <span className="text-4xl font-bold text-yellow-500">3</span>
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-md flex justify-between items-center">
          <span>Sites</span>
          <span className="text-4xl font-bold text-orange-500">3</span>
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-md flex justify-between items-center">
          <span>Contacts</span>
          <span className="text-4xl font-bold text-green-500">8</span>
        </div>
      </div>

    
      <div className="flex  gap-10 ">
        <div className="border h-[300px] border-gray-300 w-[600px] p-4 rounded-md mt-8 space-y-4">
        <div className="flex justify-between text-sm text-gray-700">
          <span>Date Created</span>
          <div className="flex items-center gap-2">
            <FiEdit2 className="text-gray-400" />
            <span className="text-gray-600">16-09-2024</span>
          </div>
        </div>
        <hr className="text-gray-200" />
        <div className="flex justify-between text-sm text-gray-700">
          <span>Company</span>
          <span>Ster</span>
        </div>
        <hr className="text-gray-200" />
        <div className="flex justify-between text-sm text-gray-700">
          <span>Address</span>
          <span className="font-medium text-sky-600">Narre Warren</span>
        </div>
        <hr className="text-gray-200" />
        <div className="flex justify-between text-sm text-gray-700">
          <span>ABN</span>
          <span>324234</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-10 w-[500px] border p-5 border-gray-400 rounded-2xl">
        <h2 className="text-xl font-semibold text-center mb-4">
          Support Tickets by Title
        </h2>
        <HighchartsReact highcharts={Highcharts} className="w-[300px] " options={chartOptions} />
      </div>

   
      </div>
          <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md space-y-6">
      {/* Ticket Header */}
      <div className="p-4 border rounded">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-800">Support Ticket URL</h2>
          <button className="px-3 py-1 text-sm bg-gray-200 rounded" disabled>
            Deactivate
          </button>
        </div>
        <div className="flex items-center gap-2 text-blue-600 mb-2">
          <FiCopy className="cursor-pointer" />
          <span className="text-sm underline cursor-pointer">Copy link</span>
        </div>
        <input
          type="text"
          readOnly
          value="https://tsc.sterlinginfotech.com/support/IYGNBUDXOTZBCIE"
          className="w-full p-2 border rounded bg-blue-50 text-blue-700 font-mono"
        />
      </div>

      {/* Notes Section */}
      <div className="p-4 border rounded space-y-4">
        <h3 className="font-semibold text-gray-800 mb-2">General Site Notes</h3>
        <textarea
          placeholder="Start typing..."
          className="w-full p-3 border rounded bg-blue-50 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          rows={3}
        ></textarea>

        {/* Note 1 */}
        <div className="p-4 border rounded flex items-start justify-between bg-white shadow-sm">
          <div className="flex gap-3">
            <FiUser className="text-xl mt-1" />
            <div>
              <div className="text-sm font-semibold text-gray-700">
                Sterling Infotech
              </div>
              <div className="text-xs text-blue-500 mb-1">
                Fri, 04 Oct 2024 - 05:47pm
              </div>
              <p className="text-sm text-gray-700">
                Curabitur eget efficitur sem, in vehicula quam.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-gray-500 hover:text-blue-600">
              <FiEdit />
            </button>
            <button className="text-gray-500 hover:text-red-500">
              <FiTrash2 />
            </button>
          </div>
        </div>

        {/* Note 2 */}
        <div className="p-4 border rounded flex items-start justify-between bg-white shadow-sm">
          <div className="flex gap-3">
            <FiPhone className="text-xl mt-1" />
            <div>
              <div className="text-sm font-semibold text-gray-700">
                Sterling Infotech
              </div>
              <div className="text-xs text-blue-500 mb-1">
                Fri, 04 Oct 2024 - 05:47pm
              </div>
              <p className="text-sm text-gray-700">
                Quisque vel sem eu lectus gravida malesuada. Cras ultrices
                porttitor diam, eleifend accumsan ipsum porttitor id. Curabitur
                eget efficitur sem, in vehicula quam.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-gray-500 hover:text-blue-600">
              <FiEdit />
            </button>
            <button className="text-gray-500 hover:text-red-500">
              <FiTrash2 />
            </button>
          </div>
        </div>

        {/* Note 3 */}
        <div className="p-4 border rounded flex items-start justify-between bg-white shadow-sm">
          <div className="flex gap-3">
            <div className="text-xl mt-1">🗒</div>
            <div>
              <div className="text-sm font-semibold text-gray-700">
                Sterling Infotech
              </div>
              <div className="text-xs text-blue-500 mb-1">
                Fri, 04 Oct 2024 - 05:46pm
              </div>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vel sem eu lectus gravida malesuada. Cras ultrices porttitor
                diam, eleifend accumsan ipsum porttitor id. Curabitur eget
                efficitur sem, in vehicula quam.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-gray-500 hover:text-blue-600">
              <FiEdit />
            </button>
            <button className="text-gray-500 hover:text-red-500">
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StrelingInfotech;

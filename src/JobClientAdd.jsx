import React from 'react';
import {  FiChevronDown, FiEdit2, FiUpload, FiLink } from 'react-icons/fi';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Card = ({ children, className }) => (
  <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const StatCard = ({ title, value, valueColor, bgColor = 'bg-white' }) => (
  <div className={`p-6 rounded-lg shadow-sm flex flex-col justify-between ${bgColor}`}>
    <p className="text-sm text-gray-500">{title}</p>
    <p className={`text-5xl font-bold text-right ${valueColor}`}>{value}</p>
  </div>
);

const JobClientAdd = () => {
  return (
    <div className="bg-slate-50 min-h-screen mt-24 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">

        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
                 <Link to="/app/clients"><HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" /></Link>
            </button>
            <h1 className="text-2xl font-bold text-slate-800">Job client add</h1>
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-blue-500">
              <option>Select Site</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <FiChevronDown />
            </div>
          </div>
        </header>

        <nav className="mb-8">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              <button className="py-4 px-1 text-sm font-medium border-b-2 border-blue-500 text-blue-600">
                Overview
              </button>
              <button className="py-4 px-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Service Agreements
              </button>
              <button className="py-4 px-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Work History
              </button>
              <button className="py-4 px-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Sites
              </button>
              <button className="py-4 px-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Contacts
              </button>
              <button className="py-4 px-1 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Assets
              </button>
            </div>
          </div>
          <div className="mt-4">
            <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Portal Users
            </button>
          </div>
        </nav>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Support Tickets" value="1" bgColor="bg-slate-800" valueColor="text-white" />
            <StatCard title="Assets" value="1" valueColor="text-yellow-500" />
            <StatCard title="Sites" value="1" valueColor="text-yellow-500" />
            <StatCard title="Contacts" value="0" valueColor="text-green-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 flex flex-col gap-8">
              <Card>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-slate-800">Client Details</h3>
                  <button className="text-gray-400 hover:text-blue-500">
                    <FiEdit2 />
                  </button>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Date Created</span>
                    <span className="text-slate-800">11-01-2025</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Company</span>
                    <span className="text-slate-800">Job client add</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Address</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">ABN</span>
                    <span className="text-slate-800">465456</span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-slate-800">About</h3>
                  <button className="text-gray-400 hover:text-blue-500">
                    <FiEdit2 />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <h3 className="font-semibold text-slate-800">Attachment</h3>
                  <button className="text-gray-400 hover:text-blue-500">
                    <FiUpload />
                  </button>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-1 flex flex-col gap-8">
              <Card>
                <h3 className="font-semibold text-slate-800 mb-4">Support Tickets by Title</h3>
                <p className="text-center text-gray-500 text-sm py-4">There are no tickets for this site.</p>
              </Card>

              <Card>
                <h3 className="font-semibold text-slate-800 mb-4">Support Ticket URL</h3>
                <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                  <FiLink />
                  Activate
                </button>
              </Card>

              <Card>
                <h3 className="font-semibold text-slate-800 mb-4">General Site Notes</h3>
                <textarea
                  className="w-full h-24 p-3 border border-blue-200 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Start typing..."
                ></textarea>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobClientAdd;
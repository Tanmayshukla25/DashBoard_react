import React from "react";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
const AssetsComponent = () => {
  return (
    <>
      <div className="mt-25 w-[97%] mr-10">
        <h1 className="text-2xl font-bold mb-8">Assets</h1>
        <div className="text-[15px]">
          <div className="p-6 bg-white w-[100%] border border-gray-300 rounded-xl shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-sky-100 text-[#254a9c] ">
                    <th className="px-4 py-3 font-semibold rounded-l-[7px]">Machine Name</th>
                    <th className="px-4 py-3 font-semibold">Serial Number</th>
                    <th className="px-4 py-3 font-semibold">Client Name</th>
                    <th className="px-4 py-3 font-semibold">Client Site</th>
                    <th className="px-4 py-3 font-semibold">Last Ticket</th>
                    <th className="px-4 py-3 font-semibold rounded-r-[7px]"></th>
                  </tr>
                </thead>

                <tbody className="">
                  <tr className="border-t  border-gray-300 hover:bg-gray-200">
                    <td className="px-4 py-3">Asset 1</td>
                    <td className="px-4 py-3">2343223</td>
                    <td className="px-4 py-3">Job client add</td>
                    <td className="px-4 py-3">TSC</td>
                    <td className="px-4 py-3">15 May 2025</td>
                    <td className="px-4 py-3">
                      <Link to="/app/AssetDetails1">
                      <button className="flex items-center gap-1 text-gray-900 border border-gray-400 px-3 py-1 rounded hover:bg-gray-100">
                        <LuEye /> View Asset
                      </button>
                      </Link>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-300  hover:bg-gray-200">
                    <td className="px-4 py-3">CPU</td>
                    <td className="px-4 py-3">76667888</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">sterling</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">
                     <Link to="/app/AssetsCPUComponent">
                      <button className="flex items-center gap-1 text-gray-900 border border-gray-400 px-3 py-1 rounded hover:bg-gray-100">
                        <LuEye /> View Asset
                      </button>
                      </Link>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-300 hover:bg-gray-200">
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">#34534</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">05 September 2024</td>
                    <td className="px-4 py-3">
                      <button className="flex items-center gap-1 text-gray-900 border border-gray-400 px-3 py-1 rounded hover:bg-gray-100">
                        <LuEye /> View Asset
                      </button>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-300 hover:bg-gray-200">
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">#34534</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">Cox</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">
                      <button className="flex items-center gap-1 text-gray-900 border border-gray-400 px-3 py-1 rounded hover:bg-gray-100">
                        <LuEye /> View Asset
                      </button>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-300 hover:bg-gray-200">
                    <td className="px-4 py-3">test1</td>
                    <td className="px-4 py-3">#9789789</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">03 October 2024</td>
                    <td className="px-4 py-3">
                      <button className="flex items-center gap-1 text-gray-900 border border-gray-400 px-3 py-1 rounded hover:bg-gray-100">
                        <LuEye /> View Asset
                      </button>
                    </td>
                  </tr>

                  <tr className="border-t w-[100%] border-gray-300 hover:bg-gray-200">
                    <td className="px-4 py-3">Testing1</td>
                    <td className="px-4 py-3">#9789789</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">sterling</td>
                    <td className="px-4 py-3">02 October 2024</td>
                    <td className="px-4 py-3">
                      <button className="flex items-center gap-1 text-gray-900 border border-gray-400 px-3 py-1 rounded hover:bg-gray-100">
                        <LuEye /> View Asset
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end text-xs text-gray-500 mt-2">
                Page 1 of 1, showing 6 record(s) out of 6 total
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetsComponent;
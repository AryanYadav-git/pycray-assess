import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";

const FinancialOverview = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);


  const handleRowSelection = (index) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index)); 
    }
  };

  const isIndeterminate =
    selectedRows.length > 0 && selectedRows.length < data.length;

  useEffect(() => {
    const checkbox = document.getElementById("all-finance");
    if (checkbox) {
      checkbox.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  return (
    <div className="bg-white py-4 rounded-lg">
      <div className="flex px-4 justify-between items-center mb-4">
        <div className="">
          <h2 className="text-xl flex font-bold text-blue-900">
            Financial Overview
            <span className="text-xs ml-2 h-fit p-1 rounded-lg text-[#001B79] bg-[#F7FAFF] cursor-pointer">
              Statistics
            </span>
          </h2>
          <p className="text-gray-600 text-sm">
            Financial status for each property, summarizing income, expenses, and
            net profit.
          </p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 px-4 py-2 text-blue-900 rounded-md hover:bg-gray-200">
            <span><RiDeleteBin6Line /></span>
            <span>Delete</span>
          </button>
          <button className="flex items-center space-x-1 px-4 py-2 bg-[#001B79] text-white rounded-md hover:bg-blue-800">
            <span><FaPlus /></span>
            <span>Add new</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-4">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left">
                <input
                  id="all-finance"
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === data.length}
                />
              </th>
              <th className="text-left text-blue-900">Owner Name</th>
              <th className="text-left text-blue-900">Property Name</th>
              <th className="text-left text-blue-900">Income</th>
              <th className="text-left text-blue-900">Expenses</th>
              <th className="text-left text-blue-900">Net Profit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 text-zinc-500 ${
                  selectedRows.includes(index) ? "bg-blue-50" : ""
                }`}
              >
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleRowSelection(index)}
                  />
                </td>
                <td>{item.ownerName}</td>
                <td>{item.propertyName}</td>
                <td>{item.income}</td>
                <td>{item.expenses}</td>
                <td>{item.netProfit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialOverview;

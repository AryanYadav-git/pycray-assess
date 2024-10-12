import React from "react";

const StatCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-14 mb-8">
    <div className={`p-4 pb-8 flex flex-col gap-1 bg-[#C8D7FF75] border-2 border-[#456FFF4D] rounded-lg`}>
      <h3 className="text-lg font-semibold">Number of properties</h3>
      <p className="text-3xl font-bold">3</p>
      <p className="text-sm font-semibold text-gray-500">Lorem ipsum</p>
    </div>
    <div className={`p-4 pb-8 flex flex-col gap-1 bg-[#C9FFC875] border-2 border-[#82FE57A1] rounded-lg`}>
      <h3 className="text-lg font-semibold">Average Occupancy Rate</h3>
      <p className="text-3xl font-bold">80%</p>
      <p className="text-sm font-semibold text-gray-500">Lorem ipsum</p>
    </div>
    <div className={`p-4 pb-8 flex flex-col gap-1 bg-[#FFC8DF75] border-2 border-[#FFAEF7] rounded-lg`}>
      <h3 className="text-lg font-semibold">Average Vacancy Rate</h3>
      <p className="text-3xl font-bold">85%</p>
      <p className="text-sm font-semibold text-gray-500">Lorem ipsum</p>
    </div>
    <div className={`p-4 pb-8 flex flex-col gap-1 bg-[#FFF9C875] border-2 border-[#EFCE5B] rounded-lg`}>
      <h3 className="text-lg font-semibold">Overall Net Profit</h3>
      <p className="text-3xl font-bold">$50,000</p>
      <p className="text-sm font-semibold text-gray-500">Lorem ipsum</p>
    </div>
    </div>
  );
};

export default StatCards;

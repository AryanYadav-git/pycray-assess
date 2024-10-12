import React, { useState } from 'react';
import { StatCards, Header, Sidebar, FinancialOverview, PropertyOverview } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
// import CustomizedTables from '../components/Table';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {financeData, propertyData} = useStateContext();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex font-sans">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <main className="flex-1 bg-gray-100 rounded-xl p-8 m-1 md:m-4 transition-all duration-300">
        <Header toggleSidebar={toggleSidebar} />
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

        <StatCards/>

        <div className="space-y-8">
          <PropertyOverview data={propertyData}/>
          <FinancialOverview data={financeData}/>
        </div>
      </main>
    </div>
  );
};

export default Home;

"use client"
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { Home, BarChart2, Users, Briefcase, Building, Menu } from "lucide-react";

const Page = () => {
  const barData = [
    { name: "Jan", users: 4000, projects: 2400, properties: 2400 },
    { name: "Feb", users: 3000, projects: 1398, properties: 2210 },
    { name: "Mar", users: 2000, projects: 9800, properties: 2290 },
    { name: "Apr", users: 2780, projects: 3908, properties: 2000 },
    { name: "May", users: 1890, projects: 4800, properties: 2181 },
  ];

  const pieData = [
    { name: "Users", value: 400 },
    { name: "Projects", value: 300 },
    { name: "Properties", value: 300 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#FF6384"];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
   

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-gray-700">Dashboard</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-red-400 text-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Total Users</h4>
            <p className="text-2xl font-bold">15,000</p>
          </div>
          <div className="bg-blue-400 text-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Total Projects</h4>
            <p className="text-2xl font-bold">45,633</p>
        
          </div>
          <div className="bg-[#3FD3BF] text-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Total Properties</h4>
            <p className="text-2xl font-bold">95,574</p>
        
          </div>
          <div className="bg-sky-300 text-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Total Leads</h4>
            <p className="text-2xl font-bold">95,574</p>
        
          </div>
        </div>

        {/* Charts Section */}

      </div>
    </div>
  );
};

export default Page;

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { Home, BarChart2, Users, Briefcase, Building, Menu } from "lucide-react";

const Dashboard = () => {
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
      <div className="w-64 bg-white p-5 shadow-md flex flex-col">
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-700">David Grey. H</h3>
            <p className="text-xs text-gray-500">Project Manager</p>
          </div>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center gap-3 p-3 text-purple-500 bg-gray-200 rounded-md">
            <Home size={18} />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-md">
            <BarChart2 size={18} />
            Charts
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-md">
            <Users size={18} />
            Users
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-md">
            <Briefcase size={18} />
            Projects
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-md">
            <Building size={18} />
            Properties
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-gray-700">Dashboard</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-red-400 text-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Total Users</h4>
            <p className="text-2xl font-bold">15,000</p>
            <p className="text-sm">Increased by 60%</p>
          </div>
          <div className="bg-blue-400 text-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Total Projects</h4>
            <p className="text-2xl font-bold">45,633</p>
            <p className="text-sm">Decreased by 10%</p>
          </div>
          <div className="bg-green-400 text-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Total Properties</h4>
            <p className="text-2xl font-bold">95,574</p>
            <p className="text-sm">Increased by 5%</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-700">User, Project & Property Stats</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#8884d8" />
                <Bar dataKey="projects" fill="#82ca9d" />
                <Bar dataKey="properties" fill="#FF6384" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-700">Data Distribution</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

"use client";
import { useState } from "react";
import { Menu, X, LayoutDashboard, Image, Users, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        className="p-2 bg-gray-800 text-white rounded-md md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white w-72 p-6 shadow-lg transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:w-64`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Admin Panel</h2>
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-3">
          <SidebarItem Icon={LayoutDashboard} title="Dashboard" />
          <SidebarItem Icon={Image} title="banner" />
          <SidebarItem Icon={Users} title="Users" />
          <SidebarItem Icon={Settings} title="Settings" />
        </ul>
      </div>

      {/* Overlay for Mobile View */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ Icon, title }) => (
  <li className="flex items-center p-3 rounded-lg transition duration-200 cursor-pointer hover:bg-gray-700 hover:text-blue-400">
    <Icon className="mr-3" size={22} />
    <span className="text-lg">{title}</span>
  </li>
);

export default Sidebar;

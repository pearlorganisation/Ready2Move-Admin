"use client";
import { useState } from "react";
// import { Menu, X, LayoutDashboard, Image, Users, Settings } from "lucide-react";
import { Home, BarChart2, Users, Briefcase, Building, Menu } from "lucide-react";

import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="relative h-screen">

    //   <button
    //     className="p-2 bg-gray-800 text-white rounded-md md:hidden fixed top-4 left-4 z-50"
    //     onClick={() => setIsOpen(!isOpen)}
    //   >
    //     {isOpen ? <X size={24} /> : <Menu size={24} />}
    //   </button>


    //   <div
    //     className={`fixed top-0 left-0 h-screen bg-gray-900 text-white w-72 p-6 shadow-lg transform transition-all duration-300 ease-in-out
    //       ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:w-64`}
    //   >
    //     {/* Sidebar Header */}
    //     <div className="flex items-center justify-between mb-6">
    //       <h2 className="text-2xl font-semibold">Admin Panel</h2>
    //       <button 
    //         className="md:hidden text-gray-300 hover:text-white"
    //         onClick={() => setIsOpen(false)}
    //       >
    //         <X size={24} />
    //       </button>
    //     </div>

    //     {/* Navigation Links */}
    //     <ul className="space-y-3">
    //       <SidebarItem Icon={LayoutDashboard} title="Dashboard" />
    //       <Link  href="/banner">
    //       <SidebarItem Icon={Image} title="Banner" /></Link>
    //       <Link  href="/project">
    //       <SidebarItem Icon={Image} title="Projects" /></Link>
    //       {/* <SidebarItem Icon={Users} title="Users" /> */}
    //       {/* <SidebarItem Icon={Settings} title="Settings" /> */}
    //     </ul>
    //   </div>

   
    //   {isOpen && (
    //     <div 
    //       className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
    //       onClick={() => setIsOpen(false)}
    //     ></div>
    //   )}
    // </div>

<div className="w-64 bg-white p-5 shadow-md flex min-h-screen flex-col">
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
      <a href="/dashboard" className="flex items-center gap-3 p-3 text-purple-500 bg-gray-200 rounded-md">
        <Home size={18} />
        Dashboard
      </a>
      <a href="/banner" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-md">
        <BarChart2 size={18} />
     Banner
      </a>
      {/* <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-md">
        <Users size={18} />
        Users
      </a> */}
      <a href="/project" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-md">
        <Briefcase size={18} />
        Projects
      </a>
      {/* <a href="#" className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-100 rounded-md">
        <Building size={18} />
        Properties
      </a> */}
    </nav>
  </div>
  );
};

const SidebarItem = ({ Icon, title }) => (
  <li className="flex items-center p-3 rounded-lg transition duration-200 cursor-pointer hover:bg-gray-700 hover:text-blue-400">
    <Icon className="mr-3" size={22} />
    <span className="text-lg">{title}</span>
  </li>
);

export default Sidebar;

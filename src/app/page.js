import Image from "next/image";
import  AdminBannerManager from "../app/_components/adminBanner.js"
import AdminSidebar from "../app/_components/adminsidebar.jsx"
export default function Home() {
  return (
    <div className="">

  <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 hidden md:block">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        <AdminBannerManager />
      </div>
    </div>
    </div>
  );
}

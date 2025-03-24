import AdminSidebar from "../_components/adminsidebar";
import AdminBannerManager from "../_components/adminBanner";

const Page = () => {
  return (
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
  );
};

export default Page;

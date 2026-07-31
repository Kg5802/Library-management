import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

export default function MainLayout({ role }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar role={role} />

      {/* Sidebar + Main Content */}
      <div className="flex flex-grow">
        <Sidebar role={role} />

        {/* Main Content Area */}
        <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
          {/* This ensures content fills the screen and scrolls if needed */}
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

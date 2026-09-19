import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProfileNav from "../../features/menuProfile/components/ProfileNav";
import { Outlet } from "react-router";

function menuProfile() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center gap-6 py-7 px-5 lg:flex-row lg:gap-9 lg:py-16 lg:px-30">
        <ProfileNav />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default menuProfile;

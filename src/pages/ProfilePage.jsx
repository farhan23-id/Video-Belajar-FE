import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import EditProfile from "../features/profile/components/EditProfile";
import MyCourse from "../features/profile/components/MyCourse";
import MyOrder from "../features/profile/components/MyOrder";

import ProfileNav from "../features/profile/components/ProfileNav";
import { useState } from "react";

const menuComponents = {
  "edit-profile": EditProfile,
  "my-class": MyCourse,
  "my-order": MyOrder,
};

function ProfilePage() {
  const [activeMenu, setActiveMenu] = useState("edit-profile");
  const ActiveMenuComponents = menuComponents[activeMenu] ?? EditProfile;

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center gap-6 py-7 px-5 lg:flex-row lg:gap-9 lg:py-16 lg:px-30">
        <ProfileNav activeMenu={activeMenu} onSelectMenu={setActiveMenu} />
        <ActiveMenuComponents />
      </main>

      <Footer />
    </div>
  );
}

export default ProfilePage;

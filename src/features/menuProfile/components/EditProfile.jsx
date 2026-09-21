import ProfileHeader from "./ProfileHeader";
import EditProfileForm from "./EditProfileForm";
import useAuthStore from "../../auth/stores/authStore";
import { Navigate } from "react-router";

function EditProfile() {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full bg-primaryBg border border-border rounded-[10px] p-6 flex flex-col gap-6">
      <ProfileHeader name={user.name} email={user.email} />

      <hr />

      <EditProfileForm user={user} />
    </div>
  );
}

export default EditProfile;

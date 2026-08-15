import ProfileHeader from "./ProfileHeader"
import EditProfileForm from "./EditProfileForm"

function EditProfile() {
  return (
    <div className="w-full bg-primaryBg border border-border rounded-[10px] p-6 flex flex-col gap-6 ">
      <ProfileHeader />
      <hr />
      <EditProfileForm 
              
      />
    </div>
  )
}

export default EditProfile
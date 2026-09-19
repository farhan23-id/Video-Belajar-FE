import ProfilePicture from "./ProfilePicture";

function ProfileHeader() {
  return (
    <div className="flex gap-3.5 lg:gap-4">
      <ProfilePicture className={`size-15 lg:size-23`} />
      <div className="flex flex-col justify-center lg:gap-2">
        <h5 className="heading-7 text-textDark-primary lg:heading-5">
          Jenny Ruby Jane
        </h5>
        <p className="text-textDark-primary bodyMedium-R lg:bodyLarge-R">
          rubyjane@gmail.com
        </p>
        <a href="#" className="bodySmall-B lg:bodyMedium-B text-tertiary">
          Ganti Foto Profile
        </a>
      </div>
    </div>
  );
}

export default ProfileHeader;

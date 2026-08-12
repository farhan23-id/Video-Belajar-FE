// interface AvatarProps {
//   src?: string;
//   onClick: () => void;
// }

function ProfilePicture({
  onClick,
  className,
  src = "asset/profile/profile_1.png",
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer active:scale-95 rounded-[10px] ${className}`}
    >
      <img className="rounded-[10px]" src={src} alt="Profile.jpg" />
    </button>
  );
}

export default ProfilePicture;

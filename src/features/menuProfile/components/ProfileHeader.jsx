import ProfilePicture from "./ProfilePicture";
import { Link } from "react-router";

function ProfileHeader(props) {
  const { name, email } = props;
  return (
    <div className="flex gap-3.5 lg:gap-4">
      <ProfilePicture className={`size-15 lg:size-23`} />
      <div className="flex flex-col justify-center lg:gap-2">
        <h5 className="heading-7 text-textDark-primary lg:heading-5">{name}</h5>
        <p className="text-textDark-primary bodyMedium-R lg:bodyLarge-R">
          {email}
        </p>
        <Link
          to={"/changeProfile"}
          className="bodySmall-B lg:bodyMedium-B text-tertiary"
        >
          Ganti Foto Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileHeader;

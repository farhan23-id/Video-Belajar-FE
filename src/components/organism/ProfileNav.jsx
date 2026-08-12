import React from "react";

import ProfileNavItem from "../molecules/ProfileNavItem";

function ProfileNav() {
  return (
    <div className="flex flex-col gap-6 max-w-73">
      <div className="flex flex-col gap-2.5">
        <h5 className="heading-7 text-textDark-primary lg:heading-5">Ubah Profile</h5>
        <p className="bodySmall-R text-textDark-secondary lg:bodyMedium-R">Ubah data diri anda</p>
      </div>
      <div className="bg-primaryBg border border-border rounded-[10px] p-5 flex flex-col gap-2 lg:p-6">
        <ProfileNavItem />
      </div>
    </div>
  );
}

export default ProfileNav;

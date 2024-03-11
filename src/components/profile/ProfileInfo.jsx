import { useAuth, useProfile } from "../../hooks";
import Bio from "./Bio";
import ProfileImage from "./ProfileImage";

export default function ProfileInfo() {
  const { state: profile } = useProfile();
  const { auth } = useAuth();

  const isAuthonicateUser = auth?.user?.id === profile?.user?.id;

  const user = profile?.user ?? auth?.user;

  return (
    <div className="flex flex-col items-center py-8 text-center">
      <ProfileImage
        avatar={user?.avatar}
        fname={user?.firstName}
        isAuthonicate={isAuthonicateUser}
      />
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {user?.firstName} {user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg mt-3">{user?.email}</p>
      </div>
      <Bio isAuthonicate={isAuthonicateUser} />
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
}

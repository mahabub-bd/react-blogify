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

      <Bio />
    </div>
  );
}

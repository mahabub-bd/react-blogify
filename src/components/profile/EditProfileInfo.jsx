import { useAuth, useProfile } from "../../hooks";
import EditProfileForm from "./EditProfileForm";
import ProfileImage from "./ProfileImage";

export default function EditProfileInfo() {
  const { state: profile } = useProfile();
  const { auth } = useAuth();

  const isAuthonicateUser = auth?.user?.id === profile?.user?.id;

  const user = profile?.user ?? auth?.user;

  return (
    <div className="flex flex-col py-8 container items-center">
      <div className="flex gap-5 items-center justify-around">
        <ProfileImage
          avatar={user?.avatar}
          fname={user?.firstName}
          isAuthonicate={isAuthonicateUser}
        />
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="leading-[231%] lg:text-lg mt-3">{user?.email}</p>
        </div>
      </div>

      <div className="mt-2 flex items-start gap-2 lg:mt-4">
        <div className="flex-1">
          <p className="leading-[188%] text-gray-400 lg:text-lg">{user?.bio}</p>
        </div>
      </div>

      <EditProfileForm user={user} />
    </div>
  );
}

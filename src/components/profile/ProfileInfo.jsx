import { useAuth, useProfile } from "../../hooks";
import Bio from "./Bio";
import ProfileImage from "./ProfileImage";

export default function ProfileInfo() {
  const { state } = useProfile();
  const { auth } = useAuth();

  const isAuthonicateUser = auth?.user?.id === state?.user?.id;

  return (
    <div className="flex flex-col items-center py-8 text-center">
      <ProfileImage
        avatar={state?.user?.avatar}
        fname={state?.user?.firstName}
        isAuthonicate={isAuthonicateUser}
      />
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {state?.user?.firstName} {state?.user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg mt-3">{state?.user?.email}</p>
      </div>
      <Bio isAuthonicate={isAuthonicateUser} />
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
  );
}

import { useProfile } from "../../hooks";

const Bio = () => {
  const { state } = useProfile();

  return (
    <>
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {state?.user?.firstName} {state?.user?.lastName}
        </h3>
        <p className="leading-[231%] lg:text-lg mt-3">{state?.user?.email}</p>
      </div>

      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        </div>
      </div>
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </>
  );
};

export default Bio;

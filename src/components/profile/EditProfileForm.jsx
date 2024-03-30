import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { actions } from "../../actions";
import { useAxios, useProfile } from "../../hooks";
import Field from "../common/Field";

export default function EditProfileForm({ user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  const { dispatch } = useProfile();
  const { api } = useAxios();
  const navigate = useNavigate();

  const handleEditSubmit = async (data) => {
    dispatch({ type: actions.profile.DATA_FETCH_ERROR });
    try {
      const formData = new FormData();
      formData.append("bio", data.bio);
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile`,
        formData
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
      }
      toast.success("Profile Modified Sucessfully ");
      navigate(`/me/${response?.data?.user?.id}`);
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
      setError("root.random", {
        type: "random",
        message: `Something went wrong`,
      });
    }
  };

  useEffect(() => {
    if (user) {
      setValue("bio", user?.bio);
      setValue("firstName", user?.firstName);
      setValue("lastName", user?.lastName);
    }
  }, [setValue, user]);

  return (
    <form
      className="mt-5 p-3 shadow-md"
      onSubmit={handleSubmit(handleEditSubmit)}
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register("firstName", { required: "First Name is Required" })}
          className={`w-full mt-2 p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors.firstName ? "border-red-500" : "border-gray-200"
          }`}
          type="firstName"
          name="firstName"
          id="firstName"
        />
      </Field>
      <Field label="Last Name" error={errors.lastName}>
        <input
          {...register("lastName")}
          className={`w-full mt-2 p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors.lastName ? "border-red-500" : "border-gray-200"
          }`}
          type="lastName"
          name="lastName"
          id="lastName"
        />
      </Field>

      <Field label="" error={errors.bio}>
        <textarea
          {...register("bio", { required: "Add Bio Content" })}
          id="bio"
          name="bio"
          cols={80}
          rows="4"
          className={`w-full mt-2 p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors.lastName ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="Write your bio"
        ></textarea>
      </Field>
      <button type="submit">
        <a className="bg-indigo-600 text-white px-4 py-1 md:py-2 rounded-md hover:bg-indigo-700 transition-all duration-200">
          Update Profile
        </a>
      </button>
    </form>
  );
}

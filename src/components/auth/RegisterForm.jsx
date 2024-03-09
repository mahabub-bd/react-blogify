import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../common/Field";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Something went wrong: ${error.message}`,
      });
    }
  };

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register("firstName", { required: "First Name is Required" })}
          className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
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
          className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors.lastName ? "border-red-500" : "border-gray-200"
          }`}
          type="lastName"
          name="lastName"
          id="lastName"
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID is Required" })}
          className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
          className={`w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>

      <Field>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Create Account
        </button>
      </Field>
      <p className="text-gray-500 text-center">
        {errors?.root?.random?.message}
      </p>
    </form>
  );
};

export default RegisterForm;

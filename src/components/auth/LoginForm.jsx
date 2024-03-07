import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import Field from "../common/Field";

export default function LoginForm() {
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { user, token } = response.data;

        console.log(token);

        if (token) {
          const authToken = token.accessToken;
          const refreshToken = token.refreshToken;
          setAuth({ user, authToken, refreshToken });
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID is Required" })}
          className={`w-full p-3 mt-2 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          {...register("password", { required: "Password is Required" })}
          className={`w-full p-3 mt-2 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>

      <Field>
        <button className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
          Login
        </button>
      </Field>
      <p className="text-center">
        Dont have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
      <p className="text-gray-500 text-center text-lg mt-10">
        {errors?.root?.random?.message}
      </p>
    </form>
  );
}

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiShow, BiHide } from "react-icons/bi";
import SigninImage from "../assets/Login.png";
import AppleLogo from "../assets/Apple_logo.png";
import GoogleLogo from "../assets/Google_logo.png";
import { useSignupMutation } from "../api/hooks/index";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, { message: "Please enter Name" }),
  phone: z.string().min(10, { message: "Please enter Phone" }),
  password: z
    .string()
    .min(1, { message: "This field is required ❗❗" })
    .min(8, { message: "Password too short 🤭" }),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });
  const navigate = useNavigate()
  const { mutate: signupMutation } = useSignupMutation(navigate,reset);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      await signupMutation(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-y-hidden">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src={SigninImage}
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-16 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Sign up </h1>
          <p className="opacity-50 text-sm mb-5">
            Sign Up to create stunning web pages effortlessly!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 space-y-2">
            <label htmlFor="name" className="block text-gray-600 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ex.9430233490"
              className={`w-full rounded-3xl bg-gray-100 py-3 px-3 focus:outline-none ${
                errors.name ? "border-red-500" : ""
              }`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4 space-y-2">
            <label htmlFor="phone" className="block text-gray-600 text-sm">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="ex.9430233490"
              className={`w-full rounded-3xl bg-gray-100 py-3 px-3 focus:outline-none ${
                errors.phone ? "border-red-500" : ""
              }`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="mb-4 space-y-2 relative">
            <label htmlFor="password" className="block text-gray-600 text-sm">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="ex.BalkPe@24"
              className={`w-full rounded-3xl bg-gray-100 py-3 px-3 focus:outline-none pr-10 ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-9 right-2 flex items-center px-3 text-gray-400"
            >
              {showPassword ? (
                <BiHide className="text-xl" />
              ) : (
                <BiShow className="text-xl" />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-6 text-xs text-gray-600">
            By registering for an account, you are consenting to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            and confirming that you have reviewed and accepted the{" "}
            <a href="#" className="text-blue-600 underline">
              Global Privacy Statement
            </a>
            .
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 text-white font-semibold rounded-3xl py-2 px-4 w-full"
          >
            Get started free
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="text-lime-600 underline">
              Login
            </Link>
          </p>
          <div className="flex flex-col space-y-2  mt-5">
            <div className="flex flex-row items-center justify-center cursor-pointer gap-2">
              <img src={GoogleLogo} alt="google logo" />
              <p className="text-xs">Continue with Google</p>
            </div>
            <div className="flex flex-row items-center justify-center cursor-pointer gap-2">
              <img src={AppleLogo} alt="apple logo" />
              <p className="text-xs">Continue with Apple</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

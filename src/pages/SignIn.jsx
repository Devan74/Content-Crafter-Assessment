import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BiShow, BiHide } from "react-icons/bi";
import SigninImage from "../assets/Login.png";
import { useSigninMutation } from "../api/hooks/index";

const schema = z.object({
  phone: z.string().min(10, { message: "Please enter Phone" }),
  password: z
    .string()
    .min(1, { message: "This field is required ❗❗" })
    .min(8, { message: "Password too short 🤭" }),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const signinMutation = useSigninMutation(reset);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    signinMutation.mutate(data);
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
      <div className="lg:p-32 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
          <p className="opacity-50 text-sm mb-16">
            Sign in to create stunning web pages effortlessly!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 space-y-2">
            <label htmlFor="phone" className="block text-gray-600 text-sm">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="ex.9430233490"
              className="w-full rounded-3xl bg-gray-100 py-3 px-3 focus:outline-none"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
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
              className="w-full rounded-3xl bg-gray-100 py-3 px-3 focus:outline-none pr-10"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
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
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>
          <div className="mb-6 text-lime-600">
            <a href="#" className="underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 text-white font-semibold rounded-3xl py-2 px-4 w-full"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-lime-600 text-center">
          <a href="#" className="underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

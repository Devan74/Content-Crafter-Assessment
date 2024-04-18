import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const customAxios = axios.create({
  baseURL: "https://contentcrafter.bulkpe.in/api",
});

export const useSignupMutation = (navigateFn,resetFormFn) => {
  const navigate = useNavigate();

  const signupUser = async (signupDataObject) => {
    try {
      const response = await customAxios.post("/signup", signupDataObject);
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to sign up");
    }
  };

  return useMutation({
    mutationFn: signupUser,
    mutationKey: "Auth",
    onSuccess: ({ data }) => {
      resetFormFn();
      navigate("/signin");
    },
  });
};

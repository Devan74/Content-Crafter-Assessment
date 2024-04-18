import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const customAxios = axios.create({
  baseURL: "https://contentcrafter.bulkpe.in/api",
});

export const useSigninMutation = (resetFormFn) => {
  const navigate = useNavigate();

  const signinUser = async (signinDataObject) => {
    try {
      const response = await customAxios.post("/signin", signinDataObject);
      return response.data;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to sign in");
    }
  };

  return useMutation({
    mutationFn: signinUser,
    mutationKey: "Auth",
    onSuccess: (data) => {
    //   console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.result._id);
      resetFormFn();
      navigate("/", { replace: true, state: { userId: data.result._id } });
    },
  });
};

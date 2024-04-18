import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://contentcrafter.bulkpe.in/api",
});

export const useUploadFileMutation = (token) => {
  const uploadFileMutation = async (formData) => {
    try {
      const response = await customAxios.post("/CreateTemplate", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.result.template_ref;
    } catch (error) {
      throw new Error("Error uploading file. Please try again.");
    }
  };

  return useMutation({
    mutationFn: uploadFileMutation,
    mutationKey: "uploadFile",
  });
};

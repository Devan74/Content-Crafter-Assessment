import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://contentcrafter.bulkpe.in/api",
});

export const useTemplatesListMutation = (token) => {
  const templatesList = async () => {
    const response = await customAxios.get("/Listtempltes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.result;
  };

  return useQuery({
    queryKey: ["templates"],
    queryFn: templatesList,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

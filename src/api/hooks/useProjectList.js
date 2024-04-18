import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://contentcrafter.bulkpe.in/api",
});

export const useProjectListMutation = (token) => {
  const projectList = async () => {
    const response = await customAxios.get("/listProjects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.result;
  };

  return useQuery({
    queryKey: ["projects"],
    queryFn: projectList,
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

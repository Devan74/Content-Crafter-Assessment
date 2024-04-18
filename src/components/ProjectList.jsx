import React from "react";
import { useProjectListMutation } from "../api/hooks/index";
import { Loading } from "../utils/components";

const ProjectList = () => {
  const token = localStorage.getItem("token");
  const { data, isLoading, isError } = useProjectListMutation(token);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError) return <div>Error fetching templates</div>;

//   console.log(data);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {data.map((project) => (
          <li key={project._id}>{project.template_ref}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

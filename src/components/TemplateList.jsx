import React from "react";
import { useTemplatesListMutation } from "../api/hooks/index";
import { Loading } from "../utils/components";

const TemplateList = () => {
  const token = localStorage.getItem("token");
  const { data, isLoading, isError } = useTemplatesListMutation(token);

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
    <h2 className="text-2xl font-bold mb-4">Templates</h2>
    <ul className="">
      {data.map((template) => (
        <li key={template._id} className="py-2">
          <span className="block text-lg">{template.template_ref}</span>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default TemplateList;

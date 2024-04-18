import React, { useState } from "react";
import { useUploadFileMutation } from "../api/hooks/index";
import { FaFileUpload } from "react-icons/fa";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [templateRef, setTemplateRef] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem("token");

  const { mutate: uploadFile, isLoading } = useUploadFileMutation(token);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCancel = () => {
    setFile(null);
    const fileInput = document.getElementById("file");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file || !file.type.includes("text/html")) {
      setErrorMessage("Please upload a valid HTML file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const templateRef = await uploadFile(formData);
      setTemplateRef(templateRef);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full items-center justify-center bg-grey-lighter">
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <FaFileUpload className="w-8 h-8" />
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input
              type="file"
              id="file"
              accept=".html"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div className="flex justify-end px-8 pb-8 pt-4">
            <button
              id="submit"
              className="rounded-3xl text-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Submit"}
            </button>
            <button
              id="cancel"
              className="ml-3 rounded-3xl text-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      {templateRef && <p className="mt-4">Template reference: {templateRef}</p>}
    </div>
  );
};

export default UploadFile;

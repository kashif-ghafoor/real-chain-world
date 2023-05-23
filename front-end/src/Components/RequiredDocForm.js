import React from "react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";

const RequiredDocForm = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (values) => {
      console.log(values.files);
    },
  });

  const handleDrop = (acceptedFiles) => {
    const filteredFiles = acceptedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    formik.setFieldValue("files", [...formik.values.files, ...filteredFiles]);
  };

  const handleRemove = (index) => {
    const updatedFiles = [...formik.values.files];
    updatedFiles.splice(index, 1);
    formik.setFieldValue("files", updatedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: ".pdf",
    multiple: true,
  });

  return (
    <div className="flex ml-28 mt-20">
      <div className="flex flex-col text-blue text-4xl font-semibold">
        <h2>Property Documents</h2>
      </div>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-4">
        <label className="font-medium mt-24">
          Upload the relevant property documents and images *
        </label>
        <div
          {...getRootProps()}
          className={`mt-6 ml-2 p-6 border-2 border-dashed rounded-md ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-500">Drop PDF files here...</p>
          ) : (
            <p className="text-gray-500">
              Drag and drop PDF files here, or click to select files
            </p>
          )}
        </div>
        {formik.errors.files && (
          <div className="text-red-500 mt-2">{formik.errors.files}</div>
        )}
        <div className="mt-4">
          {formik.values.files.map((file, index) => (
            <div key={index} className="bg-offwhite p-2 rounded-md">
              <span>{file.name}</span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="ml-32 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="submit"
          onClick={onNext}
          className="mt-4 bg-lightseagreen-100 text-white font-medium px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RequiredDocForm;

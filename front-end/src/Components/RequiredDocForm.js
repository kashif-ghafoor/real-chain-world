import React, { useState } from "react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";

const RequiredDocForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      files: [],
      videos: [],
    },
    onSubmit: (values) => {
      console.log(values.files);
      console.log(values.videos);
      setFormSubmitted(true);
    },
  });

  const handleDropFiles = (acceptedFiles) => {
    const filteredFiles = acceptedFiles.filter(
      (file) => file.type === "application/pdf"
    );
    formik.setFieldValue("files", [...formik.values.files, ...filteredFiles]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...formik.values.files];
    updatedFiles.splice(index, 1);
    formik.setFieldValue("files", updatedFiles);
  };

  const handleDropVideos = (acceptedFiles) => {
    const filteredVideos = acceptedFiles.filter(
      (file) => file.type === "video/mp4"
    );
    formik.setFieldValue("videos", [
      ...formik.values.videos,
      ...filteredVideos,
    ]);
  };

  const handleRemoveVideo = (index) => {
    const updatedVideos = [...formik.values.videos];
    updatedVideos.splice(index, 1);
    formik.setFieldValue("videos", updatedVideos);
  };

  const {
    getRootProps: getFilesRootProps,
    getInputProps: getFilesInputProps,
    isDragActive: isFilesDragActive,
  } = useDropzone({
    onDrop: handleDropFiles,
    accept: ".pdf",
    multiple: true,
  });

  const {
    getRootProps: getVideosRootProps,
    getInputProps: getVideosInputProps,
    isDragActive: isVideosDragActive,
  } = useDropzone({
    onDrop: handleDropVideos,
    accept: ".mp4",
    multiple: true,
  });

  return (
    <div className="flex ml-28 mt-12">
      <div className="flex flex-col text-blue text-4xl font-semibold">
        <h2 className="mt-10">Property Documents</h2>
        <h2 className="mt-44">Property Videos</h2>
      </div>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-4">
        {formSubmitted && (
          <div className="bg-blue rounded w-[360px] h-[40px]">
            <p className="text-white font-medium mb-4 pt-2 pl-8">
              Form submitted successfully !
            </p>
          </div>
        )}
        <label className="font-medium mt-28">
          Upload the relevant property documents and images *
        </label>
        <div
          {...getFilesRootProps()}
          className={`mt-6 ml-2 p-6 border-2 border-dashed rounded-md ${
            isFilesDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getFilesInputProps()} />
          {isFilesDragActive ? (
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
                onClick={() => handleRemoveFile(index)}
                className="ml-32 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <h1 className="font-medium mt-12">Upload relevant property videos *</h1>
        <div
          {...getVideosRootProps()}
          className={`mt-4 ml-2 p-6 border-2 border-dashed rounded-md ${
            isVideosDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getVideosInputProps()} />
          {isVideosDragActive ? (
            <p className="text-blue-500">Drop MP4 videos here...</p>
          ) : (
            <p className="text-gray-500">
              Drag and drop MP4 videos here, or click to select videos
            </p>
          )}
        </div>
        {formik.errors.videos && (
          <div className="text-red-500 mt-2">{formik.errors.videos}</div>
        )}
        <div className="mt-4">
          {formik.values.videos.map((video, index) => (
            <div key={index} className="bg-offwhite p-2 rounded-md">
              <span>{video.name}</span>
              <button
                type="button"
                onClick={() => handleRemoveVideo(index)}
                className="ml-32 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-4 bg-lightseagreen-100 text-white ml-80 font-medium px-4 py-2 rounded-md"
          disabled={
            formik.values.files.length === 0 ||
            formik.values.videos.length === 0
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RequiredDocForm;

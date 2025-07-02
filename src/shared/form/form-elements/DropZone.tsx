"use client";
import React from "react";
import { useDropzone } from "react-dropzone";

const DropzoneComponent: React.FC = () => {
  const onDrop = (acceptedFiles: File[]) => {
    console.log("Files dropped:", acceptedFiles);
    // Handle file uploads here
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/webp": [],
      "image/svg+xml": [],
    },
  });
  return (
    <div></div>
  );
};

export default DropzoneComponent;

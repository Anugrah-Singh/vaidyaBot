import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate

export function FileUploadDemo() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();  // Initialize navigate

  const handleFileUpload = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("file", file);  // Append each file
    });

    try {
      setUploading(true);
      const response = await axios.post("http://192.168.137.79:8000/api/extract-aadhaar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload successful:", response.data);
      alert("File uploaded successfully!");
      
      // Redirect to another page after successful upload
      navigate("/chatbot"); 
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        multiple
        onChange={handleFileUpload}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer p-6 block text-center text-white border border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
      >
        {uploading ? "Uploading..." : "Click to upload files"}
      </label>

      {files.length > 0 && (
        <div className="mt-4">
          <h2 className="font-bold mb-2">Uploaded Files:</h2>
          <ul className="list-disc pl-5">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

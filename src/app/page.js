'use client';

import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.set('file', file);

      let response = await fetch('/api/file-upload', {
        method: "POST",
        body: formData
      });

      response = await response.json();

      if (response.result) {
        alert("File uploaded successfully");
      } else {
        alert("Error while uploading file")
      }
    } catch (error) {
      alert("Error while uploading file")
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ margin: '15px' }}>
        <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
      </div>
      <div style={{ margin: '15px' }}>
        <button type="submit">Upload File</button>
      </div>
    </form>
  )
}

export default FileUpload;
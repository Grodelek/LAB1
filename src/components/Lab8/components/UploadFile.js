import React, { useState } from 'react';
import '../styles/UploadFile.css';

function UploadFile() {
  const [file, setFile] = useState(null);

  const uploadFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile.name);
  };

  return (
    <div className="upload-file-container">
      <input type="file" onChange={uploadFile} />
      {file && <p>Selected File: {file}</p>}
    </div>
  );
}

export default UploadFile;
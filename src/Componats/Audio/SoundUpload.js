import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ColorContext } from "../../Context/ColourContext/ColorContext";
import firebaseApp from "../../firebase";
import styled from "styled-components";

const StyledInput = styled.input`
  /* Add your custom styles here */
  /* For example: */
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const UploadComponent = () => {
  const {  setAudiourl } = useContext(ColorContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [dataUrl, setDataUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  
  };

  const handleUpload = () => {
    if (selectedFile && selectedFile.type.includes("audio")) {
      const storage = getStorage(firebaseApp);
      const storageRef = ref(storage, "uploads/" + selectedFile.name);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          setUploadError(error.message);
        },
        async () => {
          console.log("Upload complete!");
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setDataUrl(downloadURL);
          setAudiourl(downloadURL);
          console.log("Data URL:", downloadURL); // Log the dataUrl
        }
      );
    }
  };

  return (
    <div style={{ marginLeft: "130px" }}>
      <div style={{ width: 300 }}>
        <StyledInput type="file" accept="audio/*" onChange={handleFileChange} />
      </div>
      <Button
        variant="outlined"
        onClick={handleUpload}
        style={{ marginLeft: "100px", marginTop: "10px" }}
      >
        Upload
      </Button>
      {uploadProgress > 0 && (
        <p style={{marginLeft: "60px"}}>Upload progress: {Math.round(uploadProgress)}%</p>
      )}
      {uploadError && <p>Error: {uploadError}</p>}
      {dataUrl && <audio controls src={dataUrl} />}
    </div>
  );
};

export default UploadComponent;

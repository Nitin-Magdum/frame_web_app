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
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StyledInput = styled.input`
  /* Add your custom styles here */
  /* For example: */
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const UploadComponent = () => {
  const { setAudiourl } = useContext(ColorContext);
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
          console.log("Data URL:", downloadURL);
        }
      );
    }
  };

  return (
    <div style={{ marginLeft: "130px" }}>
      <div style={{ width: 300 }}>
        <StyledInput type="file" accept="audio/*" onChange={handleFileChange} />
      </div>
      {uploadProgress > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            marginRight: "450px",
          }}
        >
          <CircularProgress variant="determinate" value={uploadProgress} />
          <Typography variant="caption" color="text.secondary" mt={1}>
            {`${Math.round(uploadProgress)}%`}
          </Typography>
          {dataUrl && <audio controls src={dataUrl} />}
        </Box>
      )}
      <Button
        variant="outlined"
        onClick={handleUpload}
        style={{ marginLeft: "100px", marginTop: "20px" }}
        disabled={uploadProgress > 0}
      >
        Upload
      </Button>
      {uploadError && <p>Error: {uploadError}</p>}
    </div>
  );
};

export default UploadComponent;

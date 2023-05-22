import { useState } from "react";
import FileUpload from "react-material-file-upload";

export default function App() {
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (selectedFiles) => {
    const invalidFiles = selectedFiles.filter(
      (file) => !file.type.startsWith("audio/")
    );

    if (invalidFiles.length > 0) {
      setErrorMessage("Please upload only audio files.");
    } else {
      setFiles(selectedFiles);
      setErrorMessage("");
    }
  };

  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <FileUpload
        value={files}
        onChange={handleFileChange}
        multiple={false}
        rightLabel="to select files"
        buttonLabel="click here"
        buttonRemoveLabel="Remove all"
        maxFileSize={10}
        maxUploadFiles={0}
        bannerProps={{
          elevation: 0,
          variant: "outlined",
          sx: { border: "none", p: 3 },
        }}
        containerProps={{
          elevation: 0,
          variant: "inherit",
          sx: { border: "none", p: 3 },
        }}
        accept="audio/*"
      />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>

      <style>{`
        @media (max-width: 600px) {
          /* Adjust styles for smaller screens */
          .App {
            /* Example responsive style */
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}

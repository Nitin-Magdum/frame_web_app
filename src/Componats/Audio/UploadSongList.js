import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function UploadSongList() {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [audioURLs, setAudioURLs] = useState([]);
  const [audioTitles, setAudioTitles] = useState([]);
  const [activeAudioIndex, setActiveAudioIndex] = useState(null);

  useEffect(() => {
    fetch("https://mockup--pro-default-rtdb.firebaseio.com/audioData.json")
      .then((response) => response.json())
      .then((data) => {
        const audioData = Object.values(data); // Array of audio data objects

        // Extract the audio URLs and titles from the data
        const urls = audioData.map((item) => item.audioFileName.audiourl);
        const titles = urls.map((url) => {
          const encodedTitle = url.match(/uploads%2F([^/]+)\.mp3/)[1];
          const decodedTitle = decodeURIComponent(
            encodedTitle.replace(/\+/g, " ")
          );
          return decodedTitle;
        });

        // Reverse the arrays to display the latest uploaded songs first
        setAudioURLs(urls.reverse());
        setAudioTitles(titles.reverse());
      })
      .catch((error) => {
        console.error("Error fetching audio data:", error);
      });
  }, []);

  const handleAudioClick = (index) => {
    if (activeAudioIndex !== index) {
      // Pause the previously active audio, if any
      const prevAudioElement = document.getElementById(
        `audio-${activeAudioIndex}`
      );
      if (prevAudioElement && !prevAudioElement.paused) {
        prevAudioElement.pause();
      }

      // Play the clicked audio
      const audioElement = document.getElementById(`audio-${index}`);
      if (audioElement) {
        audioElement.play();
      }

      setActiveAudioIndex(index);
    } else {
      // Toggle play/pause for the clicked audio
      const audioElement = document.getElementById(`audio-${index}`);
      if (audioElement) {
        if (audioElement.paused) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
      }
    }
  };

  return (
    <Box sx={{ marginLeft: "210px" }}>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Typography
          sx={{ mt: 2, mb: 0, marginLeft: "-10px" }}
          variant="h7"
          component="div"
        >
          <strong>Uploaded Music List</strong>
        </Typography>
        <Demo>
          <List dense={dense} sx={{ marginLeft: "-210px" }}>
            {audioTitles.length > 0 ? (
              audioTitles.map((title, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleAudioClick(index)}
                >
                  <ListItemIcon>
                    <MusicNoteIcon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                  <audio id={`audio-${index}`} src={audioURLs[index]} />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Loading..." />
              </ListItem>
            )}
          </List>
        </Demo>
      </Box>
    </Box>
  );
}

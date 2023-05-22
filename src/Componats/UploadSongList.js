import React from "react";
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
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const dummyItems = [
    { id: 1, text: "Song Name 1" },
    { id: 2, text: "Song Name 2" },
    { id: 3, text: "Song Name 3" },
  ];

  return (
    <Box
      sx={{
        marginLeft: "210px",
      }}
    >
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Typography sx={{ mt: 2, mb: 0 }} variant="h7" component="div">
        <strong>
          Uploaded Music List
          </strong>
        </Typography>
        <Demo>
          <List dense={dense} sx={{
        marginLeft: "-210px",
      }}>
            {dummyItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemIcon>
                  <MusicNoteIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            ))}
          </List>
        </Demo>
      </Box>
    </Box>
  );
}

import "./LsstenItem.css";

import { Box, Divider } from "@mui/material";
import React from "react";
import { INote } from "../utils/interfaces";
import { NavLink } from "react-router-dom";

interface IListItemProps {
  note: INote;
  handleDrawerToggle: Function;
}

const ListItem = ({ note, handleDrawerToggle }: IListItemProps) => {
  console.log(note);
  const getDateOfNote = (note: INote) => {
    if (note.date) {
      const year = new Date(note.date).getUTCFullYear();
      const month = new Date(note.date).getUTCMonth();
      const day = new Date(note.date).getUTCDay();
      const hours = new Date(note.date).getUTCHours();
      const minutes = new Date(note.date).getUTCMinutes();
      const seconds = new Date(note.date).getUTCSeconds();
      const date = `${year} ${month}/${day} ${hours}:${minutes}:${seconds}`;
      return date;
    } else {
      return new Date(note.date);
    }
  };
  const cutDesc = (note: INote): string => {
    if (note.desc.length >= 9) {
      const newNoteDesc = note.desc.slice(0, 5) + "...";
      return newNoteDesc.trim();
    } else {
      return note.desc.trim();
    }
  };
  const closeSidebar = () => {
    handleDrawerToggle();
  };
  return (
    <div key={note.id} role="listitem">
      <Divider />
      <Box className="box" py="15px">
        <NavLink
          tabIndex={0}
          style={{
            textDecoration: "none",
            color: "black",
            outline: "transparent",
          }}
          onClick={closeSidebar}
          to={`/note/${note.id}`}
          aria-label={note.name}
          title={note.name}
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            flexDirection="column"
            textAlign="center"
            alignContent="center"
            marginLeft="18px"
          >
            <Box display="flex" justifyContent="flex-start">
              <span style={{ fontWeight: "bold" }}>{note.name}</span>
            </Box>
            <Box display="flex" width="100%" alignContent="center">
              {/* <Typography variant="h5" marginRight="10px" fontSize="15px">
                {getDateOfNote(note).toString()}
              </Typography> */}
              <time
                style={{ marginRight: "5px" }}
                dateTime={getDateOfNote(note).toString()}
              >
                {getDateOfNote(note).toString()}
              </time>
              {cutDesc(note)}
            </Box>
          </Box>
        </NavLink>
      </Box>
    </div>
  );
};

export default ListItem;

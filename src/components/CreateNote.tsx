import { Box, Button, TextField, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { INote } from "../utils/interfaces";

const CreateNote = () => {
  const { addNewNote, notes } = useContext(Context);
  const [formData, setFormData] = useState<INote>({
    name: "",
    desc: "",
    date: new Date(Date.now()),
    id: notes.length + 1,
  });
  const [isDataRight, setIsDataRight] = useState({
    name: false,
    desc: false,
  });
  const navigate = useNavigate();
  const saveNotesToStorage = (notes: INote[]) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  const createNewNote = () => {
    addNewNote(formData);
    saveNotesToStorage([...notes, formData]);
    navigate(`/note/${formData.id}`);
  };
  const handleForm = () => {
    if (formData.name.length > 5) {
      setIsDataRight((prevData) => ({ ...prevData, name: true }));
      createNewNote();
    } else {
      setIsDataRight((prevData) => ({ ...prevData, name: false }));
    }
  };
  return (
    <Box
      display="flex"
      height="100vh"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
    >
      <TextField
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        margin="normal"
        id="standard-basic"
        label="Name:"
        variant="standard"
      />
      <TextField
        value={formData.desc}
        onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
        id="standard-multiline-static"
        label="Description"
        multiline
        variant="standard"
        rows={4}
      />
      <Button onClick={handleForm}>Add</Button>
    </Box>
  );
};

export default CreateNote;

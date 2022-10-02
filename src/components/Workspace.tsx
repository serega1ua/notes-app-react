import { Add, Delete } from "@mui/icons-material";
import { Box, Button, Fab, Modal, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IContext, INote } from "../utils/interfaces";
import { Context } from "../context/MainContext";
import CreateNote from "./CreateNote";

interface IWorkspaceProps {
  type: "NOTEINFO" | "CREATE" | "WELCOME";
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "58%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid red",
  boxShadow: 24,
  p: 4,
};

const Workspace = ({ type }: IWorkspaceProps) => {
  const { id } = useParams();
  const { notes, removeNote, isOpen, setIsOpen } =
    useContext<IContext>(Context);
  const currentNote = notes.filter(
    (note: INote) => Number(note.id) === Number(id)
  );
  const note = currentNote[0];
  const navigate = useNavigate();
  const openModal = () => {
    setIsOpen(true);
  };
  const deleteNoteAndNavigate = (isCorrect: boolean) => {
    if (isCorrect) {
      removeNote(note.id);
      navigate("/");
      setIsOpen(false);
    } else {
      alert("Ok");
    }
  };
  const navigateToCreatePage = () => {
    navigate("/create");
  };
  const handleClose = () => setIsOpen(false);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignContent="flex-start"
      margin="0 auto"
      textAlign="center"
    >
      {type === "NOTEINFO" && (
        <Box height="100%" marginTop="100px" role="article">
          <h2>{note?.name}</h2>
          <Box width="500px">
            <Typography
              style={{
                wordWrap: "break-word",
                width: "500px",
                maxWidth: "100%",
              }}
              variant="body1"
            >
              {note?.desc}
            </Typography>
          </Box>
          <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="dialog1Desc"
            role="alertdialog"
            aria-modal="true"
          >
            <Box sx={style} role="document" tabIndex={0}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure you wanna remove the note?
              </Typography>
                <p id="dialog1Desc">To remove, click the OK button</p>
              <Button onClick={() => deleteNoteAndNavigate(true)}>
                Yes, remove
              </Button>
              <Button onClick={() => handleClose()}>No, cancel</Button>
            </Box>
          </Modal>
          <Box width="200px" position="fixed" bottom="10px" right="0">
            <Fab
              onClick={navigateToCreatePage}
              color="primary"
              style={{ marginRight: "10px" }}
              aria-label="Add new item"
            >
              <Add />
            </Fab>
            <Fab onClick={openModal} color="error" aria-label="Delete item">
              <Delete />
            </Fab>
          </Box>
        </Box>
      )}
      {type === "CREATE" && (
        <>
          <CreateNote />
        </>
      )}
      {type === "WELCOME" && (
        <>
          <Box position="fixed" bottom="10px" right="10px">
            <Fab
              onClick={navigateToCreatePage}
              color="primary"
              aria-label="Add new item"
            >
              <Add />
            </Fab>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Workspace;

import { INote } from "../utils/interfaces";
import ListItem from "./ListItem";
import React from "react";

interface IListProps {
  notes: INote[];
  handleDrawerToggle: Function;
}

const List = ({ notes, handleDrawerToggle }: IListProps) => {
  console.log(notes);
  return (
    <>
      {notes.map((note: INote) => {
        return (
          <ListItem
            handleDrawerToggle={handleDrawerToggle}
            key={note.id}
            note={note}
          />
        );
      })}
    </>
  );
};

export default List;

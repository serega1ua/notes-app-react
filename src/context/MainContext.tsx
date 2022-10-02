import React, { createContext, useState } from "react";
import { INote, IContext } from "../utils/interfaces";

interface IProps {
  children: React.ReactNode; //ts-тип для реакт-компонента
}

//шаблон опций контекста
export const Context = createContext<IContext>({ //метод принимает объект с даннми контекста, которые будут получать компоненты
  notes: [{ name: "Template name", desc: "for example", date: new Date(Date.now()), id: 1 }],
  isOpen: false,
  setIsOpen: () => {
    console.log("open/disabled modal");
  },
  addNewNote: () => {
    console.log("add new note");
  },
  clearNotes: () => {
    console.log("clear notes");
  },
  setNotes: () => {
    console.log("notes");
  },
  removeNote: (noteId = 1) => {
    console.log(noteId);
  },
});

const MainContext = ({ children }: IProps) => { //интерфейс TS
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [notes, setNotes] = useState<Array<INote>>([
    {
      name: "Note 1",
      date: new Date(Date.now()),
      desc: "Desc 1",
      id: 1,
    },
    {
      name: "Note about myself",
      date: new Date(Date.now()),
      desc: "Description for this note",
      id: 2,
    },
    {
      name: "Note about others",
      date: new Date(Date.now()),
      desc: "Good note",
      id: 3,
    },
  ]);

  const addNewNote = (note: INote) => {
    setNotes((prevNotes: INote[]) => [...prevNotes, note]); //setNotes в хуке так построен, что может брать как аргумент и note, и колл-бек
  };
  const clearNotes = () => {
    setNotes([]);
  };
  const removeNote = (noteId: number) => {
    setNotes((prevNotes: INote[]) => {
      const filteredNotes = prevNotes.filter((note) => note.id !== noteId);
      localStorage.setItem("notes", JSON.stringify(filteredNotes));
      return [...filteredNotes];
    });
  };
  return (
    <Context.Provider /* отдаю данные в Context.Provider, это уже актуальные данные
                         используется для передачи данных в контекст, откуда его получит лбой компонент*/
      value={{
        isOpen,
        setIsOpen,
        notes,
        addNewNote,
        clearNotes,
        removeNote,
        setNotes,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainContext;

export interface INote {
  name: string;
  desc: string;
  date: Date;
  id: number;
}

export interface IContext {
  notes: INote[];
  isOpen: boolean;
  setIsOpen: Function;
  addNewNote: (note: INote) => void;
  clearNotes: () => void;
  removeNote: (noteId: number) => void;
  setNotes: Function;
}

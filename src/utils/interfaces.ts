export interface INote {
  name: string;
  desc: string;
  date: Date;
  id: number;
}

export interface IContext { //требования к обьекту констекста
  notes: Array<INote>;//массив должен содержать только объект/ы типа INote, это аналогично INote[]
  isOpen: boolean;
  setIsOpen: Function;
  addNewNote: (note: INote) => void;
  clearNotes: () => void;
  removeNote: (noteId: number) => void;
  setNotes: Function;
}

import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Context } from "../../context/MainContext";
import { IContext } from "../../utils/interfaces";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

interface IProps {
  children?: React.ReactNode; //необязательный параметр
}

const Layout = ({ children }: IProps) => {
  const { notes, setNotes } = useContext<IContext>(Context);
  const getNotesFromStorage = () => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      setNotes(JSON.parse(notes));
    } else {
      return;
    }
  };

  const drawerWidth = 300;

  useEffect(() => { //при componentDidMount вызовет  getNotesFromStorage();
    getNotesFromStorage();
  }, []); // componentDidUpdate, если задано значение в массиве
          // componentWillUnmount = useEffect(() => { return () => {/тут моя функция, что при componentWillUnmount выполнится /} })
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={`calc(100% - ${drawerWidth})`}
      role="none"
    >
      <Navbar />
      <main>
        <Box display="flex" flexDirection="row" justifyContent="flex-end" role="none">
          <Sidebar notes={notes} />
          {children}
        </Box>
      </main>
    </Box>
  );
};

export default Layout;

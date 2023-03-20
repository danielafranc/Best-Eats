import React, {useState, createContext} from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Screen } from "../components/Screen";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{...open, ...props}}>
        {props.children}
    </ModalContext.Provider>
  );
}
export{ 

    ModalProvider
}
export default ModalContext

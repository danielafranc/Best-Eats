import React, {useState, createContext} from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Screen } from "../components/Screen";

export const ModalContext = createContext();

const ModalProvider = ({children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={setIsModalOpen}>
        {children}
        <div>
        <h1>Custom modal component</h1>
        <h2>Example three</h2>

        <Screen />

        <button onClick={() => setIsModalOpen(true)}>
          OPEN MODAL FROM ROOT
        </button>

        {isModalOpen && (
          <div>
            <div>
              <p>
                It's a modal{" "}
                <span role="img" aria-label="tada">
                  🎉
                </span>
              </p>
              <button onClick={() => setIsModalOpen(false)}>CLOSE MODAL</button>
            </div>
          </div>
        )}
      </div>
    </ModalContext.Provider>
  );
}
export{ 

    ModalProvider
}
export default ModalContext

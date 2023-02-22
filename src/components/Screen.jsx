import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../context/ModalContext";

export function Screen() {
  return (
    <Section>
      <p>What if we want to access the modal from this nested screen?</p>
      <AnotherNestedScreen />
    </Section>
  );
}

export function AnotherNestedScreen() {
  const onButtonClick = useContext(ModalContext);

  return (
    <div>
      <button onClick={onButtonClick}>
        OPEN MODAL FROM THE SUPER NESTED SCREEN
      </button>
    </div>
  );
}

const Section = styled.section`
  border: 1px solid gray;
  padding: 20px;
  margin: 20px 0;
`;

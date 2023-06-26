import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 40px;
  border: 2px solid #494949eb;
  color: #494949eb;
  border-radius: 3px;
  font-weight: 600;
  letter-spacing: 0.2px;
  background-color: #fafafa;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #494949eb;
    color: white;
  }
`;

const ButtonDefault = ({ nomeBtn, func }) => {
  return (
    <>
      <Button onClick={func}>{nomeBtn}</Button>
    </>
  );
};

export default ButtonDefault;

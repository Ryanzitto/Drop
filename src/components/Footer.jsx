import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: white;
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 100px;
  align-self: flex-end;
  border-top: 1px solid #eeeeee;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: 600px;
  }
  @media screen and (min-width: 1500px) {
    margin-top: 150px;
  }
`;

const DropContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-left: 50px;
  color: #222222eb;
`;
const DROP = styled.h1`
  font-size: 100px;
  letter-spacing: 20px;
`;

const Footer = ({ primary }) => {
  return (
    <Container $primary={primary}>
      <DropContainer>
        <DROP>DROP</DROP>
      </DropContainer>
    </Container>
  );
};

export default Footer;

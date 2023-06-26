import React from "react";
import styled from "styled-components";

const ContainerGeral = styled.div`
  background-image: url("/img/5593055.jpg");
  background-size: 1000px;
  background-position: 500px;
  height: 300px;
  width: 100%;
  margin-top: 100px;
`;
const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-end;
  border-top: 1px solid #eeeeee;
  background: linear-gradient(to right, #a840c2, 80%, #d751f8b9);

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
`;
const DROP = styled.h1`
  font-size: 100px;
  letter-spacing: 20px;
  color: #ffffffeb;
  cursor: default;
`;

const Footer = ({ primary }) => {
  return (
    <ContainerGeral>
      <Container $primary={primary}>
        <DropContainer>
          <DROP>DROP</DROP>
        </DropContainer>
      </Container>
    </ContainerGeral>
  );
};

export default Footer;

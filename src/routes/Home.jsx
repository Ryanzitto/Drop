import React from "react";
import styled from "styled-components";
import Produto from "./Produto";
import TelaCadastro from "./CadastroLogin";

const ContainerGeral = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Nav = styled.div`
  width: 20vw;
  height: 100vh;
  position: relative;

  @media only screen and (max-width: 1000px) {
    width: 0;
    height: 0;
  }
`;
const Body = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    width: 100vw;
  }
`;
const FooterContainer = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <ContainerGeral>
      <Body>
        <Produto />
      </Body>
    </ContainerGeral>
  );
};

export default Home;

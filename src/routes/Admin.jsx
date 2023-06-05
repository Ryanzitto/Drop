import styled from "styled-components";
import React from "react";
import { useState } from "react";
import Create from "../components/Admin-components/Create";
import Update from "../components/Admin-components/Update";
import Delete from "../components/Admin-components/Delete";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
const ContainerPai = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  @keyframes animationMoveImg {
    to {
      transform: translateY(5px);
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ContainerGeral = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #e2e2e2;
`;
const Titulo = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #be96c8;
`;
const ActionsContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;
const ButtonAction = styled.button`
  width: 75px;
  height: 25px;
  border: none;
  background-color: #737373;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
`;
const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
const ContainerErro = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MensagemErro = styled.p`
  font-size: 20px;
  width: 500px;
  text-align: center;
  color: #be96c8;
  margin-bottom: 20px;
`;
const FooterContainer = styled.div`
  width: 100%;
`;
const ErrorBtn = styled.button`
  width: 150px;
  height: 40px;
  border: 2px solid #be96c8;
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 0.2px;
  background-color: #fafafa;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    animation: animationBtn 2s ease both;
    @keyframes animationBtn {
      to {
        background-color: #a840c2;
        color: white;
        border: none;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
  }
`;

const actionStyle = {
  backgroundColor: "#d36ad6",
  animation: "animationMoveImg 1s ease alternate infinite",
};
const AdminTela = () => {
  const navigate = useNavigate();

  const { user } = useSelector((rootReducer) => rootReducer.userReducer);

  const [qualAction, setQualAction] = useState("create");

  const redirecionaUser = () => {
    navigate("/");
  };
  return (
    <ContainerPai>
      {user != [] ? (
        <ContainerGeral>
          <Header>
            <Titulo>ADMIN AREA</Titulo>
          </Header>
          <ActionsContainer>
            <ButtonAction
              style={qualAction === "create" ? actionStyle : null}
              onClick={() => {
                setQualAction("create");
              }}
            >
              CREATE
            </ButtonAction>
            <ButtonAction
              style={qualAction === "update" ? actionStyle : null}
              onClick={() => {
                setQualAction("update");
              }}
            >
              UPDATE
            </ButtonAction>
            <ButtonAction
              style={qualAction === "delete" ? actionStyle : null}
              onClick={() => {
                setQualAction("delete");
              }}
            >
              DELETE
            </ButtonAction>
          </ActionsContainer>
          <Body>
            {qualAction === "create" ? <Create /> : null}
            {qualAction === "update" ? <Update /> : null}
            {qualAction === "delete" ? <Delete /> : null}
          </Body>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </ContainerGeral>
      ) : (
        <ContainerErro>
          <MensagemErro>
            Algo inesperado aconteceu, clique no botão abaixo para ser
            redirecionado ao site.
          </MensagemErro>
          <ErrorBtn onClick={redirecionaUser}>VOLTAR</ErrorBtn>
        </ContainerErro>
      )}
    </ContainerPai>
  );
};

export default AdminTela;

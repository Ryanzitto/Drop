import styled from "styled-components";
import React from "react";
import { useState } from "react";
import Create from "../components/Admin-components/Create";
import Update from "../components/Admin-components/Update";
import Delete from "../components/Admin-components/Delete";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { deslogaUsuario, mudaForm } from "../redux/user/actions";
import GetOrder from "../components/Admin-components/ListOrder";
import CancelOrder from "../components/Admin-components/CancelOrder";
import ButtonDefault from "../components/ButtonDefault";

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
  height: 1000px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(white 40%, #ffffffef);
`;

const Header = styled.div`
  background-image: url("/img/5593055.jpg");
  background-size: 1000px;
  background-position: 500px;
`;
const HeaderContainer = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #a840c2, 80%, #d751f8b9);
`;
const Titulo = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: white;
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
  width: 120px;
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
  background: linear-gradient(white 30%, #ffffffef 100%);
`;
const MensagemErro = styled.p`
  font-size: 20px;
  width: 500px;
  text-align: center;
  color: #494949eb;
  font-weight: 600;
  margin-bottom: 20px;
`;
const FooterContainer = styled.div`
  width: 100%;
`;

const actionStyle = {
  backgroundColor: "#d36ad6",
  animation: "animationMoveImg 1s ease alternate infinite",
};
const AdminTela = () => {
  const navigate = useNavigate();

  const { tokens } = useSelector((rootReducer) => rootReducer.userReducer);

  const [qualAction, setQualAction] = useState("create");

  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(deslogaUsuario());
      dispatch(mudaForm("Login"));
    }, 600000);
  }, []);
  const redirecionaUser = () => {
    navigate("/CadastroLogin");
  };
  return (
    <ContainerPai>
      {tokens?.access_token != null ? (
        <ContainerGeral>
          <Header>
            <HeaderContainer>
              <Titulo>ADMIN AREA</Titulo>
            </HeaderContainer>
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
            <ButtonAction
              style={qualAction === "List Order" ? actionStyle : null}
              onClick={() => {
                setQualAction("List Order");
              }}
            >
              LIST ORDER
            </ButtonAction>
            <ButtonAction
              style={qualAction === "Cancel order" ? actionStyle : null}
              onClick={() => {
                setQualAction("Cancel order");
              }}
            >
              CANCEL ORDER
            </ButtonAction>
          </ActionsContainer>
          <Body>
            {qualAction === "create" ? <Create /> : null}
            {qualAction === "update" ? <Update /> : null}
            {qualAction === "delete" ? <Delete /> : null}
            {qualAction === "List Order" ? <GetOrder /> : null}
            {qualAction === "Cancel order" ? <CancelOrder /> : null}
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
          <ButtonDefault nomeBtn={"VOLTAR"} func={redirecionaUser} />
        </ContainerErro>
      )}
    </ContainerPai>
  );
};

export default AdminTela;

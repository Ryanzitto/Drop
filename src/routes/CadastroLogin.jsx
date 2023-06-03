import styled from "styled-components";
import RegistroForm from "../components/RegisterAndLogin-components/Cadastro";
import LoginForm from "../components/RegisterAndLogin-components/Login";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { mudaForm } from "../redux/user/actions";

const ContainerPai = styled.div`
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
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ContainerGeral = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Titulo = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #be96c8;
`;

const DIV = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const Mensagem = styled.p`
  font-size: 12px;
`;
const Login = styled.p`
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
`;

const TelaCadastro = () => {
  const { qualForm } = useSelector((rootReducer) => rootReducer.userReducer);

  const dispatch = useDispatch();

  const mudaPraLogin = () => {
    dispatch(mudaForm("Login"));
  };
  const mudaPraCadastro = () => {
    dispatch(mudaForm("Cadastro"));
  };

  return (
    <ContainerPai>
      <ContainerGeral>
        <Header>
          <Titulo>CADASTRO</Titulo>
          {qualForm === "Cadastro" ? (
            <DIV>
              <Mensagem>Já possui uma conta? faça</Mensagem>
              <Login onClick={mudaPraLogin}>LOGIN</Login>
            </DIV>
          ) : null}
          {qualForm === "Login" ? (
            <DIV>
              <Mensagem>Não possui uma conta? faça</Mensagem>
              <Login onClick={mudaPraCadastro}>CADASTRO</Login>
            </DIV>
          ) : null}
        </Header>
        {qualForm === "Cadastro" ? <RegistroForm /> : null}
        {qualForm === "Login" ? <LoginForm /> : null}
      </ContainerGeral>
    </ContainerPai>
  );
};

export default TelaCadastro;

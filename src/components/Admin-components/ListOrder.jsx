import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import ListaPedidos from "./ListaPedidos";
import ButtonDefault from "../ButtonDefault";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`;

const Error = styled.p`
  width: 65%;
  color: red;
  margin-top: 10px;
  text-align: center;
`;
const Status = styled.p`
  margin-top: 5px;
  font-size: 20px;
  background-color: red;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 3px;
  color: white;
`;
const ButtonContainer = styled.div`
  width: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
  margin-top: 20px;
`;

const status200 = {
  backgroundColor: "#1afa1a",
};
const sucesso = {
  color: "#1afa1a",
};

const SectionImput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #494949eb;
`;

const Imput = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`;
const GetOrder = () => {
  const [lista, setLista] = useState("");

  const [status, setStatus] = useState(null);

  const [offset, setOffset] = useState(null);

  const [limit, setLimit] = useState(null);

  const [erro, setErro] = useState(null);

  const { tokens } = useSelector((rootReducer) => rootReducer.userReducer);

  const buscaPedidos = () => {
    const url_dev = "http://168.119.50.201:3001";
    axios
      .get(`${url_dev}/admin/order?offset=${offset}&limit=${limit}`, {
        data: {
          offset: offset,
          limit: limit,
        },
        headers: {
          "Auth-Token": tokens.access_token,
        },
      })
      .then(
        (response) => {
          console.log(response);
          setLista(response.data.data);
          setStatus(response.status);
          setErro("SUCESSO!");
        },
        (error) => {
          console.log(error);
          setStatus(error.response.status);
          setErro(error.response.data.errors[0]);
        }
      );
  };

  return (
    <Container>
      <ButtonContainer>
        <SectionImput onChange={(e) => setOffset(e.target.value)}>
          <Label>OFFSET:</Label>
          <Imput />
        </SectionImput>
        <SectionImput onChange={(e) => setLimit(e.target.value)}>
          <Label>LIMIT:</Label>
          <Imput />
        </SectionImput>
        <ButtonDefault func={buscaPedidos} nomeBtn={"LISTAR PEDIDOS"} />
        {status != null ? (
          <Status style={status === 200 ? status200 : null}>{status}</Status>
        ) : null}
        {erro != null ? (
          <Error style={erro === "SUCESSO!" ? sucesso : null}>{erro}</Error>
        ) : null}
      </ButtonContainer>

      {lista != "" && <ListaPedidos lista={lista} />}
    </Container>
  );
};

export default GetOrder;

import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import Lista from "./Lista";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`;

const FormContainer = styled.form`
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
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #be96c8;
`;

const Confirma = styled.button`
  width: 250px;
  height: 40px;
  border: 2px solid #be96c8;
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 0.2px;
  background-color: #fafafa;
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

const SectionImput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const ContainerBtn = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
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

const status200 = {
  backgroundColor: "#1afa1a",
};
const sucesso = {
  color: "#1afa1a",
};
const CancelOrder = () => {
  const [lista, setLista] = useState("");

  const [status, setStatus] = useState(null);

  const [erro, setErro] = useState(null);

  const [id, setId] = useState();

  const { tokens } = useSelector((rootReducer) => rootReducer.userReducer);

  const cancelaPedido = () => {
    setLista(null);
    const idFormatado = Number(id);
    const url_dev = "http://168.119.50.201:3001";
    axios
      .put(
        `${url_dev}/admin/cancel-order/${idFormatado}`,
        {
          data: {
            id: `${idFormatado}`,
          },
        },
        {
          headers: {
            "Auth-Token": tokens.access_token,
          },
        }
      )
      .then(
        (response) => {
          console.log(response);
          atualizaLista();
          setStatus(response.status);
          setErro("SUCESSO!");
        },
        (error) => {
          console.log(error);
          atualizaLista();
          setStatus(error.response.status);
        }
      );
  };

  const atualizaLista = () => {
    const url_dev = "http://168.119.50.201:3001";
    axios.get(`${url_dev}/public/product`).then(
      (response) => {
        setLista(response.data.data);
        console.log(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    atualizaLista();
  }, []);
  return (
    <Container>
      <FormContainer>
        <SectionImput onChange={(e) => setId(e.target.value)}>
          <Label>ID do pedido:</Label>
          <Imput type="text" />
        </SectionImput>
        <ContainerBtn>
          <Confirma onClick={cancelaPedido}>CANCEL ORDER</Confirma>
        </ContainerBtn>
        {status != null ? (
          <Status style={status === 200 ? status200 : null}>{status}</Status>
        ) : null}
        {erro != null ? (
          <Error style={erro === "SUCESSO!" ? sucesso : null}>{erro}</Error>
        ) : null}
      </FormContainer>
      {lista != "" && <Lista lista={lista} />}
    </Container>
  );
};

export default CancelOrder;

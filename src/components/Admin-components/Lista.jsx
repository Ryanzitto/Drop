import styled from "styled-components";
import { useAxios } from "../../hooks/useAxios";
import { useEffect, useState } from "react";
const ContainerDisplay = styled.div`
  width: 400px;
  height: 500px;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
  border-top-right-radius: 0px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  word-wrap: break-word;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
`;
const Resposta = styled.p``;
const ContainerLista = styled.div`
  width: 80%;
  background-color: #d36ad6;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  box-shadow: 0px 2px 5px #a1a1a1;
  letter-spacing: 0.5px;
`;
const DisplayHeader = styled.div`
  background-color: #d36ad6;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const DisplayTitulo = styled.h1`
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Propriedade = styled.div`
  gap: 10px;
  display: flex;
`;
const Label2 = styled.label`
  font-weight: 600;
`;
const Valor = styled.p`
  width: 80%;
`;
const Status = styled.button`
  width: 75px;
  height: 25px;
  border: none;
  background-color: #ff2424;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 10px;
`;
const Error = styled.p`
  width: 65%;
  color: red;
  margin-top: 10px;
  text-align: center;
`;
const ContainerLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const status200 = {
  backgroundColor: "#1afa1a",
};

const Lista = ({ lista }) => {
  return (
    <ContainerDisplay>
      {lista != null && (
        <>
          <DisplayHeader>
            <DisplayTitulo>LISTA ATUALIZADA</DisplayTitulo>
          </DisplayHeader>
          {lista?.map((item) => (
            <ContainerLista key={item.id}>
              <Propriedade>
                <Label2>ID: </Label2>
                <Valor>{item.id}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>Nome: </Label2>
                <Valor>{item.name}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>Desc: </Label2>
                <Valor>{item.description}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>Preço: </Label2>
                <Valor>{item.price}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>Url: </Label2>
                <Valor>{item.image_url}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>Category: </Label2>
                <Valor>{item.category_id}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>Fornecedor: </Label2>
                <Valor>{item.suplier_url}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>Active: </Label2>
                <Valor>{item.active === true ? "true" : "false"} </Valor>
              </Propriedade>
            </ContainerLista>
          ))}
        </>
      )}
      {lista === null && (
        <ContainerLoading>
          <h1>CARREGANDO...</h1>
        </ContainerLoading>
      )}
    </ContainerDisplay>
  );
};

export default Lista;

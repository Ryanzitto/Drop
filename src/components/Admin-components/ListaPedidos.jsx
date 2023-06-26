import styled from "styled-components";

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

const ContainerLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: #a840c2;
  border-radius: 50%;
  content: "";
  height: 80px;
  top: 10%;
  left: 10%;
  transform: translate3d(-50%, -50%, 0);
  width: 80px;
  will-change: transform;
  margin-left: 80px;
  margin-top: 50px;
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
`;

const ListaPedidos = ({ lista }) => {
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
                <Label2>FRETE: </Label2>
                <Valor>{item.freight}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>HASH: </Label2>
                <Valor>{item.hash}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>ID: </Label2>
                <Valor>{item.id}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2 style={{ width: "150px" }}>PRODUCT ID: </Label2>
                <Valor>{item.product_id}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>QUANTITY: </Label2>
                <Valor>{item.quantity}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2>TOTAL: </Label2>
                <Valor>{item.total}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2 style={{ width: "100px" }}>USER ID: </Label2>
                <Valor>{item.address.user_id}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2 style={{ width: "150px" }}>USER email: </Label2>
                <Valor>{item.address.user.email}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2 style={{ width: "150px" }}>USER state: </Label2>
                <Valor>{item.address.state}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2 style={{ width: "150px" }}>USER city: </Label2>
                <Valor>{item.address.city}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2 style={{ width: "150px" }}>USER city: </Label2>
                <Valor>{item.address.street}</Valor>
              </Propriedade>
              <Propriedade>
                <Label2 style={{ width: "150px" }}>STATUS: </Label2>
                <Valor>{item.order_status.description}</Valor>
              </Propriedade>
            </ContainerLista>
          ))}
        </>
      )}
      {lista === null && (
        <ContainerLoading>
          <Spinner></Spinner>
        </ContainerLoading>
      )}
    </ContainerDisplay>
  );
};

export default ListaPedidos;

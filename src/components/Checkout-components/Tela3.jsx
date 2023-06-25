import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeStep } from "../../redux/form/actions";
import axios from "axios";
import { clearCart, salvaInfoPedido } from "../../redux/cart/actions";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #dddddd;
  animation: entrada 1s ease;

  @keyframes entrada {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 30px;
`;
const VoltarContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
`;
const TituloContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Titulo = styled.div`
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 20px;
  color: #575555eb;
  margin-right: 100px;
`;
const Body = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProdutoContainer = styled.div`
  width: 60%;
  height: 200px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  justify-content: space-around;
`;
const ImagemProduto = styled.img`
  width: 100px;
  height: 100px;
`;
const InfosProduto = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const NomeProduto = styled.p`
  font-weight: 500;
  color: #be96c8;
`;
const Preço = styled.p`
  font-weight: 500;
  color: #be96c8;
`;
const Unidades = styled.p`
  font-weight: 500;
  color: #be96c8;
`;
const IconeDescarte = styled.img`
  width: 25px;
  padding-left: 50px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const FooterProduto = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`;
const Total = styled.p`
  color: #be96c8;
  font-size: 12px;
  font-weight: 600;
`;
const PreçoTotal = styled.p`
  color: #be96c8;
  font-size: 14px;
  font-weight: 600;
`;

const Confirmar = styled.button`
  width: 200px;
  height: 40px;
  border: 2px solid #a840c2;
  color: #a840c2;
  font-weight: 600;
  letter-spacing: 0.8px;
  margin-bottom: 50px;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
  border-radius: 3px;
  transition: 1s;
  &:hover {
    background-color: #a840c2;
    color: white;
  }
`;
const Voltar = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #a840c2;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 1px;
  transition: 1s;
  &:hover {
    opacity: 0.7;
  }
`;

const Tela3 = () => {
  const { dataEntrega } = useSelector((rootReducer) => rootReducer.formReducer);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  console.log(dataEntrega);
  console.log(products);

  const dispatch = useDispatch();

  const voltar = () => {
    dispatch(changeStep(2));
  };

  const criaPedido = () => {
    const data = {
      name: dataEntrega.nome,
      last_name: dataEntrega.sobrenome,
      email: dataEntrega.email,
      product_id: products[0].id,
      quantity: products[0].quantity,
      freight: 100,
      personal_id: dataEntrega.cpf,
      zip_code: dataEntrega.cep,
      street: dataEntrega.endereço,
      number: dataEntrega.numero,
      complement: dataEntrega.complemento,
      neighborhood: dataEntrega.bairro,
      city: dataEntrega.cidade,
      state: dataEntrega.estado,
      reference: dataEntrega.referencia,
    };
    const url_dev = "http://168.119.50.201:3001";
    axios.post(`${url_dev}/public/order`, data).then(
      (response) => {
        console.log(response);
        dispatch(salvaInfoPedido(products));
        dispatch(clearCart());
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Container>
      <Header>
        <VoltarContainer>
          <Voltar onClick={voltar}>VOLTAR</Voltar>
        </VoltarContainer>
        <TituloContainer>
          <Titulo>PAGAMENTO</Titulo>
        </TituloContainer>
      </Header>
      <Body>
        <h1 style={{ marginBottom: "10px" }}>AQUI FICA O CHECKOUT</h1>
        <Confirmar onClick={criaPedido}>simula pagamento!</Confirmar>
      </Body>
    </Container>
  );
};

export default Tela3;

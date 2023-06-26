import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeStep } from "../../redux/form/actions";
import { clearCart } from "../../redux/cart/actions";
import ButtonDefault from "../ButtonDefault";
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
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
const VoltarContainer = styled.div`
  width: 150px;
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
  margin-right: 150px;
  @media screen and (max-width: 850px) {
    margin: 0;
    margin-top: 20px;
  }
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
  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 20px;
  }
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
  @media screen and (max-width: 850px) {
    width: fit-content;
    height: fit-content;
    border: 1px solid #be96c8;
    border-radius: 5px;
    padding: 8px;
    gap: 10px;
  }
`;
const NomeProduto = styled.p`
  font-weight: 500;
  color: #575555eb;
  font-weight: 800;
`;
const Preço = styled.p`
  font-weight: 500;
  color: #575555eb;
  font-weight: 800;
`;
const Unidades = styled.p`
  font-weight: 500;
  color: #575555eb;
  font-weight: 800;
`;
const IconeDescarte = styled.img`
  width: 25px;
  padding-left: 50px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 850px) {
    padding: 0;
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
  color: #575555eb;
  font-size: 12px;
  font-weight: 600;
`;
const PreçoTotal = styled.p`
  color: #575555eb;
  font-size: 14px;
  font-weight: 600;
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
  margin-left: 50px;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 850px) {
    margin: 0;
  }
`;

const Tela2 = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const dispatch = useDispatch();

  const voltar = () => {
    dispatch(changeStep(1));
  };
  const handleDescarte = () => {
    dispatch(clearCart());
    dispatch(changeStep(1));
  };
  const confirmaRevisao = () => {
    dispatch(changeStep(3));
  };

  return (
    <Container>
      <Header>
        <VoltarContainer>
          <Voltar onClick={voltar}>VOLTAR</Voltar>
        </VoltarContainer>
        <TituloContainer>
          <Titulo>REVISE SEU PEDIDO</Titulo>
        </TituloContainer>
      </Header>
      <Body>
        <ProdutoContainer>
          <ImagemProduto src={products[0]?.image_url} />
          <InfosProduto>
            <NomeProduto>{products[0]?.name}</NomeProduto>
            <Preço>{products[0]?.price} R$</Preço>
            <Unidades>{products[0]?.quantity} UNIDADES</Unidades>
          </InfosProduto>
          <Link to="/">
            <IconeDescarte onClick={handleDescarte} src="img/trash.png" />
          </Link>
        </ProdutoContainer>
        <FooterProduto>
          <Total>TOTAL</Total>
          <PreçoTotal>
            {products[0]?.price * products[0]?.quantity} R$
          </PreçoTotal>
          <ButtonDefault func={confirmaRevisao} nomeBtn={"CONFIRMAR"} />
        </FooterProduto>
      </Body>
    </Container>
  );
};

export default Tela2;

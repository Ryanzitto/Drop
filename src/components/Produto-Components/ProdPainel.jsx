import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../redux/cart/actions";
import Popup from "./Popup";

const PainelContainer = styled.div`
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  @media screen and (max-width: 1250px) {
    margin-left: 0px;
  }
  position: relative;
`;
const HeaderPainel = styled.div`
  background-image: url("/img/5593055.jpg");
  background-size: 500px;
  width: 100%;
  height: 75px;
  border-radius: 5px;
  margin-top: 15px;
  @media screen and (max-width: 420px) {
    width: 90%;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  background: #b93fffc5;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(10.3px);
  border: 1px solid rgba(114, 114, 114, 0.18);
  justify-content: center;
  align-items: center;
`;

const Info = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-weight: 800;
  &:hover {
    opacity: 0.7;
  }

  letter-spacing: 0.5px;
  cursor: default;
`;
const PreçoProduto = styled.h3`
  font-size: 36px;
  color: #ffffff;
  padding: 2px;
  opacity: 0.9;
  cursor: default;
  font-weight: 800;
  transition: 1s;
  &:hover {
    color: #222222eb;
  }
  @media screen and (max-width: 450px) {
    font-size: 28px;
  }
`;
const PreçoSemDesconto = styled.h3`
  font-size: 20px;
  color: #3636366f;
  padding: 2px;
  opacity: 0.7;
  text-decoration: line-through;
  text-align: center;
  cursor: default;
  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;
const AvaliacaoTitulo = styled.h3`
  font-size: 12px;
  color: #ffffff;
  padding: 2px;
  opacity: 0.7;
  text-align: center;
  cursor: default;
`;
const EstrelasContainer = styled.div`
  width: 100%;
  height: 26px;
  margin-top: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 450px) {
    height: 30px;
    margin-top: 5px;
  }
`;
const Estrela = styled.img`
  width: 18px;
  height: 18px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 450px) {
    width: 20px;
    height: 20px;
  }
`;

const BodyPainel = styled.div`
  background-image: url("/img/5593055.jpg");
  background-size: 500px;
  width: 100%;
  height: 300px;
  display: flex;
  border-radius: 20px;
  margin-top: 30px;
  gap: 20px;
  @media screen and (max-width: 420px) {
    width: 90%;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  width: 100%;
  height: 300px;
  background: #b93fffc5;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(10.3px);
  border: 1px solid rgba(114, 114, 114, 0.18);
  gap: 20px;
`;
const SectionSuperior = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  background-color: #cecece76;
  padding: 10px;
  border-radius: 8px;
`;
const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
`;
const ButtonAdcionar = styled.button`
  width: 150px;
  height: 50px;
  background-color: #222222eb;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.8px;
  color: white;
  border: none;
  border-radius: 3px;
  opacity: 1;
  transition: 1s;
  &:hover {
    border: none;
    color: #222222eb;
    background-color: #cecece76;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-weight: 800;
  }
`;

const SectionConfirma = styled.div`
  display: flex;
`;
const Display = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #222222eb;
  font-weight: 700;
`;
const Decremento = styled.button`
  background: none;
  border: none;
  width: 30px;
  font-size: 30px;
  cursor: pointer;
  font-weight: 700;
  color: #222222eb;
  &:hover {
    background-color: #ffffff1f;
  }
`;
const Incremento = styled.button`
  background: none;
  border: none;
  width: 30px;
  font-size: 30px;
  margin-right: 30px;
  cursor: pointer;
  font-weight: 700;
  color: #222222eb;
  &:hover {
    background-color: #ffffff1f;
  }
`;

const ProdPainel = ({ produtoAtual }) => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const [quantidade, setQuantidade] = useState(1);

  const dispatch = useDispatch();

  const handleClick = () => {
    produtoAtual.quantity = quantidade;
    dispatch(addProductToCart(produtoAtual));
  };
  const aumentaQuantidade = () => {
    setQuantidade((quantidade) => (quantidade += 1));
  };
  const diminuiQuantidade = () => {
    if (quantidade >= 2) {
      setQuantidade((quantidade) => quantidade - 1);
    }
  };

  return (
    <PainelContainer>
      <HeaderPainel>
        <HeaderDiv>
          <Info>
            {produtoAtual.name} - {produtoAtual.description}
          </Info>
        </HeaderDiv>
      </HeaderPainel>
      <BodyPainel>
        <Div>
          <SectionSuperior>
            <Section>
              <PreçoSemDesconto>{produtoAtual.price * 1.3} R$</PreçoSemDesconto>
              <PreçoProduto>{produtoAtual.price} R$</PreçoProduto>
            </Section>
            <Section>
              <AvaliacaoTitulo>Avaliação deste produto: 5</AvaliacaoTitulo>
              <EstrelasContainer>
                <Estrela src="/img/estrela.png" />
                <Estrela src="/img/estrela.png" />
                <Estrela src="/img/estrela.png" />
                <Estrela src="/img/estrela.png" />
                <Estrela src="/img/estrela.png" />
              </EstrelasContainer>
            </Section>
          </SectionSuperior>
          <SectionConfirma>
            <Decremento onClick={diminuiQuantidade}>-</Decremento>
            <Display>{quantidade}</Display>
            <Incremento onClick={aumentaQuantidade}>+</Incremento>
            <Link to="/Checkout">
              <ButtonAdcionar onClick={handleClick}>COMPRAR</ButtonAdcionar>
            </Link>
          </SectionConfirma>
        </Div>
      </BodyPainel>
      {products.length >= 1 ? <Popup /> : null}
    </PainelContainer>
  );
};

export default ProdPainel;

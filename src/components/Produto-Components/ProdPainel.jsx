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
  margin-left: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  @media screen and (max-width: 1250px) {
    margin-left: 0px;
  }
  position: relative;
`;
const HeaderPainel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  background-color: white;
  height: 75px;
  border-radius: 5px;
  flex-direction: column;
  gap: 5px;
  margin-top: 15px;
`;
const Info = styled.p`
  color: #797878;
  font-weight: 500;
  opacity: 0.7;
  letter-spacing: 0.5px;
  cursor: default;
  &:hover {
    opacity: 1;
  }
`;
const PreçoProduto = styled.h3`
  font-size: 36px;
  color: #a840c2;
  padding: 2px;
  opacity: 0.9;
  cursor: default;
`;
const PreçoSemDesconto = styled.h3`
  font-size: 20px;
  color: #525252;
  padding: 2px;
  opacity: 0.7;
  text-decoration: line-through;
  text-align: center;
  cursor: default;
`;
const AvaliacaoTitulo = styled.h3`
  font-size: 12px;
  color: #525252;
  padding: 2px;
  opacity: 0.7;
  text-align: center;
  cursor: default;
`;
const EstrelasContainer = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Estrela = styled.img`
  width: 22px;
  height: 22px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

const BodyPainel = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #dddddd;
  background-color: white;
  border-radius: 5px;
  margin-top: 30px;
  gap: 20px;
`;
const SectionSuperior = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
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
  border: 1px solid #222222eb;
  border-radius: 3px;
  animation: animationBtnBlackOut 1s both;
  @keyframes animationBtnBlackOut {
    from {
      background-color: #a840c2;
      border: none;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    to {
      background-color: #222222eb;
    }
  }
  &:hover {
    animation: animationBtnBlack 1s both;
    @keyframes animationBtnBlack {
      from {
        background-color: #222222eb;
      }
      to {
        background-color: #a840c2;
        border: none;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`;

const SectionCEP = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

const InputCEP = styled.input`
  width: 120px;
  height: 43px;
  border: 2px solid #5a5a5aeb;
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 2px;
  background-color: #fafafa;
  &:focus {
    outline: none;
  }
`;

const ButtonCEP = styled.button`
  width: 150px;
  height: 50px;
  background-color: #222222eb;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.8px;
  color: white;
  border: 1px solid #222222eb;
  border-radius: 2px;
  animation: animationBtnBlackOut 1s both;

  &:hover {
    animation: animationBtnBlack 1s both;
  }
`;

const FooterPainel = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  margin-top: 20px;
  gap: 3px;
`;

const tamanhoClicked = {
  backgroundColor: "#a840c2",
  color: "white",
  width: "37px",
  height: "37px",
  border: "transparent",
};

const Paragraph = styled.p`
  font-weight: 500;
  color: #222222eb;
  letter-spacing: 0.5px;
`;
const SectionConfirma = styled.div`
  display: flex;
`;
const Display = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #222222eb;
`;
const Decremento = styled.button`
  background: none;
  border: none;
  width: 30px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #eeebeb;
  }
`;
const Incremento = styled.button`
  background: none;
  border: none;
  width: 30px;
  font-size: 25px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    background-color: #eeebeb;
  }
`;
const TituloCEP = styled.p`
  color: #494949eb;
  font-size: 16px;
  font-weight: 600;
`;

const Cont = styled.div`
  width: 75%;
`;
const ContText = styled.p`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-align: center;
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
        <Info>
          {produtoAtual.name} - {produtoAtual.description}
        </Info>
      </HeaderPainel>
      <BodyPainel>
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
        <Cont>
          <ContText>
            "O mundo é grande e cabe nesta janela sobre o mar. O mar é grande e
            cabe na cama e no colchão de amar. O amor é grande e cabe no breve
            espaço de beijar"
          </ContText>
        </Cont>
      </BodyPainel>
      {products.length >= 1 ? <Popup /> : null}
    </PainelContainer>
  );
};

export default ProdPainel;

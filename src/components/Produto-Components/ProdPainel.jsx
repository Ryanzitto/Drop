import styled from "styled-components";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart, clearCart } from "../../redux/cart/actions";
import axios from "axios";
import { saveDataEntregaRef } from "../../redux/form/actions";
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
  box-shadow: 0px 2px 5px #e2e2e2;
  height: 75px;
  border-radius: 5px;
  flex-direction: column;
  gap: 5px;
  background-color: #fafafa;
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
  opacity: 0.7;
  cursor: default;
  &:hover {
    opacity: 1;
  }
`;
const PreçoSemDesconto = styled.h3`
  font-size: 36px;
  color: #7c7c7c;
  padding: 2px;
  opacity: 0.7;
  text-decoration: line-through;
  cursor: default;
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
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 5px;
  margin-top: 30px;
  gap: 20px;
  background-color: #fafafa;
`;
const Section = styled.div``;
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
  border-radius: 2px;
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
        <Section>
          {produtoAtual?.discount ? (
            <PreçoSemDesconto>{produtoAtual.price}</PreçoSemDesconto>
          ) : null}

          <PreçoProduto>{produtoAtual.price} R$</PreçoProduto>
        </Section>
        <SectionConfirma>
          <Decremento onClick={diminuiQuantidade}>-</Decremento>
          <Display>{quantidade}</Display>
          <Incremento onClick={aumentaQuantidade}>+</Incremento>
          <Link to="/Checkout">
            <ButtonAdcionar onClick={handleClick}>COMPRAR</ButtonAdcionar>
          </Link>
        </SectionConfirma>
      </BodyPainel>
      {products.length >= 1 ? <Popup /> : null}
    </PainelContainer>
  );
};

export default ProdPainel;

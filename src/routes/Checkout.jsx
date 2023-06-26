import styled from "styled-components";
import Tela1 from "../components/Checkout-components/Tela1";
import Tela2 from "../components/Checkout-components/Tela2";
import Tela3 from "../components/Checkout-components/Tela3";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ButtonDefault from "../components/ButtonDefault";

const ContainerGeral = styled.div`
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
const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: 1000px;
  background: linear-gradient(white 10%, #ffffffef 60%);

  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-image: url("/img/5593055.jpg");
  background-size: 1000px;
  background-position: 500px;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #a840c2, 80%, #d751f8b9);
`;

const HeaderTitulo = styled.h1`
  font-size: 40px;
  color: white;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const StepsContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`;
const Step = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  background-color: #e1dde2;
  border-radius: 50%;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;
const Seta = styled.p`
  font-size: 16px;
  color: #e1dde2;
`;
const FormContainer = styled.div`
  width: 60%;
  border-radius: 15px;
  margin-top: 20px;
`;
const FooterContainer = styled.div`
  width: 100%;
`;
const BodyError = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TituloError = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: #797878;
  cursor: default;
`;

const styleStep = {
  backgroundColor: "#B768CB",
};
const styleStepSeta = {
  color: "#B768CB",
};

const CheckOut = () => {
  const { stepAtual } = useSelector((rootReducer) => rootReducer.formReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  useEffect(() => {
    setQualTela(stepAtual);
  }, [stepAtual]);

  const [qualTela, setQualTela] = useState(stepAtual);

  const dispatch = useDispatch();
  return (
    <ContainerGeral>
      <Container>
        <Header>
          <HeaderContainer>
            <HeaderTitulo>CHECKOUT</HeaderTitulo>
          </HeaderContainer>
        </Header>
        {products.length >= 1 ? (
          <Body>
            <StepsContainer>
              <Step style={qualTela >= 1 ? styleStep : null}>1</Step>
              <Seta style={qualTela >= 2 ? styleStepSeta : null}>{`>`}</Seta>
              <Step style={qualTela >= 2 ? styleStep : null}>2</Step>
              <Seta style={qualTela >= 3 ? styleStepSeta : null}>{`>`}</Seta>
              <Step style={qualTela >= 3 ? styleStep : null}>3</Step>
            </StepsContainer>
            <FormContainer>
              {qualTela === 1 ? <Tela1 /> : null}
              {qualTela === 2 ? <Tela2 /> : null}
              {qualTela === 3 ? <Tela3 /> : null}
            </FormContainer>
          </Body>
        ) : (
          <BodyError>
            <TituloError>OOOOPS, ALGO ESTÁ ERRADO!</TituloError>
            <Link to="/">
              <ButtonDefault nomeBtn={"VOLTAR"} />
            </Link>
          </BodyError>
        )}
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </ContainerGeral>
  );
};

export default CheckOut;

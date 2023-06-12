import styled from "styled-components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
const ContainerPai = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  background-image: url("/img/BG-site.jpg");
  background-size: 1000px;
  @keyframes animationMoveImg {
    to {
      transform: translateY(5px);
    }
  }
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
const ContainerGeral = styled.div`
  width: 100vw;
  height: 1000px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(white 40%, #ffffffef);
`;

const Header = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #e2e2e2;
  background-color: white;
`;
const Titulo = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #be96c8;
`;
const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FooterContainer = styled.div`
  width: 100%;
`;
const HeaderBody = styled.div``;
const Container = styled.div`
  display: flex;
  width: 60%;
  height: 400px;
  align-items: center;
  justify-content: start;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  margin-top: 30px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImagemProduto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px #888888;
`;
const ButtonCancela = styled.button`
  width: 150px;
  height: 40px;
  border: 2px solid #be96c8;
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 0.2px;
  margin-bottom: 50px;
  background-color: white;
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

const Top = styled.div`
  display: flex;
  gap: 20px;
`;
const TopSection = styled.div`
  width: 180px;
  display: flex;
  height: 120px;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  background-color: #f0f0f0;
  box-shadow: 0px 2px 5px #979797;
`;
const TopHeader = styled.div`
  width: 100%;
  height: 30px;
  background-color: #c376d6;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubTitulo = styled.h4`
  font-size: 14px;
  letter-spacing: 1px;
  color: white;
`;
const TopSectionBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

const Bottom = styled.div`
  background-color: #f0f0f0;
  box-shadow: 0px 2px 5px #888888;
  border-radius: 10px;
`;
const HeaderBottom = styled.div`
  width: 100%;
  height: 30px;
  background-color: #c376d6;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomBody = styled.div`
  padding: 10px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 350px;
`;
const NomeProduto = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #383838;
  letter-spacing: 1px;
  margin-left: 30px;
  &:hover {
    color: #c376d6;
  }
`;
const DescProduto = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #383838;
  letter-spacing: 1px;
  margin-left: 30px;
  &:hover {
    color: #c376d6;
  }
`;
const Quantidade = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #383838;
  letter-spacing: 1px;
  margin-left: 30px;
  &:hover {
    color: #c376d6;
  }
`;
const Total = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #383838;
  letter-spacing: 1px;
  margin-left: 30px;
  &:hover {
    color: #c376d6;
  }
`;
const Section = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Label = styled.label`
  font-size: 10px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 1px;
  border-radius: 5px;
  background-color: #cbb1d1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const Valor = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #383838;
  letter-spacing: 0.5px;
`;
const Copy = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #383838;
  letter-spacing: 0.5px;
  padding-left: 15px;
  padding-right: 15px;
`;

const Pedidos = () => {
  const [data, setData] = useState();

  const { infoPedido } = useSelector((rootReducer) => rootReducer.userReducer);

  const { dataEntrega } = useSelector((rootReducer) => rootReducer.formReducer);

  const { pedidosConfirmados } = useSelector(
    (rootReducer) => rootReducer.cartReducer
  );

  const { tokens } = useSelector((rootReducer) => rootReducer.userReducer);

  console.log(dataEntrega);

  return (
    <ContainerPai>
      <ContainerGeral>
        <Header>
          <Titulo>PEDIDOS</Titulo>
        </Header>
        <Body>
          <HeaderBody></HeaderBody>
          <Container>
            <Left>
              <ImagemProduto src={pedidosConfirmados[0].image_url} />
              <ButtonCancela>CANCELAR PEDIDO</ButtonCancela>
            </Left>
            <Right>
              <Top>
                <TopSection>
                  <TopHeader>
                    <SubTitulo>PRODUTO</SubTitulo>
                  </TopHeader>
                  <TopSectionBody>
                    <NomeProduto>{pedidosConfirmados[0].name}</NomeProduto>
                    <Quantidade>
                      {pedidosConfirmados[0].quantity} Unidades
                    </Quantidade>
                    <Total>
                      {pedidosConfirmados[0].price}
                      R$ /UN
                    </Total>
                  </TopSectionBody>
                </TopSection>
                <TopSection>
                  <TopHeader>
                    <SubTitulo>DESCRIÇÃO</SubTitulo>
                  </TopHeader>
                  <TopSectionBody>
                    <Copy>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni molestiae vel sed corrupti debitis ist.
                    </Copy>
                  </TopSectionBody>
                </TopSection>
              </Top>
              <Bottom>
                <HeaderBottom>
                  <SubTitulo>DADOS DE ENTREGA</SubTitulo>
                </HeaderBottom>
                <BottomBody>
                  <Section>
                    <Label>FRETE</Label>
                    <Valor>56,23 R$</Valor>
                  </Section>
                  <Section>
                    <Label>ENDEREÇO</Label>
                    <Valor>
                      {dataEntrega.bairro}, {dataEntrega.endereço},
                      {dataEntrega.numero}
                    </Valor>
                  </Section>
                  <Section>
                    <Label>PESSOA</Label>
                    <Valor>{dataEntrega.nome}</Valor>
                  </Section>
                  <Section>
                    <Label>CEP</Label>
                    <Valor>{dataEntrega.cep}</Valor>
                  </Section>
                  <Section>
                    <Label>CÓDIGO DE RASTREAMENTO</Label>
                    <Valor>000000000</Valor>
                  </Section>
                </BottomBody>
              </Bottom>
            </Right>
          </Container>
        </Body>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </ContainerGeral>
    </ContainerPai>
  );
};

export default Pedidos;

import styled from "styled-components";
import Footer from "../components/Footer";
import HeaderProduto from "../components/Produto-Components/Header";
import ProdContainer from "../components/Produto-Components/ProdutoContainer";
import ProdPainel from "../components/Produto-Components/ProdPainel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const ContainerPai = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
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
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: linear-gradient(white 10%, #ffffffef 60%);
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    height: 1200px;
    align-items: center;
  }
  @media screen and (min-width: 1500px) {
    justify-content: center;
    gap: 100px;
  }
`;
const Menu = styled.div`
  position: absolute;
  margin-right: 1250px;
  margin-top: 20px;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1251px) and (max-width: 1350px) {
    justify-content: end;
  }
  @media screen and (max-width: 1250px) {
    margin: 0;
    margin-top: 100px;
  }
`;
const EntregaContainer = styled.div`
  background-color: white;
  width: 100px;
  height: 30px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  margin-left: 60px;
  @media screen and (max-width: 1250px) {
    margin: 0;
  }
`;

const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MidContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1500px) {
    width: 60%;
  }
`;
const DescSection = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  border-radius: 5px;
  padding: 50px;
  background-color: #fcfcfc;
  box-shadow: 3px 3px 5px #c2c2c2;
  border: 1px solid #e7e7e7;
`;

const DescricaoTitulo = styled.h4`
  width: 100%;
  font-size: 30px;
  letter-spacing: 1px;
  color: #494949eb;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: default;
  &:hover {
    animation: animaTexto 1s both;
  }
`;

const DescricaoProduto = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #494949eb;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SobreMarcaDesc = styled.div`
  width: 90%;
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 0.5px;
  margin-top: 100px;
  border-radius: 5px;
  padding: 50px;
  background-color: #fcfcfc;
  box-shadow: 3px 3px 5px #c2c2c2;
  border: 1px solid #e7e7e7;
`;

const SobreTitulo = styled.h4`
  width: 100%;
  font-size: 30px;
  letter-spacing: 1px;
  color: #494949eb;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: default;
  &:hover {
    animation: animaTexto 1s both;
  }
`;

const Sobre = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #494949eb;
`;
const Pedidos = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 800;
  color: #222222eb;

  cursor: pointer;
  &:hover {
    animation: animaTexto 1s both;
  }
`;

const Produto = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url_dev = "http://168.119.50.201:3001";
    axios.get(`${url_dev}/public/product`).then(
      (response) => {
        console.log(response.data.data);
        setData(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const navigate = useNavigate();

  const handleClickPedidos = () => {
    navigate("/Pedidos");
  };
  return (
    <ContainerPai>
      <ContainerGeral>
        {data != null ? <HeaderProduto produtoAtual={data[0]} /> : null}
        <Top>
          {data != null ? <ProdContainer produtoAtual={data[0]} /> : null}
          {data != null ? <ProdPainel produtoAtual={data[0]} /> : null}
          <Menu>
            <EntregaContainer>
              <Pedidos onClick={handleClickPedidos}>PEDIDOS</Pedidos>
            </EntregaContainer>
          </Menu>
        </Top>
        <Mid>
          <MidContainer>
            <DescSection>
              <DescricaoTitulo>DESCRIÇÃO</DescricaoTitulo>
              <DescricaoProduto>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                finibus placerat tempor. Phasellus semper, orci feugiat
                tincidunt gravida, nunc quam ullamcorper tortor, non consectetur
                neque mauris id diam. Vivamus tristique vestibulum eros ut
                dictum. Vivamus rutrum neque maximus augue consequat facilisis.
                Curabitur varius mauris ac arcu euismod semper. Nullam luctus
                vel dui ut cursus. In mattis, odio sed interdum maximus, leo
                dolor posuere erat, sit amet cursus turpis diam vitae ante.
              </DescricaoProduto>
            </DescSection>
            <SobreMarcaDesc>
              <SobreTitulo>SOBRE A DROP</SobreTitulo>
              <Sobre>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                finibus placerat tempor. Phasellus semper, orci feugiat
                tincidunt gravida, nunc quam ullamcorper tortor, non consectetur
                neque mauris id diam. Vivamus tristique vestibulum eros ut
                dictum. Vivamus rutrum neque maximus augue consequat facilisis.
                Curabitur varius mauris ac arcu euismod semper. Nullam luctus
                vel dui ut cursus. In mattis, odio sed interdum maximus, leo
                dolor posuere erat, sit amet cursus turpis diam vitae ante.
              </Sobre>
            </SobreMarcaDesc>
          </MidContainer>
        </Mid>
        <Bottom>
          <FooterContainer>
            <Footer primary={true} />
          </FooterContainer>
        </Bottom>
      </ContainerGeral>
    </ContainerPai>
  );
};

export default Produto;

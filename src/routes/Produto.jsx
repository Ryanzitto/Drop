import styled from "styled-components";
import Footer from "../components/Footer";
import HeaderProduto from "../components/Produto-Components/Header";
import ProdContainer from "../components/Produto-Components/ProdutoContainer";
import ProdPainel from "../components/Produto-Components/ProdPainel";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";
const ContainerPai = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: url("/img/BG-site.jpg");
  background-size: 1000px;
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
  background-color: white;
  border: 1px solid #dddddd;
`;

const DescricaoTitulo = styled.h4`
  width: 100%;
  font-size: 30px;
  letter-spacing: 1px;
  color: #494949eb;
  padding-top: 5px;
  padding-bottom: 5px;
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
  background-color: white;
  border: 1px solid #dddddd;
`;

const SobreTitulo = styled.h4`
  width: 100%;
  font-size: 30px;
  letter-spacing: 1px;
  color: #494949eb;
  padding-top: 5px;
  padding-bottom: 5px;
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

const Produto = () => {
  const [data, setData] = useState(null);

  const { response, loading, error, fetchData } = useAxios();

  useEffect(() => {
    const axiosParams = {
      method: "GET",
      url: "/public/product",
    };
    fetchData(axiosParams);
  }, []);

  console.log(response);

  return (
    <ContainerPai>
      <ContainerGeral>
        {loading === false && <HeaderProduto produtoAtual={response.data[0]} />}
        <Top>
          {loading === false && (
            <ProdContainer produtoAtual={response.data[0]} />
          )}
          {loading === false && <ProdPainel produtoAtual={response.data[0]} />}
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

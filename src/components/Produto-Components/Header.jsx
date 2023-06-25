import styled from "styled-components";

const ContainerGeral = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-image: url("/img/5593055.jpg");
  background-size: 1000px;
  background-position: 500px;
`;
const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  gap: 50px;
  background: linear-gradient(to right, #a840c2, 80%, #d751f8b9);
  @media screen and (max-width: 700px) {
    justify-content: center;
    gap: 5px;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 100px;
  align-items: center;
  @media screen and (max-width: 700px) {
    justify-content: center;
    margin: 0;
    width: 50%;
  }
`;
const Info = styled.div`
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`;
const Line = styled.div`
  width: 1px;
  height: 80px;
  background-color: #dddddd;
`;
const Logo = styled.h1`
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 10px;
  color: white;
  cursor: default;
  position: relative;
  ::after {
    content: "DROP";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px white;
  }

  &:hover {
    ::after {
      animation: moveText 2s ease both;
      background: linear-gradient(to right, #a840c2, #a840c2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;
const TituloProduto = styled.h1`
  font-size: 26px;
  color: white;
  font-weight: 800;
  letter-spacing: 2px;
  cursor: default;
  &:hover {
    opacity: 0.7;
  }
`;
const CaminhoContainer = styled.div`
  display: flex;
`;
const Caminho = styled.p`
  color: #fffffff8;
  margin-top: 10px;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const HeaderProduto = ({ produtoAtual }) => {
  return (
    <ContainerGeral>
      <Header>
        <LogoContainer>
          <Logo>DROP</Logo>
        </LogoContainer>
        <Line></Line>
        <Info>
          <TituloProduto>{`${produtoAtual.name}`}</TituloProduto>
          <CaminhoContainer>
            <Caminho>{`${produtoAtual.description}`}</Caminho>
          </CaminhoContainer>
        </Info>
      </Header>
    </ContainerGeral>
  );
};

export default HeaderProduto;

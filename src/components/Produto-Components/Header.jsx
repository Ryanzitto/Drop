import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #e2e2e2;
`;
const TituloProduto = styled.h1`
  font-size: 26px;
  color: #494949eb;
  font-weight: 800;
  letter-spacing: 2px;
  &:hover {
    animation: animaTexto 1s both;
    @keyframes animaTexto {
      to {
        color: #a840c2;
      }
    }
  }
`;
const CaminhoContainer = styled.div`
  display: flex;
`;
const Caminho = styled.p`
  color: #222222eb;
  margin-top: 10px;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const HeaderProduto = ({ produtoAtual }) => {
  return (
    <Header>
      <TituloProduto>{`${produtoAtual.name}`}</TituloProduto>
      <CaminhoContainer>
        <Caminho>{`${produtoAtual.description}`}</Caminho>
      </CaminhoContainer>
    </Header>
  );
};

export default HeaderProduto;

import styled from "styled-components";
import { useEffect, useState } from "react";
const ProdutoContainer = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media screen and (max-width: 1250px) {
    margin-left: 0px;
  }
`;

const SubContainer = styled.div`
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitulo = styled.h2`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #494949eb;
  padding: 10px;
  border-radius: 5px;
  background-color: #fcfcfc;
  border: 1px solid #e7e7e7;
  cursor: default;
  &:hover {
    animation: animaTexto 1s both;
  }
`;

const Div = styled.div`
  position: relative;
  cursor: zoom-in;
  background-position: center;
`;

const ImagemPrincipal = styled.img`
  width: 350px;
  height: 350px;
  margin-top: 4px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 3px #c2bfbfeb;
  }
`;

const Magnify = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  border: 2px solid white;
  width: 120px;
  height: 120px;
  background-size: 500%;
  background-position: center;
  pointer-events: none;
  border-radius: 50%;
  display: none;
  transform: scale(0);
  animation: scaleUp 500ms ease-in forwards;

  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    90% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const styleIsClicked = {
  cursor: "none",
};

const ProdContainer = ({ produtoAtual, id }) => {
  const [isCLicked, setIsClicked] = useState(false);
  const [qualImagem, setQualImagem] = useState(produtoAtual.image_url);

  const [magnifyStyle, setMagnifyStyle] = useState({
    backgroundImage: `url(${produtoAtual.image_url})`,
  });
  useEffect(() => {
    setMagnifyStyle({ backgroundImage: `url(${qualImagem})` });
  }, [id]);
  const handleMouseMove = (event) => {
    if (isCLicked) {
      const { offsetX, offsetY, target } = event.nativeEvent;
      const { offsetWidth, offsetHeight } = target;

      const xPercentage = (offsetX / offsetWidth) * 100;
      const yPercentage = (offsetY / offsetHeight) * 100;

      setMagnifyStyle((prev) => ({
        ...prev,
        display: "block",
        top: `${offsetY - 50}px`,
        left: `${offsetX - 65}px`,
        backgroundPosition: `${xPercentage}% ${yPercentage}% `,
      }));
    } else {
      return;
    }
  };

  const handleMouseLeave = (event) => {
    setIsClicked(false);
    setMagnifyStyle((prev) => ({ ...prev, display: "none" }));
  };
  const habilitaZoom = () => {
    setIsClicked(true);
  };

  return (
    <ProdutoContainer>
      <HeaderContainer>
        <SubContainer>
          <SubTitulo>{produtoAtual.name}</SubTitulo>
        </SubContainer>
        <SubContainer>
          <SubTitulo>{produtoAtual.price} R$</SubTitulo>
        </SubContainer>
      </HeaderContainer>

      <Div style={isCLicked ? styleIsClicked : null}>
        <ImagemPrincipal
          src={produtoAtual.image_url}
          draggable="false"
          onClick={habilitaZoom}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        <Magnify style={magnifyStyle}></Magnify>
        <SubContainer>
          <SubTitulo>500+ vendidos</SubTitulo>
        </SubContainer>
      </Div>
      {/* <SectionImagesSec>
        <ImagesContainer>
          <ImageSec src="https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/t/o/tomura-min.jpg"></ImageSec>
          <ImageSec src="https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/b/a/bakugo_anime2-min.jpg"></ImageSec>
          <ImageSec src="https://www.fantoy.com.br/media/catalog/product/cache/5070b15b05522f191912dd31c57262ab/d/a/dabi2-min.jpg"></ImageSec>
        </ImagesContainer>
      </SectionImagesSec> */}
    </ProdutoContainer>
  );
};

export default ProdContainer;

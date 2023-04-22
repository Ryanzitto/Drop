import { useState, useRef, useEffect, useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext'


import styled from 'styled-components'

const ContainerPai = styled.div`
background-color: #00000090;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
overflow: auto;
overflow-y: hidden;
position: absolute;
flex-direction: column;
z-index: 2;

@media screen and (min-width: 1001px) and (max-width: 1250px) {
    margin-left: 110px;
}
@media screen and (max-width: 1000px) {
    margin-left: 0px;
}
`

const Main = styled.div`
background-color: #ffffff;
width: 75%;
height: 600px;
border-radius: 15px;
display: flex;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
animation: entrada 1s ease ;

@keyframes entrada {
    from{
        width: 40%;
        opacity: 0;
    }
    to{
        opacity: 1;
        width: 75%;
    }

}

@media screen and (max-width: 1300px) {
flex-direction: column;
width: 50%;
height: 700px;
justify-content: center;
align-items: center;
@keyframes entrada {
    from{
        width: 30%;
        opacity: 0;
    }
    to{
        opacity: 1;
        width: 5%;
    
        }
    }
}
`
const Header = styled.div`
width: 100%;
height: 40px;
display: flex;
justify-content: flex-end;
align-items: center;
border-top-right-radius: 15px;
border-top-left-radius: 15px;
`
const Container = styled.div`
background-color: #ffffff;
width: 100%;
height: 600px;
border-bottom-right-radius: 15px;
border-bottom-left-radius: 15px;
display: flex;

@media screen and (max-width: 1300px) {
flex-direction: column;
height: 650px;
width: 100%;
justify-content: center;
align-items: center;
}

`

const Left = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
`

const ImagemProduto = styled.img`
width: 300px;
@media screen and (max-width: 1300px) {
width: 75%;
}
`
const DescricaoProduto = styled.p`
width: 80%;
margin-top: 50px;
font-weight: 700;
letter-spacing: 0.5px;
font-size: 1.2em;

@media screen and (max-width: 1300px) {
margin-top: 20px;
width: 350px;
font-size: 1.0em;
}   

`
const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;

@media screen and (max-width: 1300px) {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
`

const Close = styled.img`
width: 25px;
height: 25px;
cursor: pointer;
margin-right: 8px;
`
const RightContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 50px;

@media screen and (max-width: 1300px) {
    margin-top: 0px;
}
`
const TituloContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-left: 50px;

@media screen and (max-width: 1300px) {
    margin-left: 0;
    text-align:  center;
}

`
const Titulo1 = styled.h1`
width: 100%;
font-size: 18px;
color:#161616f9;
letter-spacing: 1px;
@media screen and (max-width: 1300px) {
    margin-left: 0;
}

`
const Titulo2 = styled.h1`
width: 100%;
font-size: 18px;
color:#161616f9;
letter-spacing: 1px;
@media screen and (max-width: 1300px) {
    margin-left: 0;
}

`
const Section = styled.div`
width: 100%;
height: 16%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;
gap: 10px;
margin-left: 50px;
margin-bottom: 20px;

@media screen and (max-width: 1300px) {
    justify-content: center;
    margin-left: 0;
    height: 22%;
    margin-bottom: 0px;
}

`
const CorContainer = styled.div`
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
`
const CorPreto = styled.div`
width: 30px;
height: 30px;
background-color: #000000;
border-radius: 10px;
cursor: pointer;

@media screen and (max-width: 900px) {
    height: 50%;
    width: 50%;
}
`
const CorBranco = styled.div`
width: 30px;
height: 30px;
background-color: #ffffff;
border: 1px solid grey;
border-radius: 10px;
cursor: pointer;
@media screen and (max-width: 900px) {
    height: 50%;
    width: 50%;
}
`
const TamanhoContainer = styled.div`
width: 60px;
height: 60px;
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
`
const ConfirmaContainer = styled.div`
width: 50%;
height: 50px;
display: flex;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
`
const Tamanho = styled.div`
width: 90%;
height: 90%;
background-color: #161616f9;
border-radius: 10px;;
display: flex;
justify-content: center;
align-items: center;
color: White;
font-size: 22px;
font-weight: 800;
cursor: pointer;

@media screen and (max-width: 900px) {
    height: 70%;
}
`
const Confirma = styled.button`
width: 80%;
height: 100%;
background: #161616f9;
color: white;
border: none;
border-radius: 10px;
cursor: pointer;
letter-spacing: 1px;
font-weight: 700;
font-size: 18px;
&:hover{
    animation: anime ease 3s both;
    @keyframes anime {
        to{
            background-color: #ff8b9e;
        }       
    }
}
`

const clickStyle = {
    fontSize: '32px',
};

const clickCor = {
    border: "3px solid black",
};

const Especificacoes = ({item, state, setState, variacoes}) => {

    console.log(item)

    const {sacola, setSacola} = useContext(CarrinhoContext)

    const close = () => {
        setState(!state)
    }
    
    const [tamanho, setTamanho] = useState('') 

    const handleClickP = () => {
        if(item[0].tipo === 'tenis'){
            setTamanho(39)
        }else{
            setTamanho('P')
        }
        
    }
    const handleClickM = () => {
        if(item[0].tipo === 'tenis'){
            setTamanho(40)
        }else{
            setTamanho('M')
        }
        
    }
    const handleClickG = () => {
        if(item[0].tipo === 'tenis'){
            setTamanho(41)
        }else{
            setTamanho('G')
        }
        
    }

    const [cor, setCor] = useState('')

    const escolhePreto = () => {
        setCor('Preto')
    }
    const escolheBranco = () => {
        setCor('Branco')
    }

    const addToCart = () => {

        if(typeof tamanho === 'number'){
            switch (true) {
                case tamanho === 39:
                  variacoes[0].url = item[0].url
                  setSacola([...sacola, variacoes[0]]);
                  close();
                  break;
                case tamanho === 40:
                  variacoes[1].url = item[0].url
                  setSacola([...sacola, variacoes[1]]);
                  close();
                  break;
                case tamanho === 41:
                  variacoes[2].url = item[0].url
                  setSacola([...sacola, variacoes[2]]);
                  close();
                  break;
                  default:
                    break;
        }
    }
        else if 
        (typeof cor === 'string' && typeof tamanho === 'string') {
          switch (true) {
            case cor === 'Preto' && tamanho === 'P':
              variacoes[0].url = item[0].url
              setSacola([...sacola, variacoes[0]]);
              close();
              break;
            case cor === 'Preto' && tamanho === 'M':
                variacoes[1].url = item[0].url
              setSacola([...sacola, variacoes[1]]);
              close();
              break;
            case cor === 'Preto' && tamanho === 'G':
                variacoes[2].url = item[0].url
              setSacola([...sacola, variacoes[2]]);
              close();
              break;
            case cor === 'Branco' && tamanho === 'P':
                variacoes[3].url = item[0].url
              setSacola([...sacola, variacoes[3]]);
              close();
              break;
            case cor === 'Branco' && tamanho === 'M':
                variacoes[4].url = item[0].url
              setSacola([...sacola, variacoes[4]]);
              close();
              break;
            case cor === 'Branco' && tamanho === 'G':
                variacoes[5].url = item[0].url
              setSacola([...sacola, variacoes[5]]);
              close();
              break;
            default:
              break;
          }
        }
      };
      
    return (
        <ContainerPai>
            <Main>
                <Header>
                    <Close onClick={close} src='./img/close.png'/>
                </Header>
                {item.map((indice) => { return (
                    <Container key={indice}>  
                        <Left>
                            <ImagemProduto src={indice.url}/>
                            <DescricaoProduto>{indice.descricao}</DescricaoProduto>
                        </Left>
                        <Right>
                            <RightContainer>
                                {indice.id <= 15 || indice.id >= 25 ? 
                                <>
                                    <TituloContainer>
                                        <Titulo1>Cor: {cor}</Titulo1>
                                    </TituloContainer>
                                    <Section>
                                        <CorContainer>
                                            <CorPreto style={cor === "Preto" ? clickCor : null}  onClick={escolhePreto}></CorPreto>
                                        </CorContainer>
                                        <CorContainer>
                                            <CorBranco style={cor === "Branco" ? clickCor : null} onClick={escolheBranco}></CorBranco>
                                        </CorContainer>
                                    </Section>
                                </> : null}
                                <TituloContainer>
                                    <Titulo2>Tamanho: {tamanho}</Titulo2>
                                </TituloContainer>

                                <Section>
                                    <TamanhoContainer>
                                        <Tamanho style={tamanho === 'P' || tamanho === 39 ? clickStyle : null} onClick={handleClickP}>{indice?.tipo === 'tenis' ? '39': 'P' }</Tamanho>
                                    </TamanhoContainer>
                                    <TamanhoContainer>
                                        <Tamanho style={tamanho === 'M' || tamanho === 40  ? clickStyle : null} onClick={handleClickM}>{indice?.tipo === 'tenis' ? '40': 'M' }</Tamanho>
                                    </TamanhoContainer>
                                    <TamanhoContainer>
                                        <Tamanho style={tamanho === 'G' || tamanho === 41  ? clickStyle : null} onClick={handleClickG}>{indice?.tipo === 'tenis' ? '41': 'G' }</Tamanho>
                                    </TamanhoContainer>
                                </Section>
                                <Section>
                                    <ConfirmaContainer>
                                        <Confirma onClick={addToCart} >Confirmar</Confirma>
                                    </ConfirmaContainer>
                                </Section>
                            </RightContainer>
                        </Right>
                    </Container>
                    )})} 
            </Main>  
        </ContainerPai>

    );
}
 
export default Especificacoes;
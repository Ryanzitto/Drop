import React from "react";
import Sidebar from "../components/Sidebar";
import styled from 'styled-components'
import Footer from "../components/Footer";

import { useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext';

const data = [{
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    url:  "https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-2-900x900.jpg",
    descricao: "Bermuda Wanted",
    preço: 109.90,
    colecao: "Berm00",
    cor: "Preto",
    tamanho: "G"
},
{
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    url:  "https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-5-900x900.jpg",
    descricao: "Bermuda Wanted",
    preço: 109.90,
    colecao: "Berm00",
    cor: "Branco",
    tamanho: "G"
},
{
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    url:  "https://wantedind.com/wp-content/uploads/2022/12/BERMUDA-4-900x900.jpg",
    descricao: "Bermuda Wanted",
    preço: 10.90,
    colecao: "Berm00",
    cor: "Marrom",
    tamanho: "G"
},
{
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    url:  "https://wantedind.com/wp-content/uploads/2021/05/still-bermuda-preto-900x900.jpg",
    descricao: "Bermuda Wanted",
    preço: 89.90,
    colecao: "Berm00",
    cor: "Preto",
    tamanho: "G"
},
{
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    url:  "https://wantedind.com/wp-content/uploads/2020/08/Bermuda-Moletom-Wanted-Wu-Tang-Preto-900x900.jpg",
    descricao: "Bermuda Wanted",
    preço: 89.90,
    colecao: "Berm00",
    cor: "Preto",
    tamanho: "G"
},
{
    tipo: "Bermuda",
    nome: "Bermuda Wanted",
    url:  "https://wantedind.com/wp-content/uploads/2020/08/Bermuda-Moletom-Wanted-In-God-We-Trust-Cinza-900x900.jpg",
    descricao: "Bermuda Wanted",
    preço: 89.90,
    colecao: "Berm00",
    cor: "Cinza",
    tamanho: "G"
},
]

const Containergeral = styled.div`
display: flex;
width:100vw;
height: 100vh;
overflow-x: hidden;  
display: flex;
::-webkit-scrollbar {
    width: 5px;
  height: 8px;
  background-color: #aaa; 
}
::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 5px;;
}
@media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const Nav = styled.div`
width: 18vw;
height: 100vh;
`

const Container= styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media only screen and (max-width: 1000px) {
    width: 100vw
  }
@media only screen and (min-width: 1000px) {
    margin-left: 30px;
}
`
const ContainerProduto = styled.div`
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

`
const Produto = styled.div`
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
margin-top: 30px;
`
const ImagemProduto = styled.img`
cursor: pointer;
`
const SegundaImagem = styled.img`
width: 200px;
height :200px;
position: absolute;
z-index: -1;
`
const Colecao = styled.p`
font-size: 12px;
text-align: center;
opacity: 0.5;
width: 300px;
`
const PreçoProduto = styled.h1`
font-size: 20px;
text-align: center;
`
const ContainerBotoes = styled.div`
display:flex;
justify-content: center;
position: relative;
width: 120px;
height: 20px;
gap: 10px;
`
const Adcionar = styled.img`
width:20px;
height: 20px;
padding:3px;
cursor: pointer;
position: absolute;
margin-right: 50px;

&:hover{
    animation: animacao 0.5s ease both;

    @keyframes animacao {
        from{
            width:20px;
            height: 20px;
        }
        to{
            width: 23px;
            height: 23px;
            transform: translateY(-5px);
        }
    }
}
`
const Favoritar = styled.img`
width:20px;
height: 20px;
padding:3px;
cursor: pointer;
margin-left: 50px;
`

const Bermudas = () => {
  
    const {sacola, setSacola} = useContext(CarrinhoContext)

    const add = (indice) =>{
         setSacola([...sacola, indice])
         console.log(sacola)
    }

    return (
        <div>
            <Containergeral>
                <Nav>
                    <Sidebar/>
                </Nav>
                <Container>
                    {data.map((indice)=>{
                        return( 
                        <ContainerProduto>
                            <Produto>
                                <ImagemProduto src={indice.url}/>
                            </Produto>
                            <Colecao>{indice.colecao}</Colecao>
                            <PreçoProduto>{indice.preço.toFixed(2)} R$</PreçoProduto>
                            <ContainerBotoes>
                                <Adcionar onClick={() => {                          
                                    add(indice)
                                }} src="./img/add.png"/>
                                <Favoritar src="./img/hear-empty.png"/>
                            </ContainerBotoes>
                        </ContainerProduto>
                        )       
                    })}
                    <Footer/>
                </Container>    
            </Containergeral>
        </div>
    );
}
 
export default Bermudas;
import { Link } from 'react-router-dom'
import { useState } from 'react';
import React from "react";
import styled from 'styled-components'
import Carrinho from './Carrinho';

import { useContext } from 'react'
import { CarrinhoContext } from '../context/CarrinhoContext';

const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

const Container = styled.div`
width: 20vw;
height: 100vh;
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
border-right: 1px solid #e2e2e2;
position: fixed;
z-index: 1;

@media only screen and (max-width: 1000px) {
    width: 100vw;
    height: 20vh;
    flex-direction: row;
    border-bottom: 1px solid #e2e2e2;
    position: relative;
  }
  @media only screen and (max-width: 800px) {
    width: 100vw;
    height: 20vh;
    flex-direction: row;
    border-bottom: none;
    background-color: transparent;
    position: relative;
  }
`
const LogoContainer = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
@media only screen and (max-width: 800px) {
    width: 50%
  }
`

const ListNav = styled.div`
width: 100%;
height: 65%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

@media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 30%;
  }
@media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #cfcfcf21;
    border-radius: 10px;
  }
`

const Logo = styled.img`
width: 100px;
height: 80px;
cursor: pointer;
@media only screen and (max-width: 1000px) {
    display: none;
  }
`
const Section = styled.div`
width: 200px;
height: 40px;
border-radius: 20px;
cursor: pointer;
display: flex;
align-items: center;

&:hover{
    background-color: #58585814;
}
@media only screen and (max-width: 1000px) {
    width: 100px;
}
`
const Icon = styled.img`
width: 25px;
height: 25px;
cursor: pointer;
margin-left: 20px;
`
const Texto = styled.p`
font-family: "Roboto", sans-serif;
margin-left: 20px;
@media only screen and (max-width: 1000px) {
    display: none;
}
`
const CarrinhoContainer = styled.div`
height: 150px;
width: 100%;
display: flex;
align-items:  center;
justify-content: center;
margin-top: 20px;
border-top: 1px solid #e2e2e2;
border-bottom: 1px solid #e2e2e2;
position: relative;

@media only screen and (max-width: 1000px) {
     border: none; 
     margin-top: 0px;
  }
`
const IconeCarrinho = styled.img`
width: 50px;
height: 50px;
cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 35px;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #cfcfcf21;
    border-radius: 10px;
    padding: 15px;
  }
`
const AlertaContainer = styled.div`
width: 25px;
height: 25px;
position: absolute;
border-radius: 50%;
color: white;
display: flex;
justify-content: center;
text-align: center;
margin-right: 40px;
margin-bottom: 30px;
background-color: red;
`
const Alerta = styled.p`
color: white;
margin-top: 3px;
`
const Sidebar = () => {

    const {carrinhoEstado, toggleCarrinhoEstado} = useContext(CarrinhoContext)
    
    const {sacola, setSacola} = useContext(CarrinhoContext)

    
    return (
        <Container>
            {carrinhoEstado === "aberto" ? <Carrinho/> : null}
            <LogoContainer>
                <Logo src="./img/logo.jfif"/>
            </LogoContainer>
            <ListNav>
                <Link to="/Home" style={linkStyle}>
                    <Section>
                        <Icon src="./img/house.png"/>
                        <Texto>Home</Texto>
                    </Section>
                </Link>
                <Link to="/Camisas" style={linkStyle}>
                    <Section>
                        <Icon src="./img/shirt.png"/>
                        <Texto>Tshirts</Texto>
                    </Section>
                </Link >
                <Link to="/Bermudas" style={linkStyle}>
                    <Section>
                        <Icon src="./img/shorts.png"/>
                        <Texto>Bermudas</Texto>
                    </Section>
                </Link >
                <Link to="/FootWear" style={linkStyle}>
                    <Section>
                        <Icon src="./img/shoes.png"/>
                        <Texto>FootWear</Texto>
                    </Section>
                </Link >
                <Link to="/HeadWear" style={linkStyle}>
                    <Section>
                        <Icon src="./img/cap.png"/>
                        <Texto>Headwear</Texto>
                    </Section>
                </Link >
            </ListNav>
                    <CarrinhoContainer>
                        <IconeCarrinho onClick={() => {
                            console.log(sacola)
                            toggleCarrinhoEstado()
                        }} src="./img/add.png"/>
                        {sacola.length > 0 ? 
                            <AlertaContainer>
                                <Alerta>{sacola.length}</Alerta>
                            </AlertaContainer> : null}

                    </CarrinhoContainer>
        </Container>
    );
}
 
export default Sidebar;
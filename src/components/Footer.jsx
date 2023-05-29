import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: linear-gradient(to right, #c487d3, #ae61c2);
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 100px;
  align-self: flex-end;
  box-shadow: 0px -1px 5px #cfcdcd;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: 600px;
  }
  @media screen and (min-width: 1500px) {
    margin-top: 150px;
  }
`;

const Logo = styled.img`
  width: 180px;
  height: 130px;
  opacity: ${(props) => (props.$primary ? "#a840c2" : "black")};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    animation: animate 1s ease both;
    @keyframes animate {
      to {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (min-width: 1600px) {
    width: 220px;
    height: 150px;
  }
`;

const Left = styled.div`
  width: 500px;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const List = styled.ul`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.a`
  list-style: none;
  letter-spacing: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  color: white;
  opacity: 0.9;
  margin-left: 10px;
  font-size: 10px;
  text-decoration: none;
  font-weight: 900;
  &:hover {
    opacity: 1;
  }
`;
const Line1 = styled.div`
  height: 50%;
  width: 0.2px;
  background-color: #ffffff;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const HeaderList = styled.h3`
  font-size: 14px;
  letter-spacing: 3px;
  font-weight: 800;
  color: white;
  text-align: start;
  padding-bottom: 20px;
  margin-left: 8px;
  @media screen and (max-width: 600px) {
    padding-bottom: 5px;
  }
`;

const Footer = ({ primary }) => {
  return (
    <Container $primary={primary}>
      {/* <Left>
        <Logo src="./img/logo.jfif" />
      </Left>
      <Line1 /> */}
      <Right>
        <List>
          {/* <HeaderList>MINHA CONTA</HeaderList>
          <Link style={{ textDecoration: "none" }}>
            <ListItem href="https://github.com/Ryanzitto" target="_blank">
              PERFIL
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <ListItem
              href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
              target="_blank"
            >
              HISTORICO
            </ListItem>
          </Link>
          <ListItem>PORTIFOLIO</ListItem>
        </List>
        <List>
          <HeaderList>CONTATO</HeaderList>
          <ListItem href="https://github.com/Ryanzitto" target="_blank">
            GITHUB
          </ListItem>
          <ListItem
            href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
            target="_blank"
          >
            LINKEDIN
          </ListItem>
          <ListItem>PORTIFOLIO</ListItem>
        </List>
        <List>
          <HeaderList>SOBRE</HeaderList>
          <ListItem href="https://github.com/Ryanzitto" target="_blank">
            GITHUB
          </ListItem>
          <ListItem
            href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
            target="_blank"
          >
            LINKEDIN
          </ListItem>
          <ListItem>PORTIFOLIO</ListItem> */}
        </List>
      </Right>
    </Container>
  );
};

export default Footer;

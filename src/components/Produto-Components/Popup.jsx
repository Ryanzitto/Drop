import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/actions";
const PopUp = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 5px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  border: 1px solid #dddddd;
`;
const PopUpTextContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  letter-spacing: 0.3px;
  border-bottom: 1px solid #dddddd;
  background-color: #272727;
`;
const PopUpText = styled.p`
  padding: 30px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;
const ContainerBtns = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  color: #272727;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #272727;
  cursor: pointer;
  &:hover {
    background-color: #222222eb;
    color: white;
    border: none;
  }
`;

const Popup = () => {
  const dispatcch = useDispatch();

  const descartaCompraPendente = () => {
    dispatcch(clearCart());
  };
  return (
    <PopUp>
      <PopUpTextContainer>
        <PopUpText>
          Você tem um pedido em andamento, deseja retomá-lo?
        </PopUpText>
      </PopUpTextContainer>
      <ContainerBtns>
        <Link to="/Checkout">
          <Button>SIM</Button>
        </Link>
        <Button onClick={descartaCompraPendente}>NÃO</Button>
      </ContainerBtns>
    </PopUp>
  );
};

export default Popup;

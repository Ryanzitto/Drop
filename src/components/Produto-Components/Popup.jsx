import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/actions";
const PopUp = styled.div`
  width: 100%;
  height: 150px;
  background-color: #fafafa;
  border-radius: 10px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  animation: animationMoveImg 2s ease alternate infinite;
  box-shadow: 0px 2px 5px #e2e2e2;

  @keyframes animationMoveImg {
    to {
      transform: translateY(5px);
    }
  }
`;
const PopUpTextContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  letter-spacing: 0.3px;
  box-shadow: 0px 2px 5px #e2e2e2;
  animation: animationColor 3s ease alternate infinite;

  @keyframes animationColor {
    from {
      background-color: #b812da;
    }
    to {
      background-color: #dd45ff;
    }
  }
`;
const PopUpText = styled.p`
  padding: 30px;
  color: white;
  font-size: 16px;
  font-weight: 500;
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
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 0.2px;
  border: 2px solid #be96c8;
  background-color: #fafafa;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    animation: animationBtn 2s ease both;
    @keyframes animationBtn {
      to {
        background-color: #a840c2;
        color: white;
        border: none;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
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

import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { logaUsuario } from "../../redux/user/actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Titulo = styled.h1`
  font-size: 26px;
  font-weight: 800;
  color: #a840c2;
  opacity: 0.7;
  letter-spacing: 1px;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const FormContainer = styled.form`
  width: 700px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #be96c8;
`;

const Confirma = styled.button`
  width: 250px;
  height: 40px;
  border: 2px solid #be96c8;
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #fafafa;
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

const FooterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Span = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;

const SectionImput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const ContainerBtn = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
`;

const Imput = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`;
const createDataFormSchema = z.object({
  email: z.string().nonempty("Preencha o email!").email(),
  senha: z.string().nonempty("Digite sua senha!"),
});

const Login = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createDataFormSchema),
  });

  const loginUser = (data) => {
    const url_dev = "http://168.119.50.201:3001";
    axios
      .post(`${url_dev}/public/signin`, {
        email: data.email,
        password: data.senha,
      })
      .then(
        (response) => {
          const data = response.data.data;
          console.log(response.data.data);
          setStatus(response.status);
          dispatch(logaUsuario(data));
          navigate("/Admim");
        },
        (error) => {
          setStatus(error.response.status);
          console.log(error.response.status);
        }
      );
  };
  return (
    <Container>
      <>
        <FormContainer onSubmit={handleSubmit(loginUser)}>
          <SectionImput>
            <Label>EMAIL:</Label>
            <Imput type="email" {...register("email")} />
            {errors.email && <Span>{errors.email.message}</Span>}
          </SectionImput>
          <SectionImput>
            <Label>SENHA:</Label>
            <Imput type="password" {...register("senha")} />
            {errors.senha && <Span>{errors.senha.message}</Span>}
          </SectionImput>
          <ContainerBtn>
            <Confirma>LOGIN</Confirma>
          </ContainerBtn>
        </FormContainer>
        <FooterForm>
          {status === 200 ? <p>{status}</p> : null}
          {status != 200 ? <p>{status}</p> : null}
        </FooterForm>
      </>
    </Container>
  );
};

export default Login;

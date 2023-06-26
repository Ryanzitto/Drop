import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { mudaForm } from "../../redux/user/actions";
import ButtonDefault from "../ButtonDefault";
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  gap: 50px;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #494949eb;
`;

const Confirma = styled.button`
  width: 250px;
  height: 40px;
  border: 2px solid #be96c8;
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 0.2px;
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

const Mensagem = styled.p`
  font-size: 14px;
`;
const LoginLink = styled.p`
  cursor: pointer;
  font-weight: 500;
  text-decoration: underline;
  font-size: 14px;
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
const LadoEsquerdo = styled.div`
  width: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-left: 50px;
`;
const LadoDireito = styled.div`
  width: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-right: 50px;
  margin-bottom: 27px;
`;
const ContainerBtn = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
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

const ContainerAlterarForm = styled.div`
  display: flex;
  gap: 5px;
  width: 90%;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`;
const Container2Footer = styled.div`
  height: 100px;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MensagemErro = styled.p`
  font-size: 20px;
  color: red;
  font-weight: 500;
`;
const createDataFormSchema = z
  .object({
    nome: z
      .string()
      .nonempty("Nome é obrigatório")
      .min(3, { message: "nome curto demais" }),
    sobrenome: z
      .string()
      .nonempty("Sobrenomeme é obrigatório")
      .min(3, { message: "Sobrenome curto demais" }),
    email: z
      .string()
      .nonempty("O email  é obrigatório")
      .email("Formato de email inválido"),
    senha: z
      .string()
      .min(8, { message: "Senha muito curta" })
      .nonempty("Senha é obrigatório"),
    senha2: z
      .string()
      .min(8, { message: "Senha muito curta" })
      .nonempty("Confirme a senha!"),
    idade: z
      .string()
      .nonempty("Idade é origatório")
      .transform((v) => parseFloat(v)),
    cpf: z
      .string()
      .nonempty("O cpf é obrigatório")
      .regex(
        new RegExp("([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"),
        "Formato de CPF inválido"
      ),
  })
  .refine((data) => data.senha === data.senha2, {
    message: "Senhas não coincidem",
    path: ["senha2"],
  });
const RegistroForm = () => {
  const [data, setdata] = useState();

  const [errorMessage, setErrorMessage] = useState("");

  const [status, setStatus] = useState();

  const { user } = useSelector((rootReducer) => rootReducer.userReducer);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createDataFormSchema),
  });

  const registerUser = (data) => {
    const url_dev = "http://168.119.50.201:3001";
    axios
      .post(`${url_dev}/public/signup`, {
        name: data.nome,
        last_name: data.sobrenome,
        email: data.email,
        password: data.senha,
        personal_id: data.cpf,
        age: data.idade,
        gender: true,
      })
      .then(
        (response) => {
          setdata(response.data.data);
          setStatus(response.status);
          setErrorMessage("Cadastro feito com sucesso");
          dispatch(mudaForm("Login"));
        },
        (error) => {
          setStatus(error.response.status);
          setErrorMessage(
            "Houve um erro, tente novamente. Provavelmente a conta já existe kkkkkk"
          );
        }
      );
  };
  return (
    <Container>
      <>
        <FormContainer onSubmit={handleSubmit(registerUser)}>
          <LadoEsquerdo>
            <SectionImput>
              <Label>NOME:</Label>
              <Imput type="text" {...register("nome")} />
              {errors.nome && <Span>{errors.nome.message}</Span>}
            </SectionImput>
            <SectionImput>
              <Label>SOBRENOME:</Label>
              <Imput type="text" {...register("sobrenome")} />
              {errors.sobrenome && <Span>{errors.sobrenome.message}</Span>}
            </SectionImput>
            <SectionImput>
              <Label>IDADE:</Label>
              <Imput type="text" {...register("idade")} />
              {errors.idade && <Span>{errors.idade.message}</Span>}
            </SectionImput>
            <SectionImput>
              <Label>CPF:</Label>
              <Imput type="text" {...register("cpf")} />
              {errors.cpf && <Span>{errors.cpf.message}</Span>}
            </SectionImput>
          </LadoEsquerdo>
          <LadoDireito>
            <SectionImput>
              <Label style={{ marginTop: "10px" }}>EMAIL:</Label>
              <Imput type="text" {...register("email")} />
              {errors.email && <Span>{errors.email.message}</Span>}
            </SectionImput>
            <SectionImput>
              <Label>SENHA:</Label>
              <Imput type="password" {...register("senha")} />
              {errors.senha && <Span>{errors.senha.message}</Span>}
            </SectionImput>
            <SectionImput>
              <Label>CONFIRME A SENHA:</Label>
              <Imput type="password" {...register("senha2")} />
              {errors.senha2 && <Span>{errors.senha2.message}</Span>}
            </SectionImput>
            <ContainerBtn>
              <ButtonDefault nomeBtn={"CONFIRMAR"} />
            </ContainerBtn>
          </LadoDireito>
        </FormContainer>
        <FooterForm>
          <Container2Footer>
            {status != 200 ? <MensagemErro>{errorMessage}</MensagemErro> : null}
            {status === 200 ? (
              <MensagemErro style={{ color: "green" }}>
                {errorMessage}
              </MensagemErro>
            ) : null}
          </Container2Footer>
        </FooterForm>
      </>
    </Container>
  );
};

export default RegistroForm;

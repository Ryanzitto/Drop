import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { changeStep, resetData, saveData } from "../../redux/form/actions";
import { useEffect, useRef } from "react";

const Container = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #dddddd;
  animation: entrada 1s ease;
  @keyframes entrada {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 30px;
`;
const Titulo = styled.div`
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 20px;
  color: #575555eb;
`;
const Body = styled.form`
  width: 100%;
  height: 85%;
  display: flex;
`;
const Coluna1 = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Coluna2 = styled.div`
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Coluna3 = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SectionImput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const SectionInputRow = styled.div`
  display: flex;
  gap: 10px;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #be96c8;
`;
const Imput = styled.input`
  width: 200px;
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

const ImputSelect = styled.select`
  width: 200px;
  height: 30px;
  color: #575555eb;
  border-radius: 5px;
  border: none;
  background-color: #e1dde2;
  text-align: center;
  &:focus {
    outline: 1px solid #be96c8;
  }
`;
const Option = styled.option`
  font-size: 16px;
`;

const Top = styled.div``;
const Bottom = styled.div``;
const Line = styled.div`
  width: 200px;
  height: 1px;
  background-color: #e2e2e2;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const ButtonConfirma = styled.button`
  width: 200px;
  height: 40px;
  border: 2px solid #be96c8;
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 0.2px;
  margin-bottom: 50px;
  margin-top: 10px;
  background-color: white;
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
const Span = styled.span`
  font-size: 12px;
  color: red;
  text-align: center;
  margin-top: 5px;
`;

const ButtonReseta = styled.button`
  width: 200px;
  height: 40px;
  border: 2px solid #be96c8;
  color: #be96c8;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 50px;
  margin-right: 30px;
  background-color: white;
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

const ResetaContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 450px;
  flex-direction: column;
`;
const MensagemReseta = styled.p`
  width: 250px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
  color: #be96c8;
  margin-top: 30px;
  margin-right: 30px;
  border: 1px solid #dddddd;
  padding: 20px;
  border-radius: 10px;
`;
const Proximo = styled.p`
  margin-right: 50px;
  opacity: 0.3;
  font-weight: 600;
  border-bottom: 1px solid #575555eb;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const IMG = styled.img`
  margin-left: 100px;
  width: 300px;
  opacity: 0.5;
  animation: animationMoveImg 2s ease alternate infinite;
  @keyframes animationMoveImg {
    to {
      transform: translateY(10px);
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;
const Conteudo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div1 = styled.div`
  width: 50%;
  display: flex;
`;
const Div2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const createDataFormSchema = z.object({
  cep: z
    .string()
    .nonempty("O cep é obrigatório")
    .min(8, "O CEP deve conter 8 dígitos"),
  cidade: z.string().nonempty("O campo cidade é obrigatório"),

  bairro: z.string().nonempty("O cep é obrigatório"),
  endereço: z.string().nonempty("Endereço é obrigatório"),
  numero: z.string().nonempty("Nº é obrigatório"),
  estado: z.string().nonempty("O campo estado é obrigatório"),
  complemento: z.string().nonempty("Este campo é obrigatório"),
  referencia: z.string().nonempty("Este campo é obrigatório"),
  email: z
    .string()
    .nonempty("O email  é obrigatório")
    .email("Formato de email inválido"),
  cpf: z
    .string()
    .nonempty("O cpf é obrigatório")
    .regex(
      new RegExp("([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"),
      "Formato de CPF inválido"
    ),
  nome: z
    .string()
    .nonempty("Nome é obrigatório")
    .min(3, { message: "nome curto demais" }),

  sobrenome: z
    .string()
    .nonempty("Sobrenomeme é obrigatório")
    .min(3, { message: "Sobrenome curto demais" }),
});

const Tela1 = () => {
  const [qualForm, setQualForm] = useState(1);

  const { dataEntrega } = useSelector((rootReducer) => rootReducer.formReducer);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createDataFormSchema),
  });

  const createDataEntrega = (data) => {
    dispatch(saveData(data));
    dispatch(changeStep(2));
  };
  const handleClickReseta = () => {
    dispatch(resetData());
  };
  const proximo = () => {
    dispatch(changeStep(2));
  };

  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  return (
    <Container>
      {dataEntrega === null ? (
        <>
          <Header>
            <Titulo>INFORMAÇÕES DE ENTREGA</Titulo>
          </Header>
          <Body onSubmit={handleSubmit(createDataEntrega)}>
            <Coluna1>
              <SectionImput>
                <Label>CEP:</Label>
                <Imput type="text" {...register("cep")} />
                {errors.cep && <Span>{errors.cep.message}</Span>}
              </SectionImput>
              <SectionImput>
                <Label>CIDADE:</Label>
                <Imput type="text" {...register("cidade")} />
                {errors.cidade && <Span>{errors.cidade.message}</Span>}
              </SectionImput>
              <SectionImput>
                <Label>BAIRRO:</Label>
                <Imput type="text" {...register("bairro")} />
                {errors.bairro && <Span>{errors.bairro.message}</Span>}
              </SectionImput>
              <SectionInputRow>
                <SectionImput>
                  <Label>ENDEREÇO:</Label>
                  <Imput
                    type="text"
                    {...register("endereço")}
                    style={{ width: "140px" }}
                  />
                </SectionImput>
                <SectionImput>
                  <Label>Nº:</Label>
                  <Imput
                    type="text"
                    {...register("numero")}
                    style={{ width: "50px" }}
                  />
                </SectionImput>
              </SectionInputRow>
              {errors.endereço && <Span>{errors.endereço.message}</Span>}
              {errors.numero && <Span>{errors.numero.message}</Span>}
            </Coluna1>
            <Coluna2>
              <SectionImput>
                <Label>ESTADO:</Label>
                <ImputSelect type="select" {...register("estado")}>
                  {estados.map((item) => (
                    <Option key={item}>{item}</Option>
                  ))}
                </ImputSelect>
                {errors.estado && <Span>{errors.estado.message}</Span>}
              </SectionImput>
              <SectionImput>
                <Label>COMPLEMENTO:</Label>
                <Imput type="text" {...register("complemento")} />
                {errors.complemento && (
                  <Span>{errors.complemento.message}</Span>
                )}
              </SectionImput>
              <SectionImput>
                <Label>PONTO DE REFERÊNCIA:</Label>
                <Imput type="text" {...register("referencia")} />
                {errors.referencia && <Span>{errors.referencia.message}</Span>}
              </SectionImput>
              <SectionImput>
                <Label>EMAIL:</Label>
                <Imput type="text" {...register("email")} />
                {errors.email && <Span>{errors.email.message}</Span>}
              </SectionImput>
            </Coluna2>
            <Coluna3>
              <SectionImput>
                <Label>CPF:</Label>
                <Imput type="text" {...register("cpf")} />
                {errors.cpf && <Span>{errors.cpf.message}</Span>}
              </SectionImput>
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
              <ButtonConfirma>CONFIRMAR</ButtonConfirma>
            </Coluna3>
          </Body>
        </>
      ) : null}

      {dataEntrega != null ? (
        <ResetaContainer>
          <Header style={{ justifyContent: "flex-end" }}>
            <Proximo onClick={proximo}>PRÓXIMO</Proximo>
          </Header>
          <Conteudo>
            <Div1>
              <IMG src="/img/login-img.png" />
            </Div1>
            <Div2>
              <MensagemReseta>
                Os dados de entrega já foram preenchidos e salvos. usaremos
                esses dados como base para seu pedido. caso queira alterar os
                dados de entrega clique no botão abaixo.
              </MensagemReseta>
              <ButtonReseta onClick={handleClickReseta}>ALTERAR</ButtonReseta>
            </Div2>
          </Conteudo>
        </ResetaContainer>
      ) : null}
    </Container>
  );
};

export default Tela1;

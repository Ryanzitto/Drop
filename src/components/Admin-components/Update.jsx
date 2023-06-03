import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
`;

const FormContainer = styled.form`
  width: 400px;
  height: fit-content;
  padding-top: 20px;
  padding-bottom: 20px;
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

const MensagemErro = styled.p`
  font-size: 20px;
  color: red;
  font-weight: 500;
`;
const createDataFormSchema = z.object({
  nome: z.string().nonempty("Nome é obrigatório"),
  desc: z.string().nonempty("Descrição é obrigatório"),
  preço: z
    .string()
    .nonempty("O preço  é obrigatório")
    .transform((v) => parseFloat(v)),
  url: z.string().nonempty("URL é obrigatório"),
  category: z
    .string()
    .nonempty("Preencha este campo")
    .transform((v) => parseFloat(v)),
});
const Update = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createDataFormSchema),
  });

  const { tokens } = useSelector((rootReducer) => rootReducer.userReducer);

  const [tokenDeAcesso] = useState(tokens.access_token);
  console.log(tokenDeAcesso);

  const criaProduto = (data) => {
    const url_dev = "http://168.119.50.201:3001";
    axios
      .post(
        `${url_dev}/admin/product`,
        {
          name: data.nome,
          description: data.desc,
          price: data.preço,
          image_url: data.url,
          category: data.category,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${tokenDeAcesso}`,
          },
        }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <Container>
      <>
        <FormContainer onSubmit={handleSubmit(criaProduto)}>
          <SectionImput>
            <Label>NOME PRODUTO:</Label>
            <Imput type="text" {...register("nome")} />
            {errors.nome && <Span>{errors.nome.message}</Span>}
          </SectionImput>
          <SectionImput>
            <Label>DESCRIÇÃO:</Label>
            <Imput type="text" {...register("desc")} />
            {errors.desc && <Span>{errors.desc.message}</Span>}
          </SectionImput>
          <SectionImput>
            <Label>PREÇO:</Label>
            <Imput type="text" {...register("preço")} />
            {errors.preço && <Span>{errors.preço.message}</Span>}
          </SectionImput>
          <SectionImput>
            <Label>URL DA IMAGEM:</Label>
            <Imput type="text" {...register("url")} />
            {errors.url && <Span>{errors.url.message}</Span>}
          </SectionImput>
          <SectionImput>
            <Label>CATEGORY ID:</Label>
            <Imput type="text" {...register("category")} />
            {errors.category && <Span>{errors.category.message}</Span>}
          </SectionImput>
          <ContainerBtn>
            <Confirma>CONFIRMAR</Confirma>
          </ContainerBtn>
        </FormContainer>
      </>
    </Container>
  );
};

export default Update;

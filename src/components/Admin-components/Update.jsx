import styled from "styled-components";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { useAxios } from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import axios from "axios";
import Lista from "./Lista";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`;

const FormContainer = styled.form`
  width: 400px;
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

const ContainerDisplay = styled.div`
  width: 400px;
  height: 460px;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
  border-top-right-radius: 0px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  word-wrap: break-word;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
`;
const Resposta = styled.p``;
const ContainerLista = styled.div`
  width: 80%;
  background-color: #d36ad6;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  box-shadow: 0px 2px 5px #a1a1a1;
  letter-spacing: 0.5px;
`;
const DisplayHeader = styled.div`
  background-color: #d36ad6;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const DisplayTitulo = styled.h1`
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Propriedade = styled.div`
  gap: 10px;
  display: flex;
`;
const Label2 = styled.label`
  font-weight: 600;
`;
const Valor = styled.p`
  width: 80%;
`;
const Status = styled.button`
  width: 75px;
  height: 25px;
  border: none;
  background-color: #ff2424;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 10px;
`;
const Error = styled.p`
  width: 65%;
  color: red;
  margin-top: 10px;
  text-align: center;
`;

const status200 = {
  backgroundColor: "#1afa1a",
};
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
  id: z
    .string()
    .nonempty("Preencha este campo")
    .transform((v) => parseFloat(v)),
});
const Update = () => {
  const [lista, setLista] = useState("");

  const { tokens } = useSelector((rootReducer) => rootReducer.userReducer);

  const { response, loading, error, fetchData } = useAxios();

  const alteraProduto = (data) => {
    setLista(null);
    console.log(data);
    const axiosParams = {
      method: "PUT",
      url: `/admin/product/${data.id}`,
      headers: {
        "Auth-Token": tokens.access_token,
      },
      data: {
        name: data.nome,
        description: data.desc,
        price: data.preço,
        image_url: data.url,
        category_id: data.category,
      },
    };
    fetchData(axiosParams);
    setTimeout(() => {
      atualizaLista();
    }, 3000);
  };

  const atualizaLista = () => {
    const url_dev = "http://168.119.50.201:3001";
    axios.get(`${url_dev}/public/product`).then(
      (response) => {
        setLista(response.data.data);
        console.log(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createDataFormSchema),
  });

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(alteraProduto)}>
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
        <SectionImput>
          <Label>ID do produto:</Label>
          <Imput type="text" {...register("id")} />
          {errors.id && <Span>{errors.id.message}</Span>}
        </SectionImput>
        <ContainerBtn>
          <Confirma>CRIAR PRODUTO</Confirma>
        </ContainerBtn>
        {error != null && <Error>{error?.response?.data?.errors}</Error>}
        {error == null && <Error style={{ color: "green" }}>SUCESSO</Error>}
      </FormContainer>
      {lista != "" && <Lista lista={lista} />}
    </Container>
  );
};

export default Update;

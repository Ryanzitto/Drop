import styled from "styled-components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Lista from "./Lista";
import ButtonDefault from "../ButtonDefault";
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
  color: #494949eb;
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

const Error = styled.p`
  width: 65%;
  color: red;
  margin-top: 10px;
  text-align: center;
`;
const Status = styled.p`
  margin-top: 5px;
  font-size: 20px;
  background-color: red;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 3px;
  color: white;
`;

const status200 = {
  backgroundColor: "#1afa1a",
};
const sucesso = {
  color: "#1afa1a",
};

const createDataFormSchema = z.object({
  nome: z.string().nonempty("Nome é obrigatório"),
  desc: z.string().nonempty("Descrição é obrigatório"),
  preço: z
    .string()
    .nonempty("O preço  é obrigatório")
    .transform((v) => parseFloat(v)),
  url: z.string().nonempty("URL é obrigatório"),
  urlFornecedor: z.string().nonempty("URL FORNECEDOR é obrigatório"),
  category: z
    .string()
    .nonempty("Preencha este campo")
    .transform((v) => parseFloat(v)),
});
const Create = () => {
  const [lista, setLista] = useState("");

  const [status, setStatus] = useState(null);

  const [erro, setErro] = useState(null);

  const { tokens } = useSelector((rootReducer) => rootReducer.userReducer);

  const criaProduto = (data) => {
    setLista(null);
    const url_dev = "http://168.119.50.201:3001";
    axios
      .post(
        `${url_dev}/admin/product`,
        {
          name: data.nome,
          description: data.desc,
          price: data.preço,
          image_url: data.url,
          suplier_url: data.urlFornecedor,
          category: data.category,
        },
        {
          headers: {
            "Auth-Token": tokens.access_token,
          },
        }
      )
      .then(
        (response) => {
          console.log(response);
          atualizaLista();
          setStatus(response.status);
          setErro("SUCESSO!");
        },
        (error) => {
          console.log(error);
          atualizaLista();
          setStatus(error.response.status);
          setErro(error.response.data.errors[0]);
        }
      );
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
          <Label>URL DO FORNECEDOR:</Label>
          <Imput type="text" {...register("urlFornecedor")} />
          {errors.urlFornecedor && <Span>{errors.urlFornecedor.message}</Span>}
        </SectionImput>
        <SectionImput>
          <Label>CATEGORY ID:</Label>
          <Imput type="text" {...register("category")} />
          {errors.category && <Span>{errors.category.message}</Span>}
        </SectionImput>
        <ContainerBtn>
          <ButtonDefault func={criaProduto} nomeBtn={"CRIAR PRODUTO"} />
        </ContainerBtn>
        {status != null ? (
          <Status style={status === 200 ? status200 : null}>{status}</Status>
        ) : null}
        {erro != null ? (
          <Error style={erro === "SUCESSO!" ? sucesso : null}>{erro}</Error>
        ) : null}
      </FormContainer>
      {lista != "" && <Lista lista={lista} />}
    </Container>
  );
};

export default Create;

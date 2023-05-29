import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import {
  increaseProductQuantity,
  removeProductFromCart,
} from "../redux/cart/actions";

const Gambiarra = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const ContainerGeral = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`;

const SidebarContainer = styled.div`
  width: 20vw;
  height: 100vh;
  position: relative;

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    width: 100vw;
    height: 20vh;
  }
  @media screen and (max-width: 800px) {
    height: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 200px;
  background-color: #111111f1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderTitulo = styled.h1`
  font-size: 70px;
  color: white;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const DadosDeEntrega = styled.div`
  width: 33%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    border-bottom: 1px solid black;
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  @media screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
`;
const Input = styled.input`
  width: 200px;
  height: 30px;
  margin-top: 10px;
  padding-left: 20px;
  border: 2px solid #474747ea;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
const Revisao = styled.div`
  width: 34%;
  height: 100%;
  margin-top: 30px;

  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
  }
`;
const Pagamento = styled.div`
  width: 33%;
  height: 100%;
  margin-top: 30px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const SectionHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const Titulo = styled.h1`
  background-color: #111111f1;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  width: 150px;
`;
const ItemContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Mid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const DescarteDiv = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
`;
const IconeDescarte = styled.img`
  height: 30px;
  cursor: pointer;
`;
const NomeProduto = styled.p`
  font-size: 14px;
`;
const Colecao = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`;
const Info = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;
const ImagemContainer = styled.div`
  width: 80px;
  height: 80px;
`;
const ImagemItem = styled.img`
  width: 100px;
  height: 100px;
`;

const PreçoContainer = styled.div``;
const Preço = styled.h3`
  font-size: 16px;
`;
const Descartar = styled.img`
  width: 15px;
  cursor: pointer;
`;

const PagamentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 14px;
  margin-top: 10px;
  font-weight: 500;
`;
const InputNumeroDoCartao = styled.input`
  width: 200px;
  height: 30px;
  padding-left: 20px;
  border: 2px solid #1d1d1dea;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
const InputNomeDoCartao = styled.input`
  width: 200px;
  height: 30px;
  padding-left: 20px;
  border: 2px solid #1d1d1dea;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
const Vencimento = styled.input`
  width: 70px;
  height: 30px;
  padding-left: 20px;
  border: 2px solid #1d1d1dea;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
const CVV = styled.input`
  width: 70px;
  height: 30px;
  padding-left: 20px;
  border: 2px solid #1d1d1dea;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
const LabelContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const LabelContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
const FooterFat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Termos = styled.p`
  font-size: 10px;
  width: 50%;
  text-align: center;
`;
const Finaliza = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 20px;
  border: none;
  background-color: #47f147;
  color: white;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2ec92ee8;
  }
`;
const ConfirmaFat = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 10px;
  border: none;
  background-color: #47f147;
  color: white;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2ec92ee8;
  }

  @media screen and (max-width: 900px) {
    margin-left: 0px;
    margin-bottom: 50px;
  }
`;

const Total = styled.h2`
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #131313;
  color: white;

  @media screen and (max-width: 900px) {
    padding: 10px;
  }
`;

const Mensagem = styled.p`
  font-size: 12px;
  text-align: center;
  width: 100%;
`;

const MensagemErro = styled.p`
  font-size: 16px;
  text-align: center;
  width: 50%;
  margin-bottom: 50px;
  color: red;
`;
const Alterar = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #131313;
  color: white;
  margin-top: 15px;
  border-radius: 5px;
  cursor: pointer;
`;
const Span = styled.span`
  font-size: 12px;
  margin-top: 4px;
  color: red;
`;
const FormPagamento = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubTitulo = styled.p`
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
`;

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addToHistory, clearCart } from "../redux/cart/actions";

const createDataFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido."),

  name: z.string().min(10, "O nome deve ter no minimo 10 caracteres."),

  cep: z.string().min(8, "O CEP deve conter exatamente 8 números."),

  telefone: z.string().min(8, "O telefone deve conter 8 números."),
});

const createDataFormPagamentoSchema = z.object({
  numero: z
    .string()
    .nonempty("O número deve conter 16 dígitos")
    .min(16, "O número  deve conter 16 dígitos"),

  nomeTitular: z.string().min(10, "O nome deve ter no mínimo 10 caracteres"),

  vencimento: z.string().min(5, "vencimento requer  'mês'  '/'  'ano'"),

  cvv: z.string().min(3, "CVV precisa conter 3 dígitos"),
});

const Checkout = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const dispatch = useDispatch();

  const [total, setTotal] = useState();

  const [dadosDeEntrega, setDadosDeEntrega] = useState({});

  const [dadosDePagamento, setDadosDePagamento] = useState({});

  const [dadosDeEntregaExiste, setDadosDeEntregaExiste] = useState(false);

  const [compraConfirmada, setCompraConfirmada] = useState(false);

  const [mensagem, setMensagem] = useState("");

  const [quantidade, setQuantidade] = useState(products.quantity);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createDataFormSchema),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: zodResolver(createDataFormPagamentoSchema),
  });

  const createDataEntrega = (data) => {
    setDadosDeEntrega(data);
    setDadosDeEntregaExiste(true);
  };

  const createDataPagamento = (data) => {
    if (products.length >= 1) {
      setDadosDePagamento(data);
      setCompraConfirmada(true);
      dispatch(addToHistory(products));
      dispatch(clearCart());
    } else {
      setMensagem("Não há nenhum item no carrinho!");
    }
  };

  const resetaDadosEntrega = () => {
    setDadosDeEntrega({});
    setDadosDeEntregaExiste(false);
  };

  const handleCLickDescarte = () => {
    dispatch(clearCart());
  };

  return (
    <Gambiarra>
      <ContainerGeral>
        <Header>
          <HeaderTitulo>CHECKOUT</HeaderTitulo>
        </Header>
        <Container>
          {compraConfirmada === false ? (
            <>
              <DadosDeEntrega>
                {dadosDeEntregaExiste === true ? (
                  <DadosDeEntrega>
                    <SectionHeader>
                      <Titulo>DADOS PREENCHIDOS</Titulo>
                    </SectionHeader>
                    <Body>
                      <Mensagem>
                        Os dados de entrega foram preenchidos e salvos. se
                        desejar alterar clique no botão abaixo
                      </Mensagem>
                      <Alterar onClick={resetaDadosEntrega}>Alterar</Alterar>
                    </Body>
                  </DadosDeEntrega>
                ) : (
                  <>
                    <SectionHeader>
                      <Titulo>ENTREGA</Titulo>
                    </SectionHeader>
                    <FormContainer onSubmit={handleSubmit(createDataEntrega)}>
                      <Label>Email:</Label>
                      <Input
                        type="email"
                        placeholder="exemplo@email.com"
                        {...register("email")}
                      />
                      {errors.email && <Span>{errors.email.message}</Span>}

                      <Label>Nome:</Label>
                      <Input
                        type="text"
                        placeholder="Ex: Rodrigo Fernandes Silva"
                        {...register("name")}
                      />
                      {errors.name && <Span>{errors.name.message}</Span>}

                      <Label>CEP:</Label>
                      <Input
                        type="text"
                        placeholder="Ex: 35657344"
                        {...register("cep")}
                      />
                      {errors.cep && <Span>{errors.cep.message}</Span>}

                      <Label>Telefone:</Label>
                      <Input
                        type="text"
                        placeholder="Ex: 81053487"
                        {...register("telefone")}
                      />
                      {errors.telefone && (
                        <Span>{errors.telefone.message}</Span>
                      )}

                      <FooterFat>
                        <ConfirmaFat type="submit">Confirmar</ConfirmaFat>
                      </FooterFat>
                    </FormContainer>
                  </>
                )}
              </DadosDeEntrega>
              <Revisao>
                <SectionHeader>
                  <Titulo>REVISÃO</Titulo>
                </SectionHeader>
                {products.map((item) => {
                  return (
                    <ItemContainer key={item.id}>
                      <Left>
                        <ImagemContainer>
                          <ImagemItem src={item.image_url} />
                        </ImagemContainer>
                      </Left>
                      <Mid>
                        <NomeProduto>{item.name}</NomeProduto>
                        <Colecao>{item.description}</Colecao>
                        <Info>- {item.quantity} -</Info>
                        <PreçoContainer>
                          <Preço>{item.price * item.quantity}R$</Preço>
                        </PreçoContainer>
                      </Mid>
                      <DescarteDiv>
                        <IconeDescarte
                          onClick={handleCLickDescarte}
                          src="/img/trash.png"
                        />
                      </DescarteDiv>
                    </ItemContainer>
                  );
                })}
                <SubTitulo>TOTAL:</SubTitulo>
                {products.length > 0 ? (
                  <Total>{products.quantity} R$</Total>
                ) : null}
              </Revisao>
              <Pagamento>
                {dadosDeEntregaExiste === true ? (
                  <>
                    <SectionHeader>
                      <Titulo>PAGAMENTO</Titulo>
                    </SectionHeader>
                    <PagamentoContainer>
                      <FormPagamento
                        onSubmit={handleSubmit2(createDataPagamento)}
                      >
                        <LabelContainer>
                          <Label htmlFor="numero">
                            Digite o número do seu cartão*
                          </Label>
                          <InputNumeroDoCartao
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            {...register2("numero")}
                          />
                          {errors2.numero && (
                            <Span>{errors2.numero.message}</Span>
                          )}
                        </LabelContainer>

                        <LabelContainer>
                          <Label htmlFor="nome">
                            Digite o nome do titular do cartão*
                          </Label>
                          <InputNomeDoCartao
                            type="text"
                            placeholder="Ex: Che guevara"
                            {...register2("nomeTitular")}
                          />
                          {errors2.nomeTitular && (
                            <Span>{errors2.nomeTitular.message}</Span>
                          )}
                        </LabelContainer>

                        <LabelContainerRow>
                          <LabelContainerColumn>
                            <Label htmlFor="vencimento">Vencimento*</Label>
                            <Vencimento
                              type="text"
                              placeholder="mm/aa"
                              {...register2("vencimento")}
                            />
                          </LabelContainerColumn>

                          <LabelContainerColumn>
                            <Label htmlFor="CVV">CVV*</Label>
                            <CVV
                              type="text"
                              placeholder="123"
                              {...register2("cvv")}
                            />
                          </LabelContainerColumn>
                        </LabelContainerRow>
                        {errors2.vencimento && (
                          <Span>{errors2.vencimento.message}</Span>
                        )}
                        {errors2.cvv && <Span>{errors2.cvv.message}</Span>}
                        <Footer>
                          <MensagemErro>{mensagem}</MensagemErro>
                          <Termos>
                            Ao continuar, você concorda com os nossos Termos e
                            Condições
                          </Termos>
                          <Finaliza type="submit">Finalizar Compra</Finaliza>
                        </Footer>
                      </FormPagamento>
                    </PagamentoContainer>
                  </>
                ) : (
                  <>
                    <SectionHeader>
                      <Titulo>PAGAMENTO</Titulo>
                    </SectionHeader>
                    <Mensagem>
                      Confirme os dados de entrega antes de prosseguir com o
                      pagamento.
                    </Mensagem>
                  </>
                )}
              </Pagamento>
            </>
          ) : (
            <>
              <Mensagem style={{ marginTop: "200px", fontSize: "30px" }}>
                Confirmamos o pagamento! Obrigado por comprar conosco.
              </Mensagem>
            </>
          )}
        </Container>
      </ContainerGeral>
    </Gambiarra>
  );
};

export default Checkout;

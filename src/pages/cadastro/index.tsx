
import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { useForm, Controller } from "react-hook-form";
import { api } from "../../services/api";
import { Container, Title, TitleCadastro, SubtitleCadastro, CriarConta, FazerLogin, Wrapper, Column, Row, Icon, Iconmail, Iconlock, ContaText } from './styles';
import { useNavigate } from "react-router-dom";
import { IFormData } from './types';
import React from 'react';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'), // Garantindo que o nome não seja vazio
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();

  const Cadastro = () => {
    const navigate = useNavigate();
  
    // Configurando o useForm com react-hook-form e yup
    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: 'onChange',
    });
  
    // Função de envio de dados (Cadastro)
    const onSubmit = async (formData: IFormData) => {
      try {
        // Enviando os dados para a API para criar um novo usuário
        const { data } = await api.post('users', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
  
        // Verifique se o cadastro foi bem-sucedido (dependendo da resposta da sua API)
        if (data) {
          navigate('/login'); // Redirecionando para a página principal após o cadastro
        } else {
          alert('Erro ao cadastrar. Tente novamente!');
        }
      } catch (error) {
        console.error('Erro ao fazer cadastro:', error);
        alert('Houve um erro ao tentar fazer o cadastro. Por favor, tente novamente.');
      }
    };

    
    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                   A plataforma para voçê aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas. 
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            name="name"
                            errorMessage={errors?.name?.message}
                            control={control}
                            placeholder="Nome completo"
                            leftIcon={<Icon />}
                            defaultValue={undefined}
                        />

                        <Input
                                name="email"
                                errorMessage={errors?.email?.message}
                                control={control}
                                placeholder="E-mail"
                                leftIcon={ <Iconmail /> }
                                defaultValue={undefined}
                        />

                        <Input
                                name="password"
                                control={control}
                                errorMessage={errors?.password?.message}
                                placeholder="password"
                                type="password"
                                leftIcon={ <Iconlock /> }
                                defaultValue={undefined}
                        />

                        <Button title="Cadastrar" $variant="primary" type="submit"/>
                    </form>

                    <Row>
                        <CriarConta>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </CriarConta>
                        <FazerLogin onClick={() => navigate('/login')}>
                            <ContaText>Já tenho conta. </ContaText>
                            Fazer login
                        </FazerLogin>
                    </Row>

                </Wrapper>
            </Column>
        </Container>
        
        </>)
}

export { Cadastro }
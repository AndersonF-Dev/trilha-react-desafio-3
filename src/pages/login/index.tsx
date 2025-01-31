
import { MdEmail, MdLock } from 'react-icons/md';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Container, Title, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Wrapper, Column, Row, Iconmail, Iconlock } from './styles';
import { useNavigate } from "react-router-dom";
import { IFormData } from './types';
import React from 'react';

const schema = yup.object({
    email: yup.string().email('E-mail não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const onSubmit = async (FormData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`);
            if(data.length === 1){
                    navigate('/feed')
                } else {
                    alert('Email ou senha inválido')
                }
        }catch (error){
            console.error('Erro ao fazer login:', error);
            alert('Houve um erro ao tentar fazer login. Por favor, tente novamente.');
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
                    <TitleLogin>Faça seu login</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<Iconmail />} defaultValue={undefined}/>
                        <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<Iconlock />} defaultValue={undefined}/>
                        <Button title="Entrar" $variant="primary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText onClick={() => navigate('/cadastro')}>Criar Conta</CriarText>
                    </Row>

                </Wrapper>
            </Column>
        </Container>
        
        </>)
}

export { Login }
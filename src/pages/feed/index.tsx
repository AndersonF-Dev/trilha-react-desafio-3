

import { Header } from "../../components/Header";

import { Card } from "../../components/Card";

import { UserInfo} from '../../components/Userinfo';

import { Container, Column, Title, TitleHighlight } from './styles';
import React from "react";

const Feed = () => {
    return (
        <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={45} nome="Pablo Manrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>

            <UserInfo percentual={35} nome="Pablo Manrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>

            <UserInfo percentual={55} nome="Pablo Manrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>

            <UserInfo percentual={75} nome="Pablo Manrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>

            <UserInfo percentual={85} nome="Pablo Manrique" image="https://avatars.githubusercontent.com/u/45184516?v=4"/>
            </Column>
        </Container>
        
        </>)
}

export { Feed }
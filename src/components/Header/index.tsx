import React from 'react';
import logo from '../../assets/logo-dio.png';
import  { Button } from '../Button';
import { IHeader } from './types';

import {
    BuscarInputContainer,
    Container,
    Row,
    Wrapper,
    Menu,
    MenuRight,
    UserPicture,
    Input,
} from './styles';

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" />
                {autenticado ?(<>
                
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                
                </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
                ) : (<>
                
                    <MenuRight href='#'>Home</MenuRight>
                    <Button variant="secondary" title="Entrar" />
                    <Button variant="secondary" title="Cadastrar" />
                
                </>
            )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
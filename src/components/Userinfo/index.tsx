import React from "react";
import { IUserInfor } from "./types";

import { Container, NameText, Progress, UserPincture } from './styles';

const UserInfo = ({nome, image, percentual}: IUserInfor) => {
    return (
        <Container>
            <UserPincture src={image} />
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}

export { UserInfo }
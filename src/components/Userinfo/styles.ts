import styled from "styled-components";
import { IUserInforStyle } from "./types";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    
`;

export const UserPincture = styled.img`
    width: 37px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #ffffff;
    margin-right: 12px;
`;

export const NameText = styled.div`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #ffffff;
`;

export const Progress = styled.div<IUserInforStyle>`
    width: 150px;
    height: 6px;
    background-color: #ffffff;
    border-radius: 3px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ percentual }) => `${percentual}%`};
        height: 6px;
        border-radius: 3px;
        background-Color: #23D07A;
    }
`;
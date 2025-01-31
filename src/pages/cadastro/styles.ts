import styled from "styled-components";
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: #ffffff;
    
`;

export const Title = styled.h2`
    font-size: 32px;
    font-family: 'Open Sans';
    font-weight: 700;
    width: 388px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #ffffff;
`;

export const TitleCadastro = styled.p`
    font-size: 32px;
    font-family: 'Open Sans';
    font-weight: 700;
    width: 368px;
    margin-bottom: 20px;
    line-height: 44px;
`;
export const SubtitleCadastro = styled.p`
    font-size: 18px;
    font-family: 'Open Sans';
    font-weight: 400;
    width: 296px;
    margin-bottom: 20px;
    /* line-height: 44px; */

    color: #ffffff;
`;

export const FazerLogin = styled.p`
    display: flex;
    font-size: 14px;
    font-family: 'Open Sans';
    font-weight: 700;
    width: 220px;

    color:  #23DD7A;
    cursor: pointer;
`;

export const ContaText = styled.p`
    font-size: 14px;
    font-family: 'Open Sans';
    font-weight: 700;
    width: 120px;
    line-height: 19px;

    color:rgb(255, 255, 255);
    ;
`;

export const CriarConta = styled.p`
    font-size: 18px;
    font-family: 'Open Sans';
    font-weight: 400;
    width: 372px;
    margin-bottom: 20px;

    color: #ffffff;
`;

export const Wrapper = styled.div`
    max-width: 300px;
    margin-left: 100px;
    
`;


export const Column = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    margin-top: 20px
`;

export const Icon = styled(FaUser)<{ color?: string, size?: string }>`
color: #8647AD;  
font-size: 18px;
`;

export const Iconmail = styled(MdEmail)<{ color?: string }>`
color: #8647AD;  
font-size: 18px;
`;

export const Iconlock = styled(MdLock)<{ color?: string }>`
color: #8647AD;  
font-size: 18px;
`;
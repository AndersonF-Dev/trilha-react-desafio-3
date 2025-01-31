
import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    min-width: 225px;
    height: 30px;
    border-bottom: 1px solid #3B3450;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const IconConteiner = styled.div`
    margin-right: 10px;
`;

export const InputText = styled.input`
    background-color: transparent !important;
    outline: none; 
    color:rgb(255, 255, 255);
    width: 100%;
    padding:3px;
    border: 0;
    height: 30px;

    &:focus {
        background-color: transparent; 
        outline: none; /* Remove o contorno padrão */
    }
`;

export const ErrorText = styled.p`
 color:rgb(190, 7, 7);
 font-size: 12px;
 margin: 5px 0;
`;
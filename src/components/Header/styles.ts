import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
        background-color: #151515;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 28px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width:  32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #ffffff;
`

export const Input = styled.input`
    /* background: transparent; */
    background-color: #2D2D37;
    flex: 1;
    border: 0;
    border-radius: 8px;
    padding: .12rem;
    color: #ffffff;
    height: 28px;
`
import styled from "styled-components";

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
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #ffffff;
`;

export const TitleLogin = styled.p`
    font-size: 32px;
    font-family: 'Open Sans';
    font-weight: 700;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
`;
export const SubtitleLogin = styled.p`
    font-size: 18px;
    font-family: 'Open Sans';
    font-weight: 400;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #ffffff;
`;
export const EsqueciText = styled.p`
    font-size: 14px;
    font-family: 'Open Sans';
    font-weight: 700;
    width: 320px;
    line-height: 19px;
    
    color: #E5E044;
`;
export const CriarText = styled.p`
    font-size: 14px;
    font-family: 'Open Sans';
    font-weight: 700;
    width: 120px;
    line-height: 19px;

    color:rgb(226, 3, 152);
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
    justify-content: space-between;
    margin-top: 20px
`;
/* eslint-disable no-unused-vars */
/*jslint es6 */

import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */

    color: #ffffff;
`;

export const Title = styled.h3`
    font-size: 18px;
    font-family: 'Open Sans';
    font-weight: 700;
    width: 320px;
    margin-bottom: 24px;
    line-height: 25px;

    color: #ffffff;
`;

export const TitleHighlight = styled.h3`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color:rgb(211, 208, 209);
    margin-bottom: 24px;
`;

export const TextContent = styled.p`
    font-size: 16px;
    font-family: 'Open Sans';
    font-weight: 400;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #ffffff;
`;

export const Column = styled.div<IColumn>`
    flex:${({flex}) => flex};
    padding-right: 24px;
`;
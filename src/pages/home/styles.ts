/* eslint-disable no-unused-vars */
/*jslint es6 */

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

export const TitleHighlight = styled.span`
    color: #e4105d;
`;

export const TextContent = styled.p`
    /* font-size: 16px; */
    font-family: 'Open Sans';
    font-weight: 400;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #ffffff;
`;
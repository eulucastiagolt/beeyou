import Styled, { css } from 'styled-components';

import { Props } from './index';

export const Container = Styled.button`
    border: none;
    border-radius: 100px;
    padding: 10px 24px;
    background-color: ${({ color }: Props) => color};
    color: ${({ onColor }: Props) => onColor};
    filter: brightness(100%);

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.1px;

    ${({ elevated }) => elevated && css`
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    `}

    ${({styleType, color}) => styleType == "outline" && css`
        border: 1px solid ${color};
        color: ${color};
        background: transparent;
    `}

    ${({styleType, color}) => styleType == "text" && css`
        background-color: transparent;
        color:  ${color};
    `}

    transition: background 300ms, box-shadow 300ms, filter 300ms;

    &:hover{
        filter: brightness(110%);

        ${({ elevated }) => elevated && css`
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
        `}

        ${({styleType, color}) => styleType == "outline" && css`
            color: ${({ onColor }: Props) => onColor};
            background-color: ${color};
        `}

        ${({styleType, color, onColor}) => styleType == "text" && css`
            color: ${onColor};
            background-color: ${color};
        `}
    }

    &:active{
        filter: brightness(90%);
        ${({ elevated }) => elevated && css`
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
        `}
    }
`;
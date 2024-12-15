import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #eaeaea;
    margin: 10px 0;
`;

export const StyledActionRow = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const StyledText = styled.p<{ checked: boolean }>`
    width: 600px;
    overflow-wrap: break-word;
    text-align: start;
    text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
    color: ${props => (props.checked ? '#dbdbdb' : 'inherit')};
`;

export const StyledCheckboxWrapper = styled.label`
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 24px;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    span {
        display: inline-block;
        height: 24px;
        width: 24px;
        border: 2px solid #a0d2c6;
        border-radius: 50%;
        transition: background-color 0.2s, border-color 0.2s;
        position: relative;
    }

    span::after {
        content: '';
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 6px;
        height: 10px;
        border: solid #66b2a3;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    input:checked ~ span {
        background-color: #e6f6f3;
        border-color: #66b2a3;
    }

    input:checked ~ span::after {
        display: block;
    }
`;
export const Button = styled.button`
    background-color: #fff;
    border: none;
    padding: 2px 3px;
    color: #868686;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    cursor: pointer;
    font-weight: 300;
    box-sizing: border-box;
    border: 1px solid #868686;
`;

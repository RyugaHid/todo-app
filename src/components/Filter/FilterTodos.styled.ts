import styled from 'styled-components';

export const Counter = styled.p`
    color: #868686;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 300;
`;
export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonsC = styled.div`
    display: flex;
    gap: 10px;
`;

export const Button = styled.button<{ active: boolean }>`
    background-color: #fff;
    border: none;
    padding: 2px 3px;
    color: #868686;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    cursor: pointer;
    font-weight: 300;
    box-sizing: border-box;
    border: ${props => (props.active ? '1px solid #868686' : 'none')};
`;

export const ClearButton = styled.button`
    background-color: #fff;
    border: none;
    padding: 2px 3px;
    color: #868686;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    cursor: pointer;
    font-weight: 300;
    box-sizing: border-box;
`;

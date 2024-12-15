import styled from 'styled-components';

export const Input = styled.input`
    border: none;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
    font-family: 'Roboto', sans-serif;
    &::placeholder {
        color: rgb(134, 134, 134);
        font-style: italic;
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: none;
    }
`;

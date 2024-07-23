import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';
const StyledHeading = styled.h1``;
const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
    color: #fff;
`;

function App() {
    return (
        <StyledContainer>
            <StyledHeading>Todo</StyledHeading>
            <TodoList />
        </StyledContainer>
    );
}

export default App;

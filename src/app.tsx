import React from 'react';
import styled from 'styled-components';
import './app.css';
import TodoList from './components/List/TodoList';
import { store } from './store/store';
import { Provider } from 'react-redux';
const StyledHeading = styled.h1`
    color: #e9dad9;
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    font-weight: 100;
`;
const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 400px;
    text-align: center;
    color: #5f5f5f;
`;

function App() {
    return (
        <Provider store={store}>
            <StyledContainer>
                <StyledHeading>todos</StyledHeading>
                <TodoList />
            </StyledContainer>
        </Provider>
    );
}

export default App;

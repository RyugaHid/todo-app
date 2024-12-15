import React from 'react';
import { Button, StyledDiv, ButtonsC, Counter, ClearButton } from './FilterTodos.styled';
import { useDispatch } from 'react-redux';
import { deleteCompleted } from '../../store/todosSlice';
import { showAll, showActive, showCompleted } from '../../store/todosSlice';

const FilterTodos: React.FC<{ remainingTasksCount: string }> = ({ remainingTasksCount }) => {
    const dispatch = useDispatch();

    return (
        <StyledDiv>
            <Counter>{remainingTasksCount}</Counter>
            <ButtonsC>
                <Button onClick={() => dispatch(showAll())} active>
                    All
                </Button>
                <Button onClick={() => dispatch(showActive())} active>
                    Active
                </Button>
                <Button onClick={() => dispatch(showCompleted())} active>
                    Completed
                </Button>
            </ButtonsC>
            <ClearButton onClick={() => dispatch(deleteCompleted())}>Clear Completed</ClearButton>
        </StyledDiv>
    );
};

export default FilterTodos;

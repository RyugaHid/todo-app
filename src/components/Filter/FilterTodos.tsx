import React from 'react';
import { Button, StyledDiv, ButtonsC, Counter, ClearButton } from './FilterTodos.styled';
import { useDispatch } from 'react-redux';
import { deleteCompleted } from '../../store/todosSlice';
import { showAll, showActive, showCompleted } from '../../store/todosSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
const FilterTodos: React.FC<{ remainingTasksCount: string }> = ({ remainingTasksCount }) => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.todos.filter);
    return (
        <StyledDiv>
            <Counter>{remainingTasksCount}</Counter>
            <ButtonsC>
                <Button onClick={() => dispatch(showAll())} active={filter === 'all'}>
                    All
                </Button>
                <Button onClick={() => dispatch(showActive())} active={filter === 'active'}>
                    Active
                </Button>
                <Button onClick={() => dispatch(showCompleted())} active={filter === 'completed'}>
                    Completed
                </Button>
            </ButtonsC>
            <ClearButton onClick={() => dispatch(deleteCompleted())}>Clear Completed</ClearButton>
        </StyledDiv>
    );
};

export default FilterTodos;

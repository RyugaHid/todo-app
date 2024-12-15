import React from 'react';
import { StyledContainer, StyledText, StyledActionRow, StyledCheckboxWrapper, Button } from './Todo.styled';
import { Todo as TodoType } from '../../todo.model';
import { deleteTodo } from '../../store/todosSlice';
import { useDispatch } from 'react-redux';

const Todo: React.FC<
    TodoType & {
        deleteTodo: (id: string) => void;
        toggleTodo: (id: string) => void;
        checked: boolean;
    }
> = React.memo(({ id, title, toggleTodo, checked }) => {
    const dispatch = useDispatch();
    return (
        <StyledContainer>
            <StyledActionRow>
                <StyledCheckboxWrapper>
                    <input type='checkbox' checked={checked} onChange={() => toggleTodo(id)} />
                    <span></span>
                </StyledCheckboxWrapper>
            </StyledActionRow>
            <StyledText checked={checked}>{title}</StyledText>
            <Button onClick={() => dispatch(deleteTodo(id))}>Delete</Button>
        </StyledContainer>
    );
});

export default Todo;

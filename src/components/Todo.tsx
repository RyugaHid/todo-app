import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkbox, Button, TextField } from '@mui/material';
import { Todo as TodoType } from '../todo.model';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border: 1px solid #fff;
    margin: 10px 0;
    border-radius: 15px;
`;

const StyledActionRow = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
`;
const StyledText = styled.p`
    width: 600px;
    overflow-wrap: break-word;
    padding: 0 0px 0 42px;
    text-align: start;
`;

const Todo: React.FC<
    TodoType & {
        deleteTodo: (id: string) => void;
        toggleTodo: (id: string) => void;
        editTodo: (id: string, newTitle: string) => void;
    }
> = React.memo(({ id, title, completed, deleteTodo, toggleTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(title);

    const toggleEditMode = () => {
        if (isEditing) {
            editTodo(id, inputValue);
        }
        setIsEditing(prev => !prev);
    };

    const cancelEdit = () => {
        setIsEditing(false);
        setInputValue(title);
    };

    return (
        <StyledContainer>
            <StyledActionRow>
                {isEditing ? (
                    <TextField
                        variant='outlined'
                        value={inputValue}
                        sx={{ background: '#FFF' }}
                        onChange={e => setInputValue(e.target.value)}
                    />
                ) : (
                    <>
                        <Checkbox checked={completed} onClick={() => toggleTodo(id)} sx={{ m: 0, p: 0 }} />
                        <StyledText>{inputValue}</StyledText>
                    </>
                )}
            </StyledActionRow>
            <StyledActionRow>
                {isEditing ? (
                    <>
                        <Button variant='contained' onClick={toggleEditMode}>
                            Save
                        </Button>
                        <Button variant='contained' onClick={cancelEdit}>
                            Cancel
                        </Button>
                    </>
                ) : (
                    <>
                        <Button variant='contained' onClick={toggleEditMode}>
                            Edit
                        </Button>
                        <Button variant='contained' onClick={() => deleteTodo(id)}>
                            Delete
                        </Button>
                    </>
                )}
            </StyledActionRow>
        </StyledContainer>
    );
});

export default Todo;

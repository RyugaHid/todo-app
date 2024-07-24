import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface InputTodoProps {
    addTodo: (title: string) => void;
}

const InputTodo: React.FC<InputTodoProps> = ({ addTodo }) => {
    const [newTitle, setNewTitle] = useState('');

    const handleAddTodo = () => {
        if (newTitle.trim()) {
            addTodo(newTitle);
            setNewTitle('');
        }
    };

    return (
        <div>
            <TextField
                sx={{ background: '#FFF' }}
                color='secondary'
                type='text'
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
            />
            <Button sx={{ height: '56px' }} variant='contained' onClick={handleAddTodo}>
                Add
            </Button>
        </div>
    );
};

export default InputTodo;

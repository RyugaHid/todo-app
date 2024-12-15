import React, { useState } from 'react';
import { Input } from './InputTodo.styled';
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
        <Input
            placeholder='What needs to be done?'
            type='text'
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            onKeyDown={(e): void => {
                if (e.key === 'Enter') {
                    handleAddTodo();
                }
            }}
        />
    );
};

export default InputTodo;

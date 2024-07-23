import React, { useCallback, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import Todo from './Todo';
import styled from 'styled-components';
const { v4: uuidv4 } = require('uuid');
const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
`;

const TodoList = React.memo(() => {
    const getInitialList = () => {
        const savedList = localStorage.getItem('todoList');
        return savedList ? JSON.parse(savedList) : [];
    };

    const [todos, setTodos] = useState<{ title: string; id: string; completed: boolean }[]>(getInitialList);
    const [newTitle, setNewTitle] = useState('');
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todos));
    }, [todos]);

    const addTodo = useCallback(() => {
        if (newTitle.trim()) {
            const newTodo = { title: newTitle, id: uuidv4(), completed: false };
            setTodos(prevTodos => [...prevTodos, newTodo]);
            setNewTitle('');
        }
    }, [newTitle]);

    const deleteTodo = useCallback((id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }, []);

    const toggleTodo = useCallback((id: string) => {
        setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    }, []);

    const editTodo = useCallback((id: string, newTitle: string) => {
        setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, title: newTitle } : todo)));
    }, []);

    const filteredTodos = todos.filter(todo => {
        switch (filter) {
            case 'active':
                return !todo.completed;
            case 'completed':
                return todo.completed;
            default:
                return true;
        }
    });

    const remainingTasks = todos.filter(todo => !todo.completed).length;

    return (
        <div>
            <div>
                <TextField
                    sx={{
                        background: '#FFF',
                    }}
                    color='secondary'
                    type='text'
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                />
                <Button
                    sx={{
                        height: '56px',
                    }}
                    variant='contained'
                    onClick={addTodo}
                >
                    Add
                </Button>
                <p>
                    {remainingTasks} task{remainingTasks !== 1 ? 's' : ''} remaining
                </p>
            </div>
            <StyledDiv>
                <Button variant='contained' onClick={() => setFilter('all')}>
                    Show all tasks
                </Button>
                <Button variant='contained' onClick={() => setFilter('active')}>
                    Show active tasks
                </Button>
                <Button variant='contained' onClick={() => setFilter('completed')}>
                    Show completed tasks
                </Button>
            </StyledDiv>
            {filteredTodos.map(todo => (
                <Todo key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
            ))}
        </div>
    );
});

export default TodoList;

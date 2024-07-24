import React, { useCallback, useEffect, useState } from 'react';
import Todo from './Todo';
import FilterTodos from './FilterTodos';
import InputTodo from './InputTodo';
const { v4: uuidv4 } = require('uuid');

interface TodoType {
    title: string;
    id: string;
    completed: boolean;
}

enum Filter {
    All = 'all',
    Active = 'active',
    Completed = 'completed',
}

const TodoList = React.memo(() => {
    const getInitialList = () => {
        const savedList = localStorage.getItem('todoList');
        return savedList ? JSON.parse(savedList) : [];
    };

    const [todos, setTodos] = useState<TodoType[]>(getInitialList);
    const [filter, setFilter] = useState<Filter>(Filter.All);

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todos));
    }, [todos]);

    const addTodo = useCallback((title: string) => {
        const newTodo = { title, id: uuidv4(), completed: false };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }, []);

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
            case Filter.Active:
                return !todo.completed;
            case Filter.Completed:
                return todo.completed;
            default:
                return true;
        }
    });

    const remainingTasks = todos.filter(todo => !todo.completed).length;
    const remainingTasksCount = `${remainingTasks} task${remainingTasks !== 1 ? 's' : ''} remaining`;

    return (
        <div>
            <InputTodo addTodo={addTodo} />
            <p>{remainingTasksCount}</p>
            <FilterTodos setFilter={setFilter} />
            {filteredTodos.map(todo => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                />
            ))}
        </div>
    );
});

export default TodoList;

import React from 'react';
import Todo from '../Todo/Todo';
import FilterTodos from '../Filter/FilterTodos';
import InputTodo from '../Input/InputTodo';
import { Container } from './TodoList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addTodo, deleteTodo, toggleTodo } from '../../store/todosSlice';

const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const remainingTasksCount = `${todos.filter(todo => !todo.completed).length} item${
        todos.filter(todo => !todo.completed).length !== 1 ? 's' : ''
    } left`;

    return (
        <Container>
            <InputTodo addTodo={title => dispatch(addTodo({ title, id: Date.now().toString(), completed: false }))} />
            <ul>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        checked={todo.completed}
                        completed={todo.completed}
                        deleteTodo={id => dispatch(deleteTodo(id))}
                        toggleTodo={id => dispatch(toggleTodo(id))}
                    />
                ))}
            </ul>
            <FilterTodos remainingTasksCount={remainingTasksCount} />
        </Container>
    );
};

export default React.memo(TodoList);

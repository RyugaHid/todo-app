import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface TodoType {
    id: string;
    title: string;
    completed: boolean;
}
const loadTodosFromLocalStorage = (): TodoType[] => {
    try {
        const savedTodos = localStorage.getItem('todoList');
        return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
        console.error('Error loading todos from localStorage:', error);
        return [];
    }
};

const saveTodosToLocalStorage = (todos: TodoType[]) => {
    try {
        localStorage.setItem('todoList', JSON.stringify(todos));
    } catch (error) {
        console.error('Error saving todos to localStorage:', error);
    }
};

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: loadTodosFromLocalStorage(),
    },
    reducers: {
        addTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos.push(action.payload);
            saveTodosToLocalStorage(state.todos);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const newState = state.todos.filter(todo => todo.id !== action.payload);
            state.todos = newState;
            saveTodosToLocalStorage(newState);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const newState = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
            state.todos = newState;
            saveTodosToLocalStorage(newState);
        },
        deleteCompleted: state => {
            const newState = state.todos.filter(todo => !todo.completed);
            state.todos = newState;
            saveTodosToLocalStorage(newState);
        },
        showAll: state => {
            state.todos = loadTodosFromLocalStorage();
        },
        showActive: state => {
            state.todos = loadTodosFromLocalStorage();
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        showCompleted: state => {
            state.todos = loadTodosFromLocalStorage();
            state.todos = state.todos.filter(todo => todo.completed);
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo, deleteCompleted, showAll, showActive, showCompleted } =
    todosSlice.actions;

export default todosSlice.reducer;

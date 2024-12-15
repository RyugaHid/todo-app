import todosReducer, {
    addTodo,
    deleteTodo,
    toggleTodo,
    deleteCompleted,
    showAll,
    showActive,
    showCompleted,
} from './todosSlice';

interface TodoType {
    id: string;
    title: string;
    completed: boolean;
}

describe('todosSlice', () => {
    let initialState: { todos: TodoType[]; filter: string };

    beforeEach(() => {
        localStorage.setItem(
            'todoList',
            JSON.stringify([
                { id: '1', title: 'Test todo 1', completed: true },
                { id: '2', title: 'Test todo 2', completed: false },
            ])
        );
        initialState = { todos: [], filter: 'all' };
    });

    it('should return the initial state', () => {
        const result = todosReducer(undefined, { type: '' });
        expect(result).toEqual({ todos: [], filter: 'all' });
    });

    it('should add a new todo', () => {
        const newTodo = { id: '1', title: 'Test todo', completed: false };

        const result = todosReducer(initialState, addTodo(newTodo));

        expect(result.todos).toHaveLength(1);
        expect(result.todos[0]).toEqual(newTodo);
    });

    it('should delete a todo by id', () => {
        const state = {
            ...initialState,
            todos: [
                { id: '1', title: 'Test todo 1', completed: false },
                { id: '2', title: 'Test todo 2', completed: true },
            ],
        };

        const result = todosReducer(state, deleteTodo('1'));

        expect(result.todos).toHaveLength(1);
        expect(result.todos[0].id).toBe('2');
    });

    it('should toggle the completed status of a todo', () => {
        const state = {
            ...initialState,
            todos: [{ id: '1', title: 'Test todo', completed: false }],
        };

        const result = todosReducer(state, toggleTodo('1'));

        expect(result.todos[0].completed).toBe(true);
    });

    it('should delete all completed todos', () => {
        const state = {
            ...initialState,
            todos: [
                { id: '1', title: 'Test todo 1', completed: true },
                { id: '2', title: 'Test todo 2', completed: false },
            ],
        };

        const result = todosReducer(state, deleteCompleted());

        expect(result.todos).toHaveLength(1);
        expect(result.todos[0].id).toBe('2');
    });

    it('should show all todos', () => {
        const result = todosReducer(initialState, showAll());

        expect(result.filter).toBe('all');
    });

    it('should filter active todos', () => {
        const state = {
            ...initialState,
            todos: [
                { id: '1', title: 'Test todo 1', completed: true },
                { id: '2', title: 'Test todo 2', completed: false },
            ],
        };

        const result = todosReducer(state, showActive());

        expect(result.filter).toBe('active');
        expect(result.todos).toHaveLength(1);
        expect(result.todos[0].id).toBe('2');
    });

    it('should filter completed todos', () => {
        const state = {
            ...initialState,
            todos: [
                { id: '1', title: 'Test todo 1', completed: true },
                { id: '2', title: 'Test todo 2', completed: false },
                { id: '3', title: 'Test todo 3', completed: true },
            ],
        };

        const result = todosReducer(state, showCompleted());
        expect(result.filter).toBe('completed');
        expect(result.todos).toHaveLength(1);
        expect(result.todos[0].id).toBe('1');
    });
});

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    deleteTodo: (id: string) => void;
}

export {};

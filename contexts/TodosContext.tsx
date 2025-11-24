import { createContext, useState } from "react";

interface Todo {
    id: string;
    title: string;
    description: string;
}

interface TodosContextType {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    addTodo: (todo: Todo) => Promise<void>;
    getTodo: (id: string) => Promise<Todo | null>;
    getAllTodos: () => Promise<Todo[]>;
    updateTodo: (todo: Todo) => Promise<void>;
    deleteTodo: (id: string) => Promise<void>;
}


export const TodosContext = createContext<TodosContextType>({
    todos: [],
    setTodos: () => {},
    addTodo: async(todo: Todo) => {},
    getTodo: async() => null,
    getAllTodos: async() => [],
    updateTodo: async(todo: Todo) => {},
    deleteTodo: async(id: string) => {},
});

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = async (todo: Todo): Promise<void> => {
        // TODO: Implement addTodo logic
    };

    const getTodo = async (id: string): Promise<Todo | null> => {
        // TODO: Implement getTodo logic
        return null;
    };

    const getAllTodos = async (): Promise<Todo[]> => {
        // TODO: Implement getAllTodos logic
        return [];
    };

    const updateTodo = async (todo: Todo): Promise<void> => {
        // TODO: Implement updateTodo logic
    };

    const deleteTodo = async (id: string): Promise<void> => {
        // TODO: Implement deleteTodo logic
    };

    return (
        <TodosContext.Provider value={{ todos, setTodos, addTodo, getTodo, getAllTodos, updateTodo, deleteTodo }}>
            {children}
        </TodosContext.Provider>
    );
};
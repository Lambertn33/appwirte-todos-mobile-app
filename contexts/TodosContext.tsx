import { useUser } from "@/hooks/useUser";
import { client } from "@/lib/appwrite";
import { TodosService } from "@/lib/todos";
import { createContext, useEffect, useState } from "react";

interface Todo {
    $id: string;
    title: string;
    description: string;
    user_id: string;
    $collectionId: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
}

interface AddTodoProps {
    title: string;
    description: string;
}

interface TodosContextType {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    addTodo: (todo: AddTodoProps) => Promise<void>;
    getTodo: (id: string) => Promise<Todo | null>;
    getAllTodos: () => Promise<void>;
    deleteTodo: (id: string) => Promise<void>;
    isCreatingTodo: boolean;
    isGettingTodos: boolean;
}


export const TodosContext = createContext<TodosContextType>({
    todos: [],
    setTodos: () => {},
    addTodo: async(todo: AddTodoProps) => {},
    getTodo: async() => null,
    getAllTodos: async() => {},
    deleteTodo: async(id: string) => {},
    isCreatingTodo: false,
    isGettingTodos: false,
});

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [ isCreatingTodo, setIsCreatingTodo ] = useState(false);
    const [ isGettingTodos, setIsGettingTodos ] = useState(false);
    const { user } = useUser();

    const addTodo = async (todo: AddTodoProps): Promise<void> => {
        if (!user) {
            throw new Error("User must be authenticated to create todos");
        }
        setIsCreatingTodo(true);
        try {
            await TodosService.createTodo(user.id, todo.title, todo.description);
        } catch (error) {
            throw new Error((error as Error).message);
        } finally {
            setIsCreatingTodo(false);
        }
    };

    const getTodo = async (id: string): Promise<Todo | null> => {
       if (!user) {
        throw new Error("User must be authenticated to get todos");
       }
       try {
        const todo = await TodosService.getTodo(id);
        return todo as unknown as Todo;
       } catch (error) {
        throw new Error((error as Error).message);
       }
    };

    const getAllTodos = async (): Promise<void> => {
       if (!user) {
        throw new Error("User must be authenticated to get todos");
       }
       try {
        setIsGettingTodos(true);
        const todos = await TodosService.getTodos(user.id);
        if (todos) {
            setTodos(todos as unknown as Todo[]);
        }
       } catch (error) {
        throw new Error((error as Error).message);
       } finally {
        setIsGettingTodos(false);
       }
    };


    const deleteTodo = async (id: string): Promise<void> => {
        // TODO: Implement deleteTodo logic
    };

    useEffect(() => { 
        let unsubscribe: any;
        const channel = `${process.env.EXPO_PUBLIC_APPWRITE_DATABASE!}.${process.env.EXPO_PUBLIC_APPWRITE_COLLECTION!}`;
        if (user) {
            getAllTodos();
            unsubscribe = client.subscribe(channel, (response) => {
                const { events, payload } = response;

                if (events[0].includes("create")) {
                    setTodos([...todos, payload as Todo]);
                } 
            });
        } else {
            setTodos([]);
        }

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [user]);

    return (
        <TodosContext.Provider value={{ todos, setTodos, addTodo, getTodo, getAllTodos, deleteTodo, isCreatingTodo, isGettingTodos }}>
            {children}
        </TodosContext.Provider>
    );
};
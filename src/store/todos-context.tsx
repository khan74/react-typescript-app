import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextType = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
    items: [],
    addTodo: (text: string) => { },
    removeTodo: (id: string) => { }
});

export const TodosContextProvider = (props: { children?: React.ReactNode }) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((previousTodos) => {
            return previousTodos.concat(newTodo);
        });
    };

    const deleteTodoHandler = (id: string) => {
        setTodos((previousTodos) => {
            return previousTodos.filter(todo => todo.id !== id);
        });
    };

    // minimal provider implementation so `children` is typed and Provider has a value
    const contextValue: TodosContextType = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: deleteTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;
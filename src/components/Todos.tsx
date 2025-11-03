import React, { useContext } from 'react';
import Todo from '../models/todo';
import TodoItem from './Todoitem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item => {
                return (
                    <TodoItem key={item.id} todoText={item.text} onDeleteTodo={() => todosCtx.removeTodo(item.id)} />
                );
            })}
        </ul>
    );

}

export default Todos;
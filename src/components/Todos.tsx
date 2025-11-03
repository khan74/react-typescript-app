import React from 'react';
import Todo from '../models/todo';
import TodoItem from './Todoitem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onDeleteTodo: (id:string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map(item => {
                return (
                    <TodoItem key={item.id} todoText={item.text} onDeleteTodo={() => props.onDeleteTodo(item.id)} />
                );
            })}
        </ul>
    );

}

export default Todos;